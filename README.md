## 🚀 30-Day Coding Challenge: Day 8

This project is the eighth entry in my 30-day coding challenge. Today's goal was to build a beautiful and functional productivity tool, the Pomodoro Timer. This application demonstrates key JavaScript concepts for handling time-based events, managing application state, and creating a dynamic, user-friendly interface.

### 📖 Project Overview

This is a minimalist and aesthetically pleasing Pomodoro timer designed to help users manage their time effectively using the Pomodoro Technique. The application features distinct timer modes for work sessions, short breaks, and long breaks. The UI is clean and focused, with a dynamic background color that changes to match the current session type, creating a calming and productive environment.

### ✨ Live Demo & Screenshot

Below is a screenshot of the application's interface during a work session.
![Jun-16-2025 15-38-51](https://github.com/user-attachments/assets/46f99528-5ec0-403e-861b-fd25f9c8699c)


### 🌟 Key Features

* **Multiple Timer Modes:** Easily switch between "Work" (25 min), "Short Break" (5 min), and "Long Break" (15 min) sessions.
* **Dynamic Backgrounds:** The background color of the app changes to match the current session type, providing a clear visual cue.
* **Standard Timer Controls:** Includes Start, Pause, and Reset functionality for full control over the timer.
* **Real-time Display:** The timer updates every second on the screen and in the browser tab's title, so progress is always visible.
* **Audio Notifications:** Plays a subtle sound to notify the user when a session has ended.
* **Clean and Focused UI:** A minimalist design helps users stay focused without distractions.
* **Fully Responsive:** The layout is optimized for a great experience on any device.

### 💻 Technologies Used

This project was built entirely with vanilla front-end technologies.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

* **Google Fonts:** For the 'Poppins' font family.
* **Font Awesome:** For the play, pause, and reset icons.

### 🛠️ How to Run Locally

To run this project on your local machine, please follow these simple steps:

1.  **Clone the repository (or download the code):**
    ```bash
    git clone https://github.com/timothy-agboada/pomodoro-timer.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd pomodoro-timer
    ```
3.  **Open the `index.html` file in your web browser:**
    * You can simply double-click the `index.html` file, or right-click and choose "Open with" your preferred browser.

No special installations or dependencies are required.

### 🎯 Learning Objectives

This project was a valuable exercise in several core JavaScript concepts:

* **JavaScript Timers:** Mastering the use of `setInterval()` to create a countdown and `clearInterval()` to stop it.
* **State Management:** Effectively managing application state through variables like `isPaused`, `timeRemaining`, and `currentSessionTime`.
* **DOM Manipulation:** Updating text content and toggling classes in real-time to reflect the timer's state.
* **HTML Audio API:** Programmatically playing sounds in response to application events.
* **Dynamic Theming:** Using JavaScript to change CSS classes on the `<body>` element to create a dynamic and context-aware user interface.
