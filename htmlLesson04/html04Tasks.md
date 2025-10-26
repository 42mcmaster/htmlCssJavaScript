# **Lesson 4 Tasks: HTML Tables**

## **Setup Instructions**

Before starting these exercises:
1. Create a new folder called `html-lesson4` on your computer
2. Open your text editor
3. Save each exercise as a separate `.html` file
4. Open the files in your web browser to test them

---

## **Task 1: Basic Table Creation**

**Objective:** Create a simple table with rows and cells.

**Instructions:**
1. Create a file called `basic-table.html`
2. Build a table showing your favorite books with:
   - Three columns: Title, Author, Year
   - At least 4 rows of data
   - Proper table structure

**Starter Code:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>My Favorite Books</title>
</head>
<body>
    <h1>My Favorite Books</h1>
    
    <table>
        <!-- Add your table rows here -->
    </table>
</body>
</html>
```

**Success Criteria:**
- Table has proper structure (table, tr, td)
- All tags are properly closed
- At least 4 rows of data
- Table displays correctly in browser

---

## **Task 2: Adding Table Headers**

**Objective:** Use `<th>` elements to create header rows.

**Instructions:**
1. Create `table-with-headers.html`
2. Create a weekly schedule table with:
   - First row containing headers: Time, Monday, Tuesday, Wednesday, Thursday, Friday
   - At least 4 time slots (e.g., 9:00 AM, 10:00 AM, etc.)
   - Fill in activities for each time slot

**Example Structure:**
```html
<table>
    <tr>
        <th>Time</th>
        <th>Monday</th>
        <!-- Add more day headers -->
    </tr>
    <tr>
        <td>9:00 AM</td>
        <td>Math Class</td>
        <!-- Add more activities -->
    </tr>
    <!-- Add more time slot rows -->
</table>
```

**Success Criteria:**
- First row uses `<th>` elements
- Headers are visually distinct from data cells
- Schedule is complete and logical
- Proper table structure throughout

---

## **Task 3: Using Table Captions**

**Objective:** Add captions to provide context for tables.

**Instructions:**
1. Create `product-prices.html`
2. Create a product price table with:
   - A descriptive caption
   - Headers: Product Name, Size, Price
   - At least 5 products (use any products you like)

**Example:**
```html
<table>
    <caption>Tech Store Product Prices - October 2025</caption>
    <tr>
        <th>Product Name</th>
        <th>Size</th>
        <th>Price</th>
    </tr>
    <!-- Add product rows -->
</table>
```

**Success Criteria:**
- Caption is the first child of `<table>`
- Caption provides meaningful context
- Table has proper headers
- At least 5 product rows

---

## **Task 4: Table Sections**

**Objective:** Use `<thead>`, `<tbody>`, and `<tfoot>` to organize table content.

**Instructions:**
1. Create `sales-report.html`
2. Create a sales report table with:
   - Caption: "Monthly Sales Report"
   - `<thead>` with column headers: Month, Revenue, Expenses, Profit
   - `<tbody>` with data for 6 months
   - `<tfoot>` with totals row

**Structure Template:**
```html
<table>
    <caption>Monthly Sales Report</caption>
    
    <thead>
        <!-- Header row here -->
    </thead>
    
    <tbody>
        <!-- Data rows here -->
    </tbody>
    
    <tfoot>
        <tr>
            <th>Total</th>
            <td>$X,XXX</td>
            <td>$X,XXX</td>
            <td>$X,XXX</td>
        </tr>
    </tfoot>
</table>
```

**Success Criteria:**
- All three sections present (thead, tbody, tfoot)
- Headers in thead
- At least 6 months of data in tbody
- Totals calculated correctly in tfoot
- Use `<th>` for "Total" label

---

## **Task 5: Using Scope Attributes**

**Objective:** Add `scope` attributes for accessibility.

**Instructions:**
1. Create `accessible-table.html`
2. Create a nutrition facts table with:
   - Column headers with `scope="col"`
   - Row headers with `scope="row"`
   - Nutrients: Calories, Fat, Sodium, Protein, Sugar
   - Compare 3 different foods

**Example:**
```html
<table>
    <caption>Nutritional Comparison</caption>
    <thead>
        <tr>
            <th scope="col">Nutrient</th>
            <th scope="col">Food 1</th>
            <th scope="col">Food 2</th>
            <th scope="col">Food 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Calories</th>
            <td>250</td>
            <td>180</td>
            <td>310</td>
        </tr>
        <!-- Add more nutrient rows -->
    </tbody>
</table>
```

**Success Criteria:**
- All column headers use `scope="col"`
- All row headers use `scope="row"`
- At least 5 nutrients compared
- Data is realistic and complete

---

## **Task 6: Column Spanning**

**Objective:** Use `colspan` to merge cells horizontally.

**Instructions:**
1. Create `colspan-practice.html`
2. Create a class schedule table with:
   - A title row spanning all columns
   - Headers: Day, Morning Class, Afternoon Class
   - At least 5 days of classes
   - One row where a class spans both morning and afternoon

**Example:**
```html
<table>
    <tr>
        <th colspan="3">Fall 2025 Class Schedule</th>
    </tr>
    <tr>
        <th>Day</th>
        <th>Morning Class</th>
        <th>Afternoon Class</th>
    </tr>
    <tr>
        <td>Monday</td>
        <td colspan="2">All-Day Workshop</td>
    </tr>
    <!-- Add more days -->
</table>
```

**Success Criteria:**
- Title row spans all columns
- At least one row with colspan for a special event
- Proper column alignment
- No missing or extra cells

---

## **Task 7: Row Spanning**

**Objective:** Use `rowspan` to merge cells vertically.

**Instructions:**
1. Create `rowspan-practice.html`
2. Create a restaurant menu with sections:
   - Use `rowspan` for category headers (Appetizers, Main Dishes, Desserts)
   - Each category should have 3-4 items
   - Include item name and price

**Example:**
```html
<table>
    <caption>Restaurant Menu</caption>
    <tr>
        <th rowspan="3">Appetizers</th>
        <td>Spring Rolls</td>
        <td>$6.95</td>
    </tr>
    <tr>
        <td>Soup</td>
        <td>$5.95</td>
    </tr>
    <!-- Continue pattern -->
</table>
```

**Success Criteria:**
- Category headers use `rowspan`
- Each category has 3-4 items
- Prices are formatted consistently
- Table structure is correct

---

## **Task 8: Complex Table with Spanning**

**Objective:** Combine `colspan` and `rowspan` in one table.

**Instructions:**
1. Create `complex-schedule.html`
2. Create a conference schedule with:
   - Title spanning all columns
   - Time slots in first column
   - Room columns
   - Some sessions spanning multiple time slots (use `rowspan`)
   - Lunch break spanning all rooms (use `colspan`)

**Sample Structure:**
```html
<table>
    <caption>Tech Conference Schedule</caption>
    <tr>
        <th colspan="4">Annual Developer Conference 2025</th>
    </tr>
    <tr>
        <th>Time</th>
        <th>Room A</th>
        <th>Room B</th>
        <th>Room C</th>
    </tr>
    <tr>
        <td>9:00 AM</td>
        <td rowspan="2">Keynote Speech</td>
        <td>Workshop</td>
        <td>Tutorial</td>
    </tr>
    <tr>
        <td>10:00 AM</td>
        <td>Session 1</td>
        <td>Session 2</td>
    </tr>
    <tr>
        <td>12:00 PM</td>
        <td colspan="3">Lunch Break</td>
    </tr>
    <!-- Add more time slots -->
</table>
```

**Success Criteria:**
- Uses both `colspan` and `rowspan`
- At least 6 time slots
- Logical schedule layout
- All cells accounted for (no gaps or overlaps)

---

## **Task 9: Comparison Table**

**Objective:** Create a product comparison table.

**Instructions:**
1. Create `product-comparison.html`
2. Compare 3 smartphone models with:
   - Caption
   - Proper table sections
   - Features to compare: Screen Size, Camera, Storage, Battery, Price
   - Use `scope` attributes
   - Highlight one feature that spans multiple phones (like "All include 5G")

**Features to Include:**
- Screen size (inches)
- Camera megapixels
- Storage options
- Battery life (hours)
- Price

**Success Criteria:**
- Three products compared
- At least 5 features
- Uses `thead`, `tbody`, `tfoot`
- Scope attributes on all headers
- Professional formatting

---

## **Task 10: Restaurant Menu Page**

**Objective:** Create a complete menu page with multiple tables.

**Instructions:**

Create `restaurant-menu.html` with:

**Header:**
- Restaurant name and tagline
- Navigation (Home, Menu, About, Contact)

**Main Content:**
Three separate tables, each in its own `<article>`:

1. **Appetizers Table**
   - Item, Description, Price
   - At least 4 items

2. **Main Dishes Table**
   - Item, Description, Spice Level, Price
   - At least 6 items
   - Footer note about dietary options

3. **Beverages Table**
   - Beverage, Small, Large
   - At least 4 items

**Aside:**
- Hours table (Days, Hours)

**Footer:**
- Copyright and contact info

**Success Criteria:**
- Complete page structure with semantic elements
- Three properly formatted tables
- All tables use captions
- Proper use of `thead`, `tbody`, `tfoot`
- Scope attributes on all headers
- Professional appearance

---

## **Task 11: Schedule with Contact Info**

**Objective:** Create a weekly schedule and contact directory.

**Instructions:**

Create `office-schedule.html` with two tables:

**Table 1: Office Hours**
- Days of week
- Opening hours
- Closing hours
- Use `rowspan` for weekend if closed both days

**Table 2: Staff Directory**
- Name, Position, Phone, Email
- At least 5 staff members
- Phone numbers as clickable links
- Email addresses as clickable links
- Use `scope` attributes

**Example:**
```html
<section>
    <h2>Office Hours</h2>
    <table>
        <!-- Office hours table -->
    </table>
</section>

<section>
    <h2>Staff Directory</h2>
    <table>
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Position</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">John Smith</th>
                <td>Manager</td>
                <td><a href="tel:+15551234567">(555) 123-4567</a></td>
                <td><a href="mailto:john@example.com">john@example.com</a></td>
            </tr>
            <!-- More staff members -->
        </tbody>
    </table>
</section>
```

**Success Criteria:**
- Two complete tables
- Links work correctly (tel: and mailto:)
- Proper semantic structure
- Accessibility features included

---

## **Task 12: E-commerce Product Table**

**Objective:** Create a shopping cart table.

**Instructions:**

Create `shopping-cart.html` showing:

**Table Structure:**
- Caption: "Shopping Cart"
- Columns: Product, Quantity, Price, Subtotal
- At least 4 products
- Use `tfoot` for:
  - Subtotal row
  - Tax row
  - Shipping row
  - Total row
- Make product names links
- Use `scope` attributes

**Example Footer:**
```html
<tfoot>
    <tr>
        <th colspan="3" scope="row">Subtotal</th>
        <td>$XX.XX</td>
    </tr>
    <tr>
        <th colspan="3" scope="row">Tax (8%)</th>
        <td>$X.XX</td>
    </tr>
    <tr>
        <th colspan="3" scope="row">Shipping</th>
        <td>$5.00</td>
    </tr>
    <tr>
        <th colspan="3" scope="row">Total</th>
        <td><strong>$XX.XX</strong></td>
    </tr>
</tfoot>
```

**Success Criteria:**
- All calculations correct
- Footer properly formatted
- Product links work
- Professional appearance
- Proper use of `colspan` in footer

---

## **Task 13: Debugging Exercise**

**Objective:** Find and fix table structure errors.

**Instructions:**

Copy this code into `debug-tables.html` and fix all **10 errors**:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Debug Tables</title>
</head>
<body>
    <h1>Product Catalog</h1>
    
    <table>
        <caption>Our Products
        
        <thead>
            <tr>
                <th>Product</th>
                <th>Price
                <th>Stock</th>
            </tr>
        
        <tbody>
            <tr>
                <td>Widget</td>
                <td>$10</td>
                <td>50</td>
            <tr>
                <td>Gadget
                <td>$15</td>
                <td>30</td>
            </tr>
            <tr>
                <td>Doohickey</td>
                <td colspan="3">$20</td>
                <td>20</td>
            </tr>
        </tbody>
        
        <tfoot>
            <tr>
                <td>Total Items</td>
                <td>100</td>
            </tr>
        </thead>
    </table>
</body>
</html>
```

**Questions to Answer:**
1. List all errors you found
2. What are the proper closing tags?
3. Which spanning attribute is incorrect?
4. What's wrong with the section order?
5. How many table cells should each row have?

---

## **Task 14: Timetable with Notes**

**Objective:** Create a complex timetable with merged cells.

**Instructions:**

Create `class-timetable.html` with:
- 5 days (Monday-Friday)
- 6 time periods
- Different subjects
- Use `rowspan` for double period classes
- Use `colspan` for assembly that takes place across multiple days
- Add a footer note about breaks

**Example Pattern:**
```html
<tr>
    <td>9:00-10:00</td>
    <td>Math</td>
    <td rowspan="2">Science Lab</td>
    <td>English</td>
    <td>History</td>
    <td>Math</td>
</tr>
<tr>
    <td>10:00-11:00</td>
    <td>Math</td>
    <!-- Science continues from previous row -->
    <td>English</td>
    <td>History</td>
    <td>PE</td>
</tr>
```

**Success Criteria:**
- Uses both spanning techniques
- Schedule makes logical sense
- All cells properly aligned
- Footer with useful information

---

## **Task 15: Multi-Page Menu System**

**Objective:** Create a connected multi-page menu system.

**Instructions:**

Create three connected pages:

**1. menu-home.html**
- Navigation to all three pages
- Overview table with categories and item counts

**2. menu-food.html**
- Full food menu with multiple tables (appetizers, mains, desserts)
- Each table properly structured

**3. menu-drinks.html**
- Beverage table with sizes and prices

**Requirements:**
- Consistent navigation on all pages
- All tables use proper structure
- Links between pages work correctly
- Professional consistent styling
- Accessibility features throughout

---

## **Self-Assessment Checklist**

After completing these tasks, you should be able to:

- [ ] Create basic table structures with `<table>`, `<tr>`, `<td>`
- [ ] Use `<th>` for header cells
- [ ] Add captions to provide context
- [ ] Organize tables with `<thead>`, `<tbody>`, `<tfoot>`
- [ ] Use `scope` attributes for accessibility
- [ ] Span columns with `colspan`
- [ ] Span rows with `rowspan`
- [ ] Combine spanning techniques
- [ ] Create complex multi-section tables
- [ ] Ensure tables are accessible
- [ ] Know when NOT to use tables

---

## **Extension Activities**

Ready for more challenges?

1. **Periodic Table:** Create a simplified periodic table with element symbols, names, and atomic numbers

2. **Sports League Table:** Create a standings table with team names, games played, wins, losses, and points

3. **Course Catalog:** Build a college course catalog with course codes, titles, credits, and prerequisites

4. **Financial Statement:** Create a balance sheet with assets, liabilities, and equity sections

5. **Event Calendar:** Make a monthly calendar using a table with dates and events

6. **Comparison Matrix:** Create a feature comparison for 5 products with 10+ features

---

## **Common Mistakes to Avoid**

- Forgetting to close `</tr>`, `</td>`, or `</th>` tags
- Using tables for layout instead of data
- Inconsistent cell counts when using `colspan` or `rowspan`
- Missing `<caption>` for context
- Not using `<th>` for headers
- Forgetting `scope` attributes
- Incorrect `colspan` or `rowspan` values
- Not testing accessibility
- Mixing up `<thead>`, `<tbody>`, `<tfoot>` order
- Using `<td>` instead of `<th>` for headers

---

## **Best Practices Review**

**Table Structure Checklist:**
- ✓ Use `<table>` as container
- ✓ Every row is a `<tr>`
- ✓ Use `<th>` for all headers
- ✓ Add `<caption>` for context
- ✓ Organize with `<thead>`, `<tbody>`, `<tfoot>`
- ✓ Include `scope` attributes
- ✓ Test with spanning cells
- ✓ Verify accessibility

**Accessibility Checklist:**
- ✓ All headers use `<th>` not `<td>`
- ✓ All `<th>` elements have `scope`
- ✓ Caption provides meaningful context
- ✓ Complex tables use `id` and `headers`
- ✓ Table is linear and logical
- ✓ Not used for layout

---

## **Testing Your Tables**

**Visual Testing:**
1. Open in browser
2. Check alignment
3. Verify all content displays
4. Test links (if any)
5. Check spanning cells

**Structure Testing:**
1. View page source
2. Check all tags are closed
3. Verify proper nesting
4. Confirm section order

**Accessibility Testing:**
1. Use browser developer tools
2. Check heading structure
3. Verify scope attributes
4. Test with screen reader (if available)

---

## **Next Steps**

Once you've completed these exercises, you're ready for Lesson 5, where we'll explore:
- HTML Forms and Input Elements
- Text inputs, textareas, and buttons
- Radio buttons and checkboxes
- Select dropdowns
- Form validation
- Accessible forms
