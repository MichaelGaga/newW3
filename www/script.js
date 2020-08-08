//prevent default  post to do ajax post
$ (document).ready(function(){
    $("#loginform").submit(function(event){
        event.preventDefault();
        ajaxPost();
    });
});


function resetData() {
    $("email").val(""),
    $("password").val("")
}


function ajaxPost(){
    var formData = {
        email : $("#email").val(),
        password : $("#password").val()
    }

  
    $.ajax( {//ajax post
        type : "POST",
        contentType : "application/json",
        url : window.location + "api/login",
        data : JSON.stringify(formData),
        dataType : "json",
        success : function(customer) {
            if (accountholder.valid === true) {
                $("#errormsg").removeClass("showmessage");
                $("#errormsg").addClass("hidemessage");
            } else {
                $("#errormsg").removeClass("hidemessage");
                $("#errormsg").addClass("showmessage");
            }
        },
        error : function(e) {
            alert("Error!")
            console.log("FAIL: ", e)
        }
    });
    //reset Form
    resetData();
}

