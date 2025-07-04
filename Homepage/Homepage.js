  /* Folder open met tekst */
  function toonVlak() {
    const box = document.getElementById("zeghoi");
    box.style.display = "block";
    box.innerHTML = `
      <span class="close-btn" onclick="verbergVlak()">×</span>
      <div id="extraText" style="color: #D32F2F;">
      <h3>incident_log_2306.txt</h3>
      <p>      [LOG ID: 2306-GCE] <br>
      Date: 18-06-2025 <br>
Location: Gotham City - East End <br>
Time: 22:17:45<p>
      </div>


      <div id="extraText2" style="color: #D32F2F;">
      <p>Summary: <br>
      Unregistered activity detected near ACE Chemicals. <br>
      Thermal signatures indicate 3+ individuals. <br>
      Facial match (63%) - possible ID: HARLEY QUINN <br>





      </p>
    `;
    box.classList.add("achtergrond");
  }

  function verbergVlak() {
    document.getElementById("zeghoi").style.display = "none";
  }

  const box = document.getElementById("zeghoi");
  let isDragging = false;
  let offsetX, offsetY;

   /* zorgt ervoor dat wanneer je op kruis hangt met muis beweeg je niet */

  box.addEventListener("mousedown", function(e) {
    if (e.target.classList.contains("close-btn")) return;

      /* zorgt ervoor dat je het kan bewegen en dat wanneer je hem pakt je andere cursor krijgt */

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


  
      /* maakt curser weer normaal */

  document.addEventListener("mouseup", function() {
    isDragging = false;
    box.style.cursor = "grab";
  });


  /* Datum en Tijd */

  function updateDateTime() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const dateDisplay = document.getElementById('dateDisplay');
    dateDisplay.innerHTML = `Date: ${day}-${month}-${year}<br>Time: ${hours}:${minutes}:${seconds}`;
  }
  updateDateTime();
  setInterval(updateDateTime, 1000);
  



  /* Verwijderd startscherm en laat home page zien */
  setTimeout(() => {
    document.getElementById("boot-screen").style.transition = "opacity 2s ease";
    document.getElementById("boot-screen").style.opacity = 0;

    setTimeout(() => {
      document.getElementById("boot-screen").style.display = "none";
  /* zet scrollen weer aan als pagina weer normaal is */
      document.body.style.overflow = "auto";
    }, 2000);
  }, 6000);