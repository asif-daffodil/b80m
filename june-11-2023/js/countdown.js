function countdown() {
  var now = new Date();
  var eventDate = new Date("2023-6-17"); // Set your event date here
  var currentTime = now.getTime();
  var eventTime = eventDate.getTime();
  var remTime = eventTime - currentTime;

  var days = Math.floor(remTime / (1000 * 60 * 60 * 24));
  var hours = Math.floor((remTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((remTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((remTime % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (remTime <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "Countdown Finished!";
  }
}
countdown();
var countdownInterval = setInterval(countdown, 1000);