export var fetchImg = async (showId, dataSendingToTable) => {
  var keyImg = {
    apiKeyImage: "8d1f23e693489e22109871c84cd01437"
  };

  var body = await Promise.all(
    showId.map(elem => {
      return fetch(
        `https://webservice.fanart.tv/v3/tv/${elem}&api_key=${
          keyImg.apiKeyImage
        }`
      )
        .then(response => response.json())
        .catch(error => error.message);
    })
  );

  //console.log(body, "JSON");
  var imgArray = [];

  body.map(elem => {
    var imgExist = elem.tvposter
      ? elem.tvposter[0].url
      : elem.hdclearart
        ? elem.hdclearart[0].url
        : null;

     return imgArray.push(imgExist);
  });

  dataSendingToTable = {
    ...dataSendingToTable,
    showsImg: imgArray
  };

  //console.log(dataSendingToTable.shows, "Promise_GET_IMG");

  return dataSendingToTable;
};
