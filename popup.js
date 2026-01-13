document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(null, data => {
    const list = document.getElementById("list");
    list.innerHTML = "";

    if (Object.keys(data).length === 0) {
      list.innerHTML = "<li>No data yet</li>";
      return;
    }

    for (let key in data) {
      const [site] = key.split("_");
      const sec = Math.floor(data[key] / 1000);

      const h = Math.floor(sec / 3600);
      const m = Math.floor((sec % 3600) / 60);
      const s = sec % 60;

      const type = site.includes("youtube") || site.includes("facebook")
        ? "Unproductive"
        : "Productive";

      const li = document.createElement("li");
      li.textContent = `${site} : ${h}h ${m}m ${s}s (${type})`;
      list.appendChild(li);
    }
  });
});
