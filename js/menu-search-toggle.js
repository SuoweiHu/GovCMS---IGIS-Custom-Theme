document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href="#block-igis-searchform"]');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var search = document.querySelector('#block-igis-searchform');
            search.classList.toggle('show');
        });
    });
  });
