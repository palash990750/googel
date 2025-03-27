const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

function performSearch() {
    const searchTerm = searchInput.value;
    if (searchTerm) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`, "_blank");
    }
}

searchButton.addEventListener("click", performSearch);

searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        performSearch();
    }
});