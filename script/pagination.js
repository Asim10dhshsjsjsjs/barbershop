const items = new Array();
for (let i = 0; i < 24; i++) {
  items.push(i);
}
const itemsPerPage = 6;
let currentPage = 1;

function displayItems(page) {
  const cards = document.querySelector(".cards");
  cards.innerHTML = "";
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedItems = items.slice(startIndex, endIndex);
  console.log(slicedItems);
  slicedItems.forEach(() => {
    const card = document.createElement("div");
    card.className = "card";

    const cardContent = document.createElement("div");
    cardContent.className = "card-content";

    const cardPriceBlock = document.createElement("div");
    cardPriceBlock.className = "card__price-block";

    const cardPriceText = document.createElement("span");
    cardPriceText.className = "card__price-text";
    cardPriceText.textContent = "2 900 ₽";
    cardPriceBlock.appendChild(cardPriceText);

    const cardButton = document.createElement("button");
    cardButton.className = "card__button";
    cardButton.textContent = "КУПИТЬ";
    cardPriceBlock.appendChild(cardButton);

    const cardText = document.createElement("p");
    cardText.className = "card__text";
    cardText.textContent = "Набор для путешествий «Baxter of California»";
    cardContent.appendChild(cardText);
    cardContent.appendChild(cardPriceBlock);

    const cardImg = document.createElement("img");
    cardImg.className = "card__text";
    cardImg.src = "/images/carts/img1.svg";
    card.appendChild(cardImg);
    card.appendChild(cardContent);

    cards.appendChild(card);
  });
}

function setupPagination() {
  const pagination = document.querySelector(".pagination");
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const prevButton = document.getElementById("pagination_prev-button");
  const nextButton = document.getElementById("pagination_next-button");
  updatePagination();
  prevButton.addEventListener("click", (event) => {
    event.preventDefault();
    currentPage--;
    displayItems(currentPage);
    //поменять
    updatePagination();
  });
  nextButton.addEventListener("click", (event) => {
    event.preventDefault();
    currentPage++;
    displayItems(currentPage);
    //поменять
    updatePagination();
  });
  for (let i = 0; i < pageCount; i++) {
    const li = document.createElement("li");
    const button = document.createElement("button")
    button.className = "pagination__button"
    button.textContent = i+1;
    if (i === currentPage){
      button.classList.add("pagination__button_active")
      
    }
    button.addEventListener("click", (event) => {
      event.preventDefault()
      currentPage = i+1
      displayItems(currentPage)
      updatePagination()
    })
    li.appendChild(button)
    pagination.appendChild(li)
  }

}

function updatePagination() {
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const pagination = document.querySelector(".pagination");
  const prevButton = document.getElementById("pagination_prev-button");
  const nextButton = document.getElementById("pagination_next-button");
  prevButton.classList.toggle("pagination__button_inactive", currentPage === 1);
  nextButton.classList.toggle(
    "pagination__button_inactive",
    pageCount === currentPage
  );
  console.log(currentPage);
}

setupPagination();
displayItems(currentPage);
