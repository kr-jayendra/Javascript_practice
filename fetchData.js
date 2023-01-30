
// https://restcountries.com/v3.1/all
// lets call the above url using fetch web api given by the brover

const apiCall = fetch("https://restcountries.com/v3.1/all");

// pedding promise 
console.log(apiCall);

// when promise resolved and to use , access with response after fulfilled  than use

apiCall.then((data) =>
  data.json().then((d) => {
    // here some example with fetch api
    console.log(d[0], typeof d);
    const div1 = document.getElementById("div1");
    let str = "";
    d.forEach((element) => {
      // console.log(element);
    //   console.log(element.name.common)
    //   console.log(element.capital);
    //   console.log(element.flags.png);
    //   console.log(element.maps)

        // const keys = Object.keys(element.currencies);
        // console.log(keys)
        str += `<div class="card" style="width: 18rem;">
      <img src="${element.flags.png}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${element.name.common}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Population : ${element.population}</li> 
      </ul>
      <div class="card-body">
        <a href="${element.maps.googleMaps}" class="card-link" target="_blank">G_Map</a>
        <a href="${element.maps.openStreetMaps}" class="card-link" target="_blank">OS_Maps</a>
      </div>
    </div>`;
    });
    div1.innerHTML = str;
  })
);

// pedding promise 
console.log(apiCall);
