import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import About from '../components/About'
import Anime from '../components/Anime'

export default function Home() {
  return (
  <>
  <Head>
    <title>C.H.I.L.L</title>
  
  </Head>
  
  <Header />
  <About />
  <Anime />
  
  
   
   

  
  </>
  )
}
