const dorita980 = require('dorita980');

dorita980.getRobotIP((ierr, ip) => {
  if (ierr) return console.log('error looking for robot IP');

  var myRobotViaLocal = new dorita980.Local('', '', ip);

  myRobotViaLocal.on('connect', init);

  function init() {
    myRobotViaLocal.pause()
      .then(() => myRobotViaLocal.end())
      .catch(console.log);
  }
});

