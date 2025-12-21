setTimeout(function () {
  myFunction("I love You !!!");
}, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}
