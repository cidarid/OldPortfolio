import Head from 'next/head'
import Header from '@components/Header'
import {getAllProjects} from "../lib/projects"


export async function getStaticProps() {
  const allProjectData = getAllProjects()
  return {
    props: { allProjectData }
  }
}

export default function Home({ allProjectData }) {
  return (
    <>
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <Header title="About me"/>
        <p className="description">
          Hi! I’m Spencer. I’ve been programming since 2014, and love what I do.
          I like to code things from the ground up, and enjoy seeing my ideas come to life.
          I’ve made websites, games, web applications, and desktop applications.
          I’m constantly looking to improve my skills, and I’d be excited to work with you!
        </p>
      </main>

    </div>
    </>


  )
}
