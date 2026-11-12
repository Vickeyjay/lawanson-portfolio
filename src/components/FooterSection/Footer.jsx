import './footer.css'
import { GoArrowUpRight } from 'react-icons/go'
import { LINKS } from '../../data/portfolio'

const Footer = () => {
  return (
    <footer id="contact" className="px-4 pt-10 pb-6">
      <div className="foot-card relative mx-auto max-w-[1160px] overflow-hidden px-8 pt-12 md:px-14 md:pt-16">
        <span className="foot-dot foot-dot-l" aria-hidden="true" />
        <span className="foot-dot foot-dot-r" aria-hidden="true" />

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.02] font-semibold tracking-[-0.03em]">
              Let’s make something
              <br />
              <span className="text-white/45">people remember.</span>
            </h2>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a className="pill pill-light" href={LINKS.whatsapp} target="_blank" rel="noreferrer">
                Chat on WhatsApp
                <span className="pill-icon"><GoArrowUpRight /></span>
              </a>
              <a className="foot-link" href={LINKS.cv}>Download CV</a>
            </div>
          </div>

          <div className="grid content-start gap-3 md:justify-self-end">
            <a className="foot-link" href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
            <a className="foot-link" href={`tel:${LINKS.phone}`}>{LINKS.phone}</a>
            <a className="foot-link" href={LINKS.linkedin}>LinkedIn</a>
            <p className="mt-4 max-w-[32ch] text-sm text-white/50">
              © 2026 Lawanson Marvellous Iyanuoluwa. Open to internships and entry-level roles in design, branding and research.
            </p>
          </div>
        </div>

        <p className="wordmark" aria-hidden="true">MARVHI</p>
      </div>
    </footer>
  )
}

export default Footer
