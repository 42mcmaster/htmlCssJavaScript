# Teacher Script: Forms & Data Collection Lesson
## 45-50 Minute Observation Lesson

---

## Materials Needed

✅ Computer with projector
✅ Marp presentation loaded
✅ Google Form ready to create (or pre-created template)
✅ Student handouts printed
✅ Google Sheets/Excel ready
✅ Sample HTML form file open

---

## Lesson Timeline

| Time | Activity | Duration |
|------|----------|----------|
| 0:00-0:05 | Hook & Introduction | 5 min |
| 0:05-0:15 | Data Types Instruction | 10 min |
| 0:15-0:30 | Build Google Form Together | 15 min |
| 0:30-0:35 | HTML Forms Preview | 5 min |
| 0:35-0:45 | Data Analysis Activity | 10 min |
| 0:45-0:50 | Wrap-up & Reflection | 5 min |

---

## SECTION 1: Hook & Introduction (5 minutes)

### Opening (Slide 1-2)

**What to say:**
> "Good morning/afternoon everyone! Today we're going to explore something you do almost every day without thinking about it—filling out forms online. But here's the question I want you to think about: when you order food on DoorDash, or sign up for a new app, or take a survey... where does all that information GO?"

**Pause for responses. Acknowledge answers.**

> "That's right—it goes into a database! But here's the thing: the WAY we design forms has a HUGE impact on whether that data is useful or completely useless."

### Show Examples (Visual engagement)

**What to do:**
Pull up 2-3 real-world examples on your screen:
- A DoorDash order form
- A Google Form
- A Netflix signup

**What to say:**
> "All of these are collecting data. Today you're going to learn to think like a data analyst when designing forms. Because soon YOU'LL be building these forms, and the choices you make matter."

### The Pipeline (Slide 3)

**Write on board or show slide:**
```
FORM → COLLECTION → STORAGE → ANALYSIS
```

**What to say:**
> "This is the pipeline we'll explore today. We're going to actually DO all four steps together. You'll design a form, collect data from your classmates, store it in a spreadsheet, and analyze it. This is what professional developers do every single day."

---

## SECTION 2: Data Types Instruction (10 minutes)

### Why Data Types Matter (Slides 4-6)

**What to say:**
> "Let me show you why data types matter. Imagine I ask everyone to tell me their age using this piece of paper."

**Show example of messy text responses:**
- "25"
- "twenty-five"  
- "25 years old"
- "mid-twenties"
- "old enough lol"

**What to say:**
> "Can I calculate the average age of this class from these answers? No! This is what happens when you use the WRONG data type."

### Teach Each Data Type (Interactive)

**TEXT/STRING** (Slide 5)

**What to say:**
> "Text data is for things like names, addresses, or comments. It's great when you want people to write freely. But it's TERRIBLE for analysis."

**Ask students:**
> "Can you give me examples of when you'd want text data?" 
*(Wait for responses: feedback comments, addresses, essay answers)*

**NUMBERS** (Slide 5)

**What to say:**
> "Numbers are for anything you want to calculate—age, quantity, ratings. Here's the key: if you want to find an average or sort by value, you NEED number data, not text."

**Ask students:**
> "What are things you'd collect as numbers in a food order form?"
*(Wait for responses: quantity, price, rating)*

**CATEGORIES** (Slide 6)

**What to say:**
> "Categories are my favorite because they give you CLEAN data. Instead of letting people type whatever they want, you give them fixed choices. Small, Medium, Large. Yes or No. Breakfast, Lunch, Dinner."

**Show on screen:**
> "Watch what happens when I use categories..."

**Demonstrate:**
- Show dropdown or radio buttons
- "Now everyone HAS to pick from my options. No spelling errors. No weird answers. Clean data that I can count and chart immediately."

**DATES** (Slide 6)

**Quick mention:**
> "Dates are specialized. They let you sort chronologically and calculate time differences. Always use date pickers, never text boxes for dates."

**BOOLEAN/YES-NO** (Slide 6)

**Quick mention:**
> "Checkboxes for simple yes/no questions. 'Subscribe to newsletter?' Check or no check. Simple and clean."

### The Bad Question / Good Question Examples (Slides 7-8)

**This is your key teaching moment. Take your time here.**

**Show Bad Example (Slide 7):**

**What to say:**
> "Here's a question I see all the time that drives data analysts crazy: 'What's your age?' with a text box."

**Ask class:**
> "What's wrong with this?"

**After responses:**
> "Exactly! People will answer a hundred different ways. Let me show you the fix."

**Show Good Example (Slide 8):**

**Option 1: Number input with min/max**
> "This forces a number. But it might be too specific for some purposes."

**Option 2: Age ranges (dropdown)**
> "This is often better—it groups people and protects privacy. Plus, it's WAY easier to analyze. I can instantly see how many people are in each age group."

**Key point:**
> "The data type you choose depends on what you want to DO with the data. That's the skill we're building today."

---

## SECTION 3: Build Google Form Together (15 minutes)

### Setup (Slide 9)

**What to say:**
> "Alright, now WE'RE going to design a form together. Pull out your student task sheet—you'll be filling this out as we go."

**Scenario:**
> "We're collecting data about lunch preferences. But before we just start adding questions, we need to PLAN. This is what professional developers do."

### Planning Phase (5 minutes)

**Open discussion - call on students:**

**Question 1:**
> "What should our first question be? What do we want to know?"

*Student might say: "Favorite restaurant"*

**Follow up:**
> "Good! Now here's the key question: What DATA TYPE should 'favorite restaurant' be?"

**Guide discussion:**
- "Should it be a text box?" *(Could work, but messy)*
- "Should it be a dropdown?" *(Better! We can list restaurants)*
- "What restaurants should we include?" *(Get student input)*

**Write on board:**
```
Question 1: Favorite Restaurant
Type: Dropdown
Options: [list 5-7 restaurants students suggest]
```

**Question 2:**
> "What else should we ask? Someone give me another question."

*Student might say: "How often do you go there?"*

**Guide discussion:**
> "Great! Data type? Should this be text or categories?"

**If they say text:**
> "Think about analysis. If everyone writes 'sometimes' or 'a lot' or '2-3 times a week,' can we count that easily?"

**Lead to categories:**
```
Question 2: How often do you eat there?
Type: Radio buttons (single choice)
Options: Rarely, Monthly, Weekly, 2-3 times/week, Daily
```

**Question 3:**
> "One more—what about a rating question?"

**Guide to:**
```
Question 3: How would you rate this restaurant?
Type: Linear scale
Options: 1-5 (Poor to Excellent)
```

### Building Phase (8 minutes)

**Screen share your Google Forms:**

**What to say:**
> "Watch as I build what we planned. Notice how the question TYPE in Google Forms matches our data types."

**Build the form step by step, narrating:**

1. **"First question: Favorite Restaurant"**
   - Click "Multiple choice" dropdown
   - "See how I pick DROPDOWN type? That's our categorical data"
   - Add the restaurant options students suggested
   - "Make it required"

2. **"Second question: How often?"**
   - "Multiple choice for our categories"
   - Add frequency options
   - "Make it required"

3. **"Third question: Rating"**
   - "Linear scale—this is perfect for numeric ratings"
   - Set to 1-5
   - Label: 1 = Poor, 5 = Excellent

4. **"Bonus: Comments"**
   - "Short answer for open text"
   - "This is text data—great for reading individual feedback, but hard to analyze mathematically"

**Link to Sheet:**
> "Now watch this magic—I'm going to link this form to a Google Sheet. This is like connecting to a database."

- Click "Responses" tab
- Click green Sheets icon
- "Create a new spreadsheet"
- **Show the empty sheet**

**What to say:**
> "This is our database! When you fill out the form, your answers will appear here as rows. Each question becomes a column. Just like Excel!"

### Deploy the Form (2 minutes)

**What to say:**
> "I'm going to share this link with you all. Everyone fill it out right now—be honest! We're going to analyze this data together."

**Share link via:**
- Project QR code
- Type short link on board
- Share in Google Classroom/LMS
- Email link

**While students fill out:**
> "As you're filling this out, notice how the form FORCES you to give clean data. You can't accidentally spell a restaurant name wrong. You can't give a rating of '3.7' when I only asked for 1-5. This is good form design!"

---

## SECTION 4: HTML Forms Preview (5 minutes)

### Transition (Slide 11-14)

**What to say:**
> "Google Forms handles all the technical stuff for us. But when you build websites, YOU write the code that creates these forms. Let me show you what's under the hood."

**Open your sample HTML form file (or show on slide):**

**Show simple example:**
```html
<form action="process.php" method="post">
  <label>Name:</label>
  <input type="text" name="name">
  
  <label>Email:</label>
  <input type="email" name="email">
  
  <label>Rating:</label>
  <input type="number" name="rating" min="1" max="5">
  
  <label>Size:</label>
  <select name="size">
    <option>Small</option>
    <option>Medium</option>
    <option>Large</option>
  </select>
  
  <button type="submit">Submit</button>
</form>
```

### Connect the Dots (Key teaching moment)

**Point to each part:**

**`<input type="text">`**
> "See this? That's our STRING data type. Text box."

**`<input type="number" min="1" max="5">`**
> "This is our NUMBER data type. Notice min and max? That's validation—making sure people give good data."

**`<select>` with `<option>`s**
> "This is our CATEGORY data type. Just like the dropdown in Google Forms."

**What to say:**
> "The HTML tags are different from Google Forms' interface, but the THINKING is identical. You're choosing data types, setting validation, deciding what format you want the data in. That's what we practiced today."

**Show the connection:**
> "When someone clicks 'Submit' on this form, where does the data go? To the `action` location—usually a database. Then we can analyze it. Same pipeline we talked about at the start:
> 
> FORM (HTML) → COLLECTION (browser sends it) → STORAGE (database) → ANALYSIS (what we're about to do)"

**Don't spend too long here—this is just preview:**
> "You'll learn to write all this code soon. For now, I just want you to see that the concepts are the same whether you're using Google Forms or HTML."

---

## SECTION 5: Data Analysis Activity (10 minutes)

### View the Collected Data (Slide 16)

**Pull up the Google Sheet:**

**What to say:**
> "Alright, let's see what we got! Look at this—real data from real people in this room."

**Show the sheet:**
> "See how each ROW is one person's response? And each COLUMN is one of our questions? This is exactly what a database table looks like."

### Analysis Tasks (Do together)

**Task 1: Sort the data**

**What to do:**
- Select all data
- Data → Sort range
- Sort by Rating column (highest to lowest)

**What to say:**
> "Let's sort by rating to see which restaurants you all rate highest. This only works because we used NUMBER data type for ratings!"

**Ask:**
> "What would happen if we let people type ratings as text like 'pretty good' or '7 out of 10'? Could we sort it? No!"

**Task 2: Count responses**

**What to do:**
- Show how to use COUNTIF function OR just use filters

**Example:**
```
=COUNTIF(B:B,"McDonald's")
```

**What to say:**
> "How many people picked McDonald's as their favorite? Let's count. This is easy because we used CATEGORIES. Everyone picked from the same list."

**Do this for 2-3 restaurants.**

**Task 3: Calculate average rating**

**What to do:**
```
=AVERAGE(D:D)
```

**What to say:**
> "What's the average rating across all responses? Again, this ONLY works because we used numbers for ratings."

**Task 4: Create a chart**

**What to do:**
- Select the restaurant column
- Insert → Chart
- Choose bar chart or pie chart

**What to say:**
> "Let's visualize this. Which restaurant is most popular?"

**Show the chart.**

> "This chart was possible because of our categorical data. Clean categories make clean charts."

### Discussion (3 minutes)

**Ask students:**

1. > "Did our form design work? Did we get clean data?"
   
2. > "What would you change about our form if we did it again?"

3. > "Think about a messy form you've filled out online. What made it messy?"

4. > "How would bad data types have made this analysis harder?"

**Emphasize:**
> "Professional data analysts spend TONS of time cleaning messy data. Good form design PREVENTS that mess. You just learned a skill that will save you hours of work in the future."

---

## SECTION 6: Wrap-Up & Reflection (5 minutes)

### Key Takeaways (Slide 17)

**Go through each point on slide:**

**What to say:**
> "Let's review what we learned today..."

✅ **Forms collect data from users**
> "Whether it's Google Forms or HTML, forms are how websites get information from people."

✅ **Data types matter**
> "Choosing text vs. number vs. categories changes what you can DO with the data."

✅ **Good form design = clean data**
> "Plan your questions. Pick the right types. Make it easy for people to give you good data."

✅ **HTML forms work like Google Forms**
> "The code is different, but the thinking is the same."

✅ **Forms connect to databases**
> "The data has to go somewhere—usually a database table, which looks just like a spreadsheet."

✅ **Analysis requires planning**
> "Think about your end goal. What do you want to learn from this data? Design your form around that."

### Looking Ahead (Slide 18)

**What to say:**
> "This lesson is your foundation for what's coming next in this course:
> 
> - You'll learn to code HTML forms from scratch
> - You'll create databases to store form data
> - You'll write SQL queries to analyze that data
> - You'll build complete web applications where forms feed databases that power dashboards
>
> Today was your introduction to the full pipeline. You did GREAT!"

### Final Challenge

**Optional if time:**
> "Think about something YOU care about. If you could design a form to collect data about it—maybe video game preferences, music tastes, sports stats, whatever—what would you ask? And more importantly, what DATA TYPES would you use?"

**Give 30 seconds to think, call on 2-3 students for quick shares.**

---

## Questions & Closing (2 minutes)

**What to say:**
> "Any questions before we wrap up?"

**Answer questions briefly.**

**Closing:**
> "Next class, we'll continue building on this foundation. Great work today, everyone!"

---

## IF YOU HAVE EXTRA TIME

### Extension Activities:

1. **More Analysis:**
   - Create pivot tables
   - Add more complex formulas
   - Make multiple charts

2. **Form Improvement:**
   - Redesign the form with better questions
   - Add conditional logic
   - Add data validation

3. **Real-World Examples:**
   - Show bad form examples from the web
   - Discuss privacy considerations
   - Talk about form security

---

## TROUBLESHOOTING

### If technology fails:

**Google Form won't load:**
- Use a pre-filled sample dataset
- Have students paper-prototype a form design
- Focus more on the HTML section

**Can't share form link:**
- Have one computer fill it out multiple times with fake data
- Use a pre-made dataset you prepared ahead of time

**Google Sheets crashes:**
- Export to Excel beforehand
- Use a smaller sample dataset
- Focus on explaining what WOULD be done

### If running short on time:

**Skip:**
- Extended form building (use pre-made form)
- Multiple analysis tasks (pick 1-2)
- HTML deep dive

**Keep:**
- Data types explanation (core concept)
- Form planning discussion (most important)
- At least one analysis task (shows payoff)

### If running long:

**Speed up:**
- Form building (have it pre-made, just show it)
- Analysis (do one task instead of three)
- Skip some chart creation

---

## POST-LESSON REFLECTION

After the lesson, consider:
- Did students understand data types?
- Were they engaged during form building?
- Could they connect HTML to Google Forms?
- Did the analysis make sense to them?
- What would you change for next time?

---

## EVALUATOR NOTES

**Strong points to highlight during observation:**

✅ **Student engagement:** Hands-on activity where students contribute
✅ **Real-world connection:** Links to apps they use daily
✅ **Curriculum integration:** Bridges web design → databases
✅ **Higher-order thinking:** Planning and analysis, not just recall
✅ **Technology integration:** Uses modern tools effectively
✅ **Formative assessment:** Built into discussion and activity

**Teaching strategies on display:**

- Think-aloud modeling
- Guided discovery
- Collaborative learning
- Authentic tasks
- Immediate application
- Visual supports
- Differentiated interaction (whole class, individual, collaborative)

