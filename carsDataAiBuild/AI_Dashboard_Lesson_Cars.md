# AI-Powered Data Dashboard: 2026 Fuel Economy

## What You're Building

You're going to use **Google Gemini** (gemini.google.com) to build an interactive web dashboard that visualizes real 2026 vehicle fuel economy data. You'll write prompts — not code — and Gemini will generate the HTML, CSS, and JavaScript for you. Your job is to guide the AI, understand what it gives you, and make it better through iteration.

By the end of this lesson, you'll have a working, shareable webpage that lets users explore 652 real vehicles from the 2026 model year.

---

## The Dataset: `cars2026.json`

This is real EPA fuel economy data for 2026 model year vehicles. The file contains **652 vehicles** from 38 manufacturers. The data has been simplified from the original EPA dataset to focus on the most useful variables.

### Data Dictionary

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| `Make` | Text | Manufacturer name | Toyota, Ford, BMW |
| `Model` | Text | Specific vehicle model | Camry, F-150, X5 |
| `Class` | Text | EPA vehicle classification | Compact Cars, Standard SUV 4WD, Two Seaters |
| `Engine_L` | Number | Engine size in liters | 2.0, 3.5, 5.2 |
| `Cylinders` | Number | Number of engine cylinders | 3, 4, 6, 8, 12 |
| `Drive` | Text | Drivetrain type | Front-Wheel, Rear-Wheel, All-Wheel, Four-Wheel |
| `City_MPG` | Number | Miles per gallon in city driving | 23 |
| `Hwy_MPG` | Number | Miles per gallon on the highway | 31 |
| `Combined_MPG` | Number | Weighted average of city and highway | 26 |
| `Annual_Fuel_Cost` | Number | Estimated yearly fuel cost in dollars | 2,100 |
| `CO2_grams_per_mi` | Number | Carbon dioxide emissions per mile driven | 338 |

### Vehicle Classes in the Data

Compact Cars, Large Cars, Midsize Cars, Minicompact Cars, Small SUV (2WD & 4WD), Standard SUV (2WD & 4WD), Standard Pick-up Trucks (2WD & 4WD), Subcompact Cars, Two Seaters, Station Wagons, Special Purpose Vehicles

### Quick Stats to Know

- **652 vehicles** from **38 manufacturers**
- MPG ranges from ~12 (big trucks/sports cars) to ~50+ (hybrids)
- Annual fuel costs range from roughly $1,000 to $4,500
- Cylinder counts: 3, 4, 5, 6, 8, and 12

---

## Setup (5 minutes)

1. Open **Google Gemini** at [gemini.google.com](https://gemini.google.com)
2. Download the data file from Google Classroom - in the assignment with this md file, and it's called: `cars2026.json`.
3. Open VS Code — work in your htmlCssJavaScritpt folder(s) and create a subfolder to house this work.  This is where you'll paste the code Gemini generates.

### Folder Setup

Your project folder should look like this **before you start prompting**:

```
your-project-folder/
├── cars2026.json      ← the data file (download from Classroom)
└── index.html         ← you'll create this with Gemini's code
```

**Both files must be in the same folder.** The HTML file will load the JSON file using JavaScript's `fetch()` function, which means they need to be next to each other.

### Important: You Must Use Live Server

Because the dashboard loads data from a separate file, you **cannot** just double-click `index.html` to open it. Your browser will block it for security reasons. You need to use **Live Server** in VS Code:

1. Open your project folder in VS Code
2. Right-click on `index.html`
3. Select **"Open with Live Server"**
4. Your dashboard will open in the browser and the data will load

If you don't have the Live Server extension, install it from the Extensions tab in VS Code (search "Live Server" by Ritwick Dey).

---

## Part 1: Your First Dashboard (The Warm-Up)

Copy and paste the prompt below into Gemini. You can use it exactly as-is:

---

**PROMPT 1 — Copy this entire block and paste it into Gemini:**

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

---

### After Gemini gives you code:

**Step 1:** Copy all of Gemini's code.

**Step 2:** In VS Code, create a new file called `dashboard_v1.html` inside your project folder (the same folder where `cars2026.json` already is).

**Step 3:** Paste the code into `dashboard_v1.html` and save it.

**Step 4:** Right-click `dashboard_v1.html` in VS Code and choose **"Open with Live Server"**.

### Version Naming — Read This Now

Every time Gemini gives you a new or updated version of your code, **save it as a new file** instead of overwriting your old one. Use this naming format:

```
your-project-folder/
├── cars2026.json
├── dashboard_v1.html    ← Part 1 basic dashboard
├── dashboard_v2.html    ← after adding your first Part 2 feature
├── dashboard_v3.html    ← after adding your second Part 2 feature
├── dashboard_v4.html    ← Part 3 creative additions
└── ...
```

**Why?** If a new version breaks something, you can always go back to the last one that worked. You'll also turn in your best two versions at the end, so you'll want to have them saved separately.

### If it doesn't work (this is normal):

You should see a status message right on the page itself — the prompt above told Gemini to build that in. Here's how to troubleshoot based on what you see:

| What you see on the page | What it means | What to do |
|--------------------------|---------------|------------|
| "Loading data..." and it stays there forever | The fetch is failing silently | Make sure `cars2026.json` is in the **same folder** as `index.html`. Make sure you're using **Live Server**, not just opening the file. |
| A red error message about loading the file | The JSON file can't be found or is broken | Check the filename is exactly `cars2026.json` (capitalization matters). Re-download it from Classroom if needed. |
| The page loads but the chart is missing or the table is empty | The code has a bug but the data loaded fine | Describe what you see to Gemini (see prompt below). |
| Completely blank white page | The code has a serious error | Paste the entire code back to Gemini and tell it the page is blank (see prompt below). |

**PROMPT — Error Fix (copy and modify as needed):**

> The dashboard code you gave me isn't working correctly. Here's what I see on the page:
>
> [DESCRIBE WHAT YOU SEE — for example: "The page is completely blank," or "It says Loading data and never finishes," or "The stat cards show NaN," or "The chart shows up but the table is empty"]
>
> The HTML file and cars2026.json are in the same folder and I'm running it through Live Server in VS Code. The on-screen status message says: [WHAT THE STATUS MESSAGE SAYS, if anything]. Please fix the code. Keep the visible status/error area at the top of the page.

Keep going back and forth until it works. This debugging loop is one of the most important skills you're building.

---

## Part 2: Make It Interactive (The Challenge)

Now that you have a basic working dashboard, you're going to prompt Gemini to add interactive features. Pick **at least two** from the list below.

For each feature, copy the corresponding prompt, paste it into your **same Gemini conversation** (don't start a new one — Gemini remembers your previous code).

**Important:** Save each new version as a new file — `dashboard_v2.html`, `dashboard_v3.html`, etc. Right-click the new file and open it with Live Server to test. If something broke, describe what you see on screen to Gemini and ask it to fix it — same process as Part 1.

---

**OPTION A — Filter by Manufacturer:**

> Update my dashboard HTML file to add a dropdown menu above the chart. The dropdown should be populated with all unique values from the "Make" column in the data, sorted alphabetically. Add an "All Makes" option at the top as the default. When the user selects a manufacturer, the chart and the table should both update to only show that manufacturer's vehicles. When "All Makes" is selected, show everything again. Keep the on-screen status/error message area. Keep using fetch('cars2026.json') to load the data.

**OPTION B — Filter by Drive Type:**

> Update my dashboard to add a row of clickable buttons above the chart — one button for each unique value in the "Drive" column, plus an "All" button. When the user clicks a button, the chart and table should filter to show only vehicles with that drive type. Highlight the active button so the user knows which filter is selected. Keep the on-screen status/error message area. Keep using fetch('cars2026.json') to load the data.

**OPTION C — MPG Range Slider:**

> Add a range slider to my dashboard that lets the user filter vehicles by Combined_MPG. Show the current min and max values next to the slider. The chart and table should update in real time as the user drags the slider. Default to showing the full range. Keep the on-screen status/error message area. Keep using fetch('cars2026.json') to load the data.

**OPTION D — Scatter Plot:**

> Add a second chart to my dashboard — a scatter plot using Chart.js. The x-axis should be Engine_L (engine size) and the y-axis should be Combined_MPG. Each dot represents one vehicle. Color the dots by vehicle Class. Add a legend so the user can see which color is which class. Put this chart below the existing bar chart. Keep the on-screen status/error message area. Keep using fetch('cars2026.json') to load the data.

**OPTION E — Cost Calculator:**

> Add a section to my dashboard where the user can type in how many miles they drive per year. When they enter a number, show a new column in the table called "Your Estimated Cost" that calculates (miles / Combined_MPG) * current gas price. Use $3.50 as the default gas price but let the user change it. Sort the table by this new column so the cheapest vehicles to operate are at the top. Keep the on-screen status/error message area. Keep using fetch('cars2026.json') to load the data.

**OPTION F — Vehicle Comparison:**

> Add a comparison feature to my dashboard. Let the user click on any two rows in the table to select them (highlight selected rows). When two vehicles are selected, show a side-by-side comparison card above the table with both vehicles' stats displayed next to each other: Make, Model, Combined_MPG, Annual_Fuel_Cost, Engine_L, Cylinders, and CO2_grams_per_mi. Include a "Clear Selection" button. Keep the on-screen status/error message area. Keep using fetch('cars2026.json') to load the data.

---

After adding each feature, save the file, check Live Server, and fix any errors using the same error-fix process from Part 1.

---

## Part 3: Make It Yours (The Stretch)

This is where you get creative. Think about what would make this dashboard actually useful or interesting to someone. Write your own prompts to Gemini — here are some directions you could go:

- **"Best Bang for Your Buck" view** — sort or highlight vehicles with the best MPG-to-engine-size ratio
- **Environmental impact section** — visualize CO2 emissions by class or manufacturer
- **Truck vs. Car comparison** — split the data and show side-by-side stats
- **Search functionality** — let users type a model name and jump to it
- **A completely different layout** — ask Gemini to redesign it as a card-based layout, a magazine style, or something else entirely

The goal is to go through **at least 3-4 total rounds of prompting** (including Part 2) where you ask Gemini to add or change something, evaluate what it gives you, and refine.

**Remember:** when writing your own prompts, be specific. Tell Gemini exactly which column names to use, where on the page you want things, and what should happen when the user interacts with it. Refer back to the Data Dictionary at the top if you need column names.

---

## What to Turn In

1. Your **best two** `dashboard_vX.html` files (just the HTML — do NOT include the `cars2026.json` file). Turn them in via Google Classroom. For example, if you made it to v5 and your best versions were v3 and v5, turn in `dashboard_v3.html` and `dashboard_v5.html`.
2. A short paragraph in a Google Doc that you'll also share with me via Google Classroom.  This will be 3-5 sentences answering: **What did you learn about prompting AI effectively?** What worked? What didn't? What might you do differently next time?

---

## Grading

| Criteria | Points |
|----------|--------|
| Dashboard loads and displays data correctly | 10 |
| At least 2 interactive features from Part 2 | 10 |
| Google Doc sharing your comments as described in "What to Turn In" | 5 |
| **Total** | **15** |
