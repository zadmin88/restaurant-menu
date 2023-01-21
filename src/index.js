import './style.css'
import { firstLoad } from './page-load'
import { sweetMenu } from './sweetMenu'
import { saladMenu } from './saladMenu'

const content = document.querySelector('.content')

firstLoad(content)

const sweetButton = document.querySelector('.sweet')
const saladButton = document.querySelector('.salad')
const aboutBtn = document.querySelector('.aboutBtn')
const menuBtn = document.querySelector('.menuBtn')
const locationBtn = document.querySelector('.locationBtn')
const itemsDiv = document.querySelector('.items')

sweetButton.addEventListener('click', () => {
  sweetMenu(itemsDiv)
  saladButton.classList.remove('selected')
  sweetButton.classList.add('selected')
})

saladButton.addEventListener('click', () => {
  saladMenu(itemsDiv)
  sweetButton.classList.remove('selected')
  saladButton.classList.add('selected')
})

aboutBtn.addEventListener('click', () => {
  aboutBtn.classList.add('selectedNav')
  menuBtn.classList.remove('selectedNav')
  locationBtn.classList.remove('selectedNav')
  window.location.href = '#about'
})

menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('selectedNav')
  aboutBtn.classList.remove('selectedNav')
  locationBtn.classList.remove('selectedNav')
  window.location.href = '#menu'
})
locationBtn.addEventListener('click', () => {
  locationBtn.classList.add('selectedNav')
  aboutBtn.classList.remove('selectedNav')
  menuBtn.classList.remove('selectedNav')
  window.location.href = '#location'
})
