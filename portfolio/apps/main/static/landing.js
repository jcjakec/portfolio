document.addEventListener("DOMContentLoaded", function() {
    const cbtn = document.querySelector("#cover-button");
    let scrolled = false;
    cbtn.addEventListener("click", function() {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
        scrolled = true;
    })
    document.addEventListener("scroll", function(event) {
        if (window.scrollY < window.innerHeight && !scrolled) {
            window.scrollTo(0, 0);
            scrolled = false;
        }0
    })
})
