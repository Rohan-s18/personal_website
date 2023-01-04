import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';


export default function HomePage(){
    return(
        <div className={styles.jocs_home}>

            <p>
                This is the homepage for my website. I'm not 100% sure about what to do with this website, a blog mayhaps? or a portfolio? 
                I think these questions can be settled for a later time, because I have to work on the back-end for this website whose domain name I impulsively bought because YOLO.
                <br></br><br></br>
            </p>
            
            <div className={styles.grid}>

                <Link href='/repopage'>
                    <div className={styles.card}>
                        <h2>Repository List</h2>
                        <p>Check out the list of my publicly available Github repositories.</p>
                    </div>
                </Link>

                <Link href="https://pypi.org/project/SNUPy/">
                    <div className={styles.card}>
                        <h2>SNUPy</h2>
                        <p>Check out my open source python-based Machine Learning Project.</p>
                    </div>
                </Link>

                <Link href="https://www.youtube.com/channel/UC1boFtqaVRXNFV0Z0ZeZcrA">
                    <div className={styles.card}>
                        <h2>My YouTube Channel</h2>
                        <p>Check out my YouTube channel, Kinda inactive right now.</p>
                    </div>
                </Link>

                <Link href="https://open.spotify.com/user/31wdmpmbfnlpmj577mp5hivz7szq">
                    <div className={styles.card}>
                        <h2>My Spotify Profile</h2>
                        <p>Check out my Spotify Profile, its mostly classical music.</p>
                    </div>
                </Link>

            </div>




        </div>
    )
}
