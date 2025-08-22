# React Props (Concepts & Practice)

This folder contains different ways to use **props** in React.  
Props are used to pass data **from parent to child components**.

## 🔑 What are Props?
- Props stand for **Properties**.
- They allow components to be **reusable** with different data.
- Props are **read-only** (cannot be modified by the child component).

---

## 📚 Types of Props Covered

1. **Basic Props (Parent → Child)**
   - Passing simple values like strings, numbers, and images.

2. **Props with Destructuring**
   - Accessing props directly inside child component using  
     ```js
     function Student({name, age}) { ... }
     ```

3. **Data from a Separate File**
   - Importing an array of objects from `data.js` and passing data using index `[0]`.

4. **Props with find()**
   - Finding a specific object from an array and passing it as a prop.

5. **Passing Objects**
   - Passing an entire object as a single prop (e.g., `<Student info={student} />`).

6. **children Prop**
   - Special prop used to pass **nested elements** inside a component.

---

## 🚀 Next Step
After understanding these props techniques, the next important concept is **rendering multiple components dynamically using `map()`**.

---

✅ This repo is structured so each folder has **isolated practice** for one type of props.
