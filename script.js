document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("msg").textContent = 
        "Phiên bản 2.0 - deploy lúc: " + new Date().toLocaleString();
});