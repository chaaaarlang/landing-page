const sidebar = document.querySelector(".sidebar");
const navBtn = document.querySelector(".nav-btn");
navBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});
