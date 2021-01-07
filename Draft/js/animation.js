$(document).ready(function(){

    $('li.fields').filter(':nth-child(4)').addClass('hide');
    $('li.fields').filter(':nth-child(6)').addClass('hide');
    //or we could use nth-child(n+4),since n start from 0, we filtered out 456, which only 4th 6th child also fulfill the requirements of 'li.field'. 5th child is li.title

    $('ul').on('click','li.title',function(){
        $(this).next().slideDown(200).siblings('li.fields').slideUp(200);

    });


});