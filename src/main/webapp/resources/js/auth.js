auth = {};
auth.Context = function () {

    $("#registerUser").click(function () {
        $("#newUserModal").modal("show");
    });

};
$(document).ready(function () {
    auth.context = new auth.Context();
});