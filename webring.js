const DATA_FOR_WEBRING = `https://raw.githubusercontent.com/bucketfish/bucket-webring/master/webring.json`;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const name = decodeURI(urlParams.get('name'));

const left = document.getElementById("prev")

const right = document.getElementById("next")

fetch(DATA_FOR_WEBRING)
  .then((response) => response.json())
  .then((sites) => {
    left.href += "&name=" + name;
    right.href += "&name=" + name;

  });
