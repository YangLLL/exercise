function mymove(thenum) {
    setColor();
    document.getElementsByClassName("al")[thenum - 1].style.backgroundColor = "#996633";
    if (thenum == 1)
        document.getElementById("slider").style.left = "-0%";
    if (thenum == 2)
        document.getElementById("slider").style.left = "-25%";
    if (thenum == 3)
        document.getElementById("slider").style.left = "-50%";
    if (thenum == 4)
        document.getElementById("slider").style.left = "-75%";
}
function setColor() {
    var al = document.getElementsByClassName("al");
    for (var i = 0; i < al.length; i++) {
        al[i].style.backgroundColor = "#000";
    }
}