# 🍽️ Eat-n-Split — Bill Splitting App

Eat-n-Split is a simple and interactive **bill-splitting React application** that helps users track shared expenses with friends. It allows adding friends, splitting bills, and clearly showing who owes whom — all implemented using clean React state management and reusable components.

## 🚀 Live Demo

👉 **Netlify Deployment:** https://ahish-eat-n-split.netlify.app/
👉 **GitHub Repository:** https://github.com/T-Ahish/eat-n-split

## 🎯 Features

- Add friends with name and avatar
- Select a friend to split expenses
- Enter bill amount and personal expense
- Automatically calculate balances
- Track who owes whom and how much
- Toggle friend selection state
- Clean user interface
- Reusable button and form components

## 🧠 What I Learned

This project helped strengthen core React concepts, including:

- Managing component state using `useState`
- Lifting state up and sharing it across components
- Conditional rendering based on application state
- Controlled form inputs and validation
- Handling derived state for bill calculations
- Component decomposition and reusability
- Event handling and form submission patterns
- Writing readable and maintainable UI logic

## 🛠️ Tech Stack

- React (Create React App)
- JavaScript (ES6+)
- HTML5
- CSS3

## 📁 Project Structure

```
src/
  components/
    Button.js
    FormAddFriend.js
    FormSplitBill.js
    Friend.js
    FriendsList.js
  index.js
  App.js
  index.css
public/
  index.html
  manifest.json
  robots.txt
```

## ▶️ Getting Started

Clone the repository:

```bash
git clone https://github.com/T-Ahish/eat-n-split.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

The application will be available at:

```
http://localhost:3000
```

## 📸 Screenshots

Add screenshots here for better visual presentation.

Example:

```
./screenshots/eat-n-split-1.png
./screenshots/eat-n-split-2.png
./screenshots/eat-n-split-2.png
```

## ✅ Possible Improvements

- Persist friend and balance data using localStorage
- Add edit and delete friend functionality
- Improve form validation and error handling
- Support multiple currencies
- Refactor state management using Context API or `useReducer`

## 📜 License

This project is licensed under the **MIT License**.

## ⭐ Author

**Ahish T**  
Frontend Engineer | React | Next.js | TypeScript  
GitHub: https://github.com/T-Ahish  
LinkedIn: https://www.linkedin.com/in/ahish-t

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss improvements.
