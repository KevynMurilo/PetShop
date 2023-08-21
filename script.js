document.addEventListener("DOMContentLoaded", function() {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    for (const link of smoothScrollLinks) {
        link.addEventListener("click", smoothScroll);
    }
    
    function smoothScroll(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        let offsetTop = target.offsetTop - 80; // Adjust offset based on your layout
        
        // Adjust the offset for "Our Team" and "Our Blog" sections
        if (target.id === "team" || target.id === "blog") {
            offsetTop += 50; // Adjust this value to your preference
        }
        
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    }
});
