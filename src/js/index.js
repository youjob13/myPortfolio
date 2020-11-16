const consoleText = (words, id, colors) => {
  if (colors === undefined) colors = ["#fff"];
  let visible = true;
  let con = document.getElementById("console");
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  let target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        let usedColor = colors.shift();
        colors.push(usedColor);
        let usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      con.className = "console-underscore hidden";
      visible = false;
    } else {
      con.className = "console-underscore";

      visible = true;
    }
  }, 400);
};
consoleText(
  [
    "Hello, World!",
    "My name is Danil.",
    "I'm a Frontend developer.",
    "Made with Love :)",
  ],
  "text",
  ["tomato", "#f09ea3", "lightblue"]
);
const aboutMe = document.querySelector(".section-about-me");

document.addEventListener("click", (e) => {
  if (e.target.closest(".main-scroll-btn"))
    aboutMe.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
});

// // Setup
// function countup(n,m) {
//   if (n !== m) {
//     const countArray = countup(n++);
//     countArray.unshift(n);
//     return countArray;
//   }
// }
// console.log(countup(1,5));
// function rangeOfNumbers(startNum, endNum) {
//   if (startNum < endNum) {
//     const arr = rangeOfNumbers(startNum++);
//     arr.push(startNum);
//     return arr;
//   } else if (startNum === endNum) {
//     return [startNum];
//   }
// }
// console.log(rangeOfNumbers(1, 3));