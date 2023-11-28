'use client'
import Link from "next/link"
import styles from  "./authLinks.module.css"
import { useState } from "react"
import { signOut, useSession } from "next-auth/react"

const AuthLinks = () => {
  const {status}=useSession()
  const [open,setOpen]=useState(false)
  return (
    <>
{status==='unauthenticated'?(
  <Link href={'/login'} className={styles.link}>Login</Link>
):(<>
<Link href={'/write'} className={styles.link}>Write</Link>
<span  className={styles.link} onClick={signOut}>Logout</span>
</>)}
<div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    
        <div className={styles.responsiveMenu  + (open ? ` ${styles.open}` : '')} >
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          </div>
    </>
  )
}

export default AuthLinks