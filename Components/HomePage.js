import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';


export default function HomePage(){
    return(
        <div className={styles.main}>
            This is the homepage for my website. 

            <Link href='/repopage'>
                <div className={styles.card}>
                        <h2>Repository List</h2>
                        <p>Check out the list of my publicly available repositories</p>
                </div>
            </Link>


        </div>
    )
}
