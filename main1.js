function increase() {

   var myimg= document.getElementById("img1").style.height = document.getElementById("img1").height + 5 + "px";
    var imgmy= document.getElementById("img1").style.width = document.getElementById("img1").width + 5 + "px";
   var imgRad=document.getElementsByClassId("img1")
   imgRad.style.borderRadius= rad + 'px'
   rad += 2
   imgRad.style.borderRadius = rad + 'px'
   console.log(rad)
document.getElementById('img1').style.height= myimg + "px";
document.getElementById('img1').style.width= imgmy + "px";

}

function decrease() {
    document.getElementById("img1").style.height = document.getElementById("img1").height - 5 + "px";
    document.getElementById("img1").style.width = document.getElementById("img1").width - 5 + "px";


}
function miniimage(){
document.getElementById("img1").style.borderRadius="0px";
}
function midimage(){
    document.getElementById("img1").style.borderRadius="20px";
}
function large() {
    document.getElementById("img1").style.borderRadius="50%";
}
