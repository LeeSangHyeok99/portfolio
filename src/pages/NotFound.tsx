import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <article className="page">
      <header className="page-head">
        <p className="eyebrow">404</p>
        <h1>페이지를 찾을 수 없습니다</h1>
      </header>
      <p>
        <Link to="/">소개로 돌아가기</Link>
      </p>
    </article>
  )
}
