
let allplayer = [];

document.getElementById("b1").onclick = function () {
    // שמירת הנתונים 
    let name = document.getElementById("name2").value;
    let phone = document.getElementById("phone1").value;
    let email = document.getElementById("email1").value;
    let password = document.getElementById("password1").value;

    // יוצר אובייקט

    let data = {
        "name": name,
        "phone": phone,
        "email": email,
        "password": password,
    };
    let isregis = false;
    if (localStorage.getItem('yosers') == null) {
        // console.log(localStorage.getItem('yosers'))
        allplayer.push(data);
        allplayer = JSON.stringify(allplayer);
        localStorage.setItem('yosers', allplayer);
        alert("נרשם בהצלחה!")

    }
    else {
        console.log(localStorage.getItem('yosers'))

        let checkplayer = localStorage.getItem('yosers');
        checkplayer = JSON.parse(checkplayer);
        for (let i = 0; i < checkplayer.length; i++) {
            if (checkplayer[i].name === data.name && checkplayer[i].phone === data.phone && checkplayer[i].email === data.email) {
                isregis = true;
                alert("you are registered");
                location.reload();
            }
        }
        if (isregis == false) {
            checkplayer.push(data);
            checkplayer = JSON.stringify(checkplayer);
            localStorage.setItem('yosers', checkplayer);
            alert("נרשם בהצלחה!")
        }

    }






    console.log(data);

}
let a = { "n": "aaa", "nn": 4354 };
console.log(a);
console.log(localStorage.getItem('yosers') == null);
let aaaa = { "n": "aaa", "nn": 4353 }
console.log(aaaa.n == a.n && aaaa.n == a.n);