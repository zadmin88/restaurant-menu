const sweetMenu = (menuDiv) => {
  menuDiv.innerHTML = ''
  const item_1 = document.createElement('div')
  item_1.classList.add('item')
  const item_2 = document.createElement('div')
  item_2.classList.add('item')
  const item_3 = document.createElement('div')
  item_3.classList.add('item')
  const item_4 = document.createElement('div')
  item_4.classList.add('item')

  const h6_1 = document.createElement('h6')
  h6_1.textContent = 'Pancakes with Warm Maple Butter'

  const pDescription_1 = document.createElement('p')
  pDescription_1.textContent = `bacon, cherry tomatoes, goat cheese, basil, chili flakes, sunny
              side egg`

  const pPrice_1 = document.createElement('p')
  pPrice_1.textContent = `$ 22`

  const h6_2 = document.createElement('h6')
  h6_2.textContent = 'Brioche French Toast'

  const pDescription_2 = document.createElement('p')
  pDescription_2.textContent = `Two Free-range Poached Eggs, Hollandaise, English Muffin, with
              Roasted Potatoes`

  const pPrice_2 = document.createElement('p')
  pPrice_2.textContent = `$ 18`

  const h6_3 = document.createElement('h6')
  h6_3.textContent = 'Waffle Blueberry'

  const pDescription_3 = document.createElement('p')
  pDescription_3.textContent = `scrambled eggs, mushrooms, jalapeño, chipotle tomatillo salsa,
              pepper jack`

  const pPrice_3 = document.createElement('p')
  pPrice_3.textContent = `$ 15`

  const h6_4 = document.createElement('h6')
  h6_4.textContent = 'Oatmea'

  const pDescription_4 = document.createElement('p')
  pDescription_4.textContent = ` Fresh house-made topped with cinnamon and syrup add toppings bla bla bal`

  const pPrice_4 = document.createElement('p')
  pPrice_4.textContent = `$ 22`

  //   const h6_1 = document.createElement('h6')
  //   h6_1.textContent = 'Pancakes with Warm Maple Butter'

  //   const pDescription_1 = document.createElement('p')
  //   pDescription_1.textContent = `wild maine blueberry, banana walnut, or chocolate chunk`

  //   const pPrice_1 = document.createElement('p')
  //   pPrice_1.textContent = `$ 17`

  //   const h6_2 = document.createElement('h6')
  //   h6_2.textContent = 'Brioche French Toast'

  //   const pDescription_2 = document.createElement('p')
  //   pDescription_2.textContent = `caramelized bananas, roasted pecans, with warm maple butter`

  //   const pPrice_2 = document.createElement('p')
  //   pPrice_2.textContent = `$ 18`

  //   const h6_3 = document.createElement('h6')
  //   h6_3.textContent = 'Waffle Blueberry'
  //   const pDescription_3 = document.createElement('p')
  //   pDescription_3.textContent = `greek yogurt, pecan butter, and maple syrup`
  //   const pPrice_3 = document.createElement('p')
  //   pPrice_3.textContent = `$ 15`
  //   const h6_4 = document.createElement('h6')
  //   h6_4.textContent = 'Oatmeal'
  //   const pDescription_4 = document.createElement('p')
  //   pDescription_4.textContent = `Fresh house-made topped with cinnamon and syrup add toppings
  //   bananas, blueberries, candied pecans, golden raisins
  //   strawberries, toasted almonds, wildflower`
  //   const pPrice_4 = document.createElement('p')
  //   pPrice_4.textContent = `$ 22`

  item_1.appendChild(h6_1)
  item_1.appendChild(pDescription_1)
  item_1.appendChild(pPrice_1)
  item_2.appendChild(h6_2)
  item_2.appendChild(pDescription_2)
  item_2.appendChild(pPrice_2)
  item_3.appendChild(h6_3)
  item_3.appendChild(pDescription_3)
  item_3.appendChild(pPrice_3)
  item_4.appendChild(h6_4)
  item_4.appendChild(pDescription_4)
  item_4.appendChild(pPrice_4)
  menuDiv.appendChild(item_1)
  menuDiv.appendChild(item_2)
  menuDiv.appendChild(item_3)
  menuDiv.appendChild(item_4)
  return menuDiv
}

export { sweetMenu }
