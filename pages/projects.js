import Header from "@components/Header"
import Head from "next/head"
import { getAllProjects } from '../lib/projects'


export async function getStaticProps() {
  const allProjects = getAllProjects([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'content',
    'excerpt',
    'languages',
    'url',
    'link'
  ])

  return {
    props: { allProjects },
  }
}

export default function projects({ allProjects }) {
  return (
    <>
      <div className="container">
        <Head>
          <title>Projects</title>
        </Head>
        <div style={{textAlign: "center"}}><Header title="Projects"/></div>
        <section className="project-grid">
        { allProjects.map(project => (
          <div className="project-item">
            <h5>{project.title} ({project.date})</h5>
            <p>{project.content}</p>
            <p>Tools used: {project.languages}</p>
            <a href={project.url} target="_blank">Code</a>
            <p>{project.link ? <a href={project.link} target="_blank">Working project</a> : null }</p>
          </div>
          )
        )}
      </section>
      </div>
    </>
  )
}