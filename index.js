function loadDoc() {
    var xhttp = new XMLHttpRequest(); //Creates a new XMLHttpRequest object
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "ajax_info.txt", true); //Specifies the request (open(method, url, asynchronous or synchronous))
    xhttp.send(); //Sends GET the request to the server
} 