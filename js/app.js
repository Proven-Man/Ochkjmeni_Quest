var checkbox = document.querySelector("input[name=checkboxFunnyImages]");
const password = document.querySelector("[name = 'AdminPassword']");
const AdminPasswordSendBtn = document.querySelector("[name = 'AdminPasswordSendBtn']");

checkbox.addEventListener('change', function () {
    var surpriseImages = document.getElementsByName('funnyImages')
    var simpleImages = document.getElementsByName('simpleImages')
    if (this.checked) {
        surpriseImages.forEach(element => {
            element.style = "display: inline; width: 100%;";
        });
        simpleImages.forEach(element => {
            element.style = "display: none; width: 100%;";
        });
    } else {
        surpriseImages.forEach(element => {
            element.style = "display: none; width: 100%;";
        });
        simpleImages.forEach(element => {
            element.style = "display: inline; width: 100%;";
        });
    }
});
AdminPasswordSendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    var adminCongr = document.getElementsByName('adminCongr')
    if (password.value == "1111") {
        adminCongr[0].style = "display: inline;"
    }
    else {
        adminCongr[0].style = "display: inline;"
    }
})