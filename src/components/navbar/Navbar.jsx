import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image
          src={"/facebook.png"}
          alt="facebook img"
          width={24}
          height={24}
        />
        <Image
          src={"/instagram.png"}
          alt="instagram img"
          width={24}
          height={24}
        />
        <div
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50px",
            backgroundColor: "white",
          }}
        >
          <Image src={"/tiktok.png"} alt="tiktok img" width={24} height={24} />
        </div>
        <Image src={"/youtube.png"} alt="youtube img" width={24} height={24} />
      </div>
      <div className={styles.logo}><Link href={'/'}>BlogApp</Link></div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href={"/"} className={styles.link}>
          Home
        </Link>
        <Link href={"/contact"} className={styles.link}>
          Contact
        </Link>
        <Link href={"/about"} className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
