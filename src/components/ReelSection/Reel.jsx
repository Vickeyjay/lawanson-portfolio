import './reel.css'
import { WORK } from '../../data/portfolio'

// A scrolling strip of her flyers across the top of the page
const Reel = () => {
  return (
    <div className="reel" aria-hidden="true">
      <div className="reel-track">
        {[0, 1].map((copy) => (
          <div className="reel-group" key={copy}>
            {[...WORK, ...WORK, ...WORK].map((item, i) => (
              <img key={i} src={item.img} alt="" loading="lazy" />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reel
