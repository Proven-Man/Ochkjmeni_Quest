const checkboxLicense = document.querySelectorAll("[name = 'checkboxLicense']");
const FirstCode = document.querySelector("[name = 'FirstCode']");
const SecondCode = document.querySelector("[name = 'SecondCode']");
const ThirdCode = document.querySelector("[name = 'ThirdCode']");

const submitbtn = document.querySelector("[name = 'submit_btn']");

const FirstCodeSendbtn = document.querySelector("[name = 'FirstCodeSendbtn']");
const SecondCodeSendbtn = document.querySelector("[name = 'SecondCodeSendbtn']");
const ThirdCodeSendbtn = document.querySelector("[name = 'ThirdCodeSendbtn']");

const FirstCodeNextbtn = document.querySelector("[name = 'FirstCodeNextbtn']");


FirstCodeNextbtn.addEventListener("click", (e) => {
    e.preventDefault();
    var rows = document.getElementsByName('SecondRow');
    if (checkboxLicense[0].checked) {
        rows.forEach(element => {
            element.style = "display: none; "
        });
        rows = document.getElementsByName('ThirdRow');
        rows.forEach(element => {
            element.style = "display: inline;"
        });

    }
})
submitbtn.addEventListener("click", (e) => {
    e.preventDefault();
    var rows = document.getElementsByName('FirstRow');
    if (checkboxLicense[0].checked) {
        rows.forEach(element => {
            element.style = "display: none; "
        });
        rows = document.getElementsByName('SecondRow');
        rows.forEach(element => {
            element.style = "display: inline;"
        });

    }
})
FirstCodeSendbtn.addEventListener("click", (e) => {
    e.preventDefault();
    var surpriseImages = document.getElementsByName('surpriseImages')
    surpriseImages.forEach(element => {
        if (FirstCode.value == 'Sovok' && element.id == "Sovok") { element.style = "display: inline;"; }
       else if (FirstCode.value == 'Rommel_Fuel' && element.id == "Rommel_Fuel") { element.style = "display: inline;"; }
        else if (FirstCode.value == 'Hussars_Blyad' && element.id == "Hussars_Blyad") { element.style = "display: inline;"; }
        else if (FirstCode.value == 'Lubov_Moya' && element.id == "Lubov_Moya") { element.style = "display: inline;"; }
        else if (FirstCode.value == 'Guki_Povsydu' && element.id == "Guki_Povsydu") { element.style = "display: inline;"; }
        else if (FirstCode.value == 'Deus_Vult' && element.id == "Deus_Vult") { element.style = "display: inline;"; }
        else if (FirstCode.value == 'Phill_Swift' && element.id == "Phill_Swift") { element.style = "display: inline;"; }
        else if (FirstCode.value == 'Panzer_chocolate' && element.id == "Panzer_chocolate") {
            element.style = "display: inline;";
            document.getElementsByName('FirstCodeNextbtnDisplay')[0].style = "display: inline;";
        }
        else if (FirstCode.value == 'otto_fon_bismark' && element.id == "otto_fon_bismark") { element.style = "display: inline;"; }
        else if (FirstCode.value == 'Ass_baton' && element.id == "Ass_baton") { element.style = "display: inline;"; }
        else {
            element.style = "display: none;";
        }
    });
})
SecondCodeSendbtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (SecondCode.value == 'Napalme!') {
        var rows = document.getElementsByName('ThirdRow');
        if (checkboxLicense[0].checked) {
            rows.forEach(element => {
                element.style = "display: none; "
            });
            rows = document.getElementsByName('FourthRow');
            rows.forEach(element => {
                element.style = "display: inline;"
            });
        }
    }
})
ThirdCodeSendbtn.addEventListener("click", (e) => {
    e.preventDefault();
    var surpriseImages = document.getElementsByName('surpriseImages')
    surpriseImages.forEach(element => {
        if (ThirdCode.value == 'hirohito' && element.id == "hirohito") { element.style = "display: inline; margin-top: 10px;"; }
        else {
            element.style = "display: none;";
        }
    });
})

