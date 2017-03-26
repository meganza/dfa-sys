$(document).ready(function () {
    toggleFields();
    $("#sel1").change(function () { // for passport renewal
        toggleFields();
    });

});

function toggleFields() {
    if ($("#sel1").val() == 1 || $("#sel1").val() == 2)
        $("#oldPassport").show();
    else
        $("#oldPassport").hide();
}
