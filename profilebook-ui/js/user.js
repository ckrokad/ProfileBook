var loadUsers = function() {
    console.log("user list");
    $.ajax({
        url: api_url + "getAllUsers",
        type: "GET",
        beforeSend: function(xhr) {
            xhr.setRequestHeader("token", localStorage.getItem("token"));
        },
        success: function(result) {
            console.log(result);
            if (result.success) {
                displayUsers(result.users);
            } else {
                M.toast({ html: 'Please reload the page if users not displayed..' });
            }
        }
    });
}

var displayUsers = function(users) {
    users.forEach(user => {
        var html = `<div class="row">
                    <div class="col s6 m3 l2 center-align">
                        <a onclick="openChat('` + user.username + `')">
                            <div class="card-panel hoverable blue-grey lighten-1">
                                <span class="white-text">` + user.username + `</span>
                            </div>
                        </a>
                    </div></div>`;
        $('#bucket').append(html);
    });
}

var openChat = function(userid) {
    console.log(userid);
    window.location.href = './chat.html?uname=' + userid;
}