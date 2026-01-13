**CHROME EXTENSION FOR TIME TRACKING AND PRODUCTIVITY ANALYTICS**



Time Tracking & Productivity Analytics 
**📌 Project Overview**

Time Tracking & Productivity Analytics is a Chrome extension that tracks the amount of time a user spends on different websites and provides productivity analytics through a popup view and a dashboard.
Websites are categorized as productive or unproductive, and usage data is visualized for analysis.

**🎯 Objectives**

Track time spent on each website automatically

Store browsing time securely using Chrome storage

Display real-time usage in the popup

Provide an analytics dashboard with weekly usage data

Help users understand and improve productivity

**🛠️Technologies Used**

Chrome Extension (Manifest V3)

JavaScript

HTML & CSS

Chrome APIs

chrome.tabs

chrome.storage

chrome.windows


```
**📁 Project Structure**
Time_Tracking_Productivity_Project/
│
├── extension/
│   ├── manifest.json
│   ├── background.js
│   ├── popup.html
│   ├── popup.js
│   ├── dashboard.html
│   └── dashboard.js
│
└── backend/ (optional – future enhancement)
    ├── server.js
    ├── package.json
    └── models/
        └── Track.js
```


**⚙️ How It Works**


**🔹 Background Service Worker**

Tracks the active browser tab

Calculates time spent using timestamps

Saves time data into chrome.storage.local

**🔹 Popup Page**

Shows real-time website usage

Displays hours, minutes, and seconds

Categorizes websites as productive or unproductive

**🔹 Dashboard Page**

Displays aggregated website usage

Provides weekly productivity analytics

Uses a clean, colorful, and animated UI



**▶️ How to Run the Project**


**Step 1: Load the Extension**

Open Google Chrome

Go to:

chrome://extensions

Enable Developer mode

Click Load unpacked

Select the extension folder


**Step 2: Use the Extension**

Browse any website (Google, YouTube, W3Schools, etc.)

Spend some time on each site

Switch tabs (important for saving time)

Click the extension icon to view time in the popup


**Step 3: View Dashboard**


Go to chrome://extensions

Click Details on the extension

Click Extension options

Dashboard opens in a new tab showing analytics


**📊 Features**

⏱️ Automatic website time tracking

📈 Productivity analytics dashboard

🎨 Colorful and animated UI

📆 Weekly usage summary

🔒 Local data storage (privacy-friendly)



**🧪 Example Output**

**Popup View**

google.com : 0h 2m 30s (Productive)
youtube.com : 0h 1m 10s (Unproductive)


**Dashboard View**

Weekly Website Usage Analytics
- google.com : 0h 10m 25s
- youtube.com : 0h 6m 40s


**📜 License**

This project is developed for educational and internship purposes.
