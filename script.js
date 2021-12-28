//animation reveal
window.addEventListener("scroll", () => {
  const sec2 = document.querySelector(".sec2");
  windowHeight = window.innerHeight;
  const revealPoint = sec2.getBoundingClientRect().top;

  if (revealPoint < windowHeight - 150) {
    sec2.classList.remove("hidden");
    sec2.classList.add("animate__animated");
    sec2.classList.add("animate__fadeIn");
  }
});

//remove hash after click explore button
document.getElementById("infobtn").addEventListener("click", () => {
  setTimeout(() => {
    history.replaceState("", document.title, window.location.pathname);
  }, 1);
});
