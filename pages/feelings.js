//  Author: Rohan Singh
//  1/7/2023
//  Page for my feelings


//  Imports 
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Jan7 from '../Components/Feelings/Jan7'


//  Export Function
export default function feelings(){

    return(

        <div className={styles.container}>

          <Head>
            <title>State of JG54</title>
          </Head>

          <main className={styles.main}>

            <h1 className={styles.title}>
                State of JocularGlint54
            </h1>
            
            <div className={styles.jocs_home}>

                <h2>
                    Feelings Corner
                </h2>

                <br></br>

                <p>

                    Hello World! My name is Rohan Singh. This is my feelings corner, over here I will be writing about my 
                    currrent mental state of being and my internal feelings.

                    <br></br>
                    <br></br>

                    I'll see if journaling my feelings will make me feel better about myself and improve my mental health.  
                    Also, keeping a log like this will probably help me in the long run too see where I stand, you know, mental 
                    health wise. I'm gonna log-in my feelings inside React Components for each day and then commit the changes 
                    to the main branch.  

                </p>  

                <br></br>
                <br></br>  

                <Jan7 />

            </div>


          </main>

        </div>

    )

}



