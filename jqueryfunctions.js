$(document).ready(function(){
    $("#minIcon").click(function(){
        $("#compMail").slideToggle();
    });

    $("#closeIcon").click(function(){
        $("#frmComposeMail").addClass("closeMailBox");
    });

    $("#btnUnRead").click(function(){
        // $(".mailInbox > div > input").addClass('unreadMailBg').removeClass('mailBgOpa');
        // $("div.mailInbox > div > input[type='checkbox']:checked").addClass('unreadMailBg').removeClass('mailBgOpa');
        // $("input[type='checkbox']:checked").each(function(){
        //     $("#rdDiv1").addClass('unreadMailBg').removeClass('mailBgOpa');
        // });
        // $(".mailBgOpa").css({
        //     opacity: '0.9',
        //     fontWeight: 'bold'
        // })
        // $(".mailInbox input[type='checkbox']:checked").each(function(){
        //     $(".mailBgOpa").addClass('unreadMailBg').removeClass('mailBgOpa');
        // })
        $('.mailInbox input').on('click', event => {
            $(event.currentTarget).addClass('unreadMailBg');
            
            $(event.currentTarget).siblings().removeClass('mailBgOpa')
            
            $('.mailInbox').children().removeClass('mailBgOpa')
          });
    });

    $("#btnRead").click(function(){
        // $("input[type='checkbox']:checked").each(function(){
        //     $("#unrdDiv").addClass('mailBgOpa').removeClass('unreadMailBg');
        //     $("#rdDiv").addClass('mailBgOpa').removeClass('unreadMailBg');
        //     // $("div[name='allMailDiv']").addClass('mailBgOpa').removeClass('unreadMailBg');
        // });
        $("input[type='checkbox']:checked").each(function(){
            $(".unreadMailBg").addClass('.mailBgOpa').removeClass('unreadMailBg');
        })
    });
});