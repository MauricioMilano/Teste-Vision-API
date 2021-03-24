const axios = require("axios");

// let Keys = ["a998143c-ace7-49a0-bea6-9b03a22cee26","e54b5309-054d-45fd-988f-d7b637fa78e3","3b93ce31-31c2-4b7a-9806-a9d071182050"]

let mauricioKey = "a998143c-ace7-49a0-bea6-9b03a22cee26";
let mauricioKey2 = "e54b5309-054d-45fd-988f-d7b637fa78e3";
let cocaoKey = "3b93ce31-31c2-4b7a-9806-a9d071182050";

module.exports = {
  get: (url) => {
    axios
      .get(url)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  post: async (url, body) => {
    return await axios.post(url, body, {
      headers: { "X-AUTH-TOKEN": mauricioKey2 },
    });
  },
};
