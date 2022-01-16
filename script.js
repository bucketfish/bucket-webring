const DATA_FOR_WEBRING = `https://raw.githubusercontent.com/bucketfishy/bucket-webring/master/webring.json`;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const name = urlParams.get('name')

const left = document.getElementById("prev")

const right = document.getElementById("next")

fetch(DATA_FOR_WEBRING)
  .then((response) => response.json())
  .then((sites) => {

    // Find the current site in the data
    const matchedSiteIndex = sites.findIndex(
      (site) => site.name === name
    );
    const matchedSite = sites[matchedSiteIndex];

    let prevSiteIndex = matchedSiteIndex - 1;
    if (prevSiteIndex === -1) prevSiteIndex = sites.length - 1;

    let nextSiteIndex = matchedSiteIndex + 1;
    if (nextSiteIndex >= sites.length) nextSiteIndex = 0;


    left.href = sites[prevSiteIndex].url;
    right.href = sites[nextSiteIndex].url;

  });





function funheader(){
  var parent = document.getElementById("header");

  var string = "bucket ";
  var string2 = "webring";
  parent.innerHTML = "";
  string.split("");
  var i = 0, length = string.length;
  for (i; i < length; i++) {
      parent.innerHTML += "<span style='--n:"+ (100 * i - 1000 + 'ms') + ";'>" + string[i] + "</span>";
  }
  parent.innerHTML += "<wbr>";

  length2 = string2.length;
  for (i; i < length2+length; i++) {
      parent.innerHTML += "<span style='--n:"+ (100 * i - 1000 + 'ms') + ";'>" + string2[i-length] + "</span>";
  }
}

funheader()
