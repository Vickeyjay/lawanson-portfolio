import { useEffect, useRef } from 'react'
import './work.css'
import useReveal from '../../hooks/useReveal'
import { WORK } from '../../data/portfolio'

const TILTS = [-2, 1.5, -1, 2, -1.5]

const Card = ({ project, index }) => {
  const ref = useReveal()

  return (
    <article
      ref={ref}
      className="card grid gap-6 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-10"
      style={{ '--i': index, '--tilt': `${TILTS[index % TILTS.length]}deg` }}
    >
      <div className="card-media">
        {project.img ? (
          <img className="card-img" src={project.img} alt={project.alt} loading="lazy" />
        ) : (
          <div className="ph w-full" role="img" aria-label="Project image placeholder">Project image goes here</div>
        )}
      </div>

      <div className="px-2 pb-2 md:pr-8">
        <span className="chip">{project.type}</span>
        <h3 className="mt-4 font-display text-[clamp(1.6rem,3vw,2.3rem)] leading-tight font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-1 font-display text-sm font-semibold text-muted">{project.client}</p>
        <p className="mt-4 max-w-[42ch] text-muted">{project.text}</p>
      </div>
    </article>
  )
}

const PLACEHOLDER = {
  title: 'Your research project',
  client: 'Add the project name or client',
  type: 'Research',
  text: 'Add a research project or report here: the question you asked, the method you used and what you found.',
}

const Work = () => {
  const stackRef = useRef(null)

  // Each card shrinks a little as the next one slides over it
  useEffect(() => {
    const cards = Array.from(stackRef.current.querySelectorAll('.card'))
    let frame = null

    const update = () => {
      cards.forEach((card, i) => {
        const next = cards[i + 1]
        if (!next) return
        const stickTop = 96 + i * 22
        const progress = Math.min(Math.max(1 - (next.getBoundingClientRect().top - stickTop) / card.offsetHeight, 0), 1)
        card.style.setProperty('--s', 1 - progress * 0.05)
      })
      frame = null
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section id="work" className="section">
      <div className="mx-auto max-w-[1160px] px-6">
        <h2 className="section-title">Things I’ve Worked On</h2>
        <p className="section-sub">Design and branding work so far, with research projects to come.</p>

        <div ref={stackRef} className="pb-[6vh]">
          {[...WORK, PLACEHOLDER].map((project, i) => (
            <Card key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
