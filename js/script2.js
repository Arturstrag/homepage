console.log("Dzień dobry!");

let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName")
let link = document.querySelector(".link");
let link2 = document.querySelector(".link2");
let link3 = document.querySelector(".link3");
let t1 = document.querySelector(".t1");
let t2 = document.querySelector(".t2");
let t3 = document.querySelector(".t3");
let t4 = document.querySelector(".t4");
let t5 = document.querySelector(".t5");
let t6 = document.querySelector(".t6");
let t7 = document.querySelector(".t7");
let t8 = document.querySelector(".t8");


button1.addEventListener("click", () => {
    img = document.querySelector(".img");
    img.remove();

});


button2.addEventListener("click", () => {
    body.classList.toggle("black");

    themeName.innerText = body.classList.contains("black") ? "jasny" : "ciemny";
});


button2.addEventListener("click", () => {
    button1.classList.toggle("black1");
})

button2.addEventListener("click", () => {
    link.classList.toggle("black1");
});

button2.addEventListener("click", () => {
    link2.classList.toggle("black1");
});

button2.addEventListener("click", () => {
    link3.classList.toggle("black1");
});

button2.addEventListener("click", () => {
    button2.classList.toggle("black2");
});

button2.addEventListener("click", () => {
    t1.classList.toggle("black2");
});

button2.addEventListener("click", () => {
    t2.classList.toggle("black2");
});

button2.addEventListener("click", () => {
    t3.classList.toggle("black2");
});


button2.addEventListener("click", () => {
    t4.classList.toggle("black2");
});

button2.addEventListener("click", () => {
    t5.classList.toggle("black2");
});

button2.addEventListener("click", () => {
    t6.classList.toggle("black2");
});

button2.addEventListener("click", () => {
    t7.classList.toggle("black2");
});

button2.addEventListener("click", () => {
    t8.classList.toggle("black2");
});










