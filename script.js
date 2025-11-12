const DATA_FOR_WEBRING = `https://raw.githubusercontent.com/bucketfishy/bucket-webring/master/webring.json`;


const list = document.getElementById("peoplelist");
const count = document.getElementById("peoplecount");

function convertHTML(str) {
  var regexTable =  {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;'
    };

  let result = str;

  var regexKeys = Object.keys(regexTable);

  for (var i=0; i<regexKeys.length; i++) {

    let regex = new RegExp(regexKeys[i], 'g');
    result = result.replace(regex, regexTable[regexKeys[i]]);
  }
  
  result = (result.charAt(0) == "!") ? result.slice(1) : result;

  return result;
}

fetch(DATA_FOR_WEBRING)
  .then((response) => response.json())
  .then((sites) => {
    count.innerHTML = sites.length;

    for (var i = 0; i < sites.length; i++){
      const siteName = convertHTML(sites[i].name);
      const siteSpanOpenTag = (sites[i].name.charAt(0) == "!") ? '<span class="inactive">' : '<span>';
      const siteNameEntry = siteSpanOpenTag + siteName + '</span>';
      list.innerHTML += "<div><p><a href=" + sites[i].url + ">" + siteNameEntry + "</a></p></div>";
    }
  });
