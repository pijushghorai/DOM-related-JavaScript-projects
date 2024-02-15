const baseURL = "https://source.unsplash.com/all/300x300";

// this url gives an image. Use this and NO API calls

const img = document.querySelector(".content");
const imgBtn = document.querySelector("#new-img");
console.log(img);

imgBtn.addEventListener("click", () => {
  img.innerHTML = `<img src="${baseURL}*${Math.floor(Math.random() * 1000)}" alt="New Img">`;
});
