function showPage(pageId) {
    var pages = document.querySelectorAll('.content');
    pages.forEach(function(page) {
        if (page.id === pageId) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });
}

function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('menu-show');
}