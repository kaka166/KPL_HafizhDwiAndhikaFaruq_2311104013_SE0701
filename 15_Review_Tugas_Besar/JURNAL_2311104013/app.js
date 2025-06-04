const fs = require("fs");
const readline = require("readline");
const crypto = require("crypto");

// JSON file untuk menyimpan user
const USERS_FILE = "users.json";

// Fungsi untuk hashing password
function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

// Fungsi untuk validasi input
function validateInput(username, password) {
  const asciiRegex = /^[A-Za-z]+$/;
  const specialCharRegex = /[!@#$%^&*]/;

  if (!asciiRegex.test(username)) {
    return "Username hanya boleh huruf alfabet ASCII";
  }

  if (password.length < 8 || password.length > 20) {
    return "Password harus 8-20 karakter";
  }

  if (!specialCharRegex.test(password)) {
    return "Password harus mengandung minimal 1 karakter unik (!@#$%^&*)";
  }

  if (password.toLowerCase().includes(username.toLowerCase())) {
    return "Password tidak boleh mengandung username";
  }

  return null; // Jika Valid
}

// Fungsi untuk load users
function loadUsers() {
  if (!fs.existsSync(USERS_FILE)) return [];
  const data = fs.readFileSync(USERS_FILE);
  return JSON.parse(data);
}

// Fungsi untuk simpan user
function saveUser(username, hashedPassword) {
  const users = loadUsers();
  users.push({ username, password: hashedPassword });
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// Fungsi untuk login
function login(username, password) {
  const users = loadUsers();
  const hashed = hashPassword(password);
  return users.find((user) => user.username === username && user.password === hashed);
}

// CLI interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Menu
function showMenu() {
  console.log("1. Register");
  console.log("2. Login");
  rl.question("Pilih menu (1/2): ", (choice) => {
    if (choice === "1") {
      register();
    } else if (choice === "2") {
      loginUser();
    } else {
      console.log("Pilihan tidak valid.");
      rl.close();
    }
  });
}

// Register
function register() {
  rl.question("Username: ", (username) => {
    rl.question("Password: ", (password) => {
      const validationError = validateInput(username, password);
      if (validationError) {
        console.log("Error: " + validationError);
        rl.close();
        return;
      }

      const hashed = hashPassword(password);
      saveUser(username, hashed);
      console.log("Registrasi berhasil!");
      rl.close();
    });
  });
}

// Login
function loginUser() {
  rl.question("Username: ", (username) => {
    rl.question("Password: ", (password) => {
      const result = login(username, password);
      if (result) {
        console.log("Login berhasil. Selamat datang, " + username + "!");
      } else {
        console.log("Login gagal. Username atau password salah.");
      }
      rl.close();
    });
  });
}

showMenu();
