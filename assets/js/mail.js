
function name() {
    return document.getElementById("name").value;
}

function message() {
    return document.getElementById("message").value;
}

function redirect()
{
    window.location.href = "mailto:ryangross47@gmail.com?subject=" + this.name() + "&body=" + this.message();
}
