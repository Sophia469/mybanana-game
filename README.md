# 🍌 Banana Game

**Banana Game** is a logic-based math puzzle where players must find the correct number that matches the banana — by performing arithmetic operations. The game communicates with the official [Marc Conrad Banana API](https://marcconrad.com/uob/banana/api.php) to validate each guess.

> 🟡 This game runs both as a **web application** and inside an **Android app** (via Android Studio), making it a true **cross-platform** experience.

---

## 🎯 How it Works

- A banana image is linked to a hidden "magic" number.
- The player selects two numbers and a math operation (➕ ➖ ✖️ ➗).
- The result is sent to the Banana API to check if the guess is correct.
- If the result matches the logic, a success message is displayed.

---

## 🚀 Features

- 🔗 Integration with **Marc Conrad’s Banana API**
- 🧠 Logic and arithmetic-based gameplay
- 🌍 **Cross-platform**: Web + Android (via WebView)
- 📱 Simple, responsive user interface
- 🎮 Fun and educational mini-game

---

## 🛠 Tech Stack

- HTML5
- CSS3
- JavaScript
- Android  *(tested via Android Studio)*
- WebView
- External API: Marc Conrad Banana API

---

## ⚙️ Installation (Web)

```bash
git clone https://github.com/SeuUsuario/BananaGame.git
cd BananaGame
open index.html in your browser
