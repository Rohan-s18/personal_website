//  Author: Rohan Singh
//  1/5/2023
//  React Component for Rohan Pain Index Listings


//  Imports
import Link from "next/link";
import styles from "../styles/Home.module.css"
import RPI_Card from "./RPI_Card";


/*
            <div className={styles.card}>
                <h3>
                    Lemon in juice in your wound
                </h3>
                Pain Scores
                <ul>
                    <li>
                        Physical Pain Score: 3
                    </li>
                    <li>
                        Emotional Pain Score: 1
                    </li>
                    <li>
                        Pissed Off Score: 2
                    </li>
                </ul>
            </div>
*/

//  Export Function
export default function RPI_Listings(){

    return(

        <div className={styles.grid}>
            
            <RPI_Card title="Lemon on Injury" physical_score="3" emotional_score="1" piss_score="2"/>

            <RPI_Card title="Stubbing your pinky" physical_score="3" emotional_score="1" piss_score="4"/>

        </div>

    )

}


