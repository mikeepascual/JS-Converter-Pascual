let inpConvert = document.getElementById("convert")
let time1 = document.getElementById("time1")
let time2 = document.getElementById("time2")
let display = document.getElementById("display")
let message = document.getElementById("message")
function myConverter() {
    if (time1.value === time2.value) {
        message.innerHTML = "select different time unit"
    }

else if (time1.value === "Seconds") {
    if (time2.value === "Minutes") {
        display.innerHTML = inpConvert.value / 60
    }else if (time2.value === "Hours") {
        display.innerHTML = inpConvert.value / 3600
    }
    else {
        return ;
    }
}
else if (time1.value === "Minutes") {
    if (time2.value === "Seconds"){
        display.innerHTML = inpConvert.value * 60
    }else if (time2.value === "Hours") {
        display.innerHTML = inpConvert.value / 60
    }else {
        return ;
    }
}
else if (time1.value === "Hours") {
    if (time2.value === "Seconds") {
        display.innerHTML = inpConvert.value * 3600
    }else if (time2.value === "Minutes") {
        display.innerHTML = inpConvert.value * 60
    }else {
        return;
    }
}   
else if (time2.value === "Seconds") {
    if (time1.value === "Minutes") {
        display.innerHTML = inpConvert.value / 60
    }else if (time1.value === "Hours") {
        display.innerHTML = inpConvert.value / 3600
    } else {
        return ;
    }
}
else if (time2.value === "Minutes") {
    if (time1.value === "Seconds") {
        display.innerHTML = inpConvert.value * 60
    }else if (time1.value ==="Hours") {
        display.innerHTML = inpConvert.value / 60
    }else {
        return;
    }
}
else if (time2.value === "Hours") {
    if (time1.value === "Seonds") {
        display.innerHTML = inpConvert.value * 3600
    } else if (time1.value === "Minutes") {
        display.innerHTML = inpConvert.value * 60
    }else {
        return ;
    }
}
}