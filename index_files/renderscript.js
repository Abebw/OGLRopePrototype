
google.load("visualization", "1", {packages:["corechart", "scatter"]});
google.setOnLoadCallback(drawChart);
console.log("draw chart being defined");
function drawChart() {
    console.log("draw chart running");
    console.log(google);
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'rope id');
    data.addColumn('number', 'Weight (kg)');
    data.addColumn('string', 'Rope');
   

    data.addRows([
  [1,2.9,"Mammut Infinity"  ],
  [1,3.48,"Mammut Infinity"  ],
  [1,4.06,"Mammut Infinity"  ],
  [1,4.64,"Mammut Infinity"  ],
  [2,2.65,"Sterling Fusion Nano"  ],
  [2,3.18,"Sterling Fusion Nano"  ],
  [2,3.71,"Sterling Fusion Nano"  ],
  [2,4.24,"Sterling Fusion Nano"  ],
  [3,3.36,"Petzl Fuse"  ],
  [3,3.92,"Petzl Fuse"  ],
  [4,3.3,"Mammut Revelation"  ],
  [4,3.85,"Mammut Revelation"  ],
  [5,3.72,"BlueWater Pulse"  ],
  [5,4.03,"BlueWater Pulse"  ],
  [5,4.34,"BlueWater Pulse"  ],
  [6,3.66,"BlueWater Lightning Pro"  ],
  [6,4.27,"BlueWater Lightning Pro"  ],
  [7,3.1,"Sterling Evolution Velocity"  ],
  [7,3.72,"Sterling Evolution Velocity"  ],
  [7,4.34,"Sterling Evolution Velocity"  ],
  [7,4.96,"Sterling Evolution Velocity"  ],
  [8,3.15,"Sterling Marathon Pro"  ],
  [8,3.78,"Sterling Marathon Pro"  ],
  [8,4.41,"Sterling Marathon Pro"  ],
  [8,5.04,"Sterling Marathon Pro"  ],
  [9,3.84,"Mammut Tusk"  ],
  [9,4.48,"Mammut Tusk"  ],
  [10,3.78,"Petzl Nomad"  ],
  [10,4.41,"Petzl Nomad"  ],
  [11,3.84,"BlueWater Eliminator"  ],
  [11,4.48,"BlueWater Eliminator"  ],
  [12,3.66,"Maxim Pinnacle"  ],
  [12,4.27,"Maxim Pinnacle"  ],
  [13,3.96,"Maxim Glider"  ],
  [13,4.62,"Maxim Glider"  ],
  [14,3.96,"Maxim Equinox"  ],
  [15,3.25,"Beal Edlinger"  ],
  [15,3.9,"Beal Edlinger"  ],
  [15,4.55,"Beal Edlinger"  ],
  [15,5.2,"Beal Edlinger"  ]
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
