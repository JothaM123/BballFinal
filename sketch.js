Swal.fire({
    title:'Game Story',
    text:'Oliver is a great  fan of basketball. Due to the lockdown he isn’t able to go to a basketball match . So he decides create a virtual experience in his computer . ',
    imageUrl:"bb.gif",
    imageWidth:"250",
    imageHeight:'200'
}).then(()=>{
    document.getElementById("over").style.display = "none";
})


var bg, player, playerI, ball, ballI, net,clap,go,ci, feedback, feedback2,fb1, fb2,p, cur, nw, music;

function preload(){
bg = loadImage("bg.jpg");
ballI = loadImage("bb.png");
playerI = loadImage("player.png");
net = loadSound("net.wav");
clap = loadSound("clap.wav");
go = loadSound("gameover.mp3");
p = loadSound("pop.wav");
ci = loadImage("cursor.png");
music = loadSound("Happy.mp3");
}

function setup(){

createCanvas(windowWidth, windowHeight);
ball = createSprite(width/2-0.10, height/2+120);
ball.addImage(ballI);
ball.scale = 0.1;
player = createSprite(width/2+60, height/2+100);
player.addImage(playerI);
player.scale = 0.3;

var btn = createImg("story.png");
btn.position(width-400, height-100);
btn.size(50, 50);
btn.mouseClicked(()=>{
    p.play();

    Swal.fire({
     
        title:"Game Story",
        text:"Oliver is a great  fan of basketball. Due to the lockdown he isn’t able to go to a basketball match . So he decides create a virtual experience in his computer . ",
        imageUrl : "bb.gif",
        imageWidth: "250",
        imageHeight: "200"
    }).then(()=>{
        p.play();
    })

});


cur = createSprite(-10, -10);
cur.addImage(ci);
cur.scale = 0.3;



nw = createImg("wn.png");
nw.position(width-350, height-85);
nw.size(40, 40);
nw.mouseClicked(()=>{
    p.play()
    Swal.fire({
        title:"What's new?",
        text:"Added draggability to the player. Added icon to the title bar",
        imageUrl:"WhatsNew.png",
        imageWidth:'150',
        imageHeight:'150'
    }).then(()=>{p.play()})
})
music.setVolume(0.4);
music.loop();

}

function draw(){
 background(bg);

 drawSprites();


 cur.x = mouseX;
 cur.y = mouseY;

 if(keyIsDown(68) && player.x < width-500){
     player.x +=7;
     ball.x = player.x-50;

 }

 if(keyIsDown(65) && player.x > width-width+300){
     player.x-=7;
     ball.x = player.x - 50;
 
 }

 
 if(keyWentDown(32)){
 ball.velocityX = 7
 ball.velocityY = -1
 }


 if(keyDown(70)){
     window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfuJ-zD8Ned7Fdsm8T9YYzHkED-ShxK9lIYUz5kl0GHpQBhLA/viewform?usp=sf_link";
 }


 var sprite = createSprite(width/2+425, height-height+268, 40, 20);
sprite.visible = false;

var border1 =createSprite(width/2, 10, width, 50);
border1.visible = false;

var border2 = createSprite(width-10, height/2, 50, height);
border2.visible = false;




noFill();
rectMode(CENTER);
strokeWeight(5);
stroke(0, 255, 0);
rect(width/2+425, height-height+268, 70, 50);


 if(ball.collide(sprite)){
     ball.destroy();
     music.pause();
     Swal.fire({
         title: "Good Job!",
         text: "You Won The Game!",
         icon : "success"
     });

     net.play();
     clap.play();


     setTimeout(()=>{


        p.play();

        Swal.fire("Press F to send feedback!");

        p.play();

     },3000);

     setTimeout(()=>{window.location.reload();},6000);
     
     
 }

 if(ball.collide(border1) || ball.collide(border2)){

    ball.destroy();

    music.pause();
 
    Swal.fire({
    title:"Oh No!",
    text:"You Lose!",
    icon:"error"
    });

    go.play();

    setTimeout(()=>{

        p.play();
        Swal.fire("Press F to send feedback!").then(()=>{
        p.play();
    });

    },3000);




    setTimeout(()=>{window.location.reload();},6000);

 }

 //mousePressed();


}

function mouseDragged(){

    if(mouseX>width-width+300 && mouseX<width-500){

        player.x = mouseX;
        ball.x = player.x - 50;

    }

}

function qr(){

   
    
    Swal.fire({
        title:'QR code',
        html:"<center><div id = 'qr'></div></center>",
        
    });
    var q= new QRCode("qr");
    q.makeCode("https://jotham123.github.io/Bball4/");
}


function mute(){
    if(music.isPlaying() === true){
        music.pause();
    }
    else{music.play();}
}
