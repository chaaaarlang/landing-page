// mobile nav toggle
const sidebar = document.querySelector(".sidebar");
const navBtn = document.querySelector(".nav-btn");
navBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

// card
window.addEventListener("DOMContentLoaded", function () {
  showCards(cards);
});
function showCards(cards) {
  let showCard = cards.map(function (item) {
    console.log(item);
    return `<div class="card">
          <img src="${item.img}" alt="" />
          <div class="card-position">
            <h1>${item.title}</h1>
            <p>
             ${item.info}
            </p>
            <button type="button" class="button">buy now</button>
          </div>
        </div>`;
  });
  showCard = showCard.join("");
}
