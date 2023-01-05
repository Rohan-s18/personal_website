//  Author: Rohan Singh
//  1/5/2023
//  React Component for CSDS 338 Lab Page


//  Imports
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import LabModules from './LabModules';





//  Export Function
export default function Lab(){

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

            <Link href= "https://github.com/Rohan-s18/CSDS338_Lab" className={styles.bold}>
                Check out the Github Repository here!
            </Link>

            <br></br><br></br>

            <h2>
                    Modules
            </h2>

            <br></br><br></br>

            <LabModules />


            <br></br><br></br><br></br>

            <h2>
                Contact
            </h2>

            <p>
                I will be going through the Lab content in my office hours, so if you have any questions just let me know 
                over there. 
                <br></br>
                Additionally you can send me an email at:
                <br></br>
                rxs1182@case.edu
                <br></br>
                rohan.b.singh54@gmail.com
            </p>


        </div>

    )

}

