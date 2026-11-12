import valentine from '../assets/images/valentine-packages.jpeg'
import convocationFood from '../assets/images/convocation-food-packages.jpeg'
import marvhiServices from '../assets/images/marvhi-services.jpeg'
import convocationPrint from '../assets/images/convocation-print-package.jpeg'

// TODO: replace the '#' links once she sends them
export const LINKS = {
  cv: '#',
  linkedin: '#',
  email: 'lawansonmarvelous@gmail.com',
  phone: '07019095653',
  whatsapp: 'https://wa.me/2347019095653?text=Hi%20Lawanson%2C%20I%20saw%20your%20portfolio.',
}

// Navbar links. `id` matches the section id in each component.
export const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

// To add a project (flyer, Excel dashboard, research report), add one object here.


export const WORK = [
  {
    img: valentine,
    alt: 'Valentine packages flyer with five priced gift bundles',
    title: 'Valentine packages',
    client: 'Fabulous Cakes and More',
    type: 'Promotional flyer',
    text: 'Five gift bundles, from 15K to 80K, laid out so a customer can compare them at a glance. Extras and delivery terms sit in their own notes.',
  },
  {
    img: convocationFood,
    alt: 'Convocation package flyer with small chops and jollof rice bundles',
    title: 'Convocation food packages',
    client: 'Fabulous Cakes and More',
    type: 'Promotional flyer',
    text: 'Small chops and jollof rice sold in bundles of 50. Each price block names the item, the quantity and the cake size, so an order can start from the flyer.',
  },
  {
    img: marvhiServices,
    alt: 'Marvhi Hub flyer listing academic support services',
    title: 'Academic support services',
    client: 'Marvhi Hub',
    type: 'Services flyer',
    text: 'A flyer for student support: project topics, writing, editing, data analysis and more, with a number to message.',
  },
  {
    img: convocationPrint,
    alt: 'Marvhi Hub convocation print package flyer with three priced tiers',
    title: 'Convocation print packages',
    client: 'Marvhi Hub',
    type: 'Promotional flyer',
    text: 'Three tiers of jotters, key holders and frames. Each shows what is included and the price, with a clear call to book.',
  },
]

export const SERVICES = [
  {
    id: 'design',
    main: true,
    accent: 'magenta',
    title: 'Design and branding',
    text: 'My main work. I design brands and the materials that carry them, from a single flyer to a full set of print items.',
    points: ['Flyers and promotional material', 'Brand identity', 'Print layouts for jotters, key holders and frames'],
  },
  {
    id: 'research',
    accent: 'cyan',
    title: 'Research',
    text: 'Research projects, and any work that needs research: finding the facts, analysing them and writing up what they mean.',
    points: ['Word and Excel for analysis and reports'],
  },
  {
    id: 'customer-service',
    accent: 'yellow',
    title: 'Customer service',
    text: 'Years of customer service behind me. I’m good at handling complaints and at convincing customers.',
    points: [],
  },
]

export const AWARD = 'Placed 5th in research at the University of Ilorin Industrial Summit.'

// Scrolling highlights under the hero
export const FACTS = [
  'Placed 5th in research at the University of Ilorin Industrial Summit',
  'Brand identity and print design',
  'Years of customer service experience',
  'Research for any project that needs answers',
]

// TODO: add her design tools (Canva, Photoshop, CorelDRAW...) once she confirms them
export const TOOLS = ['Microsoft Word', 'Microsoft Excel']

// TODO: replace with real client feedback when she has it
export const TESTIMONIALS = [
  { quote: 'A client’s feedback goes here. Add a short quote about the design work, the research or the customer service.', name: 'Client name', role: 'Role, company' },
  { quote: 'A second quote goes here. Two or three lines is plenty.', name: 'Client name', role: 'Role, company' },
]
