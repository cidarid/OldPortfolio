// Handles files
import fs from 'fs'
// Handles file paths
import path from 'path'
// Parses MD for data
import matter from 'gray-matter'
// Allows conversion of MD
import { remark } from 'remark'
// Allows MD to be converted to HTML
import html from 'remark-html'

const projectDir = path.join(process.cwd(), 'projects');

export function getSortedProjectData() {
  // Get file names under /projects
  const fileNames = fs.readdirSync(projectDir)
  const allProjectData = fileNames.map( fileName => {
    // Remove .md from file name to get project ID
    const id = fileName.replace(/\.md$/, '')

    // Read MD file as string
    const fullPath = path.join(projectDir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the ID and return
    return {
      id,
      ...matterResult.data
    }
  })

  // Sort projects by date
  // TODO: Maybe add some other sort of priority other than date?
  return allProjectData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectDir)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getProjectData(id) {
  const fullPath = path.join(projectDir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}