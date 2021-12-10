$(document).ready(function(){

    for (let i=2; i <= 10; i++){
        $("#gallery").append("<img src='./content/photos/" + i + ".jpg'>");
    }
});