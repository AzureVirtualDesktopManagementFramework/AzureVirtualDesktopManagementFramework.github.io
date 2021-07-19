var sectionHeight = function() {
    var total    = $(window).height(),
        $section = $('section').css('height','auto'),
        $navSideBar = $("#navSidebar");

    if ($section.outerHeight(true) < total) {
      var margin = $section.outerHeight(true) - $section.height();
      $section.height(total - margin - 20);
    } else {
      $section.css('height','auto');
      var margin = $section.outerHeight(true) - $section.height();
    }
    $navSideBar.height(total - margin - 40);
}
var navigationBuilder = function(data) {
    document.getElementById("backToParent").innerHTML = "<a href='" + data.backto.Link + "'>Back to: " + data.backto.Label + "</a>";
    document.getElementById("backToParent2").innerHTML = "<a href='" + data.backto.Link + "'>Back to: " + data.backto.Label + "</a>";

    var i;
    for (i = 0; i < data.fellows.length; i++) {
        $("nav ul").append("<li class='tag-h2'><a href='" + data.fellows[i].Link + "'>" + data.fellows[i].Label + "</a></li>");
        $("#inMainList").append("<li class='tag-h2'><a href='" + data.fellows[i].Link + "'>" + data.fellows[i].Label + "</a></li>");
    }

    sectionHeight();
}

$(window).resize(sectionHeight);

$(function() {
    sectionHeight();

    $('img').on('load', sectionHeight);
})

$(function() {
    var results = null;
    $.ajax({
        type: 'GET',
        url: 'nav.json',
        dataType: 'json',
        success: navigationBuilder,
        async: true
    });
});