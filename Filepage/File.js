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