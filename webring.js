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
