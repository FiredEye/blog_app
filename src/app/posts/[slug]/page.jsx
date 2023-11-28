import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const getData=async(slug)=>{
  const res=await fetch(`http://localhost:3000/api/posts/${slug}`,{
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error('Falied!');
  }
  return res.json()
}

const SinglePage = async({params}) => {

 const {slug} =params
 const data=await getData(slug)

return(
  <div className={styles.container}>
    <div className={styles.infoContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
         {data.title}
        </h1>
        <div className={styles.user}>

          {data?.user?.image &&(<div className={styles.userImageContainer}>
            <Image
              src={data.user.image}
              className={styles.userImage}
              alt="User Image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>)}
          <div className={styles.userTextContainer}>
            <span className={styles.userName}>{data.user?.name}</span>
            <span className={styles.date}>{data.createdAt.substring(0,10)}</span>
          </div>
        </div>
      </div>
      {data?.img &&(
      <div className={styles.imgContainer}>
        <Image
          src={data.img}
          className={styles.image}
          alt="post image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>)}
    </div>
    <div className={styles.content}>
      <div className={styles.post}>
        <div className={styles.description} dangerouslySetInnerHTML={{__html:data?.desc}}/>
         
        <div className={styles.comment}>
          <Comments postSlug={slug}/>
        </div>
      </div>
      <Menu />
    </div>
  </div>
)
}
export default SinglePage;
