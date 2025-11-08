# Google Form Planning Guide
## For "Forms & Data Collection" Lesson

---

## Pre-Lesson Setup (15-20 minutes before class)

### Option 1: Build the Form Ahead of Time (RECOMMENDED)

**Why build ahead:**
- Saves time during observation
- Ensures everything works
- Less chance of technical issues
- You can still demo the planning process

**Steps:**
1. Go to [forms.google.com](https://forms.google.com)
2. Create "New Form"
3. Title: "Student Lunch Preferences Survey"
4. Description: "Help us understand your dining habits!"

**Create these questions:**

#### Question 1: Favorite Restaurant
- Type: **Multiple choice** (dropdown)
- Question: "What's your favorite fast-food restaurant?"
- Options:
  - McDonald's
  - Chipotle
  - Subway
  - Wendy's
  - Taco Bell
  - Panera Bread
  - Other
- Make **Required**

#### Question 2: Frequency
- Type: **Multiple choice** (radio buttons)
- Question: "How often do you eat at your favorite restaurant?"
- Options:
  - Rarely (once every few months)
  - Monthly (1-2 times per month)
  - Weekly (once a week)
  - Multiple times per week (2-3 times)
  - Daily
- Make **Required**

#### Question 3: Rating
- Type: **Linear scale**
- Question: "How would you rate your favorite restaurant?"
- Scale: 1 to 5
- Label 1: "Poor"
- Label 5: "Excellent"
- Make **Required**

#### Question 4: Usual Order
- Type: **Short answer** (text)
- Question: "What do you usually order there?"
- Make **Optional**

#### Question 5: Comments
- Type: **Paragraph**
- Question: "Any additional comments about this restaurant?"
- Make **Optional**

**Link to Google Sheet:**
1. Click "Responses" tab
2. Click green Sheets icon
3. Choose "Create new spreadsheet"
4. Name it: "Lunch Survey Responses"
5. Keep this sheet open in another tab

**Get shareable link:**
1. Click "Send" button (top right)
2. Click link icon
3. Click "Shorten URL"
4. Copy the link
5. Write it on the board or prepare a QR code

---

### Option 2: Build Together in Class (More Interactive)

**Why build live:**
- Students see the process
- More discussion and engagement
- Demonstrates planning in action

**Risk:**
- Takes more time (10-15 minutes)
- Technical issues possible
- Harder to control timing

**If choosing this option:**
- Have forms.google.com open and ready
- Have restaurant names already decided (poll students quickly)
- Have question types planned on your teacher script
- Practice creating a form once before the observation

---

## During the Lesson

### Timing Checkpoints

**5 minutes before Form Building:**
- Have forms.google.com open
- Have Google Sheets ready in another tab
- Test that projector shows screen clearly

**During Form Building:**
- Narrate every choice: "I'm choosing Multiple Choice because..."
- Point out data types: "See how this becomes a dropdown? That's categorical data!"
- Show the Responses → Sheet linking process

**After Form is Built:**
- Share link IMMEDIATELY (don't wait)
- Give students 2-3 minutes to fill it out
- Refresh Sheet to show responses coming in live (exciting!)

### Technical Backup Plans

**If Google Forms won't load:**
- Use pre-made form link (have one ready)
- Use paper form planning activity
- Focus extra on HTML section
- Use sample dataset for analysis

**If students can't access form:**
- Have 3-4 students come up and fill it at teacher computer
- Fill it out together as a class with fake data
- Use a pre-populated dataset you made earlier

**If Google Sheets won't load:**
- Download as Excel ahead of time
- Export CSV and open in Excel
- Use screenshots of data

---

## Analysis Section Preparation

### Excel/Sheets Formulas You'll Use

**Count responses for each restaurant:**
```
=COUNTIF(B:B,"McDonald's")
=COUNTIF(B:B,"Chipotle")
```
(Change B:B to match your column)

**Average rating:**
```
=AVERAGE(C:C)
```
(Change C:C to match your rating column)

**Create a chart:**
1. Select restaurant column (just the data, not header)
2. Insert → Chart
3. Choose Bar or Pie chart
4. Customize title: "Most Popular Restaurants"

### What to Point Out During Analysis

✅ **Show the columns:** "Each question became a column!"

✅ **Show the rows:** "Each person's response is a row!"

✅ **Show clean data:** "Notice there are no spelling errors in the restaurant names? That's because we used a dropdown!"

✅ **Show numeric data:** "We can calculate an average rating because we used numbers, not text like 'pretty good' or 'okay'"

✅ **Show sorting:** "Watch how easy it is to sort by rating because we used the right data type"

---

## Student Engagement Tips

### During Planning Phase

**Ask questions like:**
- "Should we let people type restaurant names, or give them choices? Why?"
- "What's better: asking people to type their rating or use a scale? Why?"
- "If we want to calculate an average, what data type do we need?"

### During Form Building

**Narrate your thinking:**
- "I'm choosing 'Multiple choice' instead of 'Short answer' because..."
- "I'm making this required because we need complete data..."
- "Notice how I'm adding specific options instead of letting people type freely..."

### During Analysis

**Make it collaborative:**
- "What do you notice about the data?"
- "What restaurant do you think will be most popular?"
- "Is this data easy to analyze? Why?"

---

## Post-Form Tips

### Save Everything

✅ Keep the form for future classes
✅ Save the response sheet as a template
✅ Screenshot good data examples
✅ Download as Excel backup

### For Next Time

- Add one more question type (checkbox example)
- Include a "Other (please specify)" option
- Add data validation (like email format)
- Show form branching/logic if time allows

---

## Quick Reference: Google Forms Question Types

| Form Type | Data Type | Use For | Example |
|-----------|-----------|---------|---------|
| Short answer | Text | Names, short responses | "Your name" |
| Paragraph | Text | Long responses | "Comments" |
| Multiple choice | Category | Single selection | "Pick one restaurant" |
| Checkboxes | Category | Multiple selections | "Pick all toppings" |
| Dropdown | Category | Long list of options | "Select state" |
| Linear scale | Number | Ratings | "Rate 1-5" |
| Multiple choice grid | Category | Matrix | "Rate multiple items" |
| Date | Date | Calendar dates | "Birthday" |
| Time | Time | Time selection | "Appointment time" |

---

## Confidence Builders

### You've Got This Because:

✅ You're comfortable with Excel/data analysis (your strength!)

✅ Google Forms is intuitive (it's just clicking dropdowns)

✅ The concepts are solid (data types, which you understand)

✅ Students will be engaged (hands-on activity)

✅ You have backup plans (sample datasets, alternatives)

✅ The HTML part is brief (just a preview, not deep dive)

### If You Get Stuck:

- "Let's think through this together..." (turn to class discussion)
- "Let me pull up the reference..." (check this guide)
- "Great question! Let's test that..." (experiment together)
- "That's something we'll explore more when we code forms..." (defer to future)

---

## Final Checklist (Day Before Observation)

□ Google Form created (or outline ready)
□ Google Sheet linked
□ Form link shortened/QR code ready
□ Sample dataset prepared (backup)
□ Student handouts printed
□ HTML form file loaded
□ Marp presentation ready
□ Excel formulas practiced
□ Timing rehearsed
□ Backup plans reviewed

**You've prepared well. Trust your data analysis expertise. The students will be engaged. This will go great!**

