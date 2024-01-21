let borderdiv = document.createElement("div");
borderdiv.id = "border";
document.body.appendChild(borderdiv);
borderdiv.style.height = "880px";
borderdiv.style.width = "880px";
borderdiv.style.backgroundColor = "rgb(230, 220, 200)";
document.body.style.display = "center";
document.body.style.justifyItems = "center";
for (let i = 0; i < 64; i++) {
    let newdiv = document.createElement("div");
    newdiv.id = `id${i}`;
    newdiv.style.height = "100px";
    newdiv.style.width = "100px";
    document.getElementById("border").appendChild(newdiv);
    if ((i < 8 && i % 2 == 0) || (i > 7 && i < 16 && i % 2 != 0) ||
        (i > 15 && i < 24 && i % 2 == 0) || (i > 23 && i < 32 && i % 2 != 0) ||
        (i > 31 && i < 40 && i % 2 == 0) || (i > 39 && i < 48 && i % 2 != 0) ||
        (i > 47 && i < 56 && i % 2 == 0) || (i > 55 && i < 64 && i % 2 != 0)) {
        newdiv.style.backgroundColor = "rgb(143, 54, 41)";//black
    }
    else {
        newdiv.style.backgroundColor = "rgb(198, 224, 184)";
    }

}
borderdiv.style.display = "grid";
borderdiv.style.gridTemplateColumns = `repeat(8, auto)`;
let playyer = document.createElement("img");
playyer.id = "tura";
playyer.src = "imgs/tura.png";
playyer.style.height = "80px";
document.getElementById("id8").appendChild(playyer);
document.addEventListener("keydown", function(event) {
    let nowlocation =parseInt(document.getElementById("tura").parentElement.id.slice(2))
    console.log(nowlocation);
    switch (event.key) {
        case "ArrowUp":
            if(nowlocation-8>=0){
                nowlocation-=8;
                nowlocation="id"+nowlocation;
                document.getElementById(nowlocation).appendChild(playyer);
            }
            else{
                alert("out of the bord");
            }
            break;
        case "ArrowDown":
            if (nowlocation+8<64){
                nowlocation+=8;
                nowlocation="id"+nowlocation;
                document.getElementById(nowlocation).appendChild(playyer);
            }
            else{
                alert("out of the bord");
            }
            break;
        case "ArrowLeft":
            if (nowlocation-1!=(-1)&&nowlocation-1!=7&&nowlocation-1!=15&&nowlocation-1!=23&&
            nowlocation-1!=31&&nowlocation-1!=39&&nowlocation-1!=47&&nowlocation-1!=55){
                nowlocation--;
                nowlocation="id"+nowlocation;
                document.getElementById(nowlocation).appendChild(playyer);
            }
            else{
                alert("out of the bord");
            }
            break;
        case "ArrowRight":
            if (nowlocation+1!=8&&nowlocation+1!=16&&nowlocation+1!=24&&nowlocation+1!=32&&
            nowlocation+1!=40&&nowlocation+1!=48&&nowlocation+1!=56&&nowlocation+1!=64){
                nowlocation++;
                nowlocation="id"+nowlocation;
                document.getElementById(nowlocation).appendChild(playyer);
            }
            else{
                alert("out of the bord");
            }
            break;
            case"ArrowEnter":
            alert("ok")
    }
});