'use client'
import { useState } from 'react'
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css";
import styles from './write.module.css'
import Image from 'next/image'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Loading from '@/components/loading/Loading';
import { app } from '@/utils/firebase';



const WritePage = () => {
  const  {status}=useSession()
  const router=useRouter();

  const [open,setOpen]=useState(false);
  const [value,setValue]=useState('');
  const [file,setFile]=useState(null);
  const [title,setTitle]=useState('');
  const [catSlug,setCatSlug]=useState(null);
  const [isLoading,setIsLoading]=useState(false)
  
    const storage = getStorage(app);
    
    const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const handleSubmit=async()=>{
      setIsLoading(true) 
    if(file){
      
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);  
        const uploadTask = uploadBytesResumable(storageRef, file);
  
        uploadTask.on(
          "state_changed",
          (snapshot) =>{},
          (error) => {console.log(error)},
         () => {
            getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
              
              const res = await fetch("/api/posts", {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                
                },
                body: JSON.stringify({
                  title,
                  desc: value,
                  img: downloadURL,
                  slug: slugify(title),
                  catSlug: catSlug || "style", //If not selected, choose the general category
                }),
              });
              if (res.status === 200) {
                const data = await res.json();
                setIsLoading(false)
               router.push(`/posts/${data.slug}`)
              }
            });
          }
        );
     
  
    } else{
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      
      },
      body: JSON.stringify({
        title,
        desc: value,
        img: null,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      setIsLoading(false)
     router.push(`/posts/${data.slug}`)
    }
  }
  }

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>      
      <input type="text" placeholder='Title' className={styles.input} value={title} onChange={(e) => setTitle(e.target.value)}/>
      <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)} value={catSlug}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
        <div className={styles.editor}>
            <button className={styles.button} onClick={() => setOpen(!open)}>
            <Image src={'/plus.png'} alt="add button" width={16} height={16} />
            </button>
                {open&& (
                    <div className={styles.add}>                       
                        <input type="file" id='image' onChange={e=>setFile(e.target.files[0])} style={{display:'none'}} accept='image/*'/>
                        <button className={styles.button}>
                          <label htmlFor="image">
                            <Image src={'/image.png'} alt='add button' width={16} height={16}/>
                          </label>
                        </button>
                        <button className={styles.button}>
                            <Image src={'/external.png'} alt='add button' width={16} height={16}/>
                        </button>
                        <button className={styles.button}>
                            <Image src={'/video.png'} alt='add button' width={16} height={16}/>
                        </button>

                    </div>
                )}
                <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
        </div>
        <span className={styles.submit}>
        {isLoading&&<Loading/>}
      <button className={styles.publish} onClick={handleSubmit} >
        Publish
      </button>
        </span>
      
    </div>
  )
}

export default WritePage