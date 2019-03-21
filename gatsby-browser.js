/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
$("#contact-form").submit(function(e) {
    e.preventDefault();

    const $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
        $("#notice").css("display", "block");

        setTimeout(function() {
            $("#notice").css("display", "none");
        }, 1000);
    });
});