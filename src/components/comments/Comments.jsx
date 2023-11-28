'use client'
import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { useState } from "react";

const fetcher=async(url)=>{
  const res=await fetch(url,{
    cache:'no-store'
  })

  const data=await res.json();
  if(!res.ok){
const error=new Error(data.message)
throw error
  }
  return data
}

const Comments = ({postSlug}) => {
  const [desc,setDesc]=useState('')
  const {status}=useSession()
  const {data,isLoading,mutate}=useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`,fetcher)
  const handleSubmit=async()=>{
    if(desc){
      await fetch('http://localhost:3000/api/comments',{
        method:'POST',
        body:JSON.stringify({desc,postSlug})
      })
      mutate()
      setDesc('')
    }
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            className={styles.input}
            placeholder="Write a comment..."

            value={desc}
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
          <button className={styles.button} onClick={handleSubmit}>Send</button>
        </div>
      ) : (
        <Link href={"/login"}>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading?(<>Loading...</>):
        data?data.map(comment=>(
        <div className={styles.comment} key={comment.id}>
          <div className={styles.user}>
            {comment.user?.image &&<Image
              src={comment.user.image}
              className={styles.image}
              alt={"user Image"}
              width={50}
              height={50}
            />}
            <div className={styles.userInfo}>
              <span className={styles.username}>{comment.user.name}</span>
              <span className={styles.date}>{comment.createdAt.substring(0,10)}</span>
            </div>
          </div>
          <p className={styles.desc}>
          {comment.desc}
          </p>
        </div>)):(<>No commments yet</>)}
      </div>
    </div>
  );
};

export default Comments;
