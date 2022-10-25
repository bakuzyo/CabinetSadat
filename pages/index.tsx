import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-scroll z-0'>
      <Head>
        <title>Isabelle Sadat</title>
      </Head>

      {/* HEADER */}
      <Header />
      {/* HERO */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>
      {/* ABOUT */}
      {/* <section id='about' className='snap-center'>
        <About />
      </section> */}
      {/* EXPERIENCE */}

      {/* SKILLS */}

      {/* PROJECTS */}

      {/* CONTACT ME */}
    </div>
  )
}

export default Home