import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
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
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <ul>
          {names.map(name => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <button onClick={handleClick}>Like ({likes})</button>
        <section>
          <h2>Blog</h2>
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


  )
}
