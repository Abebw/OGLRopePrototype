
google.load("visualization", "1", {packages:["corechart", "scatter"]});
google.setOnLoadCallback(drawChart);
console.log("draw chart being defined");
function drawChart() {
    console.log("draw chart running");
    console.log(google);
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Mammut Infinity');
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
    data.addColumn('number', 'rope id');
    data.addColumn('string', 'Rope');
   

    data.addRows([
	[2.9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,"Mammut Infinity"  ],
	[3.48,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,"Mammut Infinity"  ],
	[4.06,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,"Mammut Infinity"  ],
	[4.64,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,"Mammut Infinity"  ],
	[null,2.65,null,null,null,null,null,null,null,null,null,null,null,null,null,2,"Sterling Fusion Nano"  ],
	[null,3.18,null,null,null,null,null,null,null,null,null,null,null,null,null,2,"Sterling Fusion Nano"  ],
	[null,3.71,null,null,null,null,null,null,null,null,null,null,null,null,null,2,"Sterling Fusion Nano"  ],
	[null,4.24,null,null,null,null,null,null,null,null,null,null,null,null,null,2,"Sterling Fusion Nano"  ],
	[null,null,3.36,null,null,null,null,null,null,null,null,null,null,null,null,3,"Petzl Fuse"  ],
	[null,null,3.92,null,null,null,null,null,null,null,null,null,null,null,null,3,"Petzl Fuse"  ],
	[null,null,null,3.3,null,null,null,null,null,null,null,null,null,null,null,4,"Mammut Revelation"  ],
	[null,null,null,3.85,null,null,null,null,null,null,null,null,null,null,null,4,"Mammut Revelation"  ],
	[null,null,null,null,3.72,null,null,null,null,null,null,null,null,null,null,5,"BlueWater Pulse"  ],
	[null,null,null,null,4.03,null,null,null,null,null,null,null,null,null,null,5,"BlueWater Pulse"  ],
	[null,null,null,null,4.34,null,null,null,null,null,null,null,null,null,null,5,"BlueWater Pulse"  ],
	[null,null,null,null,null,3.66,null,null,null,null,null,null,null,null,null,6,"BlueWater Lightning Pro"  ],
	[null,null,null,null,null,4.27,null,null,null,null,null,null,null,null,null,6,"BlueWater Lightning Pro"  ],
	[null,null,null,null,null,null,3.1,null,null,null,null,null,null,null,null,7,"Sterling Evolution Velocity"  ],
	[null,null,null,null,null,null,3.72,null,null,null,null,null,null,null,null,7,"Sterling Evolution Velocity"  ],
	[null,null,null,null,null,null,4.34,null,null,null,null,null,null,null,null,7,"Sterling Evolution Velocity"  ],
	[null,null,null,null,null,null,4.96,null,null,null,null,null,null,null,null,7,"Sterling Evolution Velocity"  ],
	[null,null,null,null,null,null,null,3.15,null,null,null,null,null,null,null,8,"Sterling Marathon Pro"  ],
	[null,null,null,null,null,null,null,3.78,null,null,null,null,null,null,null,8,"Sterling Marathon Pro"  ],
	[null,null,null,null,null,null,null,4.41,null,null,null,null,null,null,null,8,"Sterling Marathon Pro"  ],
	[null,null,null,null,null,null,null,5.04,null,null,null,null,null,null,null,8,"Sterling Marathon Pro"  ],
	[null,null,null,null,null,null,null,null,3.84,null,null,null,null,null,null,9,"Mammut Tusk"  ],
	[null,null,null,null,null,null,null,null,4.48,null,null,null,null,null,null,9,"Mammut Tusk"  ],
	[null,null,null,null,null,null,null,null,null,3.78,null,null,null,null,null,10,"Petzl Nomad"  ],
	[null,null,null,null,null,null,null,null,null,4.41,null,null,null,null,null,10,"Petzl Nomad"  ],
	[null,null,null,null,null,null,null,null,null,null,3.84,null,null,null,null,11,"BlueWater Eliminator"  ],
	[null,null,null,null,null,null,null,null,null,null,4.48,null,null,null,null,11,"BlueWater Eliminator"  ],
	[null,null,null,null,null,null,null,null,null,null,null,3.66,null,null,null,12,"Maxim Pinnacle"  ],
	[null,null,null,null,null,null,null,null,null,null,null,4.27,null,null,null,12,"Maxim Pinnacle"  ],
	[null,null,null,null,null,null,null,null,null,null,null,null,3.96,null,null,13,"Maxim Glider"  ],
	[null,null,null,null,null,null,null,null,null,null,null,null,4.62,null,null,13,"Maxim Glider"  ],
	[null,null,null,null,null,null,null,null,null,null,null,null,null,3.96,null,14,"Maxim Equinox"  ],
	[null,null,null,null,null,null,null,null,null,null,null,null,null,null,3.25,15,"Beal Edlinger"  ],
	[null,null,null,null,null,null,null,null,null,null,null,null,null,null,3.9,15,"Beal Edlinger"  ],
	[null,null,null,null,null,null,null,null,null,null,null,null,null,null,4.55,15,"Beal Edlinger"  ],
	[null,null,null,null,null,null,null,null,null,null,null,null,null,null,5.2,15,"Beal Edlinger"  ]
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
			  15: {axis: 'id'},
			  14: {axis: 'bEdl'},
			  13: {axis: 'mEquinox'},
			  12: {axis: 'mGlide'},
			  11: {axis: 'mPin'},
			  10: {axis: 'bwElim'},
			  9: {axis: 'pNomad'},
			  8: {axis: 'mTusk'},
			  7: {axis: 'sMaraPro'},
			  6: {axis: 'sEvoVel'},
			  5: {axis: 'bwLightPro'},
			  4: {axis: 'bwPulse'},
			  3: {axis: 'mRev'},
			  2: {axis: 'pFuse'},
			  1: {axis: 'sNano'},
			  0: {axis: 'mInf'}
		      },
		      axes: {
			  x: {
			    'mInf' : {label:''},
			    'sNano' : {label:''},
			    'pFuse' : {label:''},
			    'mRev' : {label:''},
			    'bwPulse' : {label:''},
			    'bwLightPro' : {label:''},
			    'sEvoVel' : {label:''},
			    'sMaraPro' : {label:''},
			    'mTusk' : {label:''},
			    'pNomad' : {label:''},
			    'bwElim' : {label:''},
			    'mPin' : {label:''},
			    'mGlide' : {label:''},
			    'mEqinox' : {label:''},
			    'bEdl' : {label:''}
			  },
			  y: { 
			      'id' : {label: 'rope id'}
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
