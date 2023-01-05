//  Author: Rohan Singh
//  1/5/2023
//  React Component for the Rohan Pain Index


//  Imports
//  Imports
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import RPI_Listings from './RPI_Listings';


//  Export Function
export default function RPI_component(){

    return(

        <div className={styles.jocs_home}>
            
            <h2>
                Lab Description
            </h2>

            <p>
                Repository for the CSDS 338 (Intro to Operating Systems) Lab for Case Western Reserve University. 
                The lab component includes modules for the C Programming Language, Linux CLI tutorials and Bash Scripts. 
                The main objective of this lab is to make students proficient in C and Bash by the end of the semester. 
                This lab is completely optional and you can pace the modules based on your own preference.
                <br></br><br></br>
                These modules (not to be confused with C modules) will have their own README files that will contain 
                additional details about the indiviadual files within the modules and will have links to external resources 
                that you might find useful. You can pace these modules based on your own comfort level.
            </p>



            <br></br>

            <h2>RPI Rankings</h2>

            <br></br>

            <RPI_Listings />


        </div>

    )

}


