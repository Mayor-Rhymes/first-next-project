import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (

    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
      
     
       
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptate cumque commodi officia iure assumenda quo numquam. Consequatur maiores nisi aut! Consectetur nobis rem laudantium vel magnam, modi ratione laboriosam?</p>
        <Link href="/ninjas">
           <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      
      </div>
    </>
  )
}
