import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = ({key,post}) => {
  return (
    <Link href={`/posts/${post.slug}`} as={`/posts/${post.slug}`} key={key}>
      <div className={styles.container}>
      {post.img&& (<div className={styles.imgContainer}>
         <Image
            className={styles.image}
            src={post.img}
            alt="post image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
           priority={true}
           
          />
        </div>)}
        <div className={styles.textContainer}>
          <div className={styles.details}>
            <span className={styles.date}>{post.createdAt.substring(0,10)}</span>
            <span>-</span>
            <span className={styles.category}>{post.catSlug}</span>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>{post.desc}
          </p>
          <p className={styles.readMore}>Read More</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
