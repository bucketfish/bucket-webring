
function funheader(){
  var parent = document.getElementById("header");

  var string = parent.innerHTML;
  parent.innerHTML = "";
  string.split("");
  var i = 0, length = string.length;
  for (i; i < length; i++) {
      parent.innerHTML += "<span style='--n:"+ (100 * i - 10000 + 'ms') + ";'>" + string[i] + "</span>";
  }

}

funheader()
