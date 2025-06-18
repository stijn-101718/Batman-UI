  /* Folder */
  
  function toonVlak() {
    const box = document.getElementById("zeghoi");
    box.style.display = "block";
    box.innerHTML = '<span class="close-btn" onclick="verbergVlak()">×</span>Case File 0001_2010.02.20_01';
    box.classList.add("achtergrond");
  }

  function verbergVlak() {
    document.getElementById("zeghoi").style.display = "none";
  }

  const box = document.getElementById("zeghoi");
  let isDragging = false;
  let offsetX, offsetY;

  box.addEventListener("mousedown", function(e) {
    if (e.target.classList.contains("close-btn")) return;

    isDragging = true;
    offsetX = e.clientX - box.offsetLeft;
    offsetY = e.clientY - box.offsetTop;
    box.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", function(e) {
    if (isDragging) {
      box.style.left = (e.clientX - offsetX) + "px";
      box.style.top = (e.clientY - offsetY) + "px";
    }
  });

  document.addEventListener("mouseup", function() {
    isDragging = false;
    box.style.cursor = "grab";
  });


  /* Datum */

    function updateDate() {
      const date = new Date();
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      document.getElementById('dateDisplay').textContent = `Date: ${day}-${month}-${year}`;
    }
    updateDate();
    setInterval(updateDate, 60000);
  