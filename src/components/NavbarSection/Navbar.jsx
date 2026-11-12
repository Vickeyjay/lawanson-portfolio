import './navbar.css'
import { GoDownload } from 'react-icons/go'
import { LINKS, TABS } from '../../data/portfolio'

const Navbar = ({ activeSection }) => {
  return (
    <header className="navbar sticky top-0 z-20">
      <div className="mx-auto flex h-[72px] max-w-[1160px] items-center justify-between px-6">
        <a href="#home" className="font-display text-xl font-semibold tracking-tight">
          Lawanson Marvellous
        </a>

        <nav className="flex items-center gap-8 max-md:hidden" aria-label="Sections">
          {TABS.filter((tab) => tab.id !== 'home').map((tab) => (
            <a key={tab.id} href={`#${tab.id}`} className={`nav-link ${activeSection === tab.id ? 'active' : ''}`}>
              {tab.label}
            </a>
          ))}
        </nav>

        <a href={LINKS.cv} className="pill-ghost !px-4 !py-2 text-sm">
          <GoDownload /> Download CV
        </a>
      </div>
    </header>
  )
}

export default Navbar
