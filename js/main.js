function sideNav(elem) {
    // Clear any currently open menu
    var openMenu = document.getElementById("sideNav");
    if (openMenu) {
      openMenu.removeAttribute("id");
      // Stop if we're just closing the current menu
      if (openMenu === elem) {
        return;
      }
    }
}