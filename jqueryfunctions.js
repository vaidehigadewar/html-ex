$(document).ready(function(){
    $("#minIcon").click(function(){
        $("#compMail").slideToggle();
    });

    $("#closeIcon").click(function(){
        $("#frmComposeMail").addClass("closeMailBox");
    });

    $("#btnUnRead").click(function(){
        $(".mailBody input[type='checkbox']:checked").closest('.mailBody').removeClass('mailBgOpa').addClass('unreadMailBg');
    });

    $("#btnRead").click(function(){
        $(".mailBody input[type='checkbox']:checked").closest('.mailBody').removeClass('unreadMailBg').addClass('mailBgOpa');
    });

    $("#btnToggle").click(function(){
        $(".mailBody input[type='checkbox']:checked").closest('.mailBody').toggleClass('unreadMailBg');
    });
});