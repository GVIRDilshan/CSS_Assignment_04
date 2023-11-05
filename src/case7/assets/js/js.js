
var current_light = -1;
var current_derection = "RIGHT"
var light_count = 6;

const updatelightpanal =()=>{
    $(".light").css("background", "white");
    if (current_derection === "RIGHT"){
        $(".light").eq(current_light++).css("background" , "red");
        $(".light").eq(current_light++).css("background" , "green");
        if (current_light === light_count){
            current_derection = "LEFT";
        }
    }else {
        current_light--
        $(".light").eq(current_light).css("background" , "red");
        if (current_light === 0){
            current_derection = "RIGHT"
        }
    }
}


setInterval(updatelightpanal,500);
