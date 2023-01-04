import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import RepositoryList from '../Components/RepositoryList'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function RepoPage(){
    
    return(
        <div className={styles.container}>

          <Head>
            <title>Rohan's Github Repositories</title>
          </Head>

          <main className={styles.main}>

            <Navbar />

            <h1 className={styles.title}>Check out my Github Repositories</h1>
          
            <RepositoryList />

            <br></br>
            <p align="left"> <img src="https://github-readme-stats.vercel.app/api?username=Rohan-s18&show_icons=true&theme=great-gatsby" alt="tomondre" /> </p>
            <br></br>

            <Footer />
        
          </main>

        </div>
    )

}