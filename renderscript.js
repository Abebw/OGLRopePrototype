
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
    console.log("draw chart running");
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Weight Rating');
    data.addColumn('number', 'Sterling Fusion Nano test');
    data.addColumn('number', 'Petzl Fuse');
    data.addColumn('number', 'Mammut Infinity');
    data.addColumn('number', 'Mammut Revelation');
    data.addColumn('number', 'Sterling Marathon Pro');
    data.addColumn('number', 'Maxim Pinnacle');
    data.addColumn('number', 'Sterling Evolution Velocity');
    data.addColumn('number', 'BlueWater Lightning Pro');
    data.addColumn('number', 'BlueWater Pulse');
    data.addColumn('number', 'Beal Edlinger');
    data.addColumn('number', 'Petzl Nomad');
    data.addColumn('number', 'Mammut Tusk');
    data.addColumn('number', 'BlueWater Eliminator');
    data.addColumn('number', 'Maxim Glider');
    data.addColumn('number', 'Maxim Equinox');

    data.addRows(1);
    data.setValue(0, 0, '');
    data.setValue(0, 1, 9);
    data.setValue(0, 2, 8);
    data.setValue(0, 3, 8);
    data.setValue(0, 4, 8);
    data.setValue(0, 5, 7);
    data.setValue(0, 6, 7);
    data.setValue(0, 7, 7);
    data.setValue(0, 8, 7);
    data.setValue(0, 9, 7);
    data.setValue(0, 10, 6);
    data.setValue(0, 11, 6);
    data.setValue(0, 12, 6);
    data.setValue(0, 13, 6);
    data.setValue(0, 14, 5);
    data.setValue(0, 15, 5);
		
    var urls = [''
, '/Climbing-Rope-Reviews/Sterling-Fusion-Nano', '/Climbing-Rope-Reviews/Petzl-Fuse', '/Climbing-Rope-Reviews/Mammut-Infinity', '/Climbing-Rope-Reviews/Mammut-Revelation', '/Climbing-Rope-Reviews/Sterling-Marathon-Pro', '/Climbing-Rope-Reviews/Maxim-Pinnacle', '/Climbing-Rope-Reviews/Sterling-Evolution-Velocity', '/Climbing-Rope-Reviews/BlueWater-Lightning-Pro', '/Climbing-Rope-Reviews/BlueWater-Pulse', '/Climbing-Rope-Reviews/Beal-Edlinger', '/Climbing-Rope-Reviews/Petzl-Nomad', '/Climbing-Rope-Reviews/Mammut-Tusk', '/Climbing-Rope-Reviews/BlueWater-Eliminator', '/Climbing-Rope-Reviews/Maxim-Glider', '/Climbing-Rope-Reviews/Maxim-Equinox'		];        

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, {width: 920, height: 600, colors: ['#37799B', '#A8462D', '#0A5880', '#A39594', '#B99555', '#394736', '#DC991C', '#BBAD92', '#BCB3A2', '#5C584C', '#051014', '#D5D5D5', '#0F0E5F', '#2D2B41', '#696B46'],							chartArea: {left:45,top:40, width: 550,height:500},
							legendTextStyle: {color:'#666666'},
							title: 'Weight',
							hAxis: {title: 'Weight Rating (0-10 score where 10 is best)', 
							titleTextStyle: {color: '#5c5c5c'},
							titlePosition: 'out', minValue: 5, maxValue: 9},
							vAxis: {title: '', 
							titleTextStyle: {color: '#5c5c5c'},
							titlePosition: 'out'},
							backgroundColor: '#FbF6E6',
							is3D: true
						}
					);
		
    var formatter = new google.visualization.NumberFormat({pattern: "Score: # of '10'"});
		
    formatter.format(data, 1);
    formatter.format(data, 2);
    formatter.format(data, 3);
    formatter.format(data, 4);
    formatter.format(data, 5);
    formatter.format(data, 6);
    formatter.format(data, 7);
    formatter.format(data, 8);
    formatter.format(data, 9);
    formatter.format(data, 10);
    formatter.format(data, 11);
    formatter.format(data, 12);
    formatter.format(data, 13);
    formatter.format(data, 14);
    formatter.format(data, 15);
    google.visualization.events.addListener(chart, 'select', selectHandler);

    function selectHandler() {
        var selectedItem = chart.getSelection()[0];
//        	alert('The user selected \nname: ' + data.getColumnLabel(selectedItem.column) + '\nColumn: ' + selectedItem.column  + '\nRating:' + data.getValue(selectedItem.row, selectedItem.column)  +'\nURL:' + urls[selectedItem.column]  );
	window.top.location.href = urls[selectedItem.column];	
      	}
		
}
