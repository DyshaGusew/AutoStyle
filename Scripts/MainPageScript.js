// slider functions

function SwitchSliderRight() {
    let slider = document.getElementById("slider-wrapper");
    let left = slider.style.left.replace('%', '');
    let left_int = +left;
    if (left_int != -300) {
        slider.style.left = String(left_int - 100) + "%";
    } 
    else {
        slider.style.left = "0%";
    }
    
}

function SwitchSliderLeft() {
    let slider = document.getElementById("slider-wrapper");
    let left = slider.style.left.replace('%', '');
    let left_int = +left;
    if (left_int != 0) {
        slider.style.left = String(left_int + 100) + "%";
    } 
    else {
        slider.style.left = "-300%";
    }
}

// works cards functions

function OpenCard(id) {
    let card_text = document.getElementById(id);
    card_text.style.top = "0";
}

function CloseCard(id) {
    let card_text = document.getElementById(id);
    card_text.style.top = "100%";
}