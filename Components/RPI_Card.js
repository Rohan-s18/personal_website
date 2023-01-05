//  Author: Rohan Singh
//  1/5/2023
//  React Component for RPI Card

//  Imports
import Link from "next/link";
import styles from "../styles/Home.module.css"


//  Export Function
export default function RPI_Card(props){

    return (
        <div className={styles.card}>
        <h3>
            {props.title}
        </h3>
        Pain Scores
        <ul>
            <li>
                Physical Pain Score: {props.physical_score}
            </li>
            <li>
                Emotional Pain Score: {props.emotional_score}
            </li>
            <li>
                Pissed Off Score: {props.piss_score}
            </li>
        </ul>
    </div>
    )

}