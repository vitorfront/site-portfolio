function onClickScrollTo(id) {
  document.getElementById(id).scrollIntoView();
}
function onClickLink(url) {
  window.open(url);
}
const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
