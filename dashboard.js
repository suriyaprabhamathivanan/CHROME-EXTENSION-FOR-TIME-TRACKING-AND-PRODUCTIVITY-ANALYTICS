document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("data");

  chrome.storage.local.get(null, data => {
    const entries = Object.entries(data).filter(
      ([key, value]) => typeof value === "number"
    );

    if (entries.length === 0) {
      container.innerHTML = "<p>No data available</p>";
      return;
    }

    container.innerHTML = "";

    entries.forEach(([site, ms]) => {
      const sec = Math.floor(ms / 1000);
      const h = Math.floor(sec / 3600);
      const m = Math.floor((sec % 3600) / 60);
      const s = sec % 60;

      const card = document.createElement("div");
      card.style.padding = "15px";
      card.style.margin = "10px 0";
      card.style.borderRadius = "10px";
      card.style.background = "#eef2ff";
      card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
      card.style.animation = "fadeIn 0.6s ease";

      card.innerHTML = `
        <strong>${site}</strong><br>
         ${h}h ${m}m ${s}s
      `;

      container.appendChild(card);
    });
  });
});
