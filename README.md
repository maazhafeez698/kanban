# Kanban Board

A minimal and responsive Kanban task management application built using pure HTML, CSS, and JavaScript.

The project provides a simple workflow to create, organize, and manage tasks using a Kanban-style board.

## Preview

<p align="center">
  <img src="assets/light-mode.png" width="48%" />
  <img src="assets/dark-mode.png" width="48%" />
</p>

## Live Demo

https://kanban-teal-six.vercel.app/

## Features

- Create, update, and delete tasks
- Drag and drop tasks between columns
- Task priority management (High, Medium, Low)
- Category and due date support
- Search tasks instantly
- Dark/light theme toggle
- LocalStorage persistence
- Priority-based task arrangement
- Responsive layout with independent column scrolling

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- LocalStorage API

## Project Structure

```text
Kanban-Board/
│
├── assets/
│   ├── favicon.svg
│   ├── light-mode.png
│   └── dark-mode.png
│
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── components.css
│   └── style.css
│
├── js/
│   ├── data.js
│   ├── storage.js
│   ├── ui.js
│   ├── tasks.js
│   ├── modal.js
│   ├── drag.js
│   ├── search.js
│   ├── theme.js
│   └── app.js
│
├── index.html
│
└── README.md
```

## How It Works

- Tasks are stored in the browser using the LocalStorage API.
- JavaScript dynamically renders tasks and updates the board.
- Drag and drop changes task status between columns.
- Theme selection and task data persist after refreshing.

## Purpose

This project was built to practice frontend fundamentals such as:

- DOM manipulation
- Event handling
- State management
- Dynamic UI rendering
- Building interactive applications without frameworks

## License

This project is open-source and available for learning and personal use.