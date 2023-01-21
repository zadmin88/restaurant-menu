import './style.css'
import { sweetMenu } from './sweetMenu'
import { saladMenu } from './saladMenu'

const firstLoad = (content) => {
  const navbar = document.createElement('div')
  navbar.classList.add('navbar')
  const title = document.createElement('h4')
  title.classList.add('title')
  title.textContent = `Monva`
  const span = document.createElement('span')
  span.textContent = 'cuisine'
  title.appendChild(span)

  const links = document.createElement('ul')
  links.classList.add('links')
  const about = document.createElement('li')
  about.classList.add('aboutBtn')
  about.textContent = 'About'
  const menu = document.createElement('li')
  menu.classList.add('menuBtn')
  menu.textContent = 'Menu'
  const location = document.createElement('li')
  location.classList.add('locationBtn')
  location.textContent = 'Location'

  links.appendChild(about)
  links.appendChild(menu)
  links.appendChild(location)

  navbar.appendChild(title)
  navbar.appendChild(links)

  const hero = document.createElement('div')
  hero.classList.add('hero')

  const aboutParagraph = document.createElement('p')
  aboutParagraph.classList.add('about')
  aboutParagraph.setAttribute('id', 'about')

  const textAbout = document.createElement('p')
  const followButton = document.createElement('button')
  followButton.classList.add('follow')
  followButton.textContent = 'Follow us in Instagram'

  textAbout.innerHTML = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          nesciunt voluptatibus officia distinctio odit reprehenderit, a impedit
          labore! Eos labore iusto culpa ratione voluptatum expedita consectetur
          fuga? Eius iusto itaque minus harum voluptate ipsam fuga consequatur
          modi? Rem beatae quo nulla, ab, cumque, iusto nesciunt natus atque
          labore blanditiis deleniti. Lorem ipsum dolor sit, amet consectetur
       <br>
       <br>
       <br>
          odit reprehenderit, a impedit labore! Eos labore iusto culpa ratione
          voluptatum expedita consectetur fuga? Eius iusto itaque minus harum
          voluptate ipsam fuga consequatur modi? Rem beatae quo nulla, ab,
          cumque, iusto nesciunt natus atque labore blanditiis deleniti.
          voluptate ipsam fuga consequatur modi? Rem beatae quo nulla, ab,
          cumque, iusto nesciunt natus atque labore blanditiis deleniti.`

  aboutParagraph.appendChild(textAbout)
  aboutParagraph.appendChild(followButton)

  const menuDiv = document.createElement('div')
  menuDiv.classList.add('menu')
  menuDiv.setAttribute('id', 'menu')

  const buttonsDiv = document.createElement('div')
  buttonsDiv.classList.add('buttons')
  const sweetButton = document.createElement('button')
  const saladButton = document.createElement('button')

  sweetButton.classList.add('sweet')
  sweetButton.textContent = 'Sweet'
  saladButton.classList.add('salad')
  saladButton.classList.add('selected')
  saladButton.textContent = 'Salty'
  buttonsDiv.appendChild(sweetButton)
  buttonsDiv.appendChild(saladButton)
  menuDiv.appendChild(buttonsDiv)

  const itemsDiv = document.createElement('div')
  itemsDiv.classList.add('items')

  menuDiv.appendChild(saladMenu(itemsDiv))

  const locationDiv = document.createElement('div')
  locationDiv.classList.add('location')
  locationDiv.setAttribute('id', 'location')

  const contactDiv = document.createElement('div')
  contactDiv.classList.add('contact')
  const pDir = document.createElement('p')
  const pCity = document.createElement('p')
  const pPhone = document.createElement('p')
  const pEmail = document.createElement('p')

  pDir.textContent = 'Cl bla 123 #231-4'
  pCity.textContent = 'Narnia, Numenor'
  pPhone.textContent = '3243-34-23-2'
  pEmail.classList.add('email')
  pEmail.textContent = 'info@monvacuisine.com'

  contactDiv.appendChild(pDir)
  contactDiv.appendChild(pCity)
  contactDiv.appendChild(pPhone)
  contactDiv.appendChild(pEmail)

  locationDiv.appendChild(contactDiv)

  const mapDiv = document.createElement('div')
  mapDiv.classList.add('map')

  locationDiv.appendChild(mapDiv)

  content.appendChild(navbar)
  content.appendChild(hero)
  content.appendChild(aboutParagraph)
  content.appendChild(menuDiv)
  content.appendChild(locationDiv)

  return content
}

export { firstLoad }
