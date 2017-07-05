function audioControl(event, id) {
    
    var control = $$(event.target)[0];
    
    var func = $$(control).dataset();
    //var audio = $$(control)[0].closest('audio')[0];
    //var audio = control.previousElementSibling;
    var audio = $$(control).parent().find('audio')[0];
    
    //var statusbar = $$(control).parent().find('.progressbar')
    var statusbar = $$("#bar-" + id);
    
    var progress = 0;
  
    $$(audio).on('timeupdate', function () {
        //var progressBefore = progress;
        var progress = Math.round(this.currentTime / this.duration * 100);
        console.log(progress)
        if (progress >= 99) {
            progress = 0;
            $$(control).attr("src","./img/play.png")
        }
        myApp.setProgressbar(statusbar, progress);
    });
    
    if (audio.paused == false) {
        $$(control).attr("src", "./img/play.png");    
        audio.pause();
    } else {
        $$(control).attr("src", "./img/pause.png"); 
        audio.play();
    }
    
    // switch (func.audioControl) {
    //     case "play":
    //         $$(control).attr("src", "./img/pause.png");    
    //         $$(control).attr("data-audio-control", "pause");    
    //         audio.play();
    //         break;
    //     case "pause":
    //         $$(control).attr("src", "./img/play.png");    
    //         $$(control).attr("data-audio-control", "play");    
    //         audio.play();    
    //         audio.pause();
    //         break;
    //     case "download":
            
    //         break;    
    //     default:
    //         break;
    // }
    

}
