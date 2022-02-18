
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).on("keydown",function(){
        if(!started){
                $("h1").text("Level" + level);
                nextSequence();
                started= true;

        }
        
});


$(".btn").on("click", function(){
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        //$("#"+userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length - 1);
        

});

function checkAnswer(currentLevel) {

        
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    
          console.log("success");
    
          
          if (userClickedPattern.length === gamePattern.length){
    
            
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    
        } else {
    
          console.log("wrong");
          $("body").addClass("game-over");
          $("h1").text("Game Over, Press any key to restart.");
          setTimeout(function(){
                $("body").removeClass("game-over");
          },200);
          startOver();
          
    
        }
    
    }

function startOver(){
        level = 0;
        gamePattern = [];
        started = false;

}

function animatePress(currentColour){
        $("#"+currentColour).addClass("pressed");
        setTimeout(function(){
                $("#"+currentColour).removeClass("pressed");
        },100);

}

function nextSequence(){
        userClickedPattern = [];
        var randomNumber = Math.floor(Math.random()*4);
        var randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);
        $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
        playSound(randomChosenColour);

        level = level+1;
        $("h1").text("Level "+ level);
       
}
//setInterval(nextSequence,2000)
function playSound(name){
        
        var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();

}





