import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

export default function Home() {
  const { job, education, military } = profile

  return (
    <article className="page">
      <header className="page-head intro-head">
        <img className="portrait" src="/images/profile.jpg" alt={`${profile.name} 사진`} />
        <div>
          <p className="eyebrow">소개</p>
          <h1>{profile.name}</h1>
          <p className="lede">{profile.tagline}</p>
        </div>
      </header>

      <section className="prose">
        {profile.intro.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </section>

      <section className="block">
        <h2>학력과 병역</h2>
        <ul className="rows">
          {education.map((e) => (
            <li key={e.name} className="row">
              <span>
                {e.name}
                {e.detail && <span className="muted"> {e.detail}</span>}
              </span>
              <span className="mono muted">
                {e.period} {e.note}
              </span>
            </li>
          ))}
          <li className="row">
            <span>{military.status}</span>
            <span className="mono muted">{military.period}</span>
          </li>
        </ul>
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
