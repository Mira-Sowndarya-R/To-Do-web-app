
//Check when clicked on li
$("ul").on("click","li",function(){
    $(this).toggleClass("checked");
});

//Delete button
$("ul").on("click","span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
    e.stopPropagation();
});

//Input 
$("input[type='text']").keypress(function(e){
	if(e.which ===13){
		//extract text from input box
		var item=$(this).val();

		//add the item to the ul
         $("ul").append("<li><span class='listItem'> <i class='fa fa-trash'></i> </span>"+item+"</li>");
		//clear the text box
        $(this).val("");
	}
});

//Add new or close
$("#plusMinus").click(function(){
	$("i", this).toggleClass("fa-minus fa-plus");
    $("input[type='text']").fadeToggle();

});

