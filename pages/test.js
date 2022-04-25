import Header from "@components/Header"
import Date from "@components/Date"
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
  ])

  return {
    props: { allProjects },
  }
}

export default function test({ allProjects }) {
  return (
    <>
      <div className="container">
        <Head>
          <title>Next.js Blog Example with ME</title>
        </Head>
        <section className="project-grid">
        { allProjects.map(project => (
          <div className="project-item">
            <h2>{project.title}</h2>
            <p>{project.content}</p>
            <p>Languages used: {project.languages}</p>
            <a href={project.url}>Link</a>

          </div>
          )
        )}
      </section>
      </div>
    </>
  )
}