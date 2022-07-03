// DISPLAY SIDEBAR ON BUTTON CLICK
function showSideBar() {
  document.querySelector(".sideBar").style.display = "block";
}
// HIDE SIDEBAR ON BUTTON CLICK
function hideSideBar() {
  document.querySelector(".sideBar").style.display = "none";
}


let sideBar = document.querySelector('.sideBar');
let winSize = window.matchMedia("(min-width: 950px)")


function defaultSideBar() {
  if(winSize.matches) { // IF WINDOW SIZE IS HIGHER THAN 950PX
    sideBar.style.display = "block"; // CHANGE DISPLAY TO BLOCK
  }
}

defaultSideBar(winSize);
winSize.addListener(defaultSideBar);