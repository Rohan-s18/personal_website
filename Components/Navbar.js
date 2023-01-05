//  React component for a navigation bar

//  Imports
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Component.module.css';



export default function Navbar(){
    return(
        <>
        <div className={styles.navspace}></div>

			<div className={styles.navbar}>

				<Link href="/">
					<img className={styles.navlogo} src="../IMG_1160.jpg" alt="logo" width={60} height={40} />
				</Link>

				<Link href="/">
					<span className={styles.navlink}>Home</span>
				</Link>

				<Link href="https://github.com/Rohan-s18">
					<span className={styles.navlink}>Github</span>
				</Link>

				<Link href="https://www.linkedin.com/in/rohan-singh-52a369195/">
					<span className={styles.navlink}>LinkedIn</span>
				</Link>
				
			</div>
        </>
    )
}