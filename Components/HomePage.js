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

	    	I am a Graduate Computer Science student at Columbia University on the Machine Learning track. I am interested in Quantum Computing, Artificial Intelligence, Machine Learning,
	    	Operating System and Low-level programming. If you're interested in working on a project with me, please feel free to reach out. I also love watching sports, especially baseball in my
	    	free time (I am a San Francisco Giants and Cleveland Guardians Fan).
	    	<br></br><br></br>
	    	I am a Research Assistant for the AlQuraishi Lab at Columbia University. I work on Protein-Protein Interaction (PPI) models that model physical binding events that occur between protein 
	    	chains.
                <br></br><br></br>
		I graduated from Case Western Reserve University in May 2024 with a BS in Computer Science and minors in Physics and Mathematics. If you're ever interested in knowing what CS, Physics 
	    	or Math classes you should take here, please feel free to reach out!
		<br></br><br></br>

                
            </p>

            <br></br><br></br><br></br>

           

            <Link href="/CSDS338Lab">
                <h2>Operating Systems Lab</h2>
            </Link>
            
            <p>
                I used to be a Teaching Assistant for the Operating Systems class at Case Western Reserve University and 
                if you're interested in learning some technical Operating Systems skills, check out the Laboratory Component 
                for the class that I designed. You can learn cool Linux Commands, the Basics of Bash and the OS Related things of 
                C. 
                <br></br>
            </p>
            


            <br></br><br></br><br></br>


            <Link href="/RPI">
                <h2>Rohan Pain Index</h2>
            </Link>
            <p>
                Check out this really cool and awesome side project, where I will rate things on the Physical, Emotional
                and Psychological pain they inflict on humans. I am willing to risk my physical and mental well being for 
                Science making me such a class act, please bring me my Nobel Peace Prize.  
                <br></br>
                <br></br>
                For Legal Reasons, I would advise all children to not do any of this stuff. 
                <br></br>
            </p>
            



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
