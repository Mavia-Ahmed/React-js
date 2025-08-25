## 🔹 What are Lists in React?
React mein jab tumhe multiple data items render karne ho (jaise array of names, products, students), toh tum JavaScript ke map() method ka use karte ho.

### in example 1
✅ Yahaan map() array ke har element ko <li> mein convert kar raha hai.  
✅ key prop zaroori hai warna React warning deta hai.


## 🔹 What are Keys in React?
- Key ek unique identifier hoti hai har list item ke liye.  
- React ko keys isliye chahiye hoti hain taake wo efficiently track kar sake kis item ko add/update/delete karna hai.  
⚠️ Agar tum index ko key bana do toh chhoti lists ke liye chalega, lekin dynamic data (add/remove) ke case mein unique IDs best hoti hain.


### in example 2
✅ Yahaan student.id ko key banaya hai → best practice

