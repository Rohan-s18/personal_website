import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

//  This is the react component for the Homepage 

export default function Homepage(){

    return(
        <div className={styles.main}>
            <p>
                Hello! My name is Rohan Singh and I am a Sophomore Computer Science Major at Case Western Reserve University with a secondary major in Physics. 
                This is my personal website and I'm not really sure what I'll do with it lol. Mayhaps, a blog?
                <br>
                </br>
                <br></br>
                If you don't already know me, well then, you're missing out on a lot in your life. I'm a huge animated movie fan, so if you ever
                want to watch a pixar movie with someone, you know who to contact.

                <br></br>
                <br></br>

                <div className={styles.card}>
                    <Link href="\Repos">
                        <h2>My Repository Listing</h2>
                        If you want to check out my code, then you can find a guide and link to my github repositories here.
                    </Link> 
                </div>


            </p>
        </div>
    )

}