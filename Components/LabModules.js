//  Author: Rohan Singh
//  1/5/2023
//  React Component to List the Lab Modules


//  Imports
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';



//  Export Function
export default function LabModules(){

    return(

        <div className={styles.grid}>
                
        <Link href="https://github.com/Rohan-s18/CSDS338_Lab/tree/main/Week%200">
            <div className={styles.card}>
                <h3>Week 0 (Setup) </h3>
                <p>
                    This lab module contains instructions to connect to the EECSLab Server and an introduction to the 
                    Linux Command Line Interface (CLI).
                </p>
            </div>
        </Link>

        <Link href="https://github.com/Rohan-s18/CSDS338_Lab/tree/main/Week%201">
            <div className={styles.card}>
                <h3>Week 1 (Basics of Linux)</h3>
                <p>
                    This lab module contains some info about Linux and some basic Linux commands for you to check out.
                </p>
            </div>
        </Link>

        <Link href="https://github.com/Rohan-s18/CSDS338_Lab/tree/main/Week%202">
            <div className={styles.card}>
                <h3>Week 2 (Intro to C)</h3>
                <p>
                    This lab module contains the very basics of the C Programming language. This includes printf commands 
                    and basic arithmetic operations. Alongside flow statements and arays.
                </p>
            </div>
        </Link>

        <Link href="https://github.com/Rohan-s18/CSDS338_Lab/tree/main/Week%203">
            <div className={styles.card}>
                <h3>Week 3 (Pointers in C)</h3>
                <p>
                    This lab module contains an introduction to pointers in C. This includes, the basics of pointers, 
                    pointers of characters, pointer-array equivalence, void-pointers and reference methods.
                </p>
            </div>
        </Link>

        <Link href="https://github.com/Rohan-s18/CSDS338_Lab/tree/main/Week%204">
            <div className={styles.card}>
                <h3>Week 4 (Intro to Bash)</h3>
                <p>
                    This lab module contains an intro to Bash Scripting this will include using echo commands, variables, 
                    arithmetic operationsa and flow statements.
                </p>
            </div>
        </Link>

        <Link href="https://github.com/Rohan-s18/CSDS338_Lab/tree/main/Week%205">
            <div className={styles.card}>
                <h3>Week 5 (Structs)</h3>
                <p>
                    This lab module contains code to demonstrate the use of Structs in C.
                </p>
            </div>
        </Link>

        <Link href="https://github.com/Rohan-s18/CSDS338_Lab/tree/main/Week%206">
            <div className={styles.card}>
                <h3>Week 6 (File I/O) </h3>
                <p>
                    This lab module contains code that deals with simple File I/O operations in C.
                </p>
            </div>
        </Link>

        <Link href="https://github.com/Rohan-s18/CSDS338_Lab/tree/main/Week%207">
            <div className={styles.card}>
                <h3>Week 7 (Bash/Awk)</h3>
                <p>
                    This lab module contains Bash scripts that make Linux system calls as well as some basics of awk scripts.
                </p>
            </div>
        </Link>

        <Link href="https://github.com/Rohan-s18/CSDS338_Lab/tree/main/Week%208">
            <div className={styles.card}>
                <h3>Week 8 (Process Cloning) </h3>
                <p>
                    This lab module contains working with process cloning in C, using fork() and exec() system calls.
                </p>
            </div>
        </Link>

        <Link href="https://github.com/Rohan-s18/CSDS338_Lab/tree/main/Week%209">
            <div className={styles.card}>
                <h3>Week 9 (Threads) </h3>
                <p>
                    This lab module contains multithreading in C.
                </p>
            </div>
        </Link>

        <Link href="https://github.com/Rohan-s18/CSDS338_Lab/tree/main/Week%2010">
            <div className={styles.card}>
                <h3>Week 10 (Memory Allocation) </h3>
                <p>
                    This lab module contains different memory allocation processes in C malloc(), calloc(), free() and realloc() 
                    as well as buffer problems.
                </p>
            </div>
        </Link>

        <Link href="https://github.com/Rohan-s18/CSDS338_Lab/tree/main/Week%2011">
            <div className={styles.card}>
                <h3>Week 11 (Your Choice) </h3>
                <p>
                    This lab module will be upto you to decide, I will be asking for suggestions and whatever you decide will 
                    be covered in this module.
                </p>
            </div>
        </Link>

        <Link href="https://github.com/Rohan-s18/CSDS338_Lab/tree/main/Week%2012">
            <div className={styles.card}>
                <h3>Week 12 (UNIX Shell in C) </h3>
                <p>
                    This lab module contains code for a UNIX shell written in C.
                </p>
            </div>
        </Link>

        
        

    </div>

    )

}