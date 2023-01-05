//  Author: Rohan Singh
//  1/4/2023
//  Component to display programming Laguages and Tools

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

//  Importing images
import python from '../public/python.png'
import c from '../public/c.png'
import cpp from '../public/cpp.png'
import csp from '../public/csp2.png'
import java from '../public/java2.png'
import linux from '../public/linny.png'
import bash from '../public/bash.png'
import unix from '../public/unix.png'
import gnu from '../public/gnu.png'
import opencv from '../public/opencv1.png'
import scikit from '../public/scikit.png'
import r from '../public/r.png'
import js from '../public/js1.png'
import node from '../public/nodejs.png'
import react from '../public/react.png'
import mysql from '../public/mysql.png'



//  Imports


//  <div style={{borderRadius: '20px', overflow: 'hidden'}}>

//  Export Function
export default function ProgrammingTools(){
    return(

        <div className={styles.para}>
            <h2>
                Programming Languages and Tools
            </h2>
            <br></br><br></br><br></br>

            <div className={styles.pic_grid}>
                <div className={styles.card} >
                    <Image src={python} height={50} width={50} style={{borderRadius : '50%'}}/>
                </div>
                <div className={styles.card} >
                    <Image src={java} height={50} width={50} style={{borderRadius : '50%'}} />
                </div>

                <div className={styles.card} >
                    <Image src={c} height={50} width={50} style={{borderRadius : '50%'}} />
                </div>

                <div className={styles.card} >
                    <Image src={cpp} height={50} width={50} style={{borderRadius : '50%'}} />
                </div>

                <div className={styles.card} >
                    <Image src={csp} height={50} width={50} style={{borderRadius : '50%'}} />
                </div>

                <div className={styles.card} >
                    <Image src={linux} height={50} width={50} style={{borderRadius : '50%'}} />
                </div>

                <div className={styles.card} >
                    <Image src={bash} height={50} width={50} style={{borderRadius : '50%'}} />
                </div>

                <div className={styles.card} >
                    <Image src={gnu} height={50} width={50} style={{borderRadius : '50%'}} />
                </div>

                <div className={styles.card} >
                    <Image src={opencv} height={50} width={50} style={{borderRadius : '50%'}} />
                </div>

                <div className={styles.card} >
                    <Image src={r} height={50} width={50} style={{borderRadius : '50%'}} />
                </div>

                <div className={styles.card} >
                    <Image src={js} height={50} width={50} style={{borderRadius : '50%'}} />
                </div>

                <div className={styles.card} >
                    <Image src={node} height={50} width={50} style={{borderRadius : '50%'}} />
                </div>

                <div className={styles.card}>
                    <Image src={react} height={50} width={50} style={{borderRadius : '50%'}} />
                </div>

            </div>


            <br></br><br></br><br></br>
            
        </div>

    )
}

