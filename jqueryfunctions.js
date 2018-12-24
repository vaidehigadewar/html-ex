$(document).ready(function(){
    $("#minIcon").click(function(){
        $("#compMail").slideToggle();
    });

    $("#closeIcon").click(function(){
        // $(".composeMailBox").addClass("closeMailBox");
        $(".composeMailBox").hide();
    });

    $("#btnUnRead").click(function(){
        $(".mailBody input[type='checkbox']:checked").closest('.mailBody').removeClass('mailBgOpa').addClass('unreadMailBg');
    });

    $("#btnRead").click(function(){
        $(".mailBody input[type='checkbox']:checked").closest('.mailBody').removeClass('unreadMailBg').addClass('mailBgOpa');
    });

    $("#btnToggle").click(function(){
        $("div.unreadMailBg input[type='checkbox']:checked").closest('.mailBody').addClass('mailBgOpa').removeClass('unreadMailBg');
        $(".mailBody input[type='checkbox']:checked").prop('checked',false);
        $("#chkAll").prop('checked',false);
    });
    
    $("#btnCompose").click(function(){
        $(".composeMailBox").show();
    });

    $("#chkAll").click(function(){
        $(".chkbox").prop("checked", this.checked);
    });

    $(".fa-trash").click(function(){
        $(this).closest('.mailBody').remove();
    });
});