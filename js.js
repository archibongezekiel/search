"use strict";
let date = new Date();

let hours = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

let span = [
  document.querySelector("#span-1"),
  document.querySelector("#span-2"),
  document.querySelector("#span-3"),
  document.querySelector("#span-4"),
  document.querySelector("#span-5"),
  document.querySelector("#span-6"),
];
console.log(hours);
//google dark mood and day mood//
if (hours === 18 || hours > 18 || hours === 0 || hours > 0) {
  document.querySelector("body").style.backgroundColor = "#202124";
  document.querySelector("body").style.color = "white";
  for (let i = 0; i < span.length; i++) {
    span[i].style.color = "white";
  }
} else if (hours === 6 || hours > 6) {
  document.querySelector("body").style.backgroundColor = "white";
}

document.querySelector(".searchInputEvent").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    switch (document.querySelector(".searchInputEvent").value) {
      case "eventlistener methods":
        alert(
          "The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target. Common targets are Element , or its children, Document , and Window , but the target may be any object that supports events (such as XMLHttpRequest )."
        );
        break;

      default:
        break;
    }

    document.querySelector(".searchInputEvent").value = "";
  }
});
