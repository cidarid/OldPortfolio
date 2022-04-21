import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import {useState} from 'react'
// import utilStyles from '../styles/utils.module.css'
import { getSortedProjectData } from "../lib/project"
import Link from 'next/link'
import Date from '@components/Date'


export async function getStaticProps() {
  const allProjectData = getSortedProjectData()
  return {
    props: { allProjectData }
  }
}

export default function Home({ allProjectData }) {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

  const [likes, setLikes] = useState(0)

  function handleClick() {
    setLikes(likes + 1)
  }

  return (
    <>
      <Navbar/>
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <Header title="Welcome to my app!" />
        <Header title="About me"/>
        <p className="description">
          Hi! I’m Spencer. I’ve been programming since 2014, and love what I do.
          I like to code things from the ground up, and enjoy seeing my ideas come to life.
          I’ve made websites, games, web applications, and desktop applications.
          I’m constantly looking to improve my skills, and I’d be excited to work with you!
        </p>
        <section>
          <h2>Projects</h2>
          <ul>
            {allProjectData.map(({ id, date, title }) => (
              <li key={id}>
                <Link href={`/projects/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />

    </div>
    </>


  )
}
