    let fileIndex = 1;

    function nextFile() {
      fileIndex++;
      document.querySelector('.header').innerText = `Case File 000${fileIndex}_2010.02.20_01`;
    }

    function searchFiles() {
      const input = document.getElementById("searchInput").value.toLowerCase();
      const boxes = document.querySelectorAll(".file-box");
      boxes.forEach(box => {
        const alt = box.querySelector('img').alt.toLowerCase();
        box.style.display = alt.includes(input) ? "block" : "none";
      });
    }