# **Lesson 4: HTML Tables**

## **Learning Objectives**
- Understand when to use tables appropriately
- Create basic table structures with rows and cells
- Add table headers and captions
- Work with table sections (thead, tbody, tfoot)
- Span rows and columns
- Apply proper table semantics for accessibility
- Structure complex data tables

---

## **What Are HTML Tables?**

**HTML tables** organize data into rows and columns, making information easy to read and compare. Tables should be used for **tabular data only**—not for page layout.

**Good Uses for Tables:**
- Product pricing comparisons
- Schedules and timetables
- Statistical data
- Financial reports
- Survey results
- Sports statistics

**Bad Uses for Tables:**
- Page layout (use CSS Grid or Flexbox instead)
- Navigation menus
- Image galleries
- Form layouts

---

## **Basic Table Structure**

Every table consists of three essential elements:

```html
<table>
    <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
    </tr>
    <tr>
        <td>Cell 3</td>
        <td>Cell 4</td>
    </tr>
</table>
```

### **Breaking It Down**

- **`<table>`** - Container for the entire table
- **`<tr>`** - Table row (horizontal)
- **`<td>`** - Table data cell (individual cell)

---

## **Simple Table Example**

```html
<table>
    <tr>
        <td>Pad Thai</td>
        <td>$12.95</td>
    </tr>
    <tr>
        <td>Green Curry</td>
        <td>$13.95</td>
    </tr>
    <tr>
        <td>Tom Yum Soup</td>
        <td>$9.95</td>
    </tr>
</table>
```

**Displays as:**

| Pad Thai | $12.95 |
| Green Curry | $13.95 |
| Tom Yum Soup | $9.95 |

---

## **Table Headers**

Use `<th>` instead of `<td>` for header cells:

```html
<table>
    <tr>
        <th>Dish Name</th>
        <th>Price</th>
    </tr>
    <tr>
        <td>Pad Thai</td>
        <td>$12.95</td>
    </tr>
    <tr>
        <td>Green Curry</td>
        <td>$13.95</td>
    </tr>
</table>
```

**Benefits of `<th>`:**
- Browsers typically bold and center header text
- Screen readers identify them as headers
- Better for accessibility and SEO

---

## **Headers with `scope` Attribute**

The `scope` attribute clarifies what the header describes:

```html
<table>
    <tr>
        <th scope="col">Dish Name</th>
        <th scope="col">Price</th>
        <th scope="col">Calories</th>
    </tr>
    <tr>
        <td>Pad Thai</td>
        <td>$12.95</td>
        <td>450</td>
    </tr>
    <tr>
        <td>Green Curry</td>
        <td>$13.95</td>
        <td>380</td>
    </tr>
</table>
```

**Scope Values:**
- `scope="col"` - Header for a column
- `scope="row"` - Header for a row
- `scope="colgroup"` - Header for a group of columns
- `scope="rowgroup"` - Header for a group of rows

---

## **Row Headers**

Headers can also be at the start of rows:

```html
<table>
    <tr>
        <th scope="row">Monday</th>
        <td>11am-10pm</td>
    </tr>
    <tr>
        <th scope="row">Tuesday</th>
        <td>11am-10pm</td>
    </tr>
    <tr>
        <th scope="row">Wednesday</th>
        <td>11am-10pm</td>
    </tr>
    <tr>
        <th scope="row">Saturday</th>
        <td>12pm-11pm</td>
    </tr>
</table>
```

---

## **Table Captions**

The `<caption>` element provides a title for the table:

```html
<table>
    <caption>Curbside Thai Menu Prices</caption>
    <tr>
        <th>Dish</th>
        <th>Price</th>
    </tr>
    <tr>
        <td>Pad Thai</td>
        <td>$12.95</td>
    </tr>
    <tr>
        <td>Green Curry</td>
        <td>$13.95</td>
    </tr>
</table>
```

**Best Practices:**
- `<caption>` must be the first child of `<table>`
- Improves accessibility
- Provides context for the data
- Can be styled with CSS

---

## **Table Sections**

Divide tables into logical sections using `<thead>`, `<tbody>`, and `<tfoot>`:

```html
<table>
    <caption>Weekly Sales Report</caption>
    
    <thead>
        <tr>
            <th scope="col">Day</th>
            <th scope="col">Revenue</th>
            <th scope="col">Orders</th>
        </tr>
    </thead>
    
    <tbody>
        <tr>
            <th scope="row">Monday</th>
            <td>$1,250</td>
            <td>45</td>
        </tr>
        <tr>
            <th scope="row">Tuesday</th>
            <td>$1,180</td>
            <td>42</td>
        </tr>
        <tr>
            <th scope="row">Wednesday</th>
            <td>$1,420</td>
            <td>51</td>
        </tr>
    </tbody>
    
    <tfoot>
        <tr>
            <th scope="row">Total</th>
            <td>$3,850</td>
            <td>138</td>
        </tr>
    </tfoot>
</table>
```

---

## **Why Use Table Sections?**

**`<thead>` - Table Head**
- Contains column headers
- Can repeat on each printed page
- Often styled differently

**`<tbody>` - Table Body**
- Contains the main data rows
- Can have multiple tbody sections
- Can be scrolled independently with CSS

**`<tfoot>` - Table Footer**
- Contains summary or totals
- Displays at bottom even if coded before tbody
- Often styled to stand out

---

## **Spanning Columns**

Use `colspan` to make a cell span multiple columns:

```html
<table>
    <caption>Restaurant Locations</caption>
    <tr>
        <th colspan="3">Curbside Thai Locations</th>
    </tr>
    <tr>
        <th>City</th>
        <th>Address</th>
        <th>Phone</th>
    </tr>
    <tr>
        <td>Charlotte</td>
        <td>411 Belde Drive</td>
        <td>704-555-1151</td>
    </tr>
    <tr>
        <td>Raleigh</td>
        <td>285 Oak Street</td>
        <td>919-555-2247</td>
    </tr>
</table>
```

**Result:** The first row's header spans all three columns.

---

## **Spanning Rows**

Use `rowspan` to make a cell span multiple rows:

```html
<table>
    <tr>
        <th rowspan="3">Lunch Specials</th>
        <td>Pad Thai</td>
        <td>$8.95</td>
    </tr>
    <tr>
        <td>Fried Rice</td>
        <td>$7.95</td>
    </tr>
    <tr>
        <td>Spring Rolls</td>
        <td>$6.95</td>
    </tr>
</table>
```

**Result:** "Lunch Specials" appears in the first column spanning three rows.

---

## **Complex Spanning Example**

```html
<table>
    <caption>Monthly Schedule</caption>
    <thead>
        <tr>
            <th scope="col">Time</th>
            <th scope="col">Monday</th>
            <th scope="col">Tuesday</th>
            <th scope="col">Wednesday</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">9:00 AM</th>
            <td>Meeting</td>
            <td rowspan="2">Training Session</td>
            <td>Planning</td>
        </tr>
        <tr>
            <th scope="row">10:00 AM</th>
            <td>Development</td>
            <td>Review</td>
        </tr>
        <tr>
            <th scope="row">11:00 AM</th>
            <td colspan="3">Team Lunch</td>
        </tr>
    </tbody>
</table>
```

---

## **Complete Menu Table Example**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Curbside Thai Menu</title>
</head>
<body>
    <header>
        <h1>Curbside Thai Menu</h1>
    </header>
    
    <main>
        <table>
            <caption>Our Signature Dishes</caption>
            
            <thead>
                <tr>
                    <th scope="col">Dish</th>
                    <th scope="col">Description</th>
                    <th scope="col">Spice Level</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <th scope="row">Pad Thai</th>
                    <td>Stir-fried rice noodles with shrimp, tofu, peanuts, and bean sprouts</td>
                    <td>Mild</td>
                    <td>$12.95</td>
                </tr>
                <tr>
                    <th scope="row">Green Curry</th>
                    <td>Coconut curry with bamboo shoots, bell peppers, and basil</td>
                    <td>Medium</td>
                    <td>$13.95</td>
                </tr>
                <tr>
                    <th scope="row">Drunken Noodles</th>
                    <td>Wide rice noodles with Thai basil, chili, and vegetables</td>
                    <td>Hot</td>
                    <td>$13.95</td>
                </tr>
                <tr>
                    <th scope="row">Tom Yum Soup</th>
                    <td>Spicy and sour soup with mushrooms, lemongrass, and lime</td>
                    <td>Medium</td>
                    <td>$9.95</td>
                </tr>
                <tr>
                    <th scope="row">Mango Sticky Rice</th>
                    <td>Sweet sticky rice with fresh mango and coconut cream</td>
                    <td>None</td>
                    <td>$6.95</td>
                </tr>
            </tbody>
            
            <tfoot>
                <tr>
                    <td colspan="4">
                        <em>All dishes can be prepared vegetarian. Add $2 for shrimp or chicken.</em>
                    </td>
                </tr>
            </tfoot>
        </table>
    </main>
</body>
</html>
```

---

## **Schedule Table Example**

```html
<table>
    <caption>Curbside Thai Hours of Operation</caption>
    
    <thead>
        <tr>
            <th scope="col">Day</th>
            <th scope="col">Lunch</th>
            <th scope="col">Dinner</th>
        </tr>
    </thead>
    
    <tbody>
        <tr>
            <th scope="row">Monday</th>
            <td>11:00am - 2:30pm</td>
            <td>5:00pm - 10:00pm</td>
        </tr>
        <tr>
            <th scope="row">Tuesday</th>
            <td>11:00am - 2:30pm</td>
            <td>5:00pm - 10:00pm</td>
        </tr>
        <tr>
            <th scope="row">Wednesday</th>
            <td>11:00am - 2:30pm</td>
            <td>5:00pm - 10:00pm</td>
        </tr>
        <tr>
            <th scope="row">Thursday</th>
            <td>11:00am - 2:30pm</td>
            <td>5:00pm - 10:00pm</td>
        </tr>
        <tr>
            <th scope="row">Friday</th>
            <td>11:00am - 2:30pm</td>
            <td>5:00pm - 11:00pm</td>
        </tr>
        <tr>
            <th scope="row">Saturday</th>
            <td>12:00pm - 3:00pm</td>
            <td>5:00pm - 11:00pm</td>
        </tr>
        <tr>
            <th scope="row">Sunday</th>
            <td colspan="2">Closed</td>
        </tr>
    </tbody>
</table>
```

---

## **Comparison Table Example**

```html
<table>
    <caption>Meal Plan Comparison</caption>
    
    <thead>
        <tr>
            <th scope="col">Feature</th>
            <th scope="col">Basic Plan</th>
            <th scope="col">Premium Plan</th>
            <th scope="col">Family Plan</th>
        </tr>
    </thead>
    
    <tbody>
        <tr>
            <th scope="row">Meals per Week</th>
            <td>3</td>
            <td>5</td>
            <td>7</td>
        </tr>
        <tr>
            <th scope="row">Servings per Meal</th>
            <td>2</td>
            <td>2</td>
            <td>4</td>
        </tr>
        <tr>
            <th scope="row">Free Delivery</th>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
        </tr>
        <tr>
            <th scope="row">Price per Week</th>
            <td>$45</td>
            <td>$75</td>
            <td>$140</td>
        </tr>
    </tbody>
</table>
```

---

## **Accessibility Best Practices**

### **1. Always Use Proper Structure**

```html
<!-- Good -->
<table>
    <caption>Product Prices</caption>
    <thead>
        <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Item 1</td>
            <td>$10</td>
        </tr>
    </tbody>
</table>

<!-- Bad - Missing semantics -->
<table>
    <tr>
        <td><b>Product</b></td>
        <td><b>Price</b></td>
    </tr>
    <tr>
        <td>Item 1</td>
        <td>$10</td>
    </tr>
</table>
```

---

### **2. Use Captions**

Captions provide context for screen reader users:

```html
<table>
    <caption>2025 Sales Report by Quarter</caption>
    <!-- table content -->
</table>
```

---

### **3. Use `scope` Attributes**

Help screen readers associate data cells with headers:

```html
<th scope="col">Column Header</th>
<th scope="row">Row Header</th>
```

---

### **4. Complex Tables: Use `headers` and `id`**

For complex tables with multiple levels of headers:

```html
<table>
    <thead>
        <tr>
            <th id="name" scope="col">Name</th>
            <th id="q1" scope="col">Q1</th>
            <th id="q2" scope="col">Q2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th id="product1" scope="row">Product 1</th>
            <td headers="product1 q1">$100</td>
            <td headers="product1 q2">$150</td>
        </tr>
    </tbody>
</table>
```

---

## **Table Summary Attribute (Deprecated)**

**Note:** The `summary` attribute is deprecated in HTML5. Use `<caption>` or a paragraph before the table instead:

```html
<!-- Old way (don't use) -->
<table summary="Sales data for Q1 2025">

<!-- Modern way -->
<p>The following table shows sales data for Q1 2025:</p>
<table>
    <caption>Q1 2025 Sales Data</caption>
    <!-- table content -->
</table>
```

---

## **Styling Tables (CSS Preview)**

While styling is covered in CSS lessons, here are common table styles:

```html
<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }
    
    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }
    
    th {
        background-color: #4CAF50;
        color: white;
    }
    
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
</style>
```

**Common Table Properties:**
- `border-collapse` - Merge borders between cells
- `border-spacing` - Space between cells
- `width` - Table width
- `text-align` - Align cell content
- `padding` - Space inside cells

---

## **Common Table Patterns**

### **Price List**

```html
<table>
    <caption>Service Pricing</caption>
    <thead>
        <tr>
            <th scope="col">Service</th>
            <th scope="col">Duration</th>
            <th scope="col">Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Basic Package</th>
            <td>1 hour</td>
            <td>$50</td>
        </tr>
        <tr>
            <th scope="row">Standard Package</th>
            <td>2 hours</td>
            <td>$90</td>
        </tr>
        <tr>
            <th scope="row">Premium Package</th>
            <td>3 hours</td>
            <td>$120</td>
        </tr>
    </tbody>
</table>
```

---

### **Contact Information**

```html
<table>
    <caption>Contact Information</caption>
    <tbody>
        <tr>
            <th scope="row">Name</th>
            <td>Jane Smith</td>
        </tr>
        <tr>
            <th scope="row">Email</th>
            <td><a href="mailto:jane@example.com">jane@example.com</a></td>
        </tr>
        <tr>
            <th scope="row">Phone</th>
            <td><a href="tel:+15551234567">(555) 123-4567</a></td>
        </tr>
        <tr>
            <th scope="row">Department</th>
            <td>Customer Service</td>
        </tr>
    </tbody>
</table>
```

---

### **Nutritional Information**

```html
<table>
    <caption>Nutritional Information per Serving</caption>
    <thead>
        <tr>
            <th scope="col">Nutrient</th>
            <th scope="col">Amount</th>
            <th scope="col">% Daily Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Calories</th>
            <td>450</td>
            <td>23%</td>
        </tr>
        <tr>
            <th scope="row">Total Fat</th>
            <td>18g</td>
            <td>23%</td>
        </tr>
        <tr>
            <th scope="row">Sodium</th>
            <td>890mg</td>
            <td>39%</td>
        </tr>
        <tr>
            <th scope="row">Protein</th>
            <td>22g</td>
            <td>44%</td>
        </tr>
    </tbody>
</table>
```

---

## **Tables vs. Other Elements**

### **When NOT to Use a Table**

**Use Lists Instead:**
```html
<!-- Don't use a table for this -->
<table>
    <tr><td>Item 1</td></tr>
    <tr><td>Item 2</td></tr>
    <tr><td>Item 3</td></tr>
</table>

<!-- Use a list -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

---

**Use Description Lists Instead:**
```html
<!-- Don't use a table for term-definition pairs -->
<table>
    <tr>
        <td>HTML</td>
        <td>Hypertext Markup Language</td>
    </tr>
</table>

<!-- Use a description list -->
<dl>
    <dt>HTML</dt>
    <dd>Hypertext Markup Language</dd>
</dl>
```

---

## **Complete Restaurant Menu Page**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Curbside Thai - Full Menu</title>
</head>
<body>
    <header>
        <h1>Curbside Thai</h1>
        <p>Authentic Gourmet Thai Food</p>
    </header>
    
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="menu.html">Menu</a></li>
            <li><a href="locations.html">Locations</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
    
    <main>
        <section>
            <h2>Menu</h2>
            
            <article>
                <h3>Appetizers</h3>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Spring Rolls</th>
                            <td>Fresh vegetables wrapped in rice paper</td>
                            <td>$6.95</td>
                        </tr>
                        <tr>
                            <th scope="row">Satay</th>
                            <td>Grilled chicken skewers with peanut sauce</td>
                            <td>$8.95</td>
                        </tr>
                        <tr>
                            <th scope="row">Tom Yum Soup</th>
                            <td>Spicy and sour soup with mushrooms</td>
                            <td>$9.95</td>
                        </tr>
                    </tbody>
                </table>
            </article>
            
            <article>
                <h3>Main Dishes</h3>
                <table>
                    <caption>All main dishes served with jasmine rice</caption>
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Description</th>
                            <th scope="col">Spice</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Pad Thai</th>
                            <td>Rice noodles with shrimp and peanuts</td>
                            <td>Mild</td>
                            <td>$12.95</td>
                        </tr>
                        <tr>
                            <th scope="row">Green Curry</th>
                            <td>Coconut curry with vegetables</td>
                            <td>Medium</td>
                            <td>$13.95</td>
                        </tr>
                        <tr>
                            <th scope="row">Massaman Curry</th>
                            <td>Rich curry with potatoes and peanuts</td>
                            <td>Mild</td>
                            <td>$13.95</td>
                        </tr>
                        <tr>
                            <th scope="row">Drunken Noodles</th>
                            <td>Wide noodles with Thai basil</td>
                            <td>Hot</td>
                            <td>$13.95</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="4">
                                <small>Add chicken $2 | Add shrimp $3 | Add tofu $1.50</small>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </article>
            
            <article>
                <h3>Beverages</h3>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Beverage</th>
                            <th scope="col">Small</th>
                            <th scope="col">Large</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Thai Iced Tea</th>
                            <td>$3.50</td>
                            <td>$4.50</td>
                        </tr>
                        <tr>
                            <th scope="row">Thai Iced Coffee</th>
                            <td>$3.50</td>
                            <td>$4.50</td>
                        </tr>
                        <tr>
                            <th scope="row">Fresh Coconut Water</th>
                            <td>$4.00</td>
                            <td>$5.50</td>
                        </tr>
                        <tr>
                            <th scope="row">Soft Drink</th>
                            <td>$2.50</td>
                            <td>$3.50</td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </section>
        
        <aside>
            <h3>Hours &amp; Location</h3>
            <table>
                <tbody>
                    <tr>
                        <th scope="row">Address</th>
                        <td>411 Belde Drive<br />Charlotte, NC 28201</td>
                    </tr>
                    <tr>
                        <th scope="row">Phone</th>
                        <td><a href="tel:+17045551151">704-555-1151</a></td>
                    </tr>
                    <tr>
                        <th scope="row">Mon&ndash;Fri</th>
                        <td>11am&ndash;10pm</td>
                    </tr>
                    <tr>
                        <th scope="row">Sat&ndash;Sun</th>
                        <td>12pm&ndash;11pm</td>
                    </tr>
                </tbody>
            </table>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2025 Curbside Thai. All rights reserved.</p>
    </footer>
</body>
</html>
```

---

## **Best Practices Summary**

### **Structure**
- Always use proper table structure: `<table>`, `<tr>`, `<td>`, `<th>`
- Use `<caption>` to provide table context
- Organize with `<thead>`, `<tbody>`, and `<tfoot>`
- Use `<th>` for all header cells

### **Accessibility**
- Add `scope` attribute to all `<th>` elements
- Use `id` and `headers` attributes for complex tables
- Provide meaningful captions
- Don't use tables for layout

### **Semantics**
- Only use tables for tabular data
- Use appropriate header levels (`<h2>`, `<h3>`) for table sections
- Consider whether a list or description list might be better

### **Spanning**
- Use `colspan` to span columns
- Use `rowspan` to span rows
- Be careful with spanning—ensure all rows have the same number of cells

---

## **Key Takeaways**

- **Tables** organize data into rows and columns
- **`<table>`** creates the table container
- **`<tr>`** creates table rows
- **`<td>`** creates data cells
- **`<th>`** creates header cells
- **`<caption>`** provides a table title
- **`<thead>`, `<tbody>`, `<tfoot>`** organize table sections
- **`scope`** attribute clarifies header relationships
- **`colspan`** and **`rowspan`** merge cells
- **Use tables for data only**, not page layout
- **Accessibility matters**—proper structure helps screen readers

---

## **Common Mistakes to Avoid**

- Using tables for page layout (use CSS Grid/Flexbox)
- Forgetting to close `<tr>` or `<td>` tags
- Missing `<th>` elements (using `<td>` for headers)
- Inconsistent cell counts in rows when using `colspan`/`rowspan`
- Not providing `<caption>` for context
- Using visual styling instead of semantic elements
- Forgetting `scope` attributes on headers
- Creating overly complex tables that could be simplified

---

## **Next Steps**

In Lesson 5, we'll explore:
- HTML Forms and Input Elements
- Form Validation
- Form Accessibility
- Different Input Types
- Submitting Form Data
