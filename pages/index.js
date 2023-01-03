import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import RepositoryList from '../Components/RepositoryList'

export default function Home(){
    
    return(
        <div className={styles.container}>

          <Head>
            <title>Rohan's Github Repositories</title>
          </Head>

          <main className={styles.main}>

            <h1 className={styles.title}>Check out my Github Repositories</h1>
          
            <RepositoryList />
        
          </main>

        </div>
    )

}