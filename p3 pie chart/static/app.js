const url = "http://127.0.0.1:5000/get_data";
// Retrieve data from the url
d3.json(url).then(function(data) {
    console.log(data);
  });