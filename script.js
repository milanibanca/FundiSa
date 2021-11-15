const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const video = document.querySelector(button.dataset.modalTarget);
    openVideo(video);
  });
});

overlay.addEventListener("click", () => {
  const videos = document.querySelectorAll(".video.active");
  videos.forEach((video) => {
    closeVideo(video);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const video = button.closest(".video");
    closeVideo(video);
  });
});

function openVideo(video) {
  if (video == null) return;
  video.classList.add("active");
}

function closeVideo(video) {
  if (video == null) return;
  video.classList.remove("active");
}

// ON SCROLL EVENT LISTENERS
window.addEventListener("scroll", show);

function show() {
  var content = document.querySelectorAll(".container");

  for (var i = 0; i < content.length; i++) {
    var contentPosition = content[i].getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
      content[i].classList.add("active");
    } else {
      content[i].classList.remove("active");
    }
  }
}

// window.addEventListener("scroll", () => {
//   let content = document.querySelector(".blog-container");
//   let contentPosition = content.getBoundingClientRect().top;
//   let screenPosition = window.innerHeight;
//   if (contentPosition < screenPosition) {
//     content.classList.add("active");
//   } else {
//     content.classList.remove("active");
//   }
// });

function changeColor() {
  document.getElementById("link").style.backgroundColor = "#bbbbbb";
}
