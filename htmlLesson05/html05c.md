# Lesson: Connecting HTML Forms to Google Sheets

## Learning Objectives
By the end of this lesson, students will be able to:
- Create a Google Apps Script web app to receive form data
- Connect an HTML form to Google Sheets without a traditional backend
- Send form data using JavaScript fetch API
- Test and troubleshoot form submissions
- View and analyze collected form data in Google Sheets

---

## Why This Matters

In the previous lesson, you learned how to build HTML forms. But there's a problem: **where does the data go?**

Most form tutorials show you `action="process.php"` – but that requires:
- A web server
- Backend programming (PHP, Python, Node.js)
- Database setup and management

**Today, you'll learn a shortcut!** Using Google Apps Script, you can:
- ✅ Submit form data directly to a Google Sheet
- ✅ No server or database required
- ✅ Free and easy to set up
- ✅ Perfect for projects, surveys, and small applications

---

## What You'll Build Today

**Project:** A contact form that saves submissions directly to Google Sheets

**What happens when someone submits:**
1. User fills out your HTML form
2. JavaScript sends data to your Google Apps Script
3. Script automatically adds a new row to your Google Sheet
4. User sees a success message

**This is real data collection!** You can use this for:
- Contact forms on websites
- Event registration
- Customer feedback
- Class surveys
- Order forms

---

## Prerequisites

Before starting, make sure you have:
- ✅ A Google account (your school Gmail)
- ✅ Basic HTML knowledge (from html05b lesson)
- ✅ A text editor (VS Code, Notepad++, etc.)
- ✅ A web browser (Chrome recommended)

---

## The Three-Part Setup

### Overview of Steps:
1. **Create a Google Sheet** (to store data)
2. **Write a Google Apps Script** (to receive data)
3. **Build an HTML form** (to send data)

Let's do this step by step!

---

## Part 1: Create Your Google Sheet

### Step 1: Create a New Sheet

1. Go to **Google Sheets**: https://sheets.google.com
2. Click **+ Blank** to create a new spreadsheet
3. Name it: **"Form Submissions"**

### Step 2: Add Column Headers

In the first row, add these headers:

| A | B | C | D |
|---|---|---|---|
| **Timestamp** | **Name** | **Email** | **Message** |

**Why these columns?**
- **Timestamp** - Automatically records when form was submitted
- **Name** - Student's name
- **Email** - Student's email address
- **Message** - Their feedback or question

> **💡 Tip:** You can add more columns later (like Phone, Grade, etc.)

---

## Part 2: Create Your Google Apps Script

### Step 3: Open Script Editor

1. In your Google Sheet, click **Extensions → Apps Script**
2. A new tab will open with a code editor
3. You'll see a default function called `myFunction()` – **delete it all**

### Step 4: Paste the Script

Copy and paste this **exact code** into the script editor:

```javascript
function doPost(e) {
  try {
    // Get the active sheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Add a new row with the data
    sheet.appendRow([
      new Date(),           // Timestamp
      data.name,            // Name from form
      data.email,           // Email from form
      data.message          // Message from form
    ]);
    
    // Send success response
    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Send error response
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 5: Save the Script

1. Click the **💾 Save** icon (or press `Ctrl+S`)
2. Name your project: **"Form to Sheets"**
3. Click **OK**

---

## Part 3: Deploy Your Web App

This is where the magic happens! You'll create a URL that your form can send data to.

### Step 6: Deploy as Web App

1. Click **Deploy → New deployment**
2. Click the **⚙️ gear icon** next to "Select type"
3. Choose **Web app**

### Step 7: Configure Deployment Settings

Fill in these settings **exactly**:

**Description:** `Form submission handler`

**Execute as:** `Me (your email)`

**Who has access:** `Anyone`

> ⚠️ **Important:** Set "Who has access" to **Anyone** – otherwise your form won't work!

### Step 8: Authorize the Script

1. Click **Deploy**
2. You'll see a warning: **"Authorization required"**
3. Click **Authorize access**
4. Choose your Google account
5. Click **Advanced** (if you see a warning)
6. Click **Go to Form to Sheets (unsafe)** – this is YOUR script, so it's safe!
7. Click **Allow**

### Step 9: Copy Your Web App URL

After authorizing, you'll see:

**Web app URL:** `https://script.google.com/macros/s/ABC123.../exec`

**⭐ COPY THIS URL!** You'll need it in the next step.

> 💡 **Save this URL somewhere safe** – you'll use it in your HTML form!

---

## Part 4: Build Your HTML Form

Now let's create the form that will send data to your Google Sheet!

### Step 10: Create Your HTML File

Create a new file called `contact-form.html` and paste this code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Form → Google Sheets</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 500px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        
        h1 {
            color: #333;
            text-align: center;
        }
        
        form {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #555;
        }
        
        input, textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
            box-sizing: border-box;
        }
        
        textarea {
            resize: vertical;
            min-height: 100px;
        }
        
        button {
            width: 100%;
            padding: 12px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            font-weight: bold;
        }
        
        button:hover {
            background-color: #45a049;
        }
        
        button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }
        
        .message {
            margin-top: 20px;
            padding: 15px;
            border-radius: 5px;
            text-align: center;
            font-weight: bold;
        }
        
        .success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        
        .error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        
        .loading {
            background-color: #d1ecf1;
            color: #0c5460;
            border: 1px solid #bee5eb;
        }
    </style>
</head>
<body>
    <h1>Contact Us</h1>
    
    <form id="contactForm">
        <label for="name">Name:</label>
        <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            placeholder="Enter your full name"
        />
        
        <label for="email">Email:</label>
        <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            placeholder="your.email@example.com"
        />
        
        <label for="message">Message:</label>
        <textarea 
            id="message" 
            name="message" 
            required 
            placeholder="Write your message here..."
        ></textarea>
        
        <button type="submit">Submit</button>
    </form>
    
    <div id="responseMessage"></div>

    <script>
        // ⭐ PASTE YOUR WEB APP URL HERE ⭐
        const SCRIPT_URL = "PASTE_YOUR_WEB_APP_URL_HERE";
        
        // Get form and message elements
        const form = document.getElementById("contactForm");
        const responseDiv = document.getElementById("responseMessage");
        
        // Handle form submission
        form.addEventListener("submit", function(e) {
            // Prevent normal form submission
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value
            };
            
            // Disable submit button
            const submitButton = form.querySelector("button[type='submit']");
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
            
            // Show loading message
            responseDiv.innerHTML = '<div class="message loading">Sending your message...</div>';
            
            // Send data to Google Apps Script
            fetch(SCRIPT_URL, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.result === "success") {
                    // Show success message
                    responseDiv.innerHTML = '<div class="message success">✅ Message sent successfully!</div>';
                    // Reset form
                    form.reset();
                } else {
                    // Show error message
                    responseDiv.innerHTML = '<div class="message error">❌ Error: ' + data.error + '</div>';
                }
            })
            .catch(error => {
                // Show error message
                responseDiv.innerHTML = '<div class="message error">❌ Failed to send message. Please try again.</div>';
                console.error("Error:", error);
            })
            .finally(() => {
                // Re-enable submit button
                submitButton.disabled = false;
                submitButton.textContent = "Submit";
            });
        });
    </script>
</body>
</html>
```

### Step 11: Add Your Web App URL

**⚠️ CRITICAL STEP:**

Find this line in the code (around line 103):

```javascript
const SCRIPT_URL = "PASTE_YOUR_WEB_APP_URL_HERE";
```

**Replace** `"PASTE_YOUR_WEB_APP_URL_HERE"` with your actual Web App URL from Step 9.

**Example:**
```javascript
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx.../exec";
```

### Step 12: Save and Test!

1. **Save** your HTML file
2. **Open** it in a web browser (double-click the file)
3. Fill out the form with test data
4. Click **Submit**
5. Check your Google Sheet – you should see a new row! 🎉

---

## Testing Your Form

### ✅ Test Checklist:

1. **Basic submission:**
   - Fill out all fields
   - Click submit
   - Check Google Sheet for new row

2. **Validation test:**
   - Try submitting with empty fields
   - Try an invalid email format
   - Form should prevent submission

3. **Multiple submissions:**
   - Submit the form 3 times with different data
   - Each should create a new row in the sheet

4. **Error handling:**
   - Temporarily break your Web App URL
   - Submit the form
   - Should show an error message

---

## Understanding the Code

### The JavaScript Fetch API

This is the key part that sends data to Google Sheets:

```javascript
fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
        "Content-Type": "application/json"
    }
})
```

**What's happening:**
1. `fetch()` - Sends a request to your Web App
2. `method: "POST"` - We're sending data (not just requesting it)
3. `JSON.stringify(formData)` - Converts form data to a format Google can read
4. `.then()` - Waits for response and shows success/error message

### The Google Apps Script

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.message
  ]);
  
  return ContentService.createTextOutput(...);
}
```

**What's happening:**
1. `doPost(e)` - Automatically runs when form data arrives
2. `JSON.parse()` - Converts the data back to JavaScript
3. `sheet.appendRow()` - Adds a new row to the sheet
4. `return ContentService` - Sends a success message back to the form

---

## Common Problems and Solutions

### Problem 1: "Failed to send message"

**Possible causes:**
- ❌ Web App URL not pasted correctly
- ❌ Forgot to deploy the script
- ❌ Script not authorized

**Solution:**
1. Check that SCRIPT_URL ends with `/exec`
2. Re-deploy the script: Deploy → Manage deployments → Edit → Deploy
3. Make sure "Who has access" is set to "Anyone"

---

### Problem 2: Data not appearing in Sheet

**Possible causes:**
- ❌ Wrong sheet is active
- ❌ Column names don't match script

**Solution:**
1. Make sure you're looking at the correct Google Sheet
2. Check that column order matches the script:
   ```javascript
   sheet.appendRow([
     new Date(),    // Column A
     data.name,     // Column B
     data.email,    // Column C
     data.message   // Column D
   ]);
   ```

---

### Problem 3: "Authorization required" error

**Solution:**
1. Go back to Apps Script
2. Click Deploy → Manage deployments
3. Click Edit (pencil icon)
4. Click Deploy
5. Re-authorize when prompted

---

### Problem 4: Form submits but shows error

**Possible cause:**
- ❌ CORS (Cross-Origin) issue

**Solution:**
Your Web App URL should look like:
```
https://script.google.com/macros/s/.../exec
```

NOT like:
```
https://script.google.com/macros/s/.../dev
```

Make sure it ends with `/exec` – this is the deployed version!

---

## Customizing Your Form

### Adding More Fields

Want to collect phone numbers? Easy!

**1. Add column to Google Sheet:**
- Add "Phone" as Column E

**2. Update Apps Script:**
```javascript
sheet.appendRow([
  new Date(),
  data.name,
  data.email,
  data.phone,     // 👈 Add this
  data.message
]);
```

**3. Add to HTML form:**
```html
<label for="phone">Phone:</label>
<input 
    type="tel" 
    id="phone" 
    name="phone" 
    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    placeholder="123-456-7890"
/>
```

**4. Update JavaScript:**
```javascript
const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,  // 👈 Add this
    message: document.getElementById("message").value
};
```

---

## Best Practices

### ✅ DO:

- **Test with sample data first** before sharing your form
- **Keep your Web App URL private** – anyone with it can submit data
- **Check your Sheet regularly** to monitor submissions
- **Add data validation** in Google Sheets (Data → Data validation)
- **Make backups** of your sheet periodically
- **Use descriptive column headers** that match your form fields

### ❌ DON'T:

- **Don't share your Web App URL publicly** if you don't want spam
- **Don't collect sensitive data** (passwords, SSN, credit cards)
- **Don't delete the Apps Script** – your form will break!
- **Don't change column order** without updating the script
- **Don't forget to test** after making changes

---

## Security Considerations

### Is this secure?

**For school projects and surveys:** ✅ Yes, this is fine!

**For sensitive data:** ⚠️ Use with caution

**Why?**
- Anyone with your Web App URL can submit data
- Data is stored in Google Sheets (not encrypted)
- No user authentication required

**When to use this method:**
- ✅ Contact forms
- ✅ Event registrations
- ✅ Surveys and feedback
- ✅ Student project submissions

**When NOT to use this method:**
- ❌ Password collection
- ❌ Payment information
- ❌ Personal health information
- ❌ Banking details

---

## Real-World Applications

### What can you build with this?

1. **Event Registration Form**
   - Collect: Name, Email, Grade, T-shirt size
   - Use for: School events, club meetings, field trips

2. **Customer Feedback Form**
   - Collect: Rating, comments, contact info
   - Use for: Restaurant feedback, product reviews

3. **Job Application Form**
   - Collect: Name, resume link, experience
   - Use for: Club officer applications, volunteer positions

4. **Anonymous Tip Form**
   - Collect: Message only (no email required)
   - Use for: Suggestions, concerns, ideas

5. **Class Survey**
   - Collect: Multiple choice responses, ratings
   - Use for: Course feedback, topic preferences

---

## Advanced: Adding Dropdown Menus

Want to add a dropdown to your form? Here's how:

### HTML:
```html
<label for="grade">Grade Level:</label>
<select id="grade" name="grade" required>
    <option value="">-- Select Grade --</option>
    <option value="9">9th Grade</option>
    <option value="10">10th Grade</option>
    <option value="11">11th Grade</option>
    <option value="12">12th Grade</option>
</select>
```

### JavaScript (add to formData):
```javascript
const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    grade: document.getElementById("grade").value,  // 👈 Add this
    message: document.getElementById("message").value
};
```

### Apps Script (update appendRow):
```javascript
sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.grade,    // 👈 Add this
    data.message
]);
```

### Google Sheet:
Add "Grade" as Column D (and shift Message to Column E)

---

## Analyzing Your Data

Once you've collected responses, you can:

### 1. Sort Data
- Click a column header
- Data → Sort sheet by column

### 2. Filter Responses
- Select your data range
- Data → Create a filter

### 3. Create Charts
- Select data → Insert → Chart
- Perfect for visualizing survey results!

### 4. Export Data
- File → Download → CSV or Excel
- Import into Python, Excel, or other tools

---

## Key Takeaways

✅ **Google Apps Script acts as a simple backend** for your forms

✅ **Web Apps can receive POST requests** from any HTML form

✅ **Fetch API sends data** from your form to the script

✅ **No server or database required** – just Google Sheets!

✅ **Perfect for small projects** and learning form submissions

✅ **Easy to customize** by adding fields and validation

✅ **Data is immediately visible** in your Google Sheet

---

## Troubleshooting Checklist

If your form isn't working, check these in order:

1. ☐ Web App URL is pasted correctly (ends with `/exec`)
2. ☐ Script is deployed with "Anyone" access
3. ☐ Script has been authorized
4. ☐ Column headers match the script
5. ☐ Form field `name` attributes match the script
6. ☐ HTML file is saved after editing
7. ☐ Browser console shows no errors (F12 to check)
8. ☐ Internet connection is working

**Still not working?**
- Look at the browser console (F12 → Console tab)
- Check the Apps Script execution log (View → Executions)
- Try re-deploying with a new version

---

## What's Next?

Now that you can collect form data, you can:

### Next Lessons:
- **Style forms with CSS and Bootstrap** (make them beautiful!)
- **Add client-side validation** with JavaScript
- **Create multi-page forms** with progress indicators
- **Build CRUD applications** (Create, Read, Update, Delete)
- **Add email notifications** when forms are submitted

### Extend This Project:
- Add a "thank you" page after submission
- Send confirmation emails to users
- Create a public results dashboard
- Add file upload capability
- Build a complete registration system

---

## Additional Resources

- **Google Apps Script Documentation:** https://developers.google.com/apps-script
- **Fetch API Guide:** https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- **Google Sheets API:** https://developers.google.com/sheets/api

---

## Final Challenge

**Build Your Own Project!**

Create one of these using what you learned today:

1. **Club Signup Form**
   - Name, email, grade, why you want to join

2. **Pizza Order Form**
   - Name, pizza size, toppings (checkboxes), delivery time

3. **Book Checkout Form**
   - Student name, book title, expected return date

4. **Anonymous Feedback Form**
   - Rating (1-5), category, comments

**Share your Web App URL with your teacher for credit!**

---

## Remember

🎯 **The goal:** Connect your HTML forms to real data storage

💡 **The method:** Google Apps Script as a simple backend

🚀 **The result:** Working web applications without complex servers!

**You now have a superpower:** You can build forms that actually *do something*!

Good luck, and happy coding! 🎉