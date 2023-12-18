document.addEventListener('DOMContentLoaded', function() {
    var link = document.querySelector('a[href="#block-igis-searchform"]');
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var search = document.querySelector('#block-igis-searchform');
        search.classList.toggle('show');
    });
  });
