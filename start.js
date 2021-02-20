let search = document.getElementById("search");
let create = document.getElementById("create");
let path = window.location.href.replace("/index.html", "");

search.addEventListener("click", newSearch);
create.addEventListener("click", newCreate);

function newSearch() {
    console.log(path);
}

function newCreate() {

}