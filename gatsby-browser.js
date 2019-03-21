exports.onInitialClientRender = () => {
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
};