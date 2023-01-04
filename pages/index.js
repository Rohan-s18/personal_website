import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import RepositoryList from '../Components/RepositoryList'
import HomePage from '../Components/HomePage'


export default function Home(){
    
    return(
        <div className={styles.container}>

          <Head>
            <title>Rohan Singh</title>
          </Head>

          <main className={styles.main}>

            <h1 className={styles.title}>Rohan Singh: Person formerly known as JocularGlint54</h1>
          
            <HomePage />
        
          </main>

        </div>
    )

}
