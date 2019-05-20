var rowsCount = 5;
var colsCount = 5;
var buttonSize = 40;
var tableValues = new Array(rowsCount*colsCount);
var currentNum;

initTableData();

$(function () {
    drawTable();

    $("#navicon").click(
		function() {
			var navmenu = $("#navmenu");
			var speed = 150;
			if (navmenu.is(":visible"))
				navmenu.hide(speed);
			else
                navmenu.show(speed);
            if ($(this).attr("id") == "navicon") {
            }
		}
    );
    
    $("#refresh").click(
        function() {
            initTableData(true);
        }
    );

    $(".cell").click(
        function() {
            var valuePosition = $(this).attr("id").substring(4);
            choosenNum = tableValues[valuePosition];
            if (choosenNum == (currentNum + 1)) {
                currentNum++;
                updateNextNum();
                $(this).attr("style", "background-color: green;");
                setTimeout(function(elem) {
                    elem.attr("style", "");
                }, 100, $(this));
            } else {
                $(this).attr("style", "background-color: red;");
                setTimeout(function(elem) {
                    elem.attr("style",  "background-color: default;");
                }, 100, $(this));
            }
        }
    );

});

function drawTable() {
    console.log("drawSchulteTable");
    table = $("#table");
    for (row = 0; row < rowsCount; row++) {
        var newRow = $("<div></div>").attr("id", "row"+row).addClass("table_row");
        table.append(newRow);
        for (col = 0; col < colsCount; col++) {
            var cellNum = row*colsCount + col;
            var newCell = $("<button></button>").attr("id", "cell"+cellNum).attr("class", "cell").text(tableValues[cellNum]);
            newRow.append(newCell);
        }
    };
    updateNextNum();
};

function drawStatistics() {

};

function resetTableData() {
    console.log("resetTableData");
    for (i = 0; i < tableValues.length; i++) {
        tableValues[i] = 0;
    }
    currentNum = 0;
}

function initTableData(shoudUpdateCells=false) {
    resetTableData();

    console.log("initTableData");
    for (i = 0; i < tableValues.length; i++) {
        var newValue = 0;
        var counter = 0;
        do {
            newValue = Math.floor(Math.random() * tableValues.length)+1;
            counter++;
            if (counter > 10000) {
                alert("Something went wrong...");
                break;
            }
        } while (tableValues.includes(newValue));
        tableValues[i] = newValue;
        if (shoudUpdateCells)
            $("#cell"+i).text(tableValues[i]);
    }

    if (shoudUpdateCells)
        updateCells();
};

function updateCells() {
    console.log("initTableData");
    for (i = 0; i < tableValues.length; i++) {
        $("#cell"+i).text(tableValues[i]);
    };
}

function updateNextNum() {
    $("#next_num").text(currentNum + 1);
}