$(document).ready(function(){
    $("#minIcon").click(function(){
        $("#compMail").slideToggle();
    });

    $("#closeIcon").click(function(){
        $("#frmComposeMail").addClass("closeMailBox");
    });

    // $("#btnUnRead").click(function(){
    //     if($('input[id="chkbx2"]').is(':checked'))
    //     {
    //         // $("#div2").addClass("mailBody unreadMailBg subjectRead arcIcon mailBodyUnRDate");
    //         $("#div2").toggleClass("mailBody unreadMailBg subjectRead arcIcon mailBodyUnRDate");
    //         // $("#div2").removeClass("mailBody mailBgOpa subjectRead archiveIcon mailBodyDate");
    //     }
    // });

    // $("#btnRead").click(function(){
    //     if($('input[id="chkbx1"]').is(':checked') || $('input[id="chkbx6"]').is(':checked'))
    //     {
    //         $("#div1").addClass("read").removeClass('unreadMailBg');
    //         $(".subject").addClass("readSub").removeClass('subject');
    //         // $("#div1").addClass("read").removeClass('unreadMailBg');
    //         // $("#div6").addClass("mailBody mailBgOpa subjectRead archiveIcon mailBodyDate");
    //     }
    //     // else if($('input[id="chkbx1"]').is(':checked'))
    //     // {
    //     //     $("#div1").addClass("mailBody mailBgOpa subjectRead archiveIcon mailBodyDate");
    //     // }
    //     // else if($('input[id="chkbx6"]').is(':checked'))
    //     // {
    //     //     $("#div6").addClass("mailBody mailBgOpa subjectRead archiveIcon mailBodyDate");
    //     // }
    // });
});