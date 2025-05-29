# 🍌 Banana Game

**Banana Game** is a logic-based math puzzle where players must find the correct number that matches the banana — by using arithmetic operations. The game communicates with the official [Marc Conrad Banana API](https://marcconrad.com/uob/banana/api.php) to validate the logic behind each guess.

> 🟡 The game runs both as a web app and inside Android (via Android Studio), making it a cross-platform application.

## 🎯 How it works

- A banana image is linked to a "magic" number.
- The player selects two numbers and a math operation (add, subtract, multiply, divide).
- The game sends the result to the API and checks whether it matches the correct logic.
- If the guess is correct, a success message is shown.

## 🚀 Features

- 🔗 API integration with [Marc Conrad’s Banana API](https://marcconrad.com/uob/banana/api.php)
- 🧠 Logical reasoning and arithmetic-based gameplay
- 🌍 Fully functional on both **web** and **Android devices**
- 🧩 Clean interface and responsive layout

## 🛠 Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Android WebView (tested via Android Studio)
- External API: Marc Conrad Banana API

## ⚙️ Installation (Web)

```bash
git clone https://github.com/SeuUsuario/BananaGame.git
cd BananaGame
open index.html in your browser
