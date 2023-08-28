//HTMLから取り出す
const start=(document.getElementById("start"));
const stop=(document.getElementById("stop"));
const reset=(document.getElementById("reset"));


var hour=0   //時間
var minutes=0　//分
var seconds=0 //秒
var milliSecond=0 //ミリ秒

let time;



//スタートボタン押したら実行
function startTimer(){
    time=setInterval(function(){
     milliSecond ++;
     if(milliSecond==10){　　　//ミリ秒が１０になったら秒が１になってミリ秒０
        seconds ++;
        milliSecond=0;
     }
     if(seconds==60){
        minutes ++;　　　　　　//秒が６０になったら分が１になって秒０
        seconds=0;
     }
     if(minutes==60){　　　　
        hour ++;　　　　　　　//分が６０になったら時間が１になって分０
        minutes=0;
        } 
        
        
    //HTMLに入れる
        document.getElementById("timer").innerHTML=hour+":"+minutes+":"+seconds+":"+milliSecond;
    },100);
    
    
    //スタートボタン非表示
    start.disabled=true;
    stop.disabled=false;
    reset.disabled=false;
    
    
     }
     
     
//ストップボタン押したら止まる
function stopTimer(){
    clearInterval(time);

//ストップボタン非表示、スタートボタン表示
    start.disabled=false;
    stop.disabled=true;
    reset.disabled=false;
    
}

//リセットボタンで０になる
function resetTimer(){
    clearInterval(time);
     document.getElementById("timer").innerHTML='0:0:0:0';
     
     hour=0;
     minutes=0;
     seconds=0;
     milliSecond=0;
     
//ストップ、リセットボタン非表示、スタートボタン表示
    start.disabled=false;
    stop.disabled=true;
    reset.disabled=true;
     
}

