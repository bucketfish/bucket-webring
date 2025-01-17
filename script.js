const DATA_FOR_WEBRING = `https://raw.githubusercontent.com/bucketfishy/bucket-webring/master/webring.json`;

const list = document.getElementById("peoplelist");
const count = document.getElementById("peoplecount");

function convertHTML(str) {
  const regexTable = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };

  let result = str;
  const regexKeys = Object.keys(regexTable);

  for (let i = 0; i < regexKeys.length; i++) {
    const regex = new RegExp(regexKeys[i], 'g');
    result = result.replace(regex, regexTable[regexKeys[i]]);
  }

  return result;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

fetch(DATA_FOR_WEBRING)
  .then((response) => response.json())
  .then((sites) => {
    const shuffledSites = shuffle(sites);
    count.innerHTML = shuffledSites.length;
    shuffledSites.forEach(site => {
      list.innerHTML += `<div><p><a href="${site.url}">${convertHTML(site.name)}</a></p></div>`;
    });
  });  