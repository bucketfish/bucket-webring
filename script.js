const DATA_FOR_WEBRING = `https://raw.githubusercontent.com/bucketfishy/bucket-webring/master/webring.json`;


const list = document.getElementById("peoplelist");
const count = document.getElementById("peoplecount");


fetch(DATA_FOR_WEBRING)
  .then((response) => response.json())
  .then((sites) => {
    count.innerHTML = sites.length;

    for (var i = 0; i < sites.length; i++){
      list.innerHTML += "<li><p><a href=" + sites[i].url + ">" + sites[i].name + "</a></p></li>";
    }


  });
