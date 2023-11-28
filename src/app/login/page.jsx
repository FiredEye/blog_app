'use client'
import { signIn, useSession } from "next-auth/react"
import styles from "./login.module.css"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Login = () => {
  const {status}=useSession()
  const router=useRouter()

  useEffect(() => {
    // Redirect when the session status changes to 'authenticated'
    if (status === 'authenticated') router.push('/')
  }, [status, router]);

if(status==='loading'){
  return<div>Loading...</div>
}

if(status==='unauthenticated'){
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={()=>signIn('google')}>Sign in with Google</div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  )}

  return null;
}

export default Login