import Head from 'next/head';
import {getAllProjects} from "../lib/projects";


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
  ]);

  return {
    props: {allProjects},
  };
}

export default function Home({allProjects}) {
  return (
    <>
      <div className="container">
        <Head>
          <title>Resume</title>
          <link rel="icon"/>
        </Head>
        <main>
          <Header title="Spencer Fletcher"/>
          <p>Vancouver, BC ⬥ (778)-960-3377 ⬥ spenfletcher@gmail.com ⬥ spencerfletcher.com</p>
          <h3>Professional Summary</h3>
          <div>Motivated, quick-learning, detail-oriented college student eager to gain work experience. Strengths
            include problem-solving, critical thinking, and communication. Looking to utilize my skills in a
            challenging, engaging position, especially those positions that allow me to apply my computer skills.
          </div>
          <h3>Education</h3>
          <div><strong>University of British Columbia Vancouver</strong>, BA Computer Science, Fall 2022 - Present. Year
            2
            transfer
          </div>
          student. 4.02/4.0 overall GPA, 4.33/4.0 major GPA.
          <strong>Relevant Coursework</strong>
          <ul>
            <li>
              CPSC 121, Models of Computation: Circuitry, boolean logic, proof techniques, state machines, sets.
              Grade: A+, course average grade: B
            </li>
            <li>
              CPSC 210, Software Construction: Software design, design patterns, data structures, debugging, testing.
              GPA: A+, course average grade: B+
            </li>
            <li>
              CPSC 213, Computer Systems: Computer architecture, operating systems, assembly, computing hardware. In
              progress.
            </li>
          </ul>
          <strong>IES Abroad Berlin</strong>, Summer 2022, studied German Language.
          <strong>University of Rochester</strong>, BA Computer Science, Fall 2021 - Spring 2022. 3.79/4.0 overall GPA,
          4.0/4.0 major GPA. Dean’s List Fall 2021, Spring 2022.
          <strong>Relevant Coursework</strong>
          <ul>
            <li>
              MATH 150: Discrete Mathematics: Logic, mathematical reasoning, induction, recurrence, trees, graphs.
              Grade: B.
            </li>
            <li>
              CSC 171: Introduction to Computer Science: Fundamentals, design patterns, maintainable code. Grade:
              A.
            </li>
            <li>
              CSC 172: Data Structures & Algorithms: Encryption, pathfinding, running time, sorting, searching.
              Grade: A.
            </li>
          </ul>
          <h3>Relevant Work History</h3>

        </main>

      </div>
    </>


  );
}
