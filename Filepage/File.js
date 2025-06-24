let currentText = 0;
const textBoxes = document.querySelectorAll(".text-box");

function searchFiles() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const boxes = document.querySelectorAll(".file-box");
  boxes.forEach(box => {
    const alt = box.querySelector('img').alt.toLowerCase();
    box.style.display = alt.includes(input) ? "block" : "none";
  });
}

function cycleText() {
  textBoxes[currentText].classList.remove("visible");
  textBoxes[currentText].classList.add("hidden");
  currentText = (currentText + 1) % textBoxes.length;
  textBoxes[currentText].classList.remove("hidden");
  textBoxes[currentText].classList.add("visible");
}

setInterval(cycleText, 10000);

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".file-box img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt || "No description available.";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
document.body.classList.add("modal-open");
document.body.classList.remove("modal-open");
