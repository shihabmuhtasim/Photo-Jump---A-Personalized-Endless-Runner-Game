score=0
clash=true;
clash2=true;
audios= new Audio('Dumb.mp3');
audioDead= new Audio('Death.mp3');

setTimeout(() => {
    audios.play()
}, 2500); 


document.onkeydown=function(e){
    console.log("Key code is",e.keyCode)
    
    if(e.keyCode==32 || e.keyCode==38 ){
        hero=document.querySelector('.hero');
        hero.classList.add('animateHero')
        setTimeout(() => {
            hero.classList.remove('animateHero')
        }, 700);
    }

    if(e.keyCode==39){
        hero=document.querySelector('.hero');
        hx =parseInt( window.getComputedStyle(hero,null).getPropertyValue('left'));
        hero.style.left=hx+110+"px";
    }

    if(e.keyCode==37){
        hero=document.querySelector('.hero');
        hx =parseInt( window.getComputedStyle(hero,null).getPropertyValue('left'));
        hero.style.left= (hx-110)+"px";
    }
}
setInterval(() => {
    hero=document.querySelector('.hero');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');
    obstacle2=document.querySelector('.obstacle2');
    replay=document.querySelector('.replay');
    finalScore=document.querySelector('.finalScore');

    dx =parseInt( window.getComputedStyle(hero,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(hero,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    ox2 = parseInt(window.getComputedStyle(obstacle2,null).getPropertyValue('left'));
    oy2 = parseInt(window.getComputedStyle(obstacle2,null).getPropertyValue('top'));

    offsetx=Math.abs(dx-ox);
    offsety=Math.abs(dy-oy);

    offsetx2=Math.abs(dx-ox2);
    offsety2=Math.abs(dy-oy2);

    if ((offsetx<100 && offsety<90) ||(offsetx2<100 && offsety2<90)){
        gameOver.innerHTML="Game Over";
        

        setTimeout(() => {
            audios.pause();
        }, 500);
        audioDead.play();

        gameOver.style.visibility='visible';
        obstacle.classList.remove('obstacleMove');
        obstacle2.classList.remove('obstacleMove2'); 
        hero.classList.remove('hero');
        replay.style.visibility='visible';
        

        document.onkeydown=function(e){
            if (e.keyCode==32){
                location.reload(); 
            }
        }

        


        

    }
    else{ 
    if(offsetx<200 && clash){
        score+=1;
        updatescore(score);
        clash=false;
        setTimeout(() => {
            clash=true;
        }, 1000);
    
        setTimeout(() => {
            if (score<30){
            aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur=aniDur-0.05;
            obstacle.style.animationDuration=newDur+ 's';}

        }, 1000);
    }

    if(offsetx2<200 && clash2){
        score+=1;
        updatescore(score);
        clash2=false;
        setTimeout(() => {
            clash2=true;
        }, 1000);
    
        setTimeout(() => {
            if (score<150){
            aniDur=parseFloat(window.getComputedStyle(obstacle2,null).getPropertyValue('animation-duration'));
            newDur=aniDur-0.05;
            obstacle2.style.animationDuration=newDur+ 's';}

        }, 1000);
    }



    }

}, 100);

function updatescore(score){
    scoreCont.innerHTML= "Your score: " + score;
}

document.addEventListener("DOMContentLoaded", function() {
    const restartButton = document.querySelector('.restart');
  
    restartButton.addEventListener('click', function() {
      location.reload();
    });
  });