import './dock.css'
import { GoDeviceDesktop, GoHome, GoMail, GoPerson } from 'react-icons/go'

const ITEMS = [
  { id: 'home', label: 'Home', Icon: GoHome },
  { id: 'work', label: 'Work', Icon: GoDeviceDesktop },
  { id: 'about', label: 'About', Icon: GoPerson },
  { id: 'contact', label: 'Contact', Icon: GoMail },
]

const Dock = ({ activeSection }) => {
  return (
    <nav className="dock" aria-label="Quick navigation">
      {ITEMS.map(({ id, label, Icon }) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={label}
          title={label}
          className={id === activeSection ? 'active' : ''}
        >
          <Icon />
        </a>
      ))}
    </nav>
  )
}

export default Dock
