
const clock = document.querySelector('.clock');
setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// Alarm
function setAlarm() {
  const alarmTime = document.getElementById("alarmTime").value;
  const status = document.getElementById("alarmStatus");

  const checkAlarm = setInterval(() => {
    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5);

    if (alarmTime === currentTime) {
      alert("⏰ Alarm Ringing!");
      clearInterval(checkAlarm);
      status.innerText = "Alarm completed!";
    }
  }, 1000);

  status.innerText = "Alarm set for " + alarmTime;
}

// Stopwatch
let swSeconds = 0, swInterval;
function updateStopwatchDisplay() {
  const h = String(Math.floor(swSeconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((swSeconds % 3600) / 60)).padStart(2, '0');
  const s = String(swSeconds % 60).padStart(2, '0');
  document.getElementById("stopwatch").innerText = `${h}:${m}:${s}`;
}
function startStopwatch() {
  if (!swInterval) {
    swInterval = setInterval(() => {
      swSeconds++;
      updateStopwatchDisplay();
    }, 1000);
  }
}
function stopStopwatch() {
  clearInterval(swInterval);
  swInterval = null;
}
function resetStopwatch() {
  stopStopwatch();
  swSeconds = 0;
  updateStopwatchDisplay();
}

// Timer
let timerInterval;
function startTimer() {
  let timeLeft = parseInt(document.getElementById("timerInput").value);
  const display = document.getElementById("timerDisplay");

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    let minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    let seconds = String(timeLeft % 60).padStart(2, '0');
    display.innerText = `${minutes}:${seconds}`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("⏲️ Timer Done!");
    }
    timeLeft--;
  }, 1000);
}

// Scheduler
function scheduleTask() {
  const task = document.getElementById("taskInput").value;
  const time = document.getElementById("taskTime").value;
  const list = document.getElementById("taskList");

  const li = document.createElement("li");
  li.innerText = `🔔 ${task} at ${time}`;
  list.appendChild(li);

  setInterval(() => {
    const now = new Date().toTimeString().slice(0, 5);
    if (now === time) {
      alert(`Reminder: ${task}`);
    }
  }, 1000);
}

