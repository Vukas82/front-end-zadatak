// When the user scrolls the page, execute myFunction 
// window.onscroll = function () {
//     stickyHeader()
// };

// Get the header
// var searchBox = document.getElementById("search__box");

// Get the offset position of the navbar
// var sticky = header.offsetTop + 80;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function searchBarToogle() {
//     console.log(searchBox)

//     // if (searchBox.classList !== active__search) {
//     //     searchBox.classList.add("active__search");
//     // } else {
//     //     searchBox.classList.remove("active__search");
//     // }
// }

//-----------------------------------------


function searchBarToogle() {

    var x = document.getElementById("search__box");
    var y = document.getElementById("left__nav");
    var z = document.getElementById("active__search");

    if (x.style.display === "none") {
        x.style.display = "flex";
        y.style.display = "none";
        z.style.display = "none";
        // z.style.visibility = "hidden";
    } else {
        x.style.display = "none";
        y.style.display = "flex";
        z.style.display = "flex";
        // z.style.visibility = "visible";

    }
}