# 🤖 AI Usage Report 
> 📂 Purpose: Document AI-assisted development throughout this assignment.

---

## 🧰 1. Tools Used

| Tool                                    | Purpose                                       | Role in Development                                        |
|-----------------------------------------|-----------------------------------------------|------------------------------------------------------------|
| 💬 **ChatGPT**                          | Debugging, Documentation                      | Primary assistant for README, and styling                  |
| 🧠 **ChatGPT-Codex**                    | Design implementation, Code generation        | Main tool used for enhancing design and implementing logic |
| 🤖 **GitHub Copilot** *(implicit)*      | Inline code completion                        | Accelerated writing of repetitive UI/JS code               |
| 🧭 **GitDocify (Styling)**              | Readme & documentation formatting inspiration | Ensured professional and structured documentation style    |
| 🧭 **Reactbits** | Ready made components                         | Provided well made and nicely animated components          |

---

## 💡 2. Use Cases

| Category                | Description                                                                                     | Example                                                          |
|--------------------------|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| 🧠 Code Generation       | Generated base structure for components and theme toggle logic                                  | Codex generated time-based greeting logic and toggle button code |
| 🐞 Debugging             | Identified and fixed layout and responsive issues                                               | Used AI to fix CSS media query bugs                              |
| 📝 Documentation         | Wrote README.md and Technical Report in structured, polished style                              | GitDocify-inspired documentation created with ChatGPT            |
| 🧭 Design                | Generated code from example portfolio sites with the goal of applying the design to my own code | Upgraded styling from basic implementation to polished design    |
| ✨ Accessibility         | AI suggested adding ARIA labels and semantic HTML elements                                      | Improved screen reader compatibility                             |
| 🧠 Enhancement Feature   | Used AI to draft smart greeting message logic + auto text suggestions in form fields            | “Good morning, how can I help you today?” greeting in header     |

---

## ⚡ 3. Benefits of Using AI

- 🚀 **Faster Development:** Reduced time spent on writing repetitive UI.
- ✍️ **Professional Documentation:** AI assistance helped craft clear, consistent, and well-structured README and reports.
- 🧭 **Better Design Decisions:** AI offered practical UX improvements like spacing adjustments, responsive breakpoints, and accessibility suggestions.
- 🧠 **Learning by Doing:** Reviewing AI-suggested solutions improved understanding of React components, DOM manipulation, and CSS organization.
- 📊 **Feature Enhancement:** Integrated AI-suggested greeting logic and text suggestions in the contact form.
- ⚡ UI became cleaner and more responsive after AI-assisted redesign.

---

## 🧱 4. Challenges Encountered

| Challenge                                | Description                                                                                      | Resolution                                                                 |
|-------------------------------------------|--------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| 🧩 Overgeneralized Suggestions           | AI sometimes generated overly complex structures not suitable for the project scope             | Simplified and adapted AI outputs manually                                 |
| 🧭 Styling Conflicts                     | AI’s suggestions occasionally clashed with existing CSS rules                                    | Reviewed CSS manually and merged only necessary parts                      |
| 🧠 Maintaining Understanding             | Needed to ensure comprehension of generated code                                                | Rewrote or annotated AI code to match learning goals                        |
| ⚡ Prompt Engineering                    | Getting precise outputs required carefully structured prompts                                  | Iteratively refined prompts until results were aligned with requirements   |

---

## 🧭 5. Learning Outcomes

- 🧠 **Prompt Engineering:** Learned how to craft clear prompts to get targeted code or text from AI.
- 🧰 **Code Review Mindset:** Evaluated and modified AI code to ensure alignment with project standards.
- ✨ **Documentation Skills:** Gained experience producing professional-grade documentation using AI guidance.
- ♿ **Accessibility Awareness:** Understood the importance of small UI/UX improvements for inclusive design.
- 📈 **Responsible Use of AI:** Treated AI as a **learning assistant**, not a code replacement.

---

## 🧠 6. AI Enhancement Feature in the Portfolio

### **Feature:** 💬 *----------- NEW ----------* *GitHub Repository API*      
- **AI Usage:** ChatGPT provided the code to integrate GitHub API into the portfolio..
- **Implementation:**
    - I provided the code to my project cards component and explained that I wanted a similar looking component to display my repositories.
    - AI-generated a component with the GitHub API fetching logic and matching UI to the projects section.
- **Prompt:** Given this project card component I want to create a similar component that displays my latest GitHub repositories using the GitHub API.
- **Value:** Gives the portfolio a better looking design than what I can come up with on my own.

###
### **Feature:** ✨ *UI Design*
- **AI Usage:** Codex took my already existing project and changed the design to match the example sites I provided.
- **Implementation:**
    - I provided the link to my repository and some portfolio sites I liked the designs of.
    - AI-generated a version of my code with design elements that match what I was aiming for without strictly copying the examples I provided.
- **Prompt:** Transform the portfolio in this repository to match the following example sites in terms of design without strictly copying any of them. (After this I did not need to include my repository link with other prompts.)
- **Value:** Fetching GitHub projects make the portfolio feel “live” and up-to-date.

###
### **Feature:** 🕒 *Smart Greeting*
- **AI Usage:** Codex generated dynamic greeting logic and suggested contextual form helper text.
- **Implementation:**
    - Greeting changes based on local time (`Good morning`, `Good afternoon`, `Good evening`).
    - AI-drafted placeholder/help text for contact form fields (e.g., “Write your message here…”).
- **Prompt:** Implement a smart greeting that changes based on time of day.
- **Value:** Makes the portfolio more interactive and personalized while enhancing user experience.

###
### **Feature:** 📝 *Form Assistance*
- **AI Usage:** Codex generated contextual form helper text and input validation.
- **Implementation:**
    - Form validation to prevent empty inputs and invalid emails.
    - AI generated the logic for the validation and implemented style elements that match the already existing design.
- **Prompt:** Implement a simple front-end only form validation on the already provided form in the contact section.
- **Value:** Also makes the portfolio more interactive while enhancing user experience.

###
### **Feature:** 💡 *Light/Dark Theme Toggles*
- **AI Usage:** Codex generated logic to implement a light/dark theme toggle.
- **Implementation:**
    - Toggle state is stored in local storage to remember the preferred state on refresh.
    - AI helped in providing the logic and refining CSS classes and introducing variables to easily switch between themes.
- **Prompt:** Include a light/dark theme button in the nav bar and implement any necessary logic.
- **Value:** Another way to introduce interactivity to the portfolio and improve UX.

###
### **Feature:** 🧩 *Project Filtering and Sorting*
- **AI Usage:** Codex generated filter and sort buttons that match the portfolio's design with easy to expand logic.
- **Implementation:**
    - Filters are dynamically generated based on categories provided in the project cards and sorting works in three ways based date and title.
    - AI suggested the dynamic filter creation and provided the logic for both filters and sorting and I modified it to match my code.
- **Prompt:** Implement a dynamic way to filter and sort through projects.
- **Value:** Makes the portfolio easier to traverse thus impacting user experience positively.

###
### **Feature:** ✍️ *Debugging issues from integrating Reactbits components*
- **AI Usage:** ChatGPT debugged any issues faced while integrating Reactbits components and helped in component customization.
- **Implementation:**
    - Component code is provided on Reactbits website and I integrated it on my own at first then fixed any reference or styling issues.
    - AI found the parts in my code causing errors and suggested multiple solutions which I then chose from depending on what best matches my code.
- **Prompt:** either a copy of errors messages and relevant code or screenshots of unwanted element layout and what style elements to use or change
- **Value:** Saves time on code debugging.
---

## ⚖️ 7. Ethical Considerations

- ✅ AI was **not** used to submit unmodified code.
- 🧠 All AI outputs were **reviewed**, **understood**, and **refactored** where necessary.
- ✍️ Documentation transparently acknowledges AI contributions.
- ⚖️ AI served as a **learning aid**, not a replacement for human understanding.

---

## 🏁 8. Summary

This project demonstrates how **AI can be responsibly and effectively integrated** into a front-end web development workflow.  
From generating base components to enhancing documentation quality, AI provided value at multiple stages:

- 💡 **Faster development**
- ✨ **Improved design and accessibility**
- 🧠 **Better learning outcomes**
- 📝 **Cleaner documentation**
