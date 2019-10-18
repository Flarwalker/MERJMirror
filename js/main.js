/* eslint-disable no-undef */
$(document).ready(function () {
  $.get('/layout', function (res) {
    var spots = [];
    spots = res.spots;

    if (spots.spot1.data != '') {
      window.localStorage.setItem('s1', spots.spot1.data);
      $.getScript(spots.spot1.script, function () {
        console.log('Widget loaded for ' + spots.spot1.script);
      });
    }
  });
});
