let profileMenu = document.getElementById("profileMenu");

function toggleMenu() {
    profileMenu.classList.toggle("open-menu");
}

let sideActivitiy = document.getElementById("sideActivitiy");
let moreLink = document.getElementById("showMoreLink");

function toggleActivity() {
    sideActivitiy.classList.contains("open-activity");


    if (sideActivitiy.classList.toggle(open-activity)){
    moreLink.innerHTML = "Daha az <b>-</b>";
    } else {
    moreLink.innerHTML = "Daha az <b>+</b>";
    }
}