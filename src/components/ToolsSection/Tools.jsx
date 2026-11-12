import './tools.css'
import { TOOLS } from '../../data/portfolio'

const Tools = () => {
  return (
    <section id="tools" className="section pt-8">
      <div className="mx-auto max-w-[1160px] px-6">
        <h2 className="section-title">Tools I use</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {TOOLS.map((tool) => (
            <span key={tool} className="tool">{tool}</span>
          ))}
          <span className="tool tool-empty">Her design tools go here</span>
        </div>
      </div>
    </section>
  )
}

export default Tools
