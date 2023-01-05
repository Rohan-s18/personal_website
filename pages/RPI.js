//  Author: Rohan Singh
//  1/5/2023
//  Webpage for the Rohan Pain Index


//  Imports
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import RPI_component from '../Components/RPI_component'


//  Export Function
//  Export Function
export default function CSDS338Lab(){

    return(

        <div className={styles.container}>

          <Head>
            <title>Rohan Pain Index</title>
          </Head>

          <main className={styles.main}>

            <Navbar />

            <h1 className={styles.title}>Rohan Pain Index</h1>
          
            <RPI_component />

            <Footer />
        
          </main>

        </div>

    )

}


