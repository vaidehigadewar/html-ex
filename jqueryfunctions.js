$(document).ready(function(){
    $("#minIcon").click(function(){
        $("#compMail").slideToggle();
    });

    $("#closeIcon").click(function(){
        $("#frmComposeMail").addClass("closeMailBox");
    });

    $("#btnUnRead").click(function(){
        $("input[type='checkbox']:checked").each(function(){
            $("#rdDiv1").addClass('unreadMailBg').removeClass('mailBgOpa');
        });
    });

    // $("#btnRead").click(function(){
    //     $("input[type='checkbox']:checked").each(function(){
    //         $("#unrdDiv").addClass('mailBgOpa').removeClass('unreadMailBg');
    //         $("#rdDiv").addClass('mailBgOpa').removeClass('unreadMailBg');
    //         // $("div[name='allMailDiv']").addClass('mailBgOpa').removeClass('unreadMailBg');
    //     });
    // });
});