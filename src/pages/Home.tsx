import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

export default function Home() {
  const { job } = profile

  return (
    <article className="page">
      <header className="page-head">
        <p className="eyebrow">소개</p>
        <h1>{profile.name}</h1>
      </header>

      <section className="prose">
        {profile.intro.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </section>

      <section className="block">
        <h2>경력</h2>
        <div className="job">
          <div className="job-row">
            <span className="job-company">{job.company}</span>
            <span className="mono muted">{job.period}</span>
          </div>
          <p className="muted">{job.title}</p>
          <ul className="list">
            {job.duties.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="block">
        <h2>프로젝트</h2>
        <ul className="project-rows">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link to={`/projects/${p.slug}`} className="project-row">
                <div className="project-row-top">
                  <span className="project-row-title">{p.title}</span>
                  <span className="mono muted">{p.period}</span>
                </div>
                <p className="project-row-summary">{p.summary}</p>
                <p className="tags">
                  <span className="tag tag-area">{p.area}</span>
                  {p.status && <span className="tag">{p.status}</span>}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
