// script.js

// Select DOM elements
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const periodElement = document.getElementById('period');
const toggleButton = document.getElementById('toggle-format');

// Initialize format (true for 24-hour, false for 12-hour)
let is24HourFormat = true;

// Function to update the clock
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  let period = '';

  if (!is24HourFormat) {
    period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
  }

  // Add leading zeros
  hoursElement.textContent = String(hours).padStart(2, '0');
  minutesElement.textContent = String(minutes).padStart(2, '0');
  secondsElement.textContent = String(seconds).padStart(2, '0');
  periodElement.textContent = period;
}

// Function to toggle between 12-hour and 24-hour formats
function toggleFormat() {
  is24HourFormat = !is24HourFormat;
  // Show or hide the period (AM/PM) based on format
  periodElement.style.display = is24HourFormat ? 'none' : 'inline';
  updateClock(); // Update immediately after toggling
}

// Initial setup
window.onload = () => {
  // Hide period initially if 24-hour format
  periodElement.style.display = is24HourFormat ? 'none' : 'inline';
  updateClock();
  // Update the clock every second
  setInterval(updateClock, 1000);
};

// Event listener for the toggle button
toggleButton.addEventListener('click', toggleFormat);
