function bold(){

    var gettext= document.getElementById("mytext");
    if(gettext.style.fontWeight!="bold")
    {
    gettext.style.fontWeight="bold";
}
else{
    gettext.style.fontWeight="normal";
}
}
function italic() {
    var gettext=document.getElementById("mytext");
    if(gettext.style.fontStyle!="italic"){
    gettext.style.fontStyle="italic";
}
else{
    gettext.style.fontStyle="normal";
}
}
function underline() {

    var gettext=document.getElementById("mytext");
    if(gettext.style.textDecoration!="underline"){
    gettext.style.textDecoration="underline";
}
else{
    gettext.style.textDecoration="none";
}
}
function family(event){

    var gettext=document.getElementById("mytext");
   gettext.style.fontFamily=event.value;
}
function taille(event){

    var gettext=document.getElementById("mytext");
   gettext.style.fontSize=event.value;
}
$('document').ready(function(){
    $(".btncourse1").hide();
    $(".btncourse2").hide();
    $(".btncourse3").hide();
    $(".btncourse4").hide();
    $(".btncourse5").hide();
    $(".btncourse6").hide();
    $(".btncourse7").hide();
    $(".btncourse8").hide();
    $(".btncourse9").hide();
$(".course1").mouseenter(function(){
    $(".btncourse1").show();
});
$(".course1").mouseleave(function(){
    $(".btncourse1").hide();
});
$(".course1").mouseenter(function(){
    $(".course1").css("opacity" ,"0.5");
})
$(".course1").mouseleave(function(){
    $(".course1").css("opacity" ,"1");
})

$(".course2").mouseenter(function(){
    $(".btncourse2").show();
})
$(".course2").mouseleave(function(){
    $(".btncourse2").hide();
})
$(".course2").mouseenter(function(){
    $(".course2").css("opacity" ,"0.5");
})
$(".course2").mouseleave(function(){
    $(".course2").css("opacity" ,"1");
})
$(".course3").mouseenter(function(){
    $(".btncourse3").show();
})
$(".course3").mouseleave(function(){
    $(".btncourse3").hide();
})
$(".course3").mouseenter(function(){
    $(".course3").css("opacity" ,"0.5");
})
$(".course3").mouseleave(function(){
    $(".course3").css("opacity" ,"1");
})
$(".course4").mouseenter(function(){
    $(".btncourse4").show();
})
$(".course4").mouseleave(function(){
    $(".btncourse4").hide();
})
$(".course4").mouseenter(function(){
    $(".course4").css("opacity" ,"0.5");
})
$(".course4").mouseleave(function(){
    $(".course4").css("opacity" ,"1");
})
$(".course5").mouseenter(function(){
    $(".btncourse5").show();
})
$(".course5").mouseleave(function(){
    $(".btncourse5").hide();
})
$(".course5").mouseenter(function(){
    $(".course5").css("opacity" ,"0.5");
})
$(".course5").mouseleave(function(){
    $(".course5").css("opacity" ,"1");
})
$(".course6").mouseenter(function(){
    $(".btncourse6").show();
})
$(".course6").mouseleave(function(){
    $(".btncourse6").hide();
})
$(".course6").mouseenter(function(){
    $(".course6").css("opacity" ,"0.5");
})
$(".course6").mouseleave(function(){
    $(".course6").css("opacity" ,"1");
})
$(".course7").mouseenter(function(){
    $(".btncourse7").show();
})
$(".course7").mouseleave(function(){
    $(".btncourse7").hide();
})
$(".course7").mouseenter(function(){
    $(".course7").css("opacity" ,"0.5");
})
$(".course7").mouseleave(function(){
    $(".course7").css("opacity" ,"1");
})
$(".course8").mouseenter(function(){
    $(".btncourse8").show();
})
$(".course8").mouseleave(function(){
    $(".btncourse8").hide();
})
$(".course8").mouseenter(function(){
    $(".course8").css("opacity" ,"0.5");
})
$(".course8").mouseleave(function(){
    $(".course8").css("opacity" ,"1");
})
$(".course9").mouseenter(function(){
    $(".btncourse9").show();
})
$(".course9").mouseleave(function(){
    $(".btncourse9").hide();
})
$(".course9").mouseenter(function(){
    $(".course9").css("opacity" ,"0.5");
})
$(".course9").mouseleave(function(){
    $(".course9").css("opacity" ,"1");
})
})
