---
marp: true
theme: default
paginate: true
---

# Forms & Data Collection
## Planning Data for Analysis

**Mr. Ryan's Class**
Medina County Career Center

---

## Today's Big Question

**Where does all the data go when you fill out a form?**

Think about:
- Ordering food online
- Signing up for services
- Taking surveys
- Creating accounts

---

## The Data Pipeline

```
FORM → COLLECTION → STORAGE → ANALYSIS
```

1. **Form** - User enters information
2. **Collection** - Data is captured
3. **Storage** - Data is saved (database)
4. **Analysis** - We make sense of it

**Today we'll experience the whole pipeline!**

---

## Why Does This Matter?

**Bad Form Design = Messy Data**
- Hours of cleaning
- Errors in analysis
- Wasted time

**Good Form Design = Clean Data**
- Ready to analyze immediately
- Accurate insights
- Professional results

---

## Data Types in Forms

Every piece of data has a **type**:

**Text (String)**
- Names, addresses, comments
- Example: "John Smith"

**Number (Integer/Decimal)**
- Age, quantity, ratings
- Example: 25, 4.5

---

## Data Types (continued)

**Date/Time**
- When something happened
- Example: 2025-11-08

**Categories (Dropdown/Radio)**
- Fixed choices
- Example: Small, Medium, Large

**Boolean (Yes/No)**
- True or false choices
- Example: Subscribe? ☑ Yes

---

## Why Data Types Matter

**For Numbers:**
- Can calculate averages, totals
- Can sort low to high
- Can create charts

**For Categories:**
- Can count responses
- Can group data
- Can compare choices

**For Text:**
- Can search keywords
- Can read comments
- Hard to analyze mathematically!

---

## Form Question Design

**❌ Bad Question:**
"What's your age range?"
(Open text box)

**Problems:**
- People write: "20-30", "twenty five", "idk", "25 years old"
- Can't analyze this mess!

---

## Form Question Design

**✅ Good Question:**
"What's your age range?"
- Under 18
- 18-24
- 25-34
- 35-44
- 45+

**Why it works:**
- Everyone picks from same options
- Easy to count and chart
- Clean, consistent data

---

## Activity: Design Forms Together

**Scenario:**
We're collecting data about student lunch preferences

**Question to discuss:**
1. What data do we want to collect?
2. What data type should each be?
3. How do we ensure clean data?

---

## Building Our Form

**We'll create a Google Form as a class!**

For each question, we'll decide:
- Should this be text or dropdown?
- Do we want a number or rating scale?
- How do we prevent messy data?

**Everyone will fill it out, then we'll analyze the data together.**

---

## HTML Forms: The Code Behind It

Google Forms do the same thing as HTML forms!

**Example HTML Form:**
```html
<form action="process.php" method="post">
  <label>Name:</label>
  <input type="text" name="name">
  
  <label>Email:</label>
  <input type="email" name="email">
  
  <button type="submit">Submit</button>
</form>
```

---

## Form Elements Match Data Types

**Text Input** → String data
```html
<input type="text" name="name">
```

**Number Input** → Number data
```html
<input type="number" name="age" min="1" max="100">
```

**Dropdown** → Category data
```html
<select name="size">
  <option>Small</option>
  <option>Medium</option>
  <option>Large</option>
</select>
```

---

## Form Elements (continued)

**Radio Buttons** → Category (one choice)
```html
<input type="radio" name="meal" value="breakfast">
<input type="radio" name="meal" value="lunch">
<input type="radio" name="meal" value="dinner">
```

**Checkboxes** → Multiple choices
```html
<input type="checkbox" name="toppings" value="cheese">
<input type="checkbox" name="toppings" value="peppers">
```

---

## How Forms Become Data

When submitted, the form creates data:

```
name=John+Smith&email=john@email.com&age=25&size=medium
```

This data goes to a **database** where it's stored in rows and columns:

| Name | Email | Age | Size |
|------|-------|-----|------|
| John Smith | john@email.com | 25 | medium |

**Sound familiar? That's a spreadsheet!**

---

## From Forms to Excel

**What we'll do:**
1. ✅ Fill out our class Google Form
2. ✅ Export data to Google Sheets
3. ✅ Analyze it together in Excel

**Skills you'll use:**
- Sort data
- Count responses
- Calculate averages
- Create charts
- Find patterns

---

## Why This Matters for Your Future

**Coming up in this course:**
- Build HTML forms (Web Design)
- Create databases (Database Applications)
- Write queries to analyze data (SQL)
- Build full web applications

**Today is your introduction to the full pipeline!**

---

## Key Takeaways

✅ Forms collect data from users
✅ Data types matter for analysis
✅ Good form design = clean data
✅ HTML forms work like Google Forms
✅ Forms → Database → Analysis

**Next:** Hands-on time! Let's build and analyze!

---

## Questions?

Let's get started with our activity!

