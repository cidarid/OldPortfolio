import Head from 'next/head'
import Header from '@components/Header'
import Quote from '@components/Quote'
import Spacer from "@components/Spacer"
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
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <Header title="About Me"/>
        <p style={{textAlign: "center"}}>
          Hi! I’m Spencer. I’ve been programming since 2014, and love what I do.
          I like to code things from the ground up, and enjoy seeing my ideas come to life.
          I’ve made websites, games, web applications, and desktop applications.
          I’m constantly looking to improve my skills, and I’d be excited to work with you!
        </p>
        <Spacer height="150px"/>
        <h1>Things People Have Said About Me</h1>
        <div class="flex-container">
          <div class="child">
            <Quote
              text="A phenomenal coder - one of the best I have ever seen."
              quotee="Gregory Xavier"
              quoteeRole="Professor of Game Engineering at New York Institute of Technology"
            />
          </div>
          <div class="child">
            <Quote
              text="An impressive final program."
              quotee="Diane Kruse"
              quoteeRole="Calculus Teacher at Francis W. Parker Essential School"
            />
          </div>
        </div>
        <Spacer height="150px"/>
        <Header title="Tools & Frameworks"/>
        <section className="language-grid">
          <div className="language-item">
            <h2>Programming</h2>
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>Python</p>
            <p>Java</p>
            <p>C</p>
            <p>C#</p>
            <p>SQL</p>
          </div>
          <div className="language-item">
            <h2>Tools</h2>
            <p>Netlify</p>
            <p>Bluehost</p>
            <p>Wordpress</p>
            <p>Git & Github</p>
            <p>Unity</p>
          </div>
          <div className="language-item">
            <h2>Frameworks</h2>
            <p>Django</p>
            <p>Next.js</p>
            <p>Bootstrap</p>
          </div>
        </section>
      </main>

    </div>
    </>


  )
}
