//  Author: Rohan Singh
//  1/5/2023
//  Web page for CSDS 338 Lab Page


//  Imports
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Lab from '../Components/Lab'


//  Export Function
export default function CSDS338Lab(){

    return(

        <div className={styles.container}>

          <Head>
            <title>CSDS 338 Lab</title>
          </Head>

          <main className={styles.main}>

            <Navbar />

            <h1 className={styles.title}>Operating Systems Lab</h1>
          
            <Lab />

            <Footer />
        
          </main>

        </div>

    )

}