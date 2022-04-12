import {getAllProjectIds, getProjectData } from "../../lib/project"
import Header from "@components/Header"
import Date from "@components/Date"
import Head from "next/head"

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id)
  return {
    props: {
      projectData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false
  }
}

export default function Project({ projectData }) {
  return (
    <div>
      <Head>
        <title>{ projectData.title }</title>
      </Head>
      <article>
        <h1>{projectData.title}</h1>
        <div>
          <Date dateString={projectData.date}/>
        </div>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </article>
    </div>
  )
}