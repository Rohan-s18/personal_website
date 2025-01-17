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

	    	I am a Software Engineer at Google on the ProxyBidding ML team for Google Search and Shopping in New York. 
	    	I'm also obtaining a Master’s degree in Computer Science at Columbia University, focusing on Machine Learning. 
	    	I am a member of the AlQuraishi Lab for Mathematical Genomics at Columbia. I graduated from Case Western Reserve
	    	University in 2024 with a B.S. in Computer Science.
	    	<br></br><br></br>
	    	If you're interested in working on a project with me, please feel free to reach out. I'm currently working on 
		building a C++ backend for a Python ML library, it's basically going to be a poor man's version of PyTorch/TensorFlow.
                <br></br><br></br>
		I enjoy watching sports, especially baseball in my free time (I am a San Francisco Giants and Cleveland Guardians 
		Fan). I'm trying to get into Hockey this year :)
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
