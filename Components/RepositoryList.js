import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

//This is the react component for the public of repositories that Alessandra and Rohan have

export default function RepositoryList(){
    return(

        <div className={styles.grid}>

            <Link href='https://github.com/Rohan-s18/SNUPy'>

                <div className={styles.card}>
                    <h2>SNUPy</h2>
                    <p>SNUPy is an open-source machine learning API written in Python. The main goal of SNUPy is to be a simple and flexible API for machine learning.</p>
                </div>

            </Link>

            
            <Link href="https://github.com/Rohan-s18/Artificial_Intelligence">

                <div className={styles.card}>
                    <h2>Artificial Intelligence Repository</h2>
                    <p>This repository covers the Basic and Intermediate topics of Artificial Intelligence and Machine Learning. The Source code is in Python and Java.</p>
                </div>
                
            </Link>


            <Link href='https://github.com/Rohan-s18/CSDS338_Lab'>
                
                <div  className={styles.card}>
                    <h2>Operating Systems Lab</h2>
                    <p>This repository contains the lab modules that I designed for an Operating Systems class that I'm teaching.</p>
                </div>

            </Link>


            <Link href='https://github.com/Rohan-s18/Neural-Networks'>
                
                <div  className={styles.card}>
                    <h2>Neural Networks</h2>
                    <p>This repository contains source code for different types of Neural Networks that I developed from scratch.</p>
                </div>

            </Link>


            <Link href='https://github.com/Rohan-s18/Quantum_Computing'>
                
                <div  className={styles.card}>
                    <h2>Quantum Computing</h2>
                    <p>This repository contains source code for Quantum Computing algorithms using Python's qiskit library.</p>
                </div>

            </Link>


            <Link href='https://github.com/Rohan-s18/Data-Structures'>

                <div className={styles.card}>
                    <h2>Data Structures Repository</h2>
                    <p>Repository for Data Structures and Algorithms. This Repository contains the source code for most of the basic data strucutres as well as their algorithms. Source code is in Java</p>
                </div>

            </Link>


            <Link href='https://github.com/Rohan-s18/CPP_Cookbook'>
                
                <div  className={styles.card}>
                    <h2>C++ Cookbook</h2>
                    <p>This repository contains source code for anyone interested in learning C++ or interested in different C++ Projects.</p>
                </div>

            </Link>



            <Link href='https://github.com/Rohan-s18/Computer-Vision'>
                
                <div  className={styles.card}>
                    <h2>Computer Vision</h2>
                    <p>This repository contains source code for Computer Vision using python's opencv library.</p>
                </div>

            </Link>



            <Link href='https://github.com/Rohan-s18/Web_Development'>
                
                <div className={styles.card}>
                    <h2>Web Development Repository</h2>
                    <p>Repository for Web Development. This Repository contains work which includes the basics of HTML/CSS/JavaScript, Intermediate JavaScript, React and Next.js Projects</p>
                </div>
                
            </Link>

            
            <Link href='https://github.com/Rohan-s18/Intro-to-Linux-and-C'>

                <div className={styles.card}>
                    <h2>Intro to C and Linux Repository</h2>
                    <p>Repository for simple C programs and linux commands. This also includes awk and bash scripts.</p>
                </div>
                
            </Link>

            
            <Link href='https://github.com/Rohan-s18/Data-Analysis-and-Machine-Learning'>

                <div className={styles.card}>
                    <h2>Data Analysis and Machine Learning Repository</h2>
                    <p>Repository for Data Analysis and Machine Learning notebooks. This Repository contains Jupyter Notebooks that use scikit-learn and FBProphet for Data Analysis and Machine Learning.</p>
                </div>
                
            </Link>


        </div>

    )
}