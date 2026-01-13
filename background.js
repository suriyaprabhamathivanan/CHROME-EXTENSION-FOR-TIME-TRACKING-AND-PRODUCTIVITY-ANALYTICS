let activeTabUrl = null;
let startTime = null;

console.log("Background service worker loaded");

// Save time safely
function saveTime() {
  if (!activeTabUrl || !startTime) return;

  const spent = Date.now() - startTime;

  chrome.storage.local.get([activeTabUrl], data => {
    const prev = data[activeTabUrl] || 0;
    chrome.storage.local.set({
      [activeTabUrl]: prev + spent
    });
  });
}

// Start tracking a tab
function startTracking(tab) {
  if (!tab || !tab.url) return;
  if (tab.url.startsWith("chrome")) return;

  try {
    activeTabUrl = new URL(tab.url).hostname;
    startTime = Date.now();
    console.log("Tracking:", activeTabUrl);
  } catch (e) {
    console.warn("Invalid URL, skipped");
  }
}

// When tab is activated
chrome.tabs.onActivated.addListener(info => {
  saveTime();

  chrome.tabs.get(info.tabId, tab => {
    if (chrome.runtime.lastError) {
      console.warn("Tab not found, skipping");
      return;
    }
    startTracking(tab);
  });
});

// When URL changes
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    saveTime();
    startTracking(tab);
  }
});

// When window focus changes
chrome.windows.onFocusChanged.addListener(windowId => {
  saveTime();

  if (windowId === chrome.windows.WINDOW_ID_NONE) return;

  chrome.tabs.query({ active: true, windowId }, tabs => {
    if (tabs.length > 0) startTracking(tabs[0]);
  });
});
