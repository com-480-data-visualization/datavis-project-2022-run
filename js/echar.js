ech();
ech_2();

function ech() {
	let dom = document.getElementsByClassName('echarts_1')[0];
	let myChart = echarts.init(dom, null, {
		renderer: 'canvas',
		useDirtyRect: false
	});

	let option = {
		title: [{
			text: "NBA Western Conference winning percentage",
			textAlign: "left",
			left: "center",
			textStyle:{
				fontSize:"20"
			}
		},{
			text:"Years",
			textAlign:"left",
			x:"center",
			y:"bottom"
		}],
		xAxis: {
			type: 'category',
			data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', "2018", "2019", "2020", "2021"]
		},
		yAxis: {
			name: "(Winning percentage)",
			type: 'value',
			
			nameTextStyle: {
				fontSize: "18",
				fontWeight:"600",
				
			},
		},
		grid: {
			right: "20%"
		},
		legend: {
			data: ['Dallas Mavericks', 'Denver Nuggets', 'Golden State Warriors', 'Houston Rockets',
				'Los Angeles Clippers', 'Los Angeles Lakers', 'Memphis Grizzlies', 'Minnesota Timberwolves',
				'New Orleans Hornets', 'Oklahoma City Thunder', 'Phoenix Suns', 'Portland Trail Blazers',
				'Sacramento Kings', 'San Antonio Spurs', 'Utah Jazz',
			],
			orient: "vertical",
			x: "right",
			y: "center",
			align: "left"
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#6a7985'
				}
			}
		},
		series: [{
			name: 'Dallas Mavericks',
			type: 'line',
			data: ['0.207', '0.512', '0.354', '0.366', '0.671', '0.28', '0.537', '0.402', '0.817', '0.488',
				'0.402',
			],
		}, {
			name: 'Denver Nuggets',
			type: 'line',
			data: ['0.488', '0.817', '0.671', '0.622', '0.317', '0.524', '0.378', '0.415', '0.573', '0.293',
				'0.5',
			]
		}, {
			name: 'Golden State Warriors',
			type: 'line',
			data: ['0.585', '0.585', '0.256', '0.598', '0.329', '0.573', '0.585', '0.402', '0.659', '0.695',
				'0.646',
			]
		}, {
			name: 'Houston Rockets',
			type: 'line',
			data: ['0.585', '0.451', '0.402', '0.439', '0.402', '0.598', '0.232', '0.646', '0.476', '0.585',
				'0.61',
			]
		}, {
			name: 'Los Angeles Clippers',
			type: 'line',
			data: ['0.646', '0.585', '0.451', '0.402', '0.646', '0.476', '0.585', '0.61', '0.402', '0.659',
				'0.695',
			]
		}, {
			name: 'Los Angeles Lakers',
			type: 'line',
			data: ['0.439', '0.402', '0.598', '0.232', '0.646', '0.476', '0.585', '0.61', '0.402', '0.659',
				'0.695',
			]
		}, {
			name: 'Memphis Grizzlies',
			type: 'line',
			data: ['0.646', '0.585', '0.451', '0.402', '0.439', '0.402', '0.598', '0.232', '0.646', '0.476',
				'0.585',
			]
		}, {
			name: 'Minnesota Timberwolves',
			type: 'line',
			data: ['0.463', '0.415', '0.415', '0.354', '0.605', '0.659', '0.244', '0.354', '0.463', '0.305',
				'0.537',
			]
		}, {
			name: 'New Orleans Hornets',
			type: 'line',
			data: ['0.524', '0.585', '0.402', '0.659', '0.183', '0.232', '0.585', '0.537', '0.683', '0.451',
				'0.28',
			]
		}, {
			name: 'Oklahoma City Thunder',
			type: 'line',
			data: ['0.561', '0.463', '0.207', '0.305', '0.39', '0.585', '0.585', '0.256', '0.585', '0.512',
				'0.695',
			]
		}, {
			name: 'Phoenix Suns',
			type: 'line',
			data: ['0.354', '0.451', '0.293', '0.671', '0.341', '0.439', '0.329', '0.61', '0.537', '0.537',
				'0.634',
			]
		}, {
			name: 'Portland Trail Blazers',
			type: 'line',
			data: ['0.72', '0.524', '0.585', '0.354', '0.305', '0.476', '0.354', '0.598', '0.512', '0.476',
				'0.268',
			]
		}, {
			name: 'Sacramento Kings',
			type: 'line',
			data: ['0.232', '0.476', '0.732', '0.622', '0.707', '0.39', '0.585', '0.207', '0.512', '0.5',
				'0.354',
			]
		}, {
			name: 'San Antonio Spurs',
			type: 'line',
			data: ['0.598', '0.512', '0.476', '0.268', '0.232', '0.476', '0.732', '0.622', '0.707', '0.39',
				'0.585',
			]
		}, {
			name: 'Utah Jazz',
			type: 'line',
			data: ['0.622', '0.707', '0.39', '0.585', '0.207', '0.512', '0.5', '0.354', '0.598', '0.512',
				'0.476',
			]
		}, ]
	};

	if (option && typeof option === 'object') {
		myChart.setOption(option);
	}

	window.addEventListener('resize', myChart.resize);
}

// -2
function ech_2() {
	let dom = document.getElementsByClassName('echarts_2')[0];
	let myChart = echarts.init(dom, null, {
		renderer: 'canvas',
		useDirtyRect: false
	});
	let option = {
		title: [{
			text: "Statistical analysis of 3-point in NBA Eastern teams",
			textAlign: "left",
			left: "center",
			textStyle:{
				fontSize:"20"
			}
		}, {
			text: "Years",
			textAlign: "center",
			y: "bottom",
			x: "center"

		}],
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#999'
				}
			}
		},
		toolbox: {
			feature: {
				dataView: {
					show: true,
					readOnly: false
				},
				magicType: {
					show: true,
					type: ['line', 'bar']
				},
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		legend: {
			data: ['Atlanta Hawks', 'Boston Celtics', 'Brooklyn Nets', 'Charlotte Bobcats', 'Chicago Bulls',
				'Cleveland Cavaliers', 'Detroit Pistons', 'Indiana Pacers', 'Miami Heat', 'Milwaukee Bucks',
				'New York Knicks', 'Orlando Magic', 'Philadelphia 76ers', 'Toronto Raptors',
				'Washington Wizards',
			],
			show: true,
			top: "5%",
			x: "left",
			y: "top",
			align: "left",
			left: "20%",
			width: "65%"

		},
		xAxis: [{
			type: 'category',
			data: ['2011', '2012', '2013', '2015', '2016', '2017', '2018', "2019", "2020", "2021"],
			axisPointer: {
				type: 'shadow'
			}
		}],
		grid: {
			top: "10%"
		},
		yAxis: [{
				type: 'value',
				name: '(3-pointer percentage)',
				min: 0,
				max: 50,
				interval: 5,
				axisLabel: {
					formatter: '{value}%'
				},
				nameTextStyle: {
					fontSize: "18",
					fontWeight:"600",
					
				},
			},
			{
				type: 'value',
				name: '(3-pointer attempts)',
				min: 0,
				max: 50,
				interval: 5,
				axisLabel: {
					formatter: '{value} '
				},
				nameTextStyle: {
					fontSize: "18",
					fontWeight:"600",
				},
			},

		],
		series: [{
				name: 'Atlanta Hawks',
				type: 'line',

				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3P%)';
					}
				},

				data: ['37', '37.1', '36.3', '38', '35', '34.1', '36', '35.2', '33.3', '37.3', '37.4', ],
			}, {
				name: 'Atlanta Hawks',
				type: 'bar',
				color: '#17C0E9',

				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3PA)';
					}
				},
				data: ['20.2', '23.2', '25.8', '26.2', '28.4', '26.1', '31', '37', '36.1', '33.4', '34.4', ]
			}, {
				name: 'Boston Celtics',
				type: 'line',
				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3P%)';
					}
				},
				data: ['36.7', '35.8', '33.3', '32.7', '33.5', '35.9', '37.7', '36.5', '36.4', '37.4',
					'35.6',
				],
			}, {
				name: 'Boston Celtics',
				type: 'bar',
				color: '#26BAEA',

				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3PA)';
					}
				},
				data: ['15', '17.2', '21.1', '24.6', '26.1', '33.4', '30.4', '34.5', '34.5', '36.4', '37.1', ]
			}, {
				name: 'Brooklyn Nets',
				type: 'line',
				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3P%)';
					}
				},
				data: ['29.5', '35.7', '36.9', '33.1', '35.2', '33.8', '35.6', '35.3', '34.3', '39.2',
					'36.1',
				],
			}, {
				name: 'Brooklyn Nets',
				type: 'bar',
				color: '#4AA9EB',

				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3PA)';
					}
				},
				data: ['13.5', '21.5', '23.4', '19.9', '18.4', '31.6', '35.7', '36.2', '38.1', '36.1', '31.7', ]
			}, {
				name: 'Charlotte Bobcats',
				type: 'line',
				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3P%)';
					}
				},
				data: ['37.5', '33.5', '35.1', '31.8', '36.2', '35.1', '36.9', '35.1', '35.2', '36.9',
					'36.5',
				],
			}, {
				name: 'Charlotte Bobcats',
				type: 'bar',
				color: '#609FEC',

				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3PA)';
					}
				},
				data: ['16.9', '17.1', '17.9', '19.1', '29.4', '28.6', '27.2', '33.9', '34.3', '37', '38.2', ]
			}, {
				name: 'Chicago Bulls',
				type: 'line',
				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3P%)';
					}
				},
				data: ['34.6', '35.3', '34.8', '35.3', '37.1', '34', '35.5', '35.1', '34.8', '37', '36.9', ],
			}, {
				name: 'Chicago Bulls',
				type: 'bar',
				color: '#9785EB',

				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3PA)';
					}
				},
				data: ['19.3', '15.4', '17.8', '22.3', '21.4', '22.3', '31.1', '25.9', '35.1', '34', '28.8', ]
			}, {
				name: 'Cleveland Cavaliers',
				type: 'line',
				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3P%)';
					}
				},
				data: ['33.9', '34.6', '35.6', '36.7', '36.2', '38.4', '37.2', '35.5', '35.1', '33.6',
					'35.5',
				],
			}, {
				name: 'Cleveland Cavaliers',
				type: 'bar',
				color: '#C571EA',

				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3PA)';
					}
				},
				data: ['22.2', '19.3', '20', '27.5', '29.6', '33.9', '32.1', '29.1', '31.8', '29.7', '32.8', ]
			}, {
				name: 'Detroit Pistons',
				type: 'line',
				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3P%)';
					}
				},
				data: ['38.8', '35.6', '32.1', '34.4', '34.5', '33', '37.3', '34.8', '36.7', '35.1', '32.6', ],
			}, {
				name: 'Detroit Pistons',
				type: 'bar',
				color: '#CE69CE',

				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3PA)';
					}
				},
				data: ['20.5', '17.6', '19.3', '24.9', '26.2', '23.4', '28.9', '34.8', '32.7', '32.9', '34.6', ]
			}, {
				name: 'Indiana Pacers',
				type: 'line',
				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3P%)';
					}
				},
				data: ['35.7', '34.7', '35.7', '35.2', '35.1', '37.6', '36.9', '37.4', '36.3', '36.4',
					'34.4',
				],
			}, {
				name: 'Indiana Pacers',
				type: 'bar',
				color: '#EA618D',

				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3PA)';
					}
				},
				data: ['21.8', '19.7', '18.8', '21.2', '23', '23', '24.5', '25.4', '28', '34', '35.4', ]
			}, {
				name: 'Miami Heat',
				type: 'line',
				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3P%)';
					}
				},
				data: ['34.5', '39.6', '36.4', '33.5', '33.6', '36.5', '36', '34.9', '37.9', '35.8', '37.9', ],
			}, {
				name: 'Miami Heat',
				type: 'bar',
				color: '#DF6395',

				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3PA)';
					}
				},
				data: ['19.2', '22.1', '22.3', '20.2', '18', '27', '30.6', '32.4', '35.4', '36.2', '35.8', ]
			}, {
				name: 'Milwaukee Bucks',
				type: 'line',
				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3P%)';
					}
				},
				data: ['33.2', '36', '35.3', '36.3', '34.5', '37', '35.5', '35.3', '35.5', '38.9', '36.6', ],
			}, {
				name: 'Milwaukee Bucks',
				type: 'bar',
				color: '#D168A3',

				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3PA)';
					}
				},
				data: ['21.6', '20.4', '18.9', '18.3', '15.6', '23.7', '24.7', '38.2', '38.9', '37.1', '38.4', ]
			}, {
				name: 'New York Knicks',
				type: 'line',
				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3P%)';
					}
				},
				data: ['33.6', '37.6', '37.2', '34.7', '34.6', '34.8', '35.2', '34', '33.7', '39.2', '35.7', ],
			}, {
				name: 'New York Knicks',
				type: 'bar',
				color: '#BA6EB8',

				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3PA)';
					}
				},
				data: ['23.3', '28.9', '24.9', '19.7', '21.5', '24.7', '23.3', '29.5', '28.4', '30', '36.9', ]
			}, {
				name: 'Orlando Magic',
				type: 'line',
				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3P%)';
					}
				},
				data: ['37.5', '32.9', '35.3', '34.7', '35', '32.8', '35.1', '35.6', '34.3', '34.3', '33.1', ],
			}, {
				name: 'Orlando Magic',
				type: 'bar',
				color: '#9B76D0',

				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3PA)';
					}
				},
				data: ['27', '18.7', '19.5', '19.5', '22.2', '26.1', '29.3', '32.1', '32.2', '31.8', '36.9', ]
			}, {
				name: 'Philadelphia 76ers',
				type: 'line',
				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3P%)';
					}
				},
				data: ['36.2', '36', '31.2', '32', '33.9', '34', '36.9', '35.9', '36.8', '37.4', '36.4', ],
			}, {
				name: 'Philadelphia 76ers',
				type: 'bar',
				color: '#857CE9',

				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3PA)';
					}
				},
				data: ['14.6', '17.5', '22.5', '26.3', '27.5', '29.8', '29.8', '30.2', '31.6', '30.1', '31.8', ]
			}, {
				name: 'Toronto Raptors',
				type: 'line',
				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3P%)';
					}
				},
				data: ['34', '34.3', '37.2', '35.2', '37', '36.3', '35.8', '36.6', '37.4', '36.8', '34.9', ],
			}, {
				name: 'Toronto Raptors',
				type: 'bar',
				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3PA)';
					}
				},
				color: '#7081F7',

				data: ['16.3', '20.3', '23.4', '25.1', '23.4', '24.3', '33', '33.8', '37', '39.3', '34.2', ]
			}, {
				name: 'Washington Wizards',
				type: 'line',
				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3P%)';
					}
				},
				data: ['32', '36.5', '38', '36', '35.8', '37.2', '37.5', '34.1', '36.8', '35.1', '34.2', ],
			}, {
				name: 'Washington Wizards',
				type: 'bar',
				color: '#6091F7',
				tooltip: {
					valueFormatter: function(value) {
						return value + ' (3PA)';
					}
				},
				data: ['16.3', '18.2', '20.8', '16.8', '24.2', '24.8', '26.5', '33.3', '32.6', '29', '30.6', ]
			},




		]
	};
	if (option && typeof option === 'object') {
		myChart.setOption(option);
	}

	window.addEventListener('resize', myChart.resize);
}
