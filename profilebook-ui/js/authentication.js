var api_url = "http://localhost:8080/api/";

var indexAuth = function() {
    var token = localStorage.getItem("token");
    if (token) {
        $.ajax({
            url: api_url + "verifyToken",
            type: "GET",
            beforeSend: function(xhr) {
                xhr.setRequestHeader("token", token);
            },
            success: function(result) {
                console.log(result);
                if (!result.status)
                    window.location.href = "./login.html";
                else
                    window.location.href = "./users.html";
            }
        });
    } else {
        window.location.href = "./login.html";
    }
}

var loginAuth = function() {
    var token = localStorage.getItem("token");
    if (token) {
        $.ajax({
            url: api_url + "verifyToken",
            type: "GET",
            beforeSend: function(xhr) {
                xhr.setRequestHeader("token", token);
            },
            success: function(result) {
                console.log(result);
                if (result.status)
                    window.location.href = "./users.html";
                else {
                    localStorage.removeItem("token");
                }
            }
        });
    }
}

var usersAuth = function() {
    var token = localStorage.getItem("token");
    if (token) {
        $.ajax({
            url: api_url + "verifyToken",
            type: "GET",
            beforeSend: function(xhr) {
                xhr.setRequestHeader("token", token);
            },
            success: function(result) {
                console.log(result);
                if (!result.status) {
                    localStorage.removeItem("token");
                    window.location.href = "./login.html";
                } else {
                    loadUsers();
                }
            }
        });
    } else {
        window.location.href = "./login.html";
    }
}

var chatAuth = function() {
    var token = localStorage.getItem("token");
    if (token) {
        $.ajax({
            url: api_url + "verifyToken",
            type: "GET",
            beforeSend: function(xhr) {
                xhr.setRequestHeader("token", token);
            },
            success: function(result) {
                console.log(result);
                if (!result.status) {
                    localStorage.removeItem("token");
                    window.location.href = "./login.html";
                } else {
                    loadMessages();
                }
            }
        });
    } else {
        window.location.href = "./login.html";
    }
}

var logout = function() {
    localStorage.removeItem("token");
    window.location.href = './login.html';
}