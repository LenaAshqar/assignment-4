# 🪄 SWE 363 – Assignment 2

> ✨ A simple, responsive **personal portfolio web application** built as part of the SWE 363 course.  
> 🌗 Featuring a **dark/light theme**, time-based greetings, project filtering and sorting, simple form validation, and modern responsive design.

--- 
## 🌍 Live Link 
### https://lenaashqar.vercel.app/

---

## 📝 Project Description

This project implements a **personal portfolio** website to showcase:
- 🧑 About section
- 💼 Projects
- 🧰 Skills
- ✉️ Contact information

### 🌟 Key Functionalities
- Responsive layout supporting mobile, tablet, and desktop.
- Dark/Light theme toggle.
- Time-based greeting (e.g., “Good morning”, “Good evening”).
- Project filtering and sorting.
- Simple frontend-only contact form.
- Clean and structured sections to highlight content effectively.

---

## 🧰 Features

| Feature                      | Description                                                 |
|------------------------------|-------------------------------------------------------------|
| 🌓 Theme Switch             | Dark ↔ Light mode toggle                                     |
| 🕒 Time Greeting            | Displays greeting message based on local time               |
| 🧑 About Section            | Basic introduction and personal info                        |
| 💼 Projects Showcase        | Highlight of personal or academic projects                   |
| 🧰 Skills Section           | Technologies and tools proficiency                          |
| ✉️ Contact Form             | Frontend only (no backend integration)                       |
| 📱 Responsive Design         | Optimized for all screen sizes                              |

---

## 🤖 AI / Assistance Usage

- 🧠 **ChatGPT** for debugging and generating boilerplate components.
- 🧭 **Codex** for refining website layout and UI structure.
- 📄 Detailed usage is documented in [`ai-usage-report.md`](./ai-usage-report.md).

---

## 📂 File Structure

    ```plaintext
    assignment-2/                    ← repository root
    ├─ .idea/                        ← IDE project settings
    ├─ assignment-2/                 ← application source lives here
    │  ├─ src/                       ← components, styles, assets, entry files
    │  │  ├─ components/             ← UI components
    │  │  ├─ assets/                 ← images, icons, etc.
    │  │  ├─ App.(js|jsx|tsx)        ← app root component
    │  │  └─ index.(js|tsx)          ← application entry point
    │  ├─ public/                    ← static files (e.g., index.html, favicon)
    │  └─ (other app files)          ← configuration or additional folders
    ├─ node_modules/                 ← installed dependencies
    ├─ .gitignore
    ├─ package.json                  ← scripts & dependencies (root)
    ├─ package-lock.json
    └─ README.md



## 🧑‍💻 Setup & Local Run
Follow these steps to run the project locally:

1. Clone the repository  
   ```bash  
   git clone https://github.com/LenaAshqar/assignment-2.git

2. Cd into the project directory
   ```bash  
   cd "/assignment-2"

3. Install npm  
   ```bash  
   npm install

4. Run npm
   ```bash  
   npm run dev    

💡 Once the server starts, open the link provided in your terminal (usually http://localhost:5173
if using Vite).

## 💬 Acknowledgments

🧭 GitDocify
for markdown styling inspiration

🤖 OpenAI (ChatGPT & Codex) for development assistance

👩‍🏫 Course instructors and peers for guidance
