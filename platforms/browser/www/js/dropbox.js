var dbx = new window.Dropbox({ accessToken: 'H0hH1v_14OYAAAAAAAAAY5hK9NocGEAjnmVpfKMG8Vd8pyWkqIx7gasv8xoqkbgP' });


function getFiles() {
  myApp.showPreloader();
  
  dbx.filesListFolder({
    path: '/sounds'
  })
  .then(function(response) {
   // displayFiles(response.entries);
    getLinkToFiles(response.entries)
    myApp.hidePreloader();
  })
  .catch(function (error) {
    myApp.alert(error, "Ups!");
    myApp.hidePreloader();
  });  
}
  
function getLinkToFiles(files) {
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    
    dbx.sharingListSharedLinks({
      "path" : file.id
    })
      .then(function (response) {
        drawAudioElement(response.links[0].url, response.links[0].name);
      })
      .catch(function (response) {
        myApp.alert(response,"UPS!");
      })
  }
}
  
function drawAudioElement(src, name) {

  //reemplazo el 0 por 1 (0 = link, 1 = descarga)
  src = src.replace(/0$/,"1")
  
  var audioElement =
    '<li class="item-content">' +
    '    <div class="item-media">' +
    '        <img src="./img/sonido-img.png" width="44">' +
    '    </div>' +
    '    <div class="item-inner">' +
    '        <div class="item-title-row">' +
    '        <div class="item-title">'+name+'</div>' +
    '        </div>' +
    '        <div class="item-subtitle audio-controls">' +
    '            <audio>'+
    '              <source src="'+src+'" type="audio/mpeg">'+
    '              Not support the audio element.'+
    '            </audio>'+
    '            <i onclick="audioControl(event)" data-audio-control="play" class="material-icons">play_circle_outline</i>' +
    '            <i onclick="audioControl(event)" data-audio-control="pause" class="material-icons">pause_circle_outline</i>' +
   // '            <i onclick="audioControl(event)" data-audio-control="download" class="material-icons clear-right">file_download</i>' +
    '            <div class="progressbar color-blue audio-controls-progressbar" data-progress="0">' +
    '                <span></span>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</li>';
  
  $$('#audios').append(audioElement);
}
