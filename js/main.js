var rangeMin = document.getElementById("rangeMin");
var rangeMax = document.getElementById("rangeMax");
var Result_Area = document.getElementById("Result_Area");

var Btn_accept = document.getElementById("Btn_accept");
var Btn_GenerateNew = document.getElementById("Btn_GenerateNew");

var _rangeMin_ = 0;
var _rangeMax_ = 0;

function startUp() {
    alert("修改上下限以开始使用！");
    rangeMin.value = "0";
    rangeMax.value = "0";
    disableAcceptBtn();
    disableGenerateNewBtn();
}

function enableAcceptBtn() {
    Btn_accept.disabled = false;
}

function disableAcceptBtn() {
    Btn_accept.disabled = true;
}

function enableGenerateNewBtn() {
    Btn_GenerateNew.disabled = false;
}

function disableGenerateNewBtn() {
    Btn_GenerateNew.disabled = true;
}

function range_change() {
    enableAcceptBtn();
    disableGenerateNewBtn();
}

function Accept_click() {
    if (eval(rangeMin.value) == eval(rangeMax.value)) {
        alert("下限与上限相等，请检查后重新输入！");
    } else if (eval(rangeMin.value) > eval(rangeMax.value)) {
        alert("下限大于上限，请检查后重新输入！");
    } else {
        disableAcceptBtn();
        enableGenerateNewBtn();
        setNewRange();
    }
}

function GenerateNew_click() {
    Result_Area.value += (Math.floor(Math.random() * (_rangeMax_ - _rangeMin_ + 1)) + _rangeMin_) + "\n";
}

function setNewRange() {
    _rangeMin_ = Math.floor(eval(rangeMin.value));
    _rangeMax_ = Math.floor(eval(rangeMax.value));
    Result_Area.value += "【下限】" + _rangeMin_ + "【上限】" + _rangeMax_ + "\n";
}

startUp();