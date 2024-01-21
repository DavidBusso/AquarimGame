var live = 100;
var level = 1;
var totaltime = 0;
var sconds = 0;
let scond = setInterval(wahit, 1000);
let spid = [30, 40, 50, 30];
function wahit() {
    if (sconds === 30) {
        live -= 30;
        document.getElementById("player1").style.top = "80px";
        document.getElementById("player1").style.left = "0px";
        document.getElementById("yourlive").innerHTML = live + "%";
        sconds = 0;
        alert("your time is over");
        if (live <= 0) {
            alert("game over");
            location.reload();
        }
    }
    sconds++;
    document.getElementById("time").innerHTML = " time:" + sconds + ";";
    console.log(sconds);
}
document.addEventListener("keydown", startgame);//להתחיל את התנןעה במשחק
let isPress = true;
function startgame(event) {
    if (event.key === "Enter" && isPress) {
        document.addEventListener("keydown", player);//להזיז את השחקן
        isPress = false;
        document.querySelector("audio").play();
       
        for (let i = 1; i < 5; i++) {
            let start = setInterval(movs, spid[i - 1]);
            function movs() {
                let heightbit = parseInt(window.getComputedStyle(document.getElementById("bit" + i)).getPropertyValue("top").replace("px", ""));
                if (heightbit > -200) {
                    heightbit -= 5;
                    console.log(heightbit)
                    document.getElementById("bit" + i).style.top = heightbit + "px";
                }
                else {
                    document.getElementById("bit" + i).style.top = "600px";
                }
                let topbit = parseInt(window.getComputedStyle(document.getElementById("bit" + i)).getPropertyValue("top").replace("px", ""));
                let topplayer = parseInt(window.getComputedStyle(document.getElementById("player1")).getPropertyValue("top").replace("px", ""));
                let leftbit = parseInt(window.getComputedStyle(document.getElementById("bit" + i)).getPropertyValue("left").replace("px", ""));
                let leftplayer = parseInt(window.getComputedStyle(document.getElementById("player1")).getPropertyValue("left").replace("px", ""));
                if (topplayer >= topbit - 50 & topplayer <= topbit + 50 && leftplayer >= leftbit - 50 && leftplayer <= leftbit + 50) {
                    alert("you lose")
                    live -= 15;
                    document.getElementById("player1").style.top = "80px";
                    document.getElementById("yourlive").innerHTML = live + "%";
                    document.getElementById("player1").style.top = "80px";
                    document.getElementById("player1").style.left = "0px";
                }
            }
        }
    }
}
function player(event) {
    let height = parseInt(window.getComputedStyle(document.getElementById("player1")).getPropertyValue("top").replace("px", ""));
    let left = parseInt(window.getComputedStyle(document.getElementById("player1")).getPropertyValue("left").replace("px", ""));
    console.log(height);
    console.log(left);
    switch (event.key) {
        case "ArrowUp":
            if (height > 20) {
                height -= 5;
                document.getElementById("player1").style.top = height + "px";
            }
            break;
        case "ArrowDown":
            if (height < 480) {
                height += 5;
                document.getElementById("player1").style.top = height + "px";
            }
            break;
        case "ArrowLeft":
            if (left > 5) {
                left -= 5;
                document.getElementById("player1").style.left = left + "px";
            }
            break;
        case "ArrowRight":
            if (left < 1070) {
                left += 5;
                document.getElementById("player1").style.left = left + "px";
            }
            break;
    }
}
setInterval(gift, 6000);
function gift() {
    placeGift("gift1");
    placeGift("gift2");
}
function placeGift(giftId) {
    let topgift = Math.floor((Math.random() * 400) + 90);
    let leftgift = Math.floor((Math.random() * 1000) + 30);
    document.getElementById(giftId).style.display = "block";
    document.getElementById(giftId).style.top = topgift + "px";
    document.getElementById(giftId).style.left = leftgift + "px";
}
setInterval(chakc, 30);
function getLocation(object, property) {
    return parseInt(window.getComputedStyle(document.getElementById(object)).getPropertyValue(property).replace("px", ""))
}
function getPlayerLocation(property) {
    return getLocation("player1", property)
}
function Gift(id) {
    this.element = document.getElementById(id);
    this.top = getLocation(id, "top");
    this.left = getLocation(id, "left")
}
function checkCrash(giftId) {
    const flexable = 50;
    let gift = new Gift(giftId);
    let playerLowerGiftTop = getPlayerLocation("top") >= (gift.top - flexable);
    let playHigherGiftBottom = getPlayerLocation("top") <= (gift.top + flexable);
    let playRightGiftLeft = getPlayerLocation("left") >= (gift.left - flexable);
    let playerLeftGiftRight = getPlayerLocation("left") <= (gift.left + flexable);
    if (playerLowerGiftTop && playHigherGiftBottom && playRightGiftLeft && playerLeftGiftRight) {
        placeGift(giftId);
        if(live+15<100){
           live += 15; 
        }
        
        document.getElementById("yourlive").innerHTML = live + "%";
    }
}
function chakc() {
    checkCrash("gift1");
    checkCrash("gift2");
    if (parseInt(window.getComputedStyle(document.getElementById("player1")).getPropertyValue("top").replace("px", "")) > 450 &&
        parseInt(window.getComputedStyle(document.getElementById("player1")).getPropertyValue("left").replace("px", "")) > 1040) {
        console.log(parseInt(window.getComputedStyle(document.getElementById("player1")).getPropertyValue("top").replace("px", "")) + "hello");
        console.log(window.getComputedStyle(document.getElementById("player1")).getPropertyValue("left").replace("px", "") + "hello");
        level++;
        document.getElementById("lavel").innerHTML = "lavel: " + level;
        totaltime += sconds;
        let minet = Math.floor(totaltime / 60);
        let totalsconds = totaltime % 60;
        document.getElementById("player1").style.top = "80px";
        document.getElementById("player1").style.left = "0px";
        document.getElementById("yourlive").innerHTML = 100 + "%";
        document.getElementById("totaltime").innerHTML = "total time: " + minet + ":" + totalsconds;
        sconds = 0;
        document.getElementById("time").innerHTML = " time:" + sconds + ";";
      
    }
}
let thisuser = localStorage.getItem("thisuser");
thisuser = JSON.parse(thisuser);
console.log(thisuser.name)





let x = [10, 10];
x = JSON.stringify(x);
localStorage.setItem("user", x);

let y = localStorage.getItem("user");
y = JSON.parse(y);
console.log(y)

