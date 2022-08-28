
function clock() {
  //data
  let data = new Date(),
    date = document.getElementById('date'),
    time = document.getElementById('time'),
    dayTime = document.querySelectorAll('#dayTime'),
    hour = data.getHours(),
    background = document.getElementById('background');
  //action
  dateValue = data.toDateString();
  timeValue = data.toLocaleTimeString();
  //append
  date.textContent = dateValue;
  time.textContent = timeValue;
  //condition
  background.classList.remove();
  if (hour < 12) {
    dayTime.forEach(day => {
      day.innerText = 'morning'
    })
    background.classList.add('morning');
  } else if (hour < 18) {
    dayTime.forEach(day => {
      day.innerText = 'afternoon'
    })
    background.classList.add('afternoon');
  } else if (hour < 21) {
    dayTime.forEach(day => {
      day.innerText = 'evening'
    })
    background.classList.add('evening');
  } else {
    dayTime.forEach(day => {
      day.innerText = 'night'
    })
    background.classList.add('night');
  }

}
clock();
setInterval(clock, 1000);

let name = document.getElementById('name');
let focus = document.getElementById('focus');

function getname() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter name]'
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

getname();

function getfocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter focus]'
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

getfocus();

function setname(e) {
  if (e.target === 'keypress') {
    if (e.which == 13 && e.keycode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}
function setfocus(e) {
  if (e.target === 'keypress') {
    if (e.which == 13 && e.keycode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setname)
name.addEventListener('blur', setname)
focus.addEventListener('keypress', setfocus)
focus.addEventListener('blur', setfocus)
