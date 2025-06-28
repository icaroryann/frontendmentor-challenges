function toggleAnswer(element) {
    // Change the icon
    if (element.src.endsWith("icon-plus.svg")) {
        element.src = "assets/images/icon-minus.svg";
    } else {
        element.src = "assets/images/icon-plus.svg";
    }
    // Show or hide the next paragraph
    let p = element.nextElementSibling;
    if (p && p.tagName === "P") {
        p.classList.toggle("hidden");
    }
}