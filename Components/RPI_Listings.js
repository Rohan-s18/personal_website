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

            <RPI_Card title="Stubbing your pinky toe" physical_score="3.2" emotional_score="1" piss_score="4.6"/>

            <RPI_Card title="SAGES Essay" physical_score="1" emotional_score="10" piss_score="10"/>

            <RPI_Card title="Attending Ethics Lectures" physical_score="1" emotional_score="4.7" piss_score="1.2"/>

            <RPI_Card title="Ravens Losing a game" physical_score="1" emotional_score="4.4" piss_score="Fire Greg Roman"/>

            <RPI_Card title="Drinking Swiss Miss" physical_score="2.2" emotional_score="2.5" piss_score="5.5"/>

            <RPI_Card title="Running out of Soap" physical_score="1" emotional_score="10" piss_score="4"/>

            <RPI_Card title="Communists and Hippies" physical_score="1" emotional_score="2.5" piss_score="10"/>

            <RPI_Card title="Lemon on an open wound" physical_score="2.9" emotional_score="1" piss_score="2.1"/>

            <RPI_Card title="Socializing with strangers" physical_score="1.5" emotional_score="3.6" piss_score="3.1"/>

            <RPI_Card title="Java" physical_score="1" emotional_score="4.5" piss_score="5.5"/>

            <RPI_Card title="Eating Leutner Food" physical_score="6.5" emotional_score="2.3" piss_score="1"/>

            <RPI_Card title="Getting your foot snapped between chairs" physical_score="5.1" emotional_score="1.4" piss_score="2.1"/>

        </div>

    )

}


