window.addEventListener('DOMContentLoaded', async function() {
  var items = [];
  await fetch('https://ecommerce-mern-blond.vercel.app/api/items/')
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonResponse) {
      items = jsonResponse;
    });

  var caro = document.getElementsByClassName('slideshow-wrapper')[0];
  for (i = 0; i < items.length; i++) {
    createCarousel(items, caro);
  }
})

function createCarousel(items, main) {
  var div = document.createElement('div');
  div.classList.add('slide');
  var img = document.createElement('img');
  img.classList.add('slide-img');
  img.src = items[i]['images'][0];
  main.appendChild(div);
  div.appendChild(img);
}

var listItems = []
async function getItems() {
  var input, filter;
  input = document.getElementById("myInput");
  while (document.activeElement == input) {
    filter = document.getElementById("myInput").value;
    fetch(`https://ecommerce-mern-blond.vercel.app/api/items/${filter}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonResponse) {
      listItems = jsonResponse
      updateList()
    });
    await new Promise(r => setTimeout(r, 1000));
  }


function updateList() {
  if (listItems.length !== 0) {
    var ul = document.getElementById("myUL");
    ul.innerHTML = '';
    for (i = 0; i < listItems.length; i++) {
      li = document.createElement('li');
      var img = document.createElement('img');
      img.src = listItems[i]['images'][0];
      img.style.height = '20px';
      li.appendChild(img)
      li.appendChild(document.createTextNode(listItems[i]['name']));
      ul.appendChild(li);
    }
  }
  else {
    var ul = document.getElementById("myUL");
    ul.innerHTML = '';
  }
}}
