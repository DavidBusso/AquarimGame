let bolen = false;



document.getElementById("b1").onclick = function () {
    let data = {
        "name": document.getElementById("name2").value,
        "password": document.getElementById("password1").value,
    }
    let informatsya = localStorage.getItem("yosers");
    informatsya = JSON.parse(informatsya);
    let thisuser = JSON.stringify(data);
    localStorage.setItem('thisuser', thisuser);
    console.log(informatsya[0].name)
    console.log(data.name)
    for (let i = 0; i < informatsya.length; i++) {
        if (informatsya !== null && informatsya[i].name === data.name && informatsya[i].password === data.password) {
            document.loginForm.action = "opengame.html";

            return;
        }
    }
    alert("סיסמה או שם לא מתאימים");

};

