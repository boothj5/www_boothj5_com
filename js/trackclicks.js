var track = function (category, label) {
//    alert("Clicked " + category + ", " + label);
    _gaq.push(['_trackEvent', category, "clicked", label]);
};

$(document).ready(function () {
    var profanity_links = "#link-profanity, #header-link-profanity, #redirect-profanity",
        head_unit_links = "#link-head-unit, #header-link-head-unit",
        jarch_links = "#link-jarch, #header-link-jarch",
        minions_links = "#link-minions, #header-link-minions",
        stabber_links = "#link-stabber, #header-link-stabber",
        pyloc_links = "#link-pyloc, #header-link-pyloc",
        cv_links = "#link-cv, #header-link-cv";

    $(cv_links).click(function (e) {
        track("professional", "cv");
    });

    $(profanity_links).click(function (e) {
        track("projects", "profanity");
    });
    
    $(head_unit_links).click(function (e) {
        track("projects", "head-unit");
    });
    
    $(jarch_links).click(function (e) {
        track("projects", "jarch");
    });
    
    $(minions_links).click(function (e) {
        track("projects", "minions");
    });

    $(stabber_links).click(function (e) {
        track("projects", "stabber");
    });

    $(pyloc_links).click(function (e) {
        track("projects", "pyloc");
    });

    $("#header-link-learning").click(function (e) {
        track("links", "learning");
    });
    
    $("[id^=find]").click(function (e) {
        var site = $(this).attr("id").split("-")[1];
        track("find", site);
    });
    
    $("[id^=github]").click(function (e) {
        var repo = $(this).attr("id");
        track("github-repo", repo);
    });

    $("[id^=download]").click(function (e) {
        var project = $(this).attr("id");
        track("download", project);
    });
});
