# AI-Powered Data Dashboard: 2026 Fuel Economy

## What You're Building

You'll use **Google Gemini** (gemini.google.com) to build an interactive web dashboard that visualizes real 2026 vehicle fuel economy data. You write prompts — Gemini writes the code. Your job is to guide it, test what it gives you, and improve it through iteration.

---

## Setup (5 minutes)

1. Open **Google Gemini** at [gemini.google.com](https://gemini.google.com)
2. Download `cars2026.json` from Google Classroom.
3. In VS Code, create a subfolder in your htmlCssJavaScript folder for this project. Put `cars2026.json` in it.

**Both your HTML files and `cars2026.json` must be in the same folder.** You must use **Live Server** to open your HTML files (right-click → "Open with Live Server") — double-clicking won't work because the browser blocks local file loading.

### Column Names in the Data

`Make`, `Model`, `Class`, `Engine_L`, `Cylinders`, `Drive`, `City_MPG`, `Hwy_MPG`, `Combined_MPG`, `Annual_Fuel_Cost`, `CO2_grams_per_mi`

The file has **652 vehicles** from 38 manufacturers.

---

## Part 1: Your First Dashboard (~20 minutes)

Copy this entire prompt and paste it into Gemini:

> I have a JSON data file called `cars2026.json` that sits in the same folder as my HTML file. It contains an array of 652 vehicle objects. Each object has these properties: Make, Model, Class, Engine_L, Cylinders, Drive, City_MPG, Hwy_MPG, Combined_MPG, Annual_Fuel_Cost, and CO2_grams_per_mi.
>
> Create a single HTML file (with all CSS and JavaScript included in the same file) that does the following:
>
> 1. Uses `fetch('cars2026.json')` to load the data from the separate JSON file — do NOT embed the data in the HTML. The fetch should run when the page loads.
> 2. Displays a summary bar at the top with 3 stat cards: Total Vehicles, Average Combined MPG, and Average Annual Fuel Cost.
> 3. Shows a bar chart (using Chart.js from CDN) of average Combined_MPG grouped by vehicle Class.
> 4. Shows a data table below the chart listing all vehicles with columns for: Make, Model, Class, Engine_L, Cylinders, Drive, Combined_MPG, and Annual_Fuel_Cost. Make the table sortable by clicking on column headers.
>
> Use a clean, modern dark theme. Add a visible error/status area at the top of the page that displays messages to the user — for example, "Loading data..." while the fetch is running, "Data loaded successfully! Found X vehicles." when it works, or a clear red error message if the fetch fails (like "Error: Could not load cars2026.json. Make sure the file is in the same folder and you are using Live Server."). This on-screen status area is important because students may not have access to browser developer tools.

**After Gemini gives you code:** paste it into a new file called `dashboard_v1.html` in your project folder, save it, and open it with Live Server.

**Save every version as a new file** — `dashboard_v1.html`, `dashboard_v2.html`, etc. If a new version breaks, you can always go back.

### If it doesn't work

Tell Gemini what you see. Use a prompt like:

> The dashboard code you gave me isn't working correctly. Here's what I see on the page: [DESCRIBE WHAT YOU SEE]. The HTML file and cars2026.json are in the same folder and I'm running it through Live Server. Please fix the code.

Keep going back and forth until it works — **this debugging loop is one of the most important skills you're building.**

---

## Part 2: Make It Interactive (~30 minutes)

Pick **at least two** features from the list below. For each one, copy the prompt into your **same Gemini conversation** (don't start a new one). Save each new version as a new file.

**A — Filter by Manufacturer:**

> Update my dashboard to add a dropdown populated with all unique "Make" values, sorted alphabetically, with "All Makes" as the default. When the user selects a manufacturer, the chart and table should both filter to only that manufacturer's vehicles. Keep the on-screen status area and keep using fetch('cars2026.json').

**B — Filter by Drive Type:**

> Update my dashboard to add clickable buttons for each unique "Drive" value plus an "All" button. Clicking a button filters the chart and table. Highlight the active button. Keep the status area and fetch.

**C — MPG Range Slider:**

> Add a range slider that filters vehicles by Combined_MPG. Show current min/max values. Chart and table update in real time as the user drags. Keep the status area and fetch.

**D — Scatter Plot:**

> Add a scatter plot (Chart.js) below the bar chart. X-axis: Engine_L, Y-axis: Combined_MPG. Color dots by vehicle Class with a legend. Keep the status area and fetch.

**E — Cost Calculator:**

> Add a section where the user enters miles driven per year. Show a "Your Estimated Cost" column calculated as (miles / Combined_MPG) × gas price. Default gas price $3.50 but let the user change it. Sort by this column. Keep the status area and fetch.

**F — Vehicle Comparison:**

> Let the user click two table rows to select them (highlight selected rows). Show a side-by-side comparison card with both vehicles' stats. Include a "Clear Selection" button. Keep the status area and fetch.

Use the same error-fix process from Part 1 if anything breaks.

---

## What to Turn In

1. Your **best two** `dashboard_vX.html` files via Google Classroom (just the HTML — don't include `cars2026.json`).
2. A short paragraph (3-5 sentences) in a Google Doc shared via Classroom: **What did you learn about prompting AI effectively?** What worked? What didn't?

## Grading

| Criteria | Points |
|----------|--------|
| Dashboard loads and displays data correctly | 10 |
| At least 2 interactive features from Part 2 | 10 |
| Google Doc reflection | 5 |
| **Total** | **25** |
