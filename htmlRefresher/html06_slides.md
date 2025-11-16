---
marp: true
theme: default
paginate: true
---

# HTML Lesson 6
## Tables

### Web Design
Medina County Career Center

---

## Today's Learning Objectives

- Create HTML tables
- Use table headers properly
- Understand colspan and rowspan
- Add table captions
- Use thead, tbody, tfoot
- Make tables accessible
- Know when to use tables

---

## What Are Tables For?

**✅ Use tables for:**
- Tabular data (spreadsheet-like info)
- Schedules and calendars
- Data comparisons
- Statistics

**❌ Don't use tables for:**
- Page layout (use CSS instead!)
- Navigation
- General positioning

---

## Basic Table Structure

```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
```

- `<table>` - Creates the table
- `<tr>` - Table Row
- `<th>` - Table Header cell
- `<td>` - Table Data cell

---

## Building a Simple Table

**HTML:**
```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>25</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>30</td>
  </tr>
</table>
```

---

## Table Caption

```html
<table>
  <caption>Student Grades</caption>
  <tr>
    <th>Student</th>
    <th>Grade</th>
  </tr>
  <tr>
    <td>John</td>
    <td>A</td>
  </tr>
</table>
```

**Caption appears above table**
**Always first inside `<table>`**

---

## Colspan - Spanning Columns

```html
<table>
  <tr>
    <th colspan="2">Full Width Header</th>
  </tr>
  <tr>
    <td>Cell 1</td>
    <td>Cell 2</td>
  </tr>
</table>
```

**`colspan="2"` makes cell span 2 columns wide**

---

## Rowspan - Spanning Rows

```html
<table>
  <tr>
    <td rowspan="2">Tall Cell</td>
    <td>Cell 1</td>
  </tr>
  <tr>
    <td>Cell 2</td>
  </tr>
</table>
```

**`rowspan="2"` makes cell span 2 rows tall**

---

## Table Sections

**Organize large tables:**

```html
<table>
  <thead>
    <tr><th>Header</th></tr>
  </thead>
  <tbody>
    <tr><td>Body Data</td></tr>
  </tbody>
  <tfoot>
    <tr><td>Footer/Total</td></tr>
  </tfoot>
</table>
```

---

## Accessibility with Scope

```html
<th scope="col">Column Header</th>
<th scope="row">Row Header</th>
```

**Helps screen readers understand table structure!**

---

## Table Best Practices

✅ Use `<th>` for headers  
✅ Add `<caption>` to describe table  
✅ Use scope attribute  
✅ Keep tables simple  
✅ Use thead/tbody/tfoot for organization  

❌ Don't use for layout  
❌ Don't nest tables unnecessarily  
❌ Don't make overly complex tables  

---

## Common Mistakes

**Wrong:**
```html
<table>
  <td>Missing tr</td>
</table>
```

**Right:**
```html
<table>
  <tr>
    <td>With tr</td>
  </tr>
</table>
```

---

## Quick Review

```html
<table>
  <caption>Title</caption>
  <thead>
    <tr>
      <th>Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data</td>
    </tr>
  </tbody>
</table>
```

---

## Today's Tasks

Create tables for:
1. Class schedule
2. Price comparison
3. Sports statistics
4. Contact directory
5. Complex table with colspan/rowspan
6. Multi-page site with data tables

---

## Let's Build Tables! 📊
