
const Yeslove=document.getElementById('Yeslove')

var clicks = 10;




function yesclick(){
    const tabellove =document.querySelector('.tabellove')
    clicks--;
    if(clicks>0 && clicks<=10){

    console.log(clicks)
    tabellove.style.animationDuration = clicks+'s'

    }else{
        document.querySelector('.lovesmile').style.display='flex'

        setTimeout(function() {
           
            window.location.href='./love2.html'
        }, 5000);
    }
    

   

}

const Nolove=document.getElementById('Nolove')
function noclick(){
    var x =Math.random()*(window.innerWidth - Nolove.offsetWidth)-600;
        var y =Math.random()*(window.innerHeight - Nolove.offsetHeight)-450;
        
        Nolove.style.left=`${x}px`;
        Nolove.style.top=`${y}px`;
}
