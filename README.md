# Kanban Board

A drag-and-drop Kanban Board to manage tasks efficiently, built with React and React Beautiful DnD. This project supports task creation, task reordering, and column deletion and persistent state using localStorage.

# 🛠 Technology Choices and Rationale
## Frontend
- **React:** Chosen for its component-based architecture and state management.
- **React Beautiful DnD:** Provides a robust drag-and-drop API with accessibility in mind.
- **Bootstrap:** Simplifies responsive UI design with prebuilt classes and components.

## State Management
- **useLocalStorage Hook:** Keeps the Kanban state persistent between page refreshes without requiring a backend.

## Why These Choices?
- **Ease of Maintenance:** React's modular structure simplifies scaling and refactoring.
- **Performance:** React Beautiful DnD offers optimized DOM re-renders during drag-and-drop.
- **User Experience:** Bootstrap helps deliver a responsive, visually appealing design with minimal effort.

# Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Baish34/kanban.git

2. Install dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm start

# ⚠️ Known Limitations / Trade-offs

1. **LocalStorage-Based Persistence**
   - **Limitation:** LocalStorage is not ideal for large-scale data storage or collaborative features.
   - **Trade-off:** We avoided backend complexity, focusing on simplicity for local testing.

2. **No Authentication**
   - **Limitation:** This app is for single-user use only. Tasks cannot be shared or synced across devices or users.
   - **Trade-off:** Excluding authentication reduces complexity but limits app scalability.

# 🚀 Future Improvements

1. **Backend Integration**
   - Replace `localStorage` with a backend API for data persistence and multi-user functionality.

2. **Real-Time Collaboration**
   - Enable multiple users to edit the Kanban Board simultaneously using WebSockets.

3. **Task Enhancements**
   - Add task descriptions, due dates, and tags for better task organization.

4. **Dark Mode**
   - Introduce a toggle for light/dark themes.

