/* Hover behavior for the shared navigation dropdowns. */
(function () {
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (!canHover.matches) return;

  document.querySelectorAll('nav .nav-dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('mouseenter', function () {
      dropdown.open = true;
    });

    dropdown.addEventListener('mouseleave', function () {
      if (!dropdown.contains(document.activeElement)) dropdown.open = false;
    });

    dropdown.addEventListener('focusout', function (event) {
      if (!dropdown.contains(event.relatedTarget) && !dropdown.matches(':hover')) {
        dropdown.open = false;
      }
    });
  });
})();
