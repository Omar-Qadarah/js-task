function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}
function saveUsers(list) {
    localStorage.setItem('users', JSON.stringify(list));
}
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser')); 
}

const ADMIN = {
    username: "Admin",
    email: "admin@gmail.com",
    password: "Qwerty098-",
    role: "admin"
};

let users = getUsers();

users = users.map(u => (u.role ? u : { ...u, role: "user" }));

if (!users.some(u => u.email.toLowerCase() === ADMIN.email)) {
    users.push(ADMIN);
}
saveUsers(users);

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isStrongPassword(password) {
    return password.length >= 8 && /[A-Za-z]/.test(password) && /[0-9]/.test(password);
}
function showError(message) {
    const box = document.getElementById('error');
    if (box) {
        box.textContent = message;
    } else {
        alert(message);
    }
}
function clearError() {
    showError("");
}

// signup
const signupForm = document.getElementById('signupForm');

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        clearError();

        const username = document.getElementById('user-name').value.trim();
        const email = document.getElementById('Email').value.trim().toLowerCase();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('conform-pass').value;

        if (!username || !email || !password || !confirmPassword) {
            showError('Please fill all fields.');
            return;
        }
        if (username.length < 3) {
            showError('Username must be at least 3 characters.');
            return;
        }
        if (!isValidEmail(email)) {
            showError('Please enter a valid email address.');
            return;
        }
        if (!isStrongPassword(password)) {
            showError('Password must be at least 8 characters and include a letter and a number.');
            return;
        }
        if (password !== confirmPassword) {
            showError('Passwords do not match.');
            return;
        }

        const currentList = getUsers();

        if (currentList.some(u => u.email.toLowerCase() === email)) {
            showError('This email already exists.');
            return;
        }

        currentList.push({ username, email, password, role: "user" });
        saveUsers(currentList);

        alert('Your account has been created successfully!');
        window.location.href = "./login.html";
    });
}

//login
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        clearError();

        const email = document.getElementById('email').value.trim().toLowerCase();
        const password = document.getElementById('password').value;

        if (!email || !password) {
            showError('Please fill all fields.');
            return;
        }
        if (!isValidEmail(email)) {
            showError('Please enter a valid email address.');
            return;
        }

        let matchUser = null;
        for (let user of getUsers()) {
            if (email === user.email.toLowerCase() && password === user.password) {
                matchUser = user;
                break;
            }
        }

        if (matchUser === null) {
            showError('Your email or password is not correct.');
            return;
        }

        localStorage.setItem('currentUser', JSON.stringify(matchUser));

        if (matchUser.role === "admin") {
            window.location.href = "./admin-dashboard.html";
        } else {
            window.location.href = "./dashboard.html";
        }
    });
}

const logoutBtn = document.getElementById('logoutBtn');

if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        window.location.href = "./login.html";
    });
}

const userInfo = document.getElementById('userInfo');

if (userInfo) {
    const currentUser = getCurrentUser();

    if (!currentUser) {
        window.location.replace("./login.html");            
    } else if (currentUser.role === "admin") {
        window.location.replace("./admin-dashboard.html");   
    } else {
        document.getElementById('welcome').textContent = "Welcome, " + currentUser.username + "!";
        document.getElementById('infoUsername').textContent = currentUser.username;
        document.getElementById('infoEmail').textContent = currentUser.email;
        document.getElementById('infoRole').textContent = currentUser.role;
        document.getElementById('page').hidden = false;     
    }
}

const usersTableBody = document.getElementById('usersTableBody');

if (usersTableBody) {
    const currentUser = getCurrentUser();

    if (!currentUser) {
        window.location.replace("./login.html");        
    } else if (currentUser.role !== "admin") {
        window.location.replace("./dashboard.html");    
    } else {
        document.getElementById('welcome').textContent = "Welcome, " + currentUser.username + " (Admin)";

        const allUsers = getUsers();
        document.getElementById('userCount').textContent = "Total registered users: " + allUsers.length;

        allUsers.forEach((user, index) => {
            const row = document.createElement('tr');
            [index + 1, user.username, user.email, user.role].forEach(value => {
                const cell = document.createElement('td');
                cell.textContent = value;
                row.appendChild(cell);
            });
            usersTableBody.appendChild(row);
        });

        document.getElementById('page').hidden = false;
    }
}
