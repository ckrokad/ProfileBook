var api_url = "http://localhost:8080/api/";

var login = function() {
    $('#login_btn').attr("disabled", true);
    var username = $("#lusername").val();
    var password = $("#lpassword").val();
    $.ajax({
        url: api_url + "login",
        type: "POST",
        data: {
            username: username,
            password: password
        },
        success: function(result) {
            console.log(result);
            if (!result.success) {
                $('#login_btn').attr("disabled", false);
                M.toast({ html: result.message });
            } else {
                M.toast({ html: 'Logged In' });
                localStorage.setItem("token", result.token);
                window.location.href = "./users.html";
            }
        }
    });
    console.log(username, password);
}

var register = function() {
    console.log("register");
    $('#register_btn').attr("disabled", true);
    var username = $("#rusername").val();
    var password = $("#rpassword").val();
    var fullname = $("#rfullname").val();
    var email = $("#remail").val();
    var address = $("#raddress").val();
    var c_occu = $("#rcoccu").val();
    var cpassword = $("#rcpassword").val();
    if (password != cpassword) {
        $('#register_btn').attr("disabled", false);
        M.toast({ html: 'Password does not match' });
    } else {
        $.ajax({
            url: api_url + "addUser",
            type: "POST",
            data: {
                username: username,
                password: password,
                email: email,
                fullname: fullname,
                address: address,
                c_occupation: c_occu

            },
            success: function(result) {
                console.log(result);
                if (!result.success) {
                    $('#register_btn').attr("disabled", false);
                    M.toast({ html: result.message });
                } else {
                    M.toast({ html: 'Registered Succesfully, Please Login...' });
                }
            }
        });
    }
    console.log(username, password);
}