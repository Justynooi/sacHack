let search = document.getElementById("search");
let create = document.getElementById("create");
let path = window.location.href.replace("/index.html", "");
let link = document.getElementById("url");

search.addEventListener("click", newSearch);
create.addEventListener("click", newCreate);

function newSearch() {
    let url = path + "/search.html";
    window.location.href = url;
}

function newCreate() {
    let url = path + "/create.html";
    window.location.href = url;
}