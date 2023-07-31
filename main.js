const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const btnContainer = document.querySelectorAll(".theme-btn");
const btnPrimary = document.querySelector(".btn-primary");
const title = document.querySelectorAll(".fs-title");
const subtitle = document.querySelectorAll(".fs-subtitle");
const skip = document.querySelector(".skip-btn");
const body = document.querySelector("body");
const indicatorParents = document.querySelector(".controls ul");
var index = 0;

btnPrimary.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(123);
  document.querySelector(".container").style.display = "none";
  document.querySelector(".style_file").remove();
  document.querySelector(".carousel").style.animation =
    "fadeInAnimation ease 2s";
  document.querySelector(".carousel").style.animationIterationCount = "1";
  document.querySelector(".carousel").style.animationFillMode = "forwards";
});

skip.addEventListener("click", (e) => {
  e.preventDefault();
  slider.style.transform = `translate(${4 * -14.2857142857}%)`;
  document.querySelector(".controls .selected").classList.remove("selected");
  indicatorParents.children[index].classList.add("selected");
});

document.querySelector(".currentDark").style.display = "none";

document.querySelectorAll(".controls li").forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    index = i;
    document.querySelector(".controls .selected").classList.remove("selected");
    indicator.classList.add("selected");
    slider.style.transform = `translate(${index * -14.2857142857}%)`;
  });
});

skip.addEventListener("click", (e) => {
  index = 4;
  e.preventDefault();
  document.querySelector(".controls .selected").classList.remove("selected");
  indicatorParents.children[index].classList.add("selected");
  slider.style.transform = `translate(${4 * -14.2857142857}%)`;
});

leftArrow.addEventListener("click", () => {
  index = index > 0 ? index - 1 : 0;
  document.querySelector(".controls .selected").classList.remove("selected");
  indicatorParents.children[index].classList.add("selected");
  slider.style.transform = `translate(${index * -14.2857142857}%)`;
});

rightArrow.addEventListener("click", () => {
  index = index < 6 ? index + 1 : 6;
  document.querySelector(".controls .selected").classList.remove("selected");
  indicatorParents.children[index].classList.add("selected");
  slider.style.transform = `translate(${index * -14.2857142857}%)`;
});

btnContainer.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (btn.className.includes("dark-theme-btn")) {
      body.removeAttribute("class");
      body.classList.add("dark");
      for (var i = 0; i < title.length; i++) {
        var currentEl = title[i];
        currentEl.style.color = "white";
      }
      for (var i = 0; i < subtitle.length; i++) {
        var currentEl = subtitle[i];
        currentEl.style.color = "white";
      }
      document.querySelector(".light-theme-btn").style.backgroundColor = "#fff";
      document.querySelector(".currentBright").style.display = "none";
      document.querySelector(".currentDark").style.display = "block";
      document.querySelector("#main-header").style.backgroundColor = "#000";
    } else if (btn.className.includes("light-theme-btn")) {
      body.removeAttribute("class");
      body.classList.add("light");

      for (var i = 0; i < title.length; i++) {
        var currentEl = title[i];
        currentEl.style.color = "inherit";
      }
      for (var i = 0; i < subtitle.length; i++) {
        var currentEl = subtitle[i];
        currentEl.style.color = "inherit";
      }
      document.querySelector(".currentDark").style.display = "none";
      document.querySelector("#main-header").style.backgroundColor = "#333";
    }
  });
});
