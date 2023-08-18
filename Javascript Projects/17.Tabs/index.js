const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");

for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener("click", function (e) {
    const currentTab = document.querySelectorAll(".active");
    currentTab[0].className = currentTab[0].className.replace(" active", "");
    e.target.className += " active";

    // switch tab contents
    tabContents.forEach((t) => {
      const filter = e.target.dataset.filter;
      if (t.classList.contains(filter)) {
        t.style.display = "block";
      } else {
        t.style.display = "none";
      }
    });
  });
}
