# Expense Tracker App

## Overview
A React-based Expense Tracker that helps manage monthly salary and expenses.  
Users can add, edit, and delete expenses while keeping track of the remaining balance.  
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-brightgreen)](https://react-js-6gnl.vercel.app/)


## Features
- Set monthly salary  
- Add expenses with **date, item name, and amount**  
- View expenses in a structured table  
- Edit or delete expenses  
- Automatic balance calculation  


## Technologies Used
- **React** (UI & state management)  
- **Context API** (global state sharing)  
- **CSS** (styling)  


## Project Structure
```
Expense-Tracker/
│── src/
│   ├── components/
│   │   ├── ExpenseForm.jsx
│   │   ├── ExpenseList.jsx
│   │   └── SalaryInput.jsx
│   ├── context/
│   │   └── ExpenseContext.jsx
│   ├── App.jsx
│   └── App.css
│── package.json
│── README.md

```


## Installation & Setup
### Clone repository
```
git clone "https://github.com/Mavia-Ahmed/React-js/tree/main/practice-projects/A-Expense-tracker-app"
cd Expense-Tracker
```

### Install dependencies
```
npm install
```

### Start development server
```
npm start
```

### Open in browser
```
http://localhost:3000
```


## Usage
1. Enter you monthly salary  
2. Add an expense with date, item and amount  
3. See all expenses in the table  
4. Edit or delete any expense  
5. Remining balance update automatically


## Future Enhancements
- Save data in localStorage
- Add expense categories (food, travel, bills, etc.)
- Visual insights with charts


## License
This project is open-source under the MIT License.
