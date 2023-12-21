function Player(event){
    let X = document.getElementById('player').computedStyleMap().get('transform')[0].x;
    let Y = document.getElementById('player').computedStyleMap().get('transform')[0].y;
    let speed = 10;
    if (event.keyCode == 65){
        document.getElementById("player").style.backgroundColor = "red";
        document.getElementById("player").style.transform=`translate(${X.value-speed}%, ${Y.value}%)`;
    }
    if (event.keyCode == 68){
        document.getElementById("player").style.backgroundColor = "green";
        document.getElementById("player").style.transform=`translate(${X.value+speed}%, ${Y.value}%)`;
    }
    if (event.keyCode == 87){
        document.getElementById("player").style.backgroundColor = "blue";
        document.getElementById("player").style.transform=`translate(${X.value}%, ${Y.value-speed*1.5}%)`;
    }
    if (event.keyCode == 83){
        document.getElementById("player").style.backgroundColor = "pink";
        document.getElementById("player").style.transform=`translate(${X.value}%, ${Y.value+speed*1.5}%)`;
    }
    if(event.keyCode == 67){
        if(document.getElementById("player").style.backgroundColor == "red" || document.getElementById("player").style.backgroundColor == "orange"){
            document.getElementById("player").style.backgroundColor = "orange"
            document.getElementById("player").style.transform=`translate(${X.value-speed*4}%, ${Y.value}%)`;
        }
        if (document.getElementById("player").style.backgroundColor == "green" || document.getElementById("player").style.backgroundColor == "lime"){
            document.getElementById("player").style.backgroundColor = "lime"
            document.getElementById("player").style.transform=`translate(${X.value+speed*4}%, ${Y.value}%)`;
        }
    }
}