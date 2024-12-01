// Function to log messages to the console box
function logToConsole(message) {
    const consoleBox = document.getElementById("consoleBox");
    const newLog = document.createElement("div");
    newLog.textContent = message; // Add plain text (no scaling or styles)
    consoleBox.appendChild(newLog);

    // Automatically scroll to the bottom of the console
    consoleBox.scrollTop = consoleBox.scrollHeight;
}

// Function to log messages to the console box and sync with localStorage
function logToConsole(message) {
    const consoleBox = document.getElementById("consoleBox");

    // Create a new div element for each log entry
    const newLog = document.createElement("div");
    newLog.textContent = message;
    consoleBox.appendChild(newLog);

    // Get current logs from localStorage
    let consoleLogs = JSON.parse(localStorage.getItem("consoleLogs")) || [];

    // Add the new log message to the array
    consoleLogs.push(message);

    // Update the console logs in localStorage
    localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));

    // Automatically scroll to the bottom of the console
    consoleBox.scrollTop = consoleBox.scrollHeight;
}

// Function to load the stored logs into the console
function loadConsoleLogs() {
    const consoleBox = document.getElementById("consoleBox");

    // Get logs from localStorage
    let consoleLogs = JSON.parse(localStorage.getItem("consoleLogs")) || [];

    // Add each log entry to the console box
    consoleLogs.forEach(log => {
        const newLog = document.createElement("div");
        newLog.textContent = log;
        consoleBox.appendChild(newLog);
    });

    // Automatically scroll to the bottom of the console
    consoleBox.scrollTop = consoleBox.scrollHeight;
}

// Call loadConsoleLogs on page load to display previous logs
window.onload = loadConsoleLogs;

// Function to log messages to the console box and sync with localStorage
function logToConsole(message) {
    const consoleBox = document.getElementById("consoleBox");

    // Create a new div element for each log entry
    const newLog = document.createElement("div");
    newLog.textContent = message;
    consoleBox.appendChild(newLog);

    // Get current logs from localStorage
    let consoleLogs = JSON.parse(localStorage.getItem("consoleLogs")) || [];

    // Add the new log message to the array
    consoleLogs.push(message);

    // Update the console logs in localStorage
    localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));

    // Automatically scroll to the bottom of the console
    consoleBox.scrollTop = consoleBox.scrollHeight;
}

// Function to load the stored logs into the console
function loadConsoleLogs() {
    const consoleBox = document.getElementById("consoleBox");

    // Get logs from localStorage
    let consoleLogs = JSON.parse(localStorage.getItem("consoleLogs")) || [];

    // Add each log entry to the console box
    consoleLogs.forEach(log => {
        const newLog = document.createElement("div");
        newLog.textContent = log;
        consoleBox.appendChild(newLog);
    });

    // Automatically scroll to the bottom of the console
    consoleBox.scrollTop = consoleBox.scrollHeight;
}

// Call loadConsoleLogs on page load to display previous logs
window.onload = loadConsoleLogs;

localStorage.getItem("consoleLogs")


