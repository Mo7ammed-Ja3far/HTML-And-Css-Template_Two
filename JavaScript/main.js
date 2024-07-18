let curr = localStorage.getItem("background") || 1;
let i = document.querySelectorAll(".landing i");
let landing = document.querySelector("#home");
let bullets = document.querySelectorAll(".bullets ul li");
let imgplace = document.querySelectorAll(".box img");
let links = document.querySelectorAll(".links ul li");
let imgs = ["Media/cover1.jpg", "Media/cover0.webp", "Media/cover2.jpg"];
changeBG();
i.forEach((e, i) => {
  e.addEventListener("click", () => {
    if (i == 0 && curr > 0) {
      curr--;
    } else if (i == 1 && curr < 2) {
      curr++;
    }
    changeBG();
  });
});
bullets.forEach((bullet, i) => {
  bullet.addEventListener("click", () => {
    bullet.classList = "active";
    curr = i;
    changeBG();
  });
});

function changeBG() {
  changebull();
  landing.style.backgroundImage = `url(${imgs[curr]})`;
  localStorage.setItem("background", curr);
}
function changeOp(op) {
  links.forEach((e) => (e.className = ""));
  links[op].className = "active";
  localStorage.setItem("option", op);
}
function changebull() {
  bullets.forEach((bullet, i) => {
    bullet.classList = "";
    bullets[curr].className = "active";
  });
}
links.forEach((ele, i) => {
  ele.addEventListener("click", (e) => {
    changeOp(i);

    imgplace.forEach((img, i) => {
      i = i + 1;
      img.src = `./Media/${ele.innerHTML.toLowerCase()}/1 (${i}).jpg`;
    });
  });
});
if (localStorage.getItem("option"))
  links[localStorage.getItem("option")].click();
console.log(links);
