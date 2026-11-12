import './testimonials.css'
import { TESTIMONIALS } from '../../data/portfolio'

const Testimonials = () => {
  return (
    <section id="kind-words" className="section pt-8">
      <div className="mx-auto max-w-[1160px] px-6">
        <h2 className="section-title">Kind words</h2>
        <p className="section-sub">What people say about working with her.</p>

        <div className="grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((item, i) => (
            <figure key={i} className="quote">
              <blockquote className="mb-8 text-[1.2rem] leading-snug">{item.quote}</blockquote>
              <figcaption>
                <p className="font-display font-semibold">{item.name}</p>
                <p className="font-display text-sm text-muted">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
