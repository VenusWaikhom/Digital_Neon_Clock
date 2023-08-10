setInterval(() => {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementsByClassName("ampm");

  //time onujaiye circle ghurbe

  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");

  //dot sathe sathe jawar jonno
  let hr_dot = document.querySelector(".hr_dot");
  let min_dot = document.querySelector(".min_dot");
  let sec_dot = document.querySelector(".sec_dot");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "PM" : "AM";

  //convert 24hr clock to 12 hr clock

  if (h > 12) {
    h = h - 12;
  }

  //add zero before single digit number

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;

  //time vabe color ghurear kaj
  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  //dot sathe sathe jawar jonno
  hr_dot.style.transform = `rotate(${h * 30}deg)`;
  //360 / 12 = 30
  min_dot.style.transform = `rotate(${m * 6}deg)`;
  //360 / 60 = 6
  sec_dot.style.transform = `rotate(${s * 6}deg)`;
  //360 / 12 = 30
});
