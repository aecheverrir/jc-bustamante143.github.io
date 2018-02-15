/* global $ */
"use strict";

function updateList(data) {

    // Retrieve all the projects
    data.forEach(function (d) {
        // Add to list
        var l = $("<li>").attr("id", d.id).text(d.name);
        $("#projectLists").append(l)
    });
}

function updateProject(data, filter) {

    var projecto = data.filter(function (d) {
        return d.id.startsWith(filter);
    });

    // Clean the div
    $(".project-description").empty();

    // Create the title header
    var title = $("<h3>").append(projecto[0].title);

    // Create the description paragraph
    var description = $("<p>").append(projecto[0].description);

    // Create the link reference
    var link = $("<a>").attr("href", projecto[0].link).text("here.");
    var refLine = $("<p>").append("You can visit the project ").append(link);

    // Append to div
    $(".project-description").append(title).append(description).append(refLine);
}

function callback(data) {
    // Fill the project list
    updateList(data);

    // If hover, update project info
    $("#projectLists li").hover(function () {
        updateProject(data, $(this).attr('id'));
    });

    $("#mailBtn").on('click', function () {
        window.location = "mailto:juanc_bustamante_@hotmail.com";
    });
}

function main() {
    $.getJSON("./js/projects.json", callback);
}

$(document).ready(main);