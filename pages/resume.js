import Head from 'next/head';
import {getAllProjects} from "../lib/projects";
import JobPosition from '../components/JobPosition';
import ResumeProject from "../components/ResumeProject";


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

export default function Resume({}) {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main id="resume">
        <h1>Spencer Fletcher</h1>
        <p className="contact-info">Vancouver, BC ⬥ (778)-960-3377 ⬥ spenfletcher@gmail.com ⬥ spencerfletcher.com</p>
        <h3>Professional Summary</h3>
        <div>Motivated, quick-learning, detail-oriented college student eager to gain work experience. Strengths
          include problem-solving, critical thinking, and communication. Looking to utilize my skills in a
          challenging, engaging position, especially those positions that allow me to apply my computer skills.
        </div>
        <h3>Education</h3>
        <p><strong>University of British Columbia Vancouver</strong>, BA Computer Science, Fall 2022 - Present. Year 2
          transfer student. 4.02/4.0 overall GPA, 4.33/4.0 major GPA.</p>
        <p><strong>Relevant Coursework</strong></p>
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
        <p><strong>IES Abroad Berlin</strong>, Summer 2022, studied German Language.</p>
        <p><strong>University of Rochester</strong>, BA Computer Science, Fall 2021 - Spring 2022. 3.79/4.0 overall GPA,
          4.0/4.0 major GPA. Dean’s List Fall 2021, Spring 2022.</p>
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
        <JobPosition title="UBC IT" employer="University of British Columbia" location="Vancouver, BC"
                     dates="September 2022 - Present" tasks={[
          "Troubleshoot and fix various devices and operating systems for researchers and professors.",
          "Assist with the development of multiple departmental websites."
        ]}/>
        <JobPosition
          title="IT Intern" employer="Microspec Inc." location="Peterborough, NH" contact="(603)-924-4300"
          dates="October 2020 - August 2021" tasks={[
          "Developed software using Python that is now used internally.",
          "Learned from trained professionals and contributed within a team environment.",
          "Assisted team with various tasks, including bug reports, technical support, and UX design."
        ]}/>
        <h3>Other Work History</h3>
        <JobPosition title="Senior Barista" employer="Haute Coffee" location="Concord, MA" contact="(617)-461-5094"
                     dates="December 2019 - August 2021" tasks={[
          "Supervised and trained baristas to maintain and uphold store policies.",
          "Opened alone, including dialing, stocking display cases, and preparing for the day.",
          "Handled incoming orders, stocking, organizing, and keeping track of items."]}
        />
        <JobPosition title="Doordash Driver" employer="Self Employed" location="Concord, MA"
                     dates="March 2021 - August 2021"
                     tasks={[
                       "Developed various strategies to maximize efficiency and earnings, delivering items accurately and efficiently."
                     ]}
        />
        <JobPosition title="Volunteer Kitchen Employee" employer="Parker Charter" location="Devens, MA"
                     dates="August 2019 - March 2020"
                     tasks={["Kept kitchen area clean and sanitary.",
                       "Stocked & organized incoming food orders. ",
                       "Assisted other volunteers and employees. "]}
        />
        <JobPosition title="Camp Counselor" employer="Night Eagle Wilderness" location="Wallingford, VT"
                     contact="(802)-855-8661" dates="July 2019 - August 2019"
                     tasks={[
                       "Assisted camp director with logistics, including keeping track of dietary restrictions and supervising housing.",
                       "Led groups of children safely through a variety of camp activities."]}
        />
        <h3>Projects</h3>
        <ResumeProject title="Portfolio" link="https://spencerfletcher.com" dates="Ongoing"
                       details={["A personal website I created to highlight my talents and the work that I have done.",
                         "Technologies Used: JavaScript (Next.js), HTML, CSS, Netlify, Bluehost"]}/>
        <h3>Skills</h3>
        <p>Proficient in JavaScript, HTML, CSS, Python, Java, C, and C#</p>
        <p>Knowledge of Git, MySQL, Next.js, Django, NPM, WordPress, and Unity</p>
        <p>Employee training and management</p>
        <p>Adaptability and problem-solving</p>
        <p>Conversational in both Spanish and German</p>
      </main>
    </>


  );
}
