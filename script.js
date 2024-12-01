// Function to log messages to the console box
function logToConsole(message) {
    const consoleBox = document.getElementById("consoleBox");
    const newLog = document.createElement("div");
    newLog.textContent = message; // Add plain text (no scaling or styles)
    consoleBox.appendChild(newLog);

    // Automatically scroll to the bottom of the console
    consoleBox.scrollTop = consoleBox.scrollHeight;
}

