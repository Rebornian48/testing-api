fetch("https://ipapi.co/json/")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("ip").innerHTML = data.ip + " (" + data.version + ")";
    document.getElementById("country_name").innerHTML = data.country_name;
    document.getElementById("currency").innerHTML =
      data.currency + " (" + data.currency_name + ")";
    document.getElementById("timezone").innerHTML =
      data.timezone + " (UTC" + data.utc_offset + ")";
  })
  .catch((error) => {
    // Handle any errors here
    console.error("Error:", error);
  });

fetch("https://api.quotable.io/quotes/random")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("quote").innerHTML =
      '"' + data[0].content + '" (' + data[0].author + ")";
  })
  .catch((error) => {
    // Handle any errors here
    console.error("Error:", error);
  });

fetch("http://numbersapi.com/random?json&callback=showNumber")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("numfact").innerHTML = data.text + " (" + data.type + ")";
  })
  .catch((error) => {
    // Handle any errors here
    console.error("Error:", error);
  });
