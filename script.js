// =========================
// Wedding Countdown
// =========================

// IMPORTANT:
// Change this date to the exact date and time of your wedding.
//
// Example:
// new Date("2026-12-26T18:00:00")
//
// The time is based on the visitor's local browser time.

const weddingDate = new Date("2026-10-24T16:00:00");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date();
  const difference = weddingDate - now;

  if (difference <= 0) {
    daysElement.textContent = "00";
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";
    return;
  }

  const totalSeconds = Math.floor(difference / 1000);

  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor(
    (totalSeconds % (24 * 60 * 60)) / (60 * 60)
  );
  const minutes = Math.floor(
    (totalSeconds % (60 * 60)) / 60
  );
  const seconds = totalSeconds % 60;

  daysElement.textContent = String(days).padStart(2, "0");
  hoursElement.textContent = String(hours).padStart(2, "0");
  minutesElement.textContent = String(minutes).padStart(2, "0");
  secondsElement.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
