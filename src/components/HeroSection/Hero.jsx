import './hero.css'
import { GoArrowRight, GoArrowUpRight } from 'react-icons/go'
import { AWARD, LINKS } from '../../data/portfolio'

const NAME = ['Lawanson', 'Marvellous', 'Iyanuoluwa']

const Hero = () => {
  return (
    <section id="home" className="hero px-6 pt-16 pb-24 md:pt-20">
      {/* Thin print-layout geometry that draws itself in, with the three inks as small accents */}
      <svg className="geo" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect className="draw" pathLength="1" style={{ '--d': 0 }} x="90" y="40" width="360" height="360" />
          <path className="draw" pathLength="1" style={{ '--d': 1 }} d="M450 400V220a180 180 0 0 1 360 0V400Z" />
          <rect className="draw" pathLength="1" style={{ '--d': 2 }} x="640" y="130" width="360" height="360" />
          <circle className="draw" pathLength="1" style={{ '--d': 3 }} cx="270" cy="580" r="150" />
          <path className="draw" pathLength="1" style={{ '--d': 4 }} d="M820 700V560a150 150 0 0 1 300 0V700" />
        </g>
        <circle className="accent acc-y" cx="450" cy="220" r="24" />
        <rect className="accent acc-m" x="978" y="108" width="44" height="44" />
        <circle className="accent acc-c" cx="270" cy="430" r="22" />
      </svg>

      <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
        <div className="photo-wrap">
          <div className="ph photo" role="img" aria-label="Photo placeholder">Her photo goes here</div>

          <div className="sticker" role="img" aria-label={AWARD}>
            <svg className="sticker-ring" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path id="ring" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <text>
                <textPath href="#ring" textLength="480" lengthAdjust="spacing">
                  Placed 5th in research at the University of Ilorin Industrial Summit
                </textPath>
              </text>
            </svg>
            <span className="sticker-num">5th</span>
          </div>
        </div>

        <h1 className="font-display text-[clamp(3rem,10vw,7.4rem)] leading-[0.95] font-semibold tracking-[-0.045em]">
          {NAME.map((word, i) => (
            <span key={word} className="line">
              <span style={{ '--i': i }}>{word}</span>
            </span>
          ))}
        </h1>

        <p className="mt-6 font-display text-[clamp(1.3rem,3vw,1.9rem)] font-medium">
          Brand designer and researcher
        </p>
        <p className="mt-4 mb-10 max-w-[52ch] text-[1.2rem] leading-snug text-muted">
          I design brands and print materials, I research anything that needs answers, and I’m at ease with customers.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a className="pill" href={LINKS.whatsapp} target="_blank" rel="noreferrer">
            Chat on WhatsApp
            <span className="pill-icon"><GoArrowUpRight /></span>
          </a>
          <a className="pill-ghost" href={`mailto:${LINKS.email}`}>
            Send an email <GoArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
