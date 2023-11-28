'use client'
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import styles from  "./themeToggle.module.css"

const ThemeToggle = () => {
  const {theme,toggle}=useContext(ThemeContext)
 
  const mode='light'
  return (
    <div className={styles.container} onClick={toggle}  style={theme==='dark'?{backgroundColor:"white"}:{right:'1px',backgroundColor:"#0f172a"}}>
     <Image src={'/moon.png'} alt="moon img" width={14} height={14}/>
     <Image src={'/sun.png'} alt="sun img" width={14} height={14}/>
      <div
        className={styles.ball}
       style={theme==='dark'?{left:'1px',backgroundColor:"#0f172a"}:{right:'1px',backgroundColor:"white"}}

      />
    </div>
  )
}

export default ThemeToggle