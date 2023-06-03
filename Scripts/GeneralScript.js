let is_appointment_opened = false;
let is_services_opened = false;

function Appointment() {
    let window = document.getElementById('back-cover');
    let body = document.getElementsByTagName('body')[0];
    if (is_appointment_opened) {
        window.style.display = "none";
        body.style.overflow = "auto";
        is_appointment_opened = false;
    }
    else{
        window.style.display = "block";
        body.style.overflow = "hidden";
        is_appointment_opened = true;
    }
}

function Services() {
    let menu = document.getElementById('services-menu');
    if (is_services_opened) {
        menu.style.display = "none";
        is_services_opened = false;
    }
    else{
        menu.style.display = "flex";
        is_services_opened = true;
    }
}