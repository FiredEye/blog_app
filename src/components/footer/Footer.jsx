import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          
          <Link href={'/'} >
          <div className={styles.logoContainer}>
            <Image
              src={"/logo.png"}
              className={styles.logoImage}
              alt="logo image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
            </Link>
          <Link href={'/'}>
          <h1 className={styles.logoText}>Blog App</h1>
          </Link>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dicta
          tempore quis dolorum quasi assumenda, iusto delectus magni odio.
          Praesentium.
        </p>
        <div className={styles.icons}>
          <Image
            src={"/facebook.png"}
            alt="facebook img"
            width={18}
            height={18}
          />
          <Image
            src={"/instagram.png"}
            alt="instagram img"
            width={18}
            height={18}
          />
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50px",
              backgroundColor: "white",
            }}
          >
            <Image
              src={"/tiktok.png"}
              alt="tiktok img"
              width={18}
              height={18}
            />
          </div>
          <Image
            src={"/youtube.png"}
            alt="youtube img"
            width={18}
            height={18}
          />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
