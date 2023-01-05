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
                What is RPI?
            </h2>

            <br></br>

            <p>
                RPI or the Rohan Pain Index, is a compilation of the measures of Physical, Emotional and Psychological pain that certain
                actions, events or objects inflict on humans. I am willing to sacrifice my happiness for the field of science and I hope 
                that the scientific community acknowledges these sacrifices when they are deliberting for the Nobel Prize for Medicine. 
                It would also be great, if I get the TIME Person of the Year award for all of this. 
                <br></br><br></br>
                These Rankings should not be seen as a bunch of personal opinions, but rather as a universally accepted scale for pain. 
                If someone disagrees with these rankings, then they are simply wrong. 
            </p>

            <br></br>
            <br></br>


            <h2>
                Scoring Criteria
            </h2>

            <br></br>

            <p>
                The Rohan Pain Index has 3 different measurement categories for each process/thing : 
            </p>
            
            <ul>
                <li>
                    Physical Pain Score - This measures the Physical pain inflicted by the process/thing. 
                </li>
                <li>
                    Emotional Pain Score - This measures the Emotional damage sustained during the process/thing. 
                </li>
                <li>
                    Pissed-off Score - This measures how much the process/thing will piss you off.
                </li>
            </ul>

            <br></br>
            
            <p>
                All of the three measurement categories are measured on a scale ranging from 1-to-10. This scale is logarithmic.
                <br></br>
                For all of you non-science peeps, a logarithmic scale means that a score of 4 is 10 times as much as a score of 
                3. 
            </p>



            <br></br>
            <br></br>

            <h2>RPI Scores</h2>

            <br></br>

            <RPI_Listings />


        </div>

    )

}


