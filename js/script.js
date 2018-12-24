var menuItem=document.getElementById("menu").getElementsByTagName("li");
var headLine=document.getElementById("text");
var btn=document.getElementById("zar");
var myList=document.getElementById("menu");
var counter=1;

// for (i =0;i <menuItem.length;i++){
//     menuItem[i].addEventListener("click",selectItem);
// }
myList.addEventListener("click", selectItem);

function selectItem(n) {
    if (n) {
        for (i = 0; i < menuItem.length; i++) {
            menuItem[i].classList.remove("selected");
        }     
        headLine.innerHTML=n.target.innerHTML;
    };
    n.target.classList.add("selected");
}

btn.addEventListener("click", newLine);
function newLine(){
    myList.innerHTML += "<li> Nouveau titre "+counter+"</li>";
    counter ++;
}