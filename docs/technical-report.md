# 🧾 Technical Report – SWE 363 Assignment 3

> 📌 **Course:** SWE 363  
> 🧑 **Author:** Lena Ashqar  
> 📅 **Date:** November 2025  
> 🧭 **Project:** Responsive Portfolio Website with AI-Enhanced Features

---

## 📌 1. Introduction

This technical report outlines the **design, development, and implementation** of a responsive portfolio web application.  
The project’s primary goals were to:

- 🌗 Implement **dark/light theme toggling**
- 🕒 Add a **time-sensitive greeting**
- ✉️ Include a **frontend contact form**
- 💻 Showcase projects and skills interactively **with a filter and sort function**
- 📦 Display GitHub repositories **using the GitHub API**
- 🧭 Improve performance and reduce load time **to create a smoother experience**
- 🧠 Use AI tools to **enhance design and functionality**

AI assistance (ChatGPT + Codex) was integrated at multiple stages to improve UI design, code structure, and interactivity.

---

## 🧾 2. Requirements & Scope

### ✅ 2.1 Functional Requirements
- Display **“About”**, **“Projects”**, **“Skills”**, and **“Contact”** sections.
- Toggle between **dark and light themes**.
- Display **greeting messages** based on local time.
- Provide a **contact form** for user input (frontend only).
- Showcase **projects and skills** in a structured layout.
- **Filter projects dynamically** based on categories (e.g., “All”, “Web”, “Design”).

### ⚙️ 2.2 Non-Functional Requirements
- Responsive design (mobile, tablet, desktop).
- Clean and maintainable codebase.
- Use of modern JS/CSS practices.
- Fast UI rendering and zero unnecessary re-renders.
- Ethical and transparent use of AI tools (e.g., ChatGPT, Codex).
- Enhanced UI/UX through AI-driven suggestions.

---

## 🏗️ 3. Design & Architecture

### 🧭 3.1 Overview
- Built with **React**, following a **component-based architecture**.
- Each section (`Hero`, `About`,`Skills`, `Repositories`, `Projects`, `Contact`) is a **modular component**.
- Theme state and project filters are managed in the **top-level `App` component**.
- AI-assisted redesign improved layout consistency and responsiveness.



### 🌗 3.2 Theme Toggle Design
- Theme state stored at the `App` level.
- Toggle button updates state between `light` and `dark`.
- CSS variables dynamically update global color schemes.
- AI-assisted improvements enhanced accessibility and color contrast ratios.


### 🕒 3.3 Time-based Greeting Logic
- Runs on mount to detect local hour:
  ```js
  const hour = new Date().getHours();
  let greeting = "";
  if (hour < 12) greeting = "Good morning";
  else if (hour < 18) greeting = "Good afternoon";
  else greeting = "Good evening";
  
- Greeting is displayed dynamically in the header/About section.

### ✉️ 3.4 Contact Form  
- Basic form component: name, email, message fields  
- Frontend validation (required fields, email format)  
- Email format validation using simple regex.
- Displays a thank-you message on valid submit.
- No backend submission  

### 🧭 3.5 Project Filtering (AI-Enhanced)
- AI-generated logic allows users to filter projects by category.
- Implemented using state and a simple filter function:
    ```js
        const [selectedCategory, setSelectedCategory] = useState('All');
        const filteredProjects = projects.filter(
        project => selectedCategory === 'All' || project.category === selectedCategory);
- Filter buttons dynamically render available categories.

### 📦 3.6 GitHub API Integration

The GithubAPI component uses GitHub’s public API to list repositories.This includes:
- Loading states
- Basic caching logic
- Error fallback UI

### 📱 3.7 Responsiveness & Layout  
- CSS Media queries for small, medium, large breakpoints  
- Flexbox and/or CSS Grid used for layout  
- Mobile first design: single column, then multi-column at larger widths  
- AI assisted in redesigning layout spacing, breakpoints, and section alignment for better UI balance.


---

## 🧰 4. Implementation Details  
- Source code in `src/` directory, with subfolders for components, styles, and assets  
- Theme styles: CSS variables switched based on a class on the `body` or root element  
- Greeting logic:
  ```js
  const hour = new Date().getHours();
  let greeting = "";
  if (hour < 12) greeting = "Good morning";
  else if (hour < 18) greeting = "Good afternoon";
  else greeting = "Good evening";
- Contact form: simple form with input and textarea; on submit, validation runs and then displays “Thank you for reaching out!” message
- Theme toggle: CSS variables + body class switching.
- Project filter: Simple stateful filtering integrated into Projects component.
- Performance testing: Used Lighthouse to test how performance varies with each edit.
- AI use: Codex generated initial layout grid + improved color theme handling.


---

## 🧪 5.  Testing & Validation

- Verified responsiveness by resizing browser window 

- Theme toggle tested across components

- Greeting message verified across times of day

- Contact form validated for required fields and email format


---

## 🧠 6. Challenges & Solutions

- Challenge: Ensuring theme switch persists across page reloads
- Solution: Store theme in localStorage


- Challenge: Layout issues on small screens
- Solution: Added media query for single-column layout


- Challenge: Greeting logic and timezone awareness
- Solution: Used simple local system hours

---

## 🚀 7. Future Work

- Implement backend for contact form
- Smooth page transition animations


---