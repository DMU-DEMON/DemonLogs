// Entry animation
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  body.classList.add("transition", "duration-700", "ease-in-out", "opacity-0");
  setTimeout(() => body.classList.remove("opacity-0"), 50);
});
