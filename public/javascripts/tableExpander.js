function expander(tableName){
    $("#"+tableName+" tr:odd").addClass("odd");
    $("#"+tableName+" tr:not(.odd)").hide();
    $("#"+tableName+" tr:first-child").show();
            
        $("#"+tableName+" tr.odd").click(function(){
        	if($(this).next("tr").is(":visible")){
        		$(this).next("tr").toggle();
        	}else{
            $("#"+tableName+" tr:not(.odd)").hide();
            $(this).next("tr").toggle();
            $("#"+tableName+" tr:first-child").show();
        	}
        });
}