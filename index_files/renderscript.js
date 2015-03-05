
google.load("visualization", "1", {packages:["corechart", "scatter"]});
google.setOnLoadCallback(drawChart);
console.log("draw chart being defined");
function drawChart() {
    console.log("draw chart running");
    var data = new google.visualization.DataTable();
    data.addColumn('number', "Mammut Infinity");
    data.addColumn('number', 'Sterling Fusion Nano');
    data.addColumn('number', 'Petzl Fuse');
    data.addColumn('number', 'Mammut Revelation');
    data.addColumn('number', 'BlueWater Pulse');
    data.addColumn('number', 'BlueWater Lightning Pro');
    data.addColumn('number', 'Sterling Evolution Velocity');
    data.addColumn('number', 'Sterling Marathon Pro');
    data.addColumn('number', 'Mammut Tusk');
    data.addColumn('number', 'Petzl Nomad');
    data.addColumn('number', 'BlueWater Eliminator');
    data.addColumn('number', 'Maxim Pinnacle');
    data.addColumn('number', 'Maxim Glider');
    data.addColumn('number', 'Maxim Equinox');
    data.addColumn('number', 'Beal Edlinger');

    data.addRows([
	//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15  ],//"rope id"
	[2.9,2.65,null,null,null,null,3.1,3.15,null,null,null,null,null,null,3.25  ],//"weight(kg) @ 50m",
	[3.48,3.18,3.36,3.3,3.72,3.66,3.72,3.78,3.84,3.78,3.84,3.66,3.96,3.96,3.9  ],//"weight(kg) @ 60m"
	[4.06,3.71,3.92,3.85,4.34,4.27,4.34,4.41,4.48,4.41,4.48,4.27,4.62,null,4.55  ], //weight(kg) @ 70m",
	[4.64,4.24,null,null,null,null,4.96,5.04,null,null,null,null,null,null,5.2  ]//"weight(kg) @ 80m",
    ]);

		
    var urls = [''
, '/Climbing-Rope-Reviews/Sterling-Fusion-Nano', '/Climbing-Rope-Reviews/Petzl-Fuse', '/Climbing-Rope-Reviews/Mammut-Infinity', '/Climbing-Rope-Reviews/Mammut-Revelation', '/Climbing-Rope-Reviews/Sterling-Marathon-Pro', '/Climbing-Rope-Reviews/Maxim-Pinnacle', '/Climbing-Rope-Reviews/Sterling-Evolution-Velocity', '/Climbing-Rope-Reviews/BlueWater-Lightning-Pro', '/Climbing-Rope-Reviews/BlueWater-Pulse', '/Climbing-Rope-Reviews/Beal-Edlinger', '/Climbing-Rope-Reviews/Petzl-Nomad', '/Climbing-Rope-Reviews/Mammut-Tusk', '/Climbing-Rope-Reviews/BlueWater-Eliminator', '/Climbing-Rope-Reviews/Maxim-Glider', '/Climbing-Rope-Reviews/Maxim-Equinox'	];        

    var chart = new google.charts.Scatter(document.getElementById('chart_div'));
    chart.draw(data, {width: 920, height: 600, colors: ['#37799B', '#A8462D', '#0A5880', '#A39594', '#B99555', '#394736', '#DC991C', '#BBAD92', '#BCB3A2', '#5C584C', '#051014', '#D5D5D5', '#0F0E5F', '#2D2B41', '#696B46'],							chartArea: {left:45,top:40, width: 550,height:500},
							legendTextStyle: {color:'#666666'},
							title: 'Weight',
							hAxis: {title: 'Weight Rating (in kilograms)', 
							titleTextStyle: {color: '#5c5c5c'},
							titlePosition: 'out', minValue: 5, maxValue: 9},
							vAxis: {title: '', 
							titleTextStyle: {color: '#5c5c5c'},
							titlePosition: 'out'},
							backgroundColor: '#FbF6E6',
		      series: {
			  0: {axis: 'rope name'},
			  1: {axis: 'rope id'}
			  2: {axis: 'weight'}
		      },
		      axes: {
			  y: {
			      'rope name': {label: 'Hours Studied'},
			      //'final grade': {label: 'Final Exam Grade'}
			  }
			  x: { 
			      'weight' : {label: 'weight'}
			  }
		      },

							is3D: true
						}
					);
/*
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
*/
    google.visualization.events.addListener(chart, 'select', selectHandler);

    function selectHandler() {
        var selectedItem = chart.getSelection()[0];
//        	alert('The user selected \nname: ' + data.getColumnLabel(selectedItem.column) + '\nColumn: ' + selectedItem.column  + '\nRating:' + data.getValue(selectedItem.row, selectedItem.column)  +'\nURL:' + urls[selectedItem.column]  );
	window.top.location.href = urls[selectedItem.column];	
      	}
		
}
