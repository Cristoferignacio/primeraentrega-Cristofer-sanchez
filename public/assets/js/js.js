const btnMenu = document.getElementById("btnMenu");
const mobilMenu = document.getElementById("mobilMenu")

btnMenu.addEventListener("click",() => {
    mobilMenu.classList.toggle("hidden");
});