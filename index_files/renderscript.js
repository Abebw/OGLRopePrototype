
google.load("visualization", "1", {packages:["corechart", "scatter"]});
google.setOnLoadCallback(drawChart);
console.log("draw chart being defined");
function drawChart() {
    console.log("draw chart running");
    console.log(google);
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Weight (kg)');
    data.addColumn('number', 'rope id');
    data.addColumn('string', 'Rope');
   

    data.addRows([
	[2.9,1,"Mammut Infinity"  ],
	[3.48,1,"Mammut Infinity"  ],
	[4.06,1,"Mammut Infinity"  ],
	[4.64,1,"Mammut Infinity"  ],
	[2.65,2,"Sterling Fusion Nano"  ],
	[3.18,2,"Sterling Fusion Nano"  ],
	[3.71,2,"Sterling Fusion Nano"  ],
	[4.24,2,"Sterling Fusion Nano"  ],
	[3.36,3,"Petzl Fuse"  ],
	[3.92,3,"Petzl Fuse"  ],
	[3.3,4,"Mammut Revelation"  ],
	[3.85,4,"Mammut Revelation"  ],
	[3.72,5,"BlueWater Pulse"  ],
	[4.03,5,"BlueWater Pulse"  ],
	[4.34,5,"BlueWater Pulse"  ],
	[3.66,6,"BlueWater Lightning Pro"  ],
	[4.27,6,"BlueWater Lightning Pro"  ],
	[3.1,7,"Sterling Evolution Velocity"  ],
	[3.72,7,"Sterling Evolution Velocity"  ],
	[4.34,7,"Sterling Evolution Velocity"  ],
	[4.96,7,"Sterling Evolution Velocity"  ],
	[3.15,8,"Sterling Marathon Pro"  ],
	[3.78,8,"Sterling Marathon Pro"  ],
	[4.41,8,"Sterling Marathon Pro"  ],
	[5.04,8,"Sterling Marathon Pro"  ],
	[3.84,9,"Mammut Tusk"  ],
	[4.48,9,"Mammut Tusk"  ],
	[3.78,10,"Petzl Nomad"  ],
	[4.41,10,"Petzl Nomad"  ],
	[3.84,11,"BlueWater Eliminator"  ],
	[4.48,11,"BlueWater Eliminator"  ],
	[3.66,12,"Maxim Pinnacle"  ],
	[4.27,12,"Maxim Pinnacle"  ],
	[3.96,13,"Maxim Glider"  ],
	[4.62,13,"Maxim Glider"  ],
	[3.96,14,"Maxim Equinox"  ],
	[3.25,15,"Beal Edlinger"  ],
	[3.9,15,"Beal Edlinger"  ],
	[4.55,15,"Beal Edlinger"  ],
	[5.2,15,"Beal Edlinger"  ]
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
