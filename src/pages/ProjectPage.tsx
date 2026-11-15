import { Link, useParams } from 'react-router-dom'
import { getProject, projects } from '../data/projects'
import NotFound from './NotFound'

export default function ProjectPage() {
  const { slug = '' } = useParams()
  const p = getProject(slug)
  if (!p) return <NotFound />

  const index = projects.findIndex((x) => x.slug === p.slug)
  const prev = index > 0 ? projects[index - 1] : undefined
  const next = index < projects.length - 1 ? projects[index + 1] : undefined

  return (
    <article className="page">
      <header className="page-head">
        <p className="eyebrow">{p.area}</p>
        <h1>{p.title}</h1>
        <p className="lede">{p.summary}</p>
        <dl className="meta">
          <div>
            <dt>기간</dt>
            <dd className="mono">{p.period}</dd>
          </div>
          {p.status && (
            <div>
              <dt>상태</dt>
              <dd>{p.status}</dd>
            </div>
          )}
          <div>
            <dt>기술</dt>
            <dd>{p.stack.join(', ')}</dd>
          </div>
          {p.links?.map((l) => (
            <div key={l.href}>
              <dt>{l.label}</dt>
              <dd>
                <a href={l.href} target="_blank" rel="noreferrer">
                  {l.href.replace(/^https?:\/\//, '')}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </header>

      <section className="block prose">
        <h2>왜 만들었나</h2>
        {p.why.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </section>

      {p.shots.length > 0 && (
        <section
          className={
            p.shots.length > 1 && p.shots.every((s) => s.narrow)
              ? 'block shots shots-pair'
              : 'block shots'
          }
        >
          {p.shots.map((s) => (
            <figure key={s.src} className={s.narrow ? 'narrow' : undefined}>
              <a href={s.src} target="_blank" rel="noreferrer">
                <img src={s.src} alt={s.alt} loading="lazy" />
              </a>
              <figcaption>{s.caption}</figcaption>
            </figure>
          ))}
        </section>
      )}

      {p.usage && (
        <section className="block">
          <h2>사용법</h2>
          <ol className="list">
            {p.usage.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ol>
        </section>
      )}

      {p.did && (
      <section className="block">
        <h2>한 일</h2>
        <ul className="list">
          {p.did.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>
      )}

      {p.process && (
        <section className="block">
          <h2>만든 과정</h2>
          <ol className="steps">
            {p.process.map((x) => (
              <li key={x.title} className="problem">
                <h3>{x.title}</h3>
                <p>{x.body}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {p.problems && (
        <section className="block">
          <h2>막혔던 문제</h2>
          <div className="problems">
            {p.problems.map((x) => (
              <div key={x.title} className="problem">
                <h3>{x.title}</h3>
                <p>{x.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {p.results && (
      <section className="block">
        <h2>결과</h2>
        <table className="results">
          <tbody>
            {p.results.map((r) => (
              <tr key={r.label}>
                <th scope="row">{r.label}</th>
                <td className="mono">
                  {r.before && (
                    <>
                      <span className="muted">{r.before}</span>
                      <span className="arrow" aria-label="에서">
                        →
                      </span>
                    </>
                  )}
                  <span>{r.after}</span>
                </td>
                <td className="muted small">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      )}

      {p.role && (
        <section className="block prose">
          <h2>내 역할</h2>
          {p.role.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </section>
      )}

      {p.related && (
        <section className="block">
          <h2>같이 만든 도구</h2>
          <div className="problems">
            {p.related.map((x) => (
              <div key={x.title} className="problem">
                <h3>{x.title}</h3>
                <p>{x.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <nav className="page-foot" aria-label="프로젝트 이동">
        {prev && (
          <Link to={`/projects/${prev.slug}`} className="pager pager-prev">
            <span className="muted small">← 이전 프로젝트</span>
            <span className="pager-title">{prev.title}</span>
          </Link>
        )}
        {next && (
          <Link to={`/projects/${next.slug}`} className="pager pager-next">
            <span className="muted small">다음 프로젝트 →</span>
            <span className="pager-title">{next.title}</span>
          </Link>
        )}
      </nav>
    </article>
  )
}
