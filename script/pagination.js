const items = new Array()
for (let i = 0; i < 24; i++) {
  items.push(i);
}
const itemsPerPage = 6;
let currentPage = 1;


function displayItems(page){
  const cards = document.querySelector(".cards")
  cards.innerHTML = ""
  const startIndex = (page-1)* itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedItems = items.slice(startIndex,endIndex)
  console.log(slicedItems)
  slicedItems.forEach(() => {
    const card = document.createElement("div")
    card.className = "card"

    const cardContent = document.createElement("div")
    cardContent.className = "card-content"

    const cardPriceBlock = document.createElement("div")
    cardPriceBlock.className = "card__price-block"

    const cardPriceText = document.createElement("span")
    cardPriceText.className = "card__price-text"
    cardPriceText.textContent = "2 900 ₽"
    cardPriceBlock.appendChild(cardPriceText)

    const cardButton = document.createElement("button")
    cardButton.className = "card__button"
    cardButton.textContent = "КУПИТЬ"
    cardPriceBlock.appendChild(cardButton)
    
    const cardText = document.createElement("p")
    cardText.className = "card__text"
    cardText.textContent = "Набор для путешествий «Baxter of California»"
    cardContent.appendChild(cardText)
    cardContent.appendChild(cardPriceBlock)

    const cardImg = document.createElement("img")
    cardImg.className = "card__text"
    cardImg.src = "/images/carts/img1.svg"
    card.appendChild(cardImg)
    card.appendChild(cardContent)

    cards.appendChild(card)


  })
}

function setupPagination(){
  const pagination = document.querySelector(".pagination")
}


displayItems(currentPage)

