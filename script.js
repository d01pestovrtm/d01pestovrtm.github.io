/*
add footer template to the page
*/
function loadFooter() {
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
}

document.addEventListener("DOMContentLoaded", loadFooter);
