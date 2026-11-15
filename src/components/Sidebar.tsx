import { NavLink } from 'react-router-dom'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

export default function Sidebar() {
  return (
    <div className="sidebar-col">
    <aside className="sidebar">
      <div className="sidebar-head">
        <NavLink to="/" className="name">
          {profile.name}
        </NavLink>
        <p className="headline">
          {profile.job.company}
          <br />
          {profile.job.title}
        </p>
        <p className="period mono">{profile.job.period}</p>
      </div>

      <nav className="nav" aria-label="페이지">
        <NavLink to="/" end className="nav-item">
          소개
        </NavLink>

        <p className="nav-label">프로젝트</p>
        {projects.map((p) => (
          <NavLink key={p.slug} to={`/projects/${p.slug}`} className="nav-item">
            <span>{p.title}</span>
            <span className="nav-area">{p.area}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-foot">
        <a href={profile.contact.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={`mailto:${profile.contact.email}`}>Email</a>
      </div>
    </aside>
    </div>
  )
}
