$(function () {
    $('#ibtn').on('click', function () {
        $(this).toggleClass("chatBotButton").toggleClass("chatBotButton_close").find('img').toggleClass('displayClose').find('i').toggleClass('displayClose');           
        $('#iframeID').toggleClass("chatBot_iframe_open").toggleClass("chatBot_iframe");                         
    });
});
