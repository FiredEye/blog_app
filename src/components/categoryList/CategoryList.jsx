import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./categoryList.module.css"

const getData=async()=>{
  const res=await fetch('http://localhost:3000/api/categories',{
    cache:'no-store'
  })
  if(!res.ok){
    throw new Error('Falied')
  }
  return res.json()
}

const CategoryList = async() => {
  const data=await getData()
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Popular Categories</h1>
    <div className={styles.categories}>
      {data.map((category)=>(
        <Link
          href={`/blog?cat=${category.slug}`}
          className={`${styles.category} ${styles[category.slug]}`}
          key={category.id}
        >
          {category.img &&<Image
              src={category.img}
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />}
        {category.title}       
        </Link>
      
      ))}
    
    </div>
  </div>
  )
}

export default CategoryList