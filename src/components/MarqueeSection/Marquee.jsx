import './marquee.css'
import { FACTS } from '../../data/portfolio'

const Star = () => (
  <svg className="star" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
)

const Marquee = () => {
  return (
    <div className="facts" role="region" aria-label="Highlights">
      <div className="facts-track">
        {[0, 1].map((copy) => (
          <div className="facts-group" key={copy} aria-hidden={copy === 1}>
            {FACTS.map((fact) => (
              <span key={fact}>
                {fact}
                <Star />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee
