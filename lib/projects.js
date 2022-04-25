import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const projectDir = join(process.cwd(), 'projects')

export function getProjectSlugs() {
  return fs.readdirSync(projectDir)
}

export function getProjectBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(projectDir, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllProjects(fields = []) {
  const slugs = getProjectSlugs()
  const posts = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}