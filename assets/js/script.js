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

fetch("https://candaan-api.vercel.app/api/text/random")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("jokes").innerHTML = data.data;
  })
  .catch((error) => {
    // Handle any errors here
    console.error("Error:", error);
  });

  navigator.getBattery()
    .then((battery) => {
      const batteryPercentage = battery.level * 100;
      document.getElementById("battery").innerText = batteryPercentage + "%";
      // You can use the batteryPercentage value as needed
    })
    .catch((error) => {
      console.error("Error:", error);
    });