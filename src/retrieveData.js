// RETREIVE DATA FROM LOCAL JSON SERVER
function retrieveData() {
    fetch(prisonersURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        state.prisoners = data;
        return data;
      });
  
    fetch(blockURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        state.block = data;
        return data;
      });
  }