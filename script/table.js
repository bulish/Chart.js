var form = document.querySelector("form");
var table = document.createElement("table");

form.appendChild(table);

// title

var titleTr = document.createElement("tr");
var titleChart = document.createElement("input");
titleChart.name = "titleChart";
var tdTitle = document.createElement("td");
var titleText = document.createElement("span");
var iconTitle = document.createElement('div');

titleChart.type = 'text';
titleText.innerHTML = "Title:";
iconTitle.innerHTML = '<i class="fas fa-check-circle tableIcon" onclick=newTitle(chart)></i>';

table.appendChild(titleTr);
titleTr.appendChild(tdTitle);
tdTitle.appendChild(titleText);
titleTr.appendChild(titleChart);
titleTr.appendChild(titleChart);
titleTr.appendChild(iconTitle);

// legend

var legendTr = document.createElement('tr');
var legend = document.createElement('input');
legend.name = "legend";
var tdLegend = document.createElement('td');
var legendText = document.createElement('span');
var iconLegend = document.createElement('div');

legend.type = 'text';
legendText.innerHTML = 'Legend:';
iconLegend.innerHTML = '<i class="fas fa-check-circle tableIcon"onclick=newLegend(chart)></i>';

table.appendChild(legendTr);
legendTr.appendChild(tdLegend);
tdLegend.appendChild(legendText);
legendTr.appendChild(legend);
legendTr.appendChild(iconLegend);

// first data

var dataTr = document.createElement('tr');
var dataX = document.createElement('input');
var dataY = document.createElement('input');
var tdData = document.createElement('td');
var dataText = document.createElement('span');
var iconData = document.createElement('div');

dataX.type = 'text';
dataY.type = 'text';
dataText.innerHTML = 'Data:';
dataX.value = "X VALUE";
dataX.classList = 'dataX';
dataY.value = "Y VALUE";
dataY.classList = 'dataY';
dataX.name = "firstDataX";
dataY.name = "firstDataY";
iconData.innerHTML = '<i class="fas fa-check-circle tableIcon lastIcon" onclick="newData(event); update(chart)"></i>';

table.appendChild(dataTr);
dataTr.appendChild(tdData);
tdData.appendChild(dataText);
dataTr.appendChild(dataX);
dataTr.appendChild(dataY);
dataTr.appendChild(iconData);

dataX.addEventListener('focus', function () {
	this.value = '';
});

dataX.addEventListener('blur', function () {
	if (this.value == '') {
		this.value = 'X VALUE';
	}
});

dataY.addEventListener('focus', function () {
	this.value = '';
});

dataY.addEventListener('blur', function () {
	if (this.value == '') {
		this.value = 'Y VALUE';
	}
});

// others (function)

/**
 * if last inputs are not empty last icon adds new inputs
*/

function newData(event){
    var XData = document.querySelectorAll(".dataX");
    var YData = document.querySelectorAll(".dataY");
    
    if (event.target.classList == "fas fa-check-circle tableIcon lastIcon"
        && XData[XData.length - 1].value !== "X VALUE" && YData[YData.length - 1].value !== "Y VALUE") {
        event.target.classList ='fas fa-times-circle tableIcon lastIcon';
		event.target.style.color = 'rgb(121, 9, 9)';
        var timesIcons = document.querySelectorAll(".fa-times-circle");
        // timesIcons[timesIcons.length - 1].addEventListener("click", deleteData(event));
        var dataTr = document.createElement('tr');
        var dataX = document.createElement('input');
        var dataY = document.createElement('input');
        var tdData = document.createElement('td');
        var dataText = document.createElement('span');
        var iconData = document.createElement('div');
    
        dataX.type = 'text';
        dataY.type = 'text';
        dataX.value = 'X VALUE';
        dataX.classList = "dataX";
        dataY.value = 'Y VALUE';
        dataY.classList = 'dataY';
        dataX.name = 'dataX';
        dataY.name = 'dataY';
        iconData.innerHTML ='<i class="fas fa-check-circle tableIcon lastIcon" onclick = "newData(event); update(chart)"></i>';
    
        table.appendChild(dataTr);
        dataTr.appendChild(tdData);
        tdData.appendChild(dataText);
        dataTr.appendChild(dataX);
        dataTr.appendChild(dataY);
        dataTr.appendChild(iconData);
    
        dataX.addEventListener('focus', function () {
            this.value = '';
        });
        dataX.addEventListener('blur', function () {
            if (this.value == '') {
                this.value = 'X VALUE';
            }
        });
        dataY.addEventListener('focus', function () {
            this.value = '';
        });
        dataY.addEventListener('blur', function () {
            if (this.value == '') {
                this.value = 'Y VALUE';
            }
        });
    }

    function deleteData(event) {
		var trArray = [];
		var timesArray = [];
		var times = document.querySelectorAll('.fa-times-circle');
		var tr = document.querySelectorAll('tr');

		for (let i = 0; i < times.length; i++) {
			timesArray.push(times[i]);
		}
		console.log(tr.length + ' tr length');
        console.log(timesArray.length + " times array");

		for (let i = 0; i < tr.length - 2; i++) {
			trArray.push(tr[i + 2]);
			console.log(tr.length);
		}

		var indexOfIcon = timesArray.indexOf(event.target);
		var length = trArray.length;

	// 	for (let i = 0; i < length; i++) {
	// 		if (filter.indexOf(trArray[i]) == -1) {
	// 			trArray[i].style.display = 'none';
	// 			console.log(trArray.length + ' trArray before');
	// 			trArray =
	// 				trArray.slice(0, trArray[i]) +
	// 				trArray.slice(trArray[i], trArray.length - 1);
	// 			console.log(trArray.length + ' trArray after');
	// 		}
	// 	}
    }
    //timesIcons[timesIcons.length - 1].addEventListener("click", deleteData(event));
    event.target.addEventListener("click", deleteData(event));
};