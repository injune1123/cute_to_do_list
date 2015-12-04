$(document).ready(function() {

    $(document).on('click','#add',function() {
    	if($('#thingsToDo').val()){
    		        $('ol').append('<li>' + $('#thingsToDo').val()+ '</li>')
    	}
    });


    $(document).on('mouseenter',"li:not(.complete)",function() {
        $(this).wrap("<strike>");
    })
    .on('mouseleave',"li:not(.complete)",function() {
        $(this).unwrap("<strike>");
    });

    $(document).on('click','li',function() {
        $(this).toggleClass('complete');
    });

    $(document).on('click','#deleteComplete',function(){
    	$('.complete').fadeOut("fast");

    });


    $(document).on('click','#deleteAll',function(){
    	$('li').fadeOut("fast");

    })



})
