import './about.css'
import { GoArrowUpRight } from 'react-icons/go'
import { LINKS } from '../../data/portfolio'

const About = () => {
  return (
    <section id="about" className="section pt-8">
      <div className="mx-auto max-w-[760px] px-6">
        <div className="mb-10 flex items-center gap-5">
          <div className="ph avatar" role="img" aria-label="Photo placeholder">Photo</div>
          <div>
            <h2 className="font-display text-[1.8rem] leading-tight font-semibold tracking-tight">
              Lawanson Marvellous Iyanuoluwa
            </h2>
            <p className="font-display text-muted">Brand designer and researcher</p>
          </div>
        </div>

        <p className="mb-5">
          I’m a 400-level Business Administration student. Design and branding are my main work: I make flyers, brand identities and print materials for small businesses.
        </p>
        <p className="mb-5">
          I also do research, whether it’s a research project or any work that needs facts found and explained.
        </p>
        <p>
          Before all of that, I’ve spent years in customer service, so I’m calm with complaints and good at helping people decide.
        </p>

        <h3 className="mt-14 mb-4 font-display text-2xl font-semibold tracking-tight">Links</h3>
        <div className="grid gap-3 sm:grid-cols-3">
          <a className="link-pill" href={LINKS.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp <GoArrowUpRight />
          </a>
          <a className="link-pill" href={`mailto:${LINKS.email}`}>
            Email <GoArrowUpRight />
          </a>
          <a className="link-pill" href={LINKS.linkedin}>
            LinkedIn <GoArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
