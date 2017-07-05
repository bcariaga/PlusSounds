function audioControl(event) {
    
    var control = $$(event.target)[0];
    
    var func = $$(control).dataset();
    //var audio = $$(control)[0].closest('audio')[0];
    //var audio = control.previousElementSibling;
    var audio = $$(control).parent().find('audio')[0];
    audio.volume = 0.3;
    
    var statusbar = $$(control).parent().find('.progressbar')
    var progress = 0;
  
    $$(audio).on('timeupdate', function () {
        var progressBefore = progress;
        var progress =+ Math.round(this.currentTime / this.duration * 100);
        if (progressBefore < 100) {
            progress = 0;
        }
        myApp.setProgressbar(statusbar, progress);
    });
    
    switch (func.audioControl) {
        case "play":
            audio.play();
            break;
        case "pause":
            audio.pause();
            break;
        case "download":
            
            break;    
        default:
            break;
    }
}

function updateProgress() {
   var progress = document.getElementById("progress");
   var value = 0;
   if (video.currentTime > 0) {
      value = Math.floor((100 / video.duration) * video.currentTime);
   }
   
}
