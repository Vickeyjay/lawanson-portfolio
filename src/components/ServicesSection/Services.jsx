import './services.css'
import { SERVICES } from '../../data/portfolio'

const Services = () => {
  return (
    <section id="services" className="section pt-8">
      <div className="mx-auto max-w-[1160px] px-6">
        <h2 className="section-title">What I do</h2>
        <p className="section-sub">Design comes first. Research and customer service sit right behind it.</p>

        <div className="grid gap-5 md:grid-cols-12">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className={`service p-8 ${service.main ? 'service-main md:col-span-7 md:row-span-2 md:p-12' : 'md:col-span-5'}`}
            >
              {service.main && (
                <>
                  <span className="orb orb-m" aria-hidden="true" />
                  <span className="orb orb-c" aria-hidden="true" />
                </>
              )}
              <span className={`dot dot-${service.accent}`} aria-hidden="true" />
              <h3 className="mb-3 font-display text-[1.6rem] leading-tight font-semibold tracking-tight md:text-[2.1rem]">
                {service.title}
              </h3>
              <p className="max-w-[46ch]">{service.text}</p>

              {service.points.length > 0 && (
                <ul className="mt-5 grid gap-2">
                  {service.points.map((point) => (
                    <li key={point} className="service-point">{point}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
