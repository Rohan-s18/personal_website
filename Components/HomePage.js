import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';


export default function HomePage(){
    return(
        <div className={styles.jocs_home}>

            <h2>
                About Me
            </h2>

            <p>
                I am an Undergraduate Computer Science and Physics major at Case Western Reserve University. 
                I am currently a sophomore in college and I plan on attending Graduate School after this. 
                I am interested in Quantum Computing, Artificial Intelligence, Machine Learning, Operating System 
                (Linux Superfan) and Low-level programming. If you're interested in working on a project with me, 
                please feel free to reach out.
            </p>

            <br></br><br></br><br></br>

           

            <Link href="/CSDS338Lab">
                <h2>Operating Systems Lab</h2>
                <p>
                    I am currently a Teaching Assistant for an Operating Systems class at CWRU, if you're interested in learning
                    some technical Operating Systems skills, check out the Laboratory Component for the class that I designed.  
                <br></br>
                </p>
            </Link>

            <br></br><br></br><br></br>

           
            <h2>
                Some other Links
            </h2>
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
