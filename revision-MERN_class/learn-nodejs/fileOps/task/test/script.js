const fs = require('fs');
const path = require('path');

// Define file paths
const dataFilePath = path.join(__dirname, 'data.txt');
const upperFilePath = path.join(__dirname, 'upper.txt');
const logFilePath = path.join(__dirname, 'log.txt');

// Read data from data.txt
fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading data.txt:', err);
        return;
    }

    // Convert text to uppercase
    const upperCaseData = data.toUpperCase();

    // Write the updated content to upper.txt
    fs.writeFile(upperFilePath, upperCaseData, (err) => {
        if (err) {
            console.error('Error writing to upper.txt:', err);
            return;
        }

        // Log the success message to log.txt
        const successMessage = 'File updated successfully\n';
        fs.appendFile(logFilePath, successMessage, (err) => {
            if (err) {
                console.error('Error logging to log.txt:', err);
            } else {
                console.log('Operation completed successfully');
            }
        });
    });
});