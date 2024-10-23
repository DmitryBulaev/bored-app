const actionBtnNode = document.getElementById("actionBtn");
const searchTextNode = document.getElementById("searchText");

actionBtnNode.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((res) => {
      searchTextNode.innerHTML = `${res.slip.advice}`;
      document.body.classList.add("body-response");
    });
});
