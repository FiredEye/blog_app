import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Bloggers Here! </b> 
        Descover my stories and creative ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={'/p1.jpeg'} className={styles.image} alt='featured image' 
            fill   
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            priority={true} // {false} | {true}
           />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ab reprehenderit quis obcaecati ea quas asperiores deserunt, velit similique, ullam repellendus. Quo quidem ex sapiente id et. Consequatur, a aspernatur.</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured