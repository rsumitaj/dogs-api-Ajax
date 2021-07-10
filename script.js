
function fetchRandomDogImage(){
  var xhrRequest = XMLHttpRequest();

  xhrRequest.onload = function(){
    console.log(xhrRequest.response);
  }

  xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);
  xhrRequest.send();
};


$('#fetch-dog-image-button').click(fetchRandomDogImage);