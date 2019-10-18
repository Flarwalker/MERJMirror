/* eslint-disable no-undef */
clockDivs();

function clockDivs () {
  var spot = '';

  if (window.localStorage.getItem('s1') === 'clock') {
    spot = 'spot1';
    window.localStorage.removeItem('s1');
  } else if (window.localStorage.getItem('s2') === 'clock') {
    spot = 'spot2';
    window.localStorage.removeItem('s2');
  } else if (window.localStorage.getItem('s3') === 'clock') {
    spot = 'spot3';
    window.localStorage.removeItem('s3');
  } else if (window.localStorage.getItem('s4') === 'clock') {
    spot = 'spot4';
    window.localStorage.removeItem('s4');
  } else if (window.localStorage.getItem('s6') === 'clock') {
    spot = 'spot6';
    window.localStorage.removeItem('s6');
  } else if (window.localStorage.getItem('s7') === 'clock') {
    spot = 'spot7';
    window.localStorage.removeItem('s7');
  } else if (window.localStorage.getItem('s8') === 'clock') {
    spot = 'spot8';
    window.localStorage.removeItem('s8');
  } else if (window.localStorage.getItem('s9') === 'clock') {
    spot = 'spot9';
    window.localStorage.removeItem('s9');
  }

  startTime(spot);
}

function startTime (spot) {
  var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'November', 'December' ];
  var monthsAbr = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ];
  var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  var daysAbr = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat' ];
  var daysOne = [ 'Su', 'M', 'T', 'W', 'R', 'F', 'Sa' ];

  $.get('./layout', function (ret) {
    var config = ret.spots[spot].config;
    // config = checkDefault(config);

    var time = '';
    var date = '';

    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var ap = hour < 12 ? 'am' : 'pm';

    if (config.timeFormat === 12) {
      if (hour > 12) {
        hour = hour - 12;
      }
    }

    if (config.hourZero) {
      if (hour < 10) {
        hour = '0' + hour;
      }
    }

    if (config.minuteZero) {
      if (minute < 10) {
        minute = '0' + minute;
      }
    }

    if (config.secondZero) {
      if (second < 10) {
        second = '0' + second;
      }
    }

    time = `<div class="time">${hour}:${minute}`;
    if (config.displaySeconds) {
      time = time + `<span class="seconds">:${second}</span>`;
    }

    if (config.timeFormat === 12) {
      if (config.showPeriod) {
        if (config.showPeriodUpper) {
          ap = ap === 'am' ? 'AM' : 'PM';
        }

        time = time + `<span class="ampm">${ap}</span>`;
      }
    }

    time = time + '</div>';

    if (config.showDate) {

    }

    document.getElementById(spot).innerHTML = `<div class="widget clock">${time}</div>`;
    setTimeout(function () {
      startTime(spot);
    }, 500);
  });
}

function checkDefault (config) {
  
}
