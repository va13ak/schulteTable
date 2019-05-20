$(function () {
    var tableWidth = 5;
    var tableHeight = 5;
    var buttonSize = 40;

    $("#table").
    
    
    $("#navicon").click(
		function() {
			var navmenu = $("#navmenu");
			var speed = 150;
			if (navmenu.is(":visible"))
				navmenu.hide(speed);
			else
				navmenu.show(speed);
		}
	);
});