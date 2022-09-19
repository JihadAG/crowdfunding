// bookmark
let bookmark=document.getElementById('bookmark')
bookmark.addEventListener('click',function(){
    bookmark.innerHTML='<img class="mark" src="images/icon-bookmark.svg" alt=""> Bookmarked'
    bookmark.style.color='hsl(176, 50%, 47%)'
})

// back this Project
let backbtn=document.getElementById('backing') 
let model=document.getElementById('model')
backbtn.addEventListener('click',function(){
    model.classList.add('visible')
})

//selecting pledge
let bamboo=document.getElementById('bamboo')
let bambooStand=document.getElementById('bambostand')
let black=document.getElementById('black')
let blackStand=document.getElementById('blackstand')
let ep1=document.getElementById('ep1')
let ep2=document.getElementById('ep2')
let noReward=document.getElementById('no-reward')
let noRewardStand=document.getElementById('stand-no-reward')
function radioClick(){
if(bamboo.checked){
    ep1.classList.add('visible')
    bambooStand.style.border="1px solid hsl(176, 50%, 47%)"
    bambooStand.style.height="230px"
}else{
    ep1.classList.remove('visible')
    bambooStand.style.border="1px solid hsl(0, 0%, 48%)"
bambooStand.style.height="140px"

}

if(black.checked){
    ep2.classList.add('visible')
    blackStand.style.border="1px solid hsl(176, 50%, 47%)"
    blackStand.style.height="230px"
}else{
    ep2.classList.remove('visible')
    blackStand.style.border="1px solid hsl(0, 0%, 48%)"
blackStand.style.height="140px"

}

if(noReward.checked){
    noRewardStand.style.border="1px solid hsl(176, 50%, 47%)"
}else{
    noRewardStand.style.border="1px solid hsl(0, 0%, 48%)"
}
}

//close model
let close1=document.getElementById('close-model');
 let closeModel=()=>{
    model.classList.remove('visible')
 }

 if(model.classList.contains('visible')){

 }
//continue model
let bambooContinue=document.getElementById('bamboo-continue')
let blackContinue=document.getElementById('black-continue')
let complete1=document.getElementById('complete1')
let input1=document.getElementById('input')
let input2=document.getElementById('input1')


bambooContinue.addEventListener('click',function(){
    if(input1.value===''){
        input1.style.border='1px solid #C21807'
    }else{
        complete1.classList.add('visible')
        ep1.classList.remove('visible')
        model.classList.remove('visible')
    input1.value=''
    bambooStand.style.border="1px solid hsl(0, 0%, 48%)"
    bambooStand.style.height="140px"
    bamboo.checked=false
    input1.style.border=' 1px solid hsl(176, 50%, 47%)'
    input2.style.border=' 1px solid hsl(176, 50%, 47%)'
    }
})

blackContinue.addEventListener('click',function(){
    if(input2.value===''){
        input2.style.border='1px solid #C21807'
    }else{
    complete1.classList.add('visible')
    ep2.classList.remove('visible')
    model.classList.remove('visible')
    input2.value=''
    input2.style.border=' 1px solid hsl(176, 50%, 47%)'
    input1.style.border=' 1px solid hsl(176, 50%, 47%)'
    blackStand.style.border="1px solid hsl(0, 0%, 48%)"
blackStand.style.height="140px"
black.checked=false
    }
})

let gotIt=document.getElementById('got-it')

gotIt.addEventListener('click',function(){
    complete1.classList.remove('visible')
})