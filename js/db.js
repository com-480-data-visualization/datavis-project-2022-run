var dqqd = {
	disp1: 0,
	disp2: 0,
	qd: 0,
	over_ct: 0
};
let t_qd = document.getElementsByClassName("t_qd");
for (let i = 0; i < t_qd.length; i++) {
	document.getElementsByClassName("t_qd")[i].children[0].onclick = function() {
		let kk = () => {
			document.getElementsByClassName("over_ct")[0].classList.remove("js-open");
			let left = this.offsetLeft;
			let Top = this.offsetTop + this.offsetHeight + 5;
			document.getElementsByClassName("over_ct")[0].classList.add("js-open");
			document.getElementsByClassName("over_ct")[0].style = "left:" + left + "px;top:" + Top + "px;";
			dqqd.disp1 = 1;
			dqqd.over_ct = 1;

			(event || window.event).cancelBubble = true;
		}
		kk();
		qdftion(i);

	};
	
}
var xs = () => {
	if (dqqd.disp1 && dqqd.over_ct) {
		document.getElementsByClassName("over_ct")[0].classList.remove("js-open");
		
		dqqd.disp1 = 0;
	}
	dqqd.over_ct = 0;
}
let over_ct = document.getElementsByClassName("over_ct");
for (let i = 0; i < over_ct.length; i++) {
	document.getElementsByClassName("over_ct")[i].onclick = () => {
		dqqd.over_ct = 1;
		(event || window.event).cancelBubble = true;
	}
}




function echar_1(name1, data1, name2, data2) {
	let chartDom = document.getElementsByClassName('echar-1')[0];
	let myChart = echarts.init(chartDom);
	let option;

	option = {
		title: {
			text: ''
		},
		tooltip: {},
		legend: {
			data: [name1, name2],
			x: "center",
			y: "bottom",
			align: "left"
		},
		radar: {
			// shape: 'circle',
			indicator: [{
					name: 'PTS',
					max: 115.9
				},
				{
					name: 'REB',
					max: 49.2
				},
				{
					name: 'AST',
					max: 28.1
				},
				{
					name: 'STL',
					max: 9.8
				},
				{
					name: 'BLK',
					max: 6.5
				},

			]
		},
		series: [{
			name: '',
			type: 'radar',
			data: [{
					value: data1,
					name: name1
				},
				{
					value: data2,
					name: name2
				}
			]
		}]
	};
	option && myChart.setOption(option);
}



var qd = {
	'Atlanta Hawks': 'https://pic3.zhimg.com/v2-5471ecb7b638b020595d70f7933c4b03_qhd.jpg?source=57bbeac9',
	'Boston Celtics': 'https://pic2.zhimg.com/v2-cbaf45bd094968149190c089b1b15673_qhd.jpg?source=57bbeac9',
	'Brooklyn Nets': 'https://pic1.zhimg.com/v2-95756f73cea56a99395acb73fda32c28_qhd.jpg?source=57bbeac9',
	'Charlotte Hornets': 'https://www.nba.com/hornets/sites/hornets/files/150429_site_logo.png',
	'Chicago Bulls': 'https://www.nba.com/resources/static/team/v2/bulls/reboot/resources/images/bullhead-1819.png',
	'Cleveland Cavaliers': 'https://www.nba.com/cavaliers/sites/cavaliers/files/cavs-shield-nav.png',
	'Dallas Mavericks': 'https://www.mavs.com/wp-content/themes/mavs/images/logo.svg',
	'Denver Nuggets': 'https://pica.zhimg.com/v2-b0b2e916cc874285df0a124b04c2a47e_qhd.jpg?source=57bbeac9',
	'Detroit Pistons': 'https://pic2.zhimg.com/v2-dfff86f6f97d8a271a5c379d6ecc2656_qhd.jpg?source=57bbeac9',
	'Golden State Warriors': 'https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg',
	'Houston Rockets': 'https://pic3.zhimg.com/v2-21ae0183babd636bfc175fd0a9700a24_qhd.jpg?source=57bbeac9',
	'Indiana Pacers': 'https://d2p3bygnnzw9w3.cloudfront.net/req/202204281/tlogo/bbr/IND.png',
	'Los Angeles Clippers': 'https://www.nba.com/clippers/sites/clippers/files/lac-global-180705.png?w=180&h=105',
	'Los Angeles Lakers': 'https://www.nba.com/lakers/sites/lakers/files/lakers_logo_500.png?w=180&h=105',
	'Memphis Grizzlies': 'https://pic2.zhimg.com/v2-767638f2d59fc90c6206a2a02910d77f_qhd.jpg?source=57bbeac9',
	'Miami Heat': 'https://pica.zhimg.com/v2-cf13ba6e752243ebdae7ba634966d3c1_qhd.jpg?source=57bbeac9',
	'Milwaukee Bucks': 'https://cdn.nba.com/teams/uploads/sites/1610612749/2021/09/logo.svg',
	'Minnesota Timberwolves': 'https://pic2.zhimg.com/v2-7f66dc9f2742570267f716ed371eedaa_qhd.jpg?source=57bbeac9',
	'New Orleans Pelicans': 'https://www.nba.com/pelicans/sites/pelicans/files/1415_nop_hdrlogo2.png?',
	'New York Knicks': 'https://www.nba.com/resources/static/team/v2/knicks/media/2019-20/img/NYK1718-Primary-Logo-Pres-by-Chase-for-LIGHT-BKGND.png',
	'Oklahoma City Thunder': 'http://bdata.7m.com.cn/basketball_team_data/17/logo_Img/club_logo.jpg',
	'Orlando Magic': 'https://cdn.nba.com/teams/uploads/sites/1610612753/2021/12/Magic-Global-Logo-2.svg',
	'Philadelphia 76ers': 'https://pic3.zhimg.com/v2-ce22e7a120dd3468ce8591213bfa6c4c_qhd.jpg?source=57bbeac9',
	'Phoenix Suns': 'https://www.nba.com/suns/sites/suns/files/phoenix_suns_logo.png?w=180&h=105',
	'Portland Trail Blazers': 'https://www.nba.com/blazers/sites/blazers/files/tb_primary_rgb_2.png?w=180&h=105',
	'Sacramento Kings': 'https://pic3.zhimg.com/v2-2cc291096b73e0bcb391c1097fe06780_qhd.jpg?source=57bbeac9',
	'San Antonio Spurs': 'https://www.nba.com/spurs/sites/spurs/files/2014_spurs_logo.png?',
	'Toronto Raptors': 'https://cdn.nba.com/logos/nba/1610612761/global/D/logo.svg',
	'Utah Jazz': 'https://pic2.zhimg.com/v2-bac4cc2a19a57280f03f4344271ae0bb_qhd.jpg?source=57bbeac9',
	'Washington Wizards': 'https://pic2.zhimg.com/v2-04d46e6061d9163022831bea39bf3435_qhd.jpg?source=57bbeac9',
}

function qdftion(nub) {

	let count = 0;
	let key = Object.keys(qd);
	for (let i = 0; i < key.length; i++) {
		document.getElementsByClassName('qd_name')[i].children[1].innerText = key[i];
		document.getElementsByClassName('qd_name')[i].children[0].style = "background: url(" + qd[key[i]] +
			");background-size:cover;background-position: center;"
		document.getElementsByClassName('qd_name')[i].onclick = () => {
			document.getElementsByClassName('t_qd')[nub].children[0].innerHTML = key[i] +
				'<i><img src="../images/sjx.png"></i>';
			(event || window.event).cancelBubble = true;
			document.getElementsByClassName("over_ct")[0].classList.remove("js-open");
		
			let name1 = document.getElementsByClassName("t_qd")[0].children[0].innerText;
			let name2 = document.getElementsByClassName("t_qd")[1].children[0].innerText;
			qd_gh(name1, name2);
		}

	}
	bor_red(nub);
}


function bor_red(nub) {
	let name1 = document.getElementsByClassName("t_qd")[0].children[0].innerText;
	let name2 = document.getElementsByClassName("t_qd")[1].children[0].innerText;
	let dq = nub ? name2 : name1;

	let qd_name = document.getElementsByClassName("qd_name");
	for (let i = 0; i < qd_name.length; i++) {
		let borred = document.getElementsByClassName("qd_name")[i].children[1].innerText;
		document.getElementsByClassName("qd_name")[i].classList.remove("bor-red");
		if (borred == dq) {
			document.getElementsByClassName("qd_name")[i].classList.add("bor-red");
		}
	}

}

qd_gh("Atlanta Hawks", "Boston Celtics");

function qd_gh(name1, name2) {
	const qd_nub = {
		'Atlanta Hawks': ['113.9', '44', '24.6', '7.2', '4.2'],
		'Boston Celtics': ['111.8', '46.1', '24.8', '7.2', '5.8'],
		'Brooklyn Nets': ['112.9', '44.4', '25.3', '7.1', '5.5'],
		'Charlotte Hornets': ['115.3', '44.6', '28.1', '8.6', '4.9'],
		'Chicago Bulls': ['111.6', '42.3', '23.9', '7.1', '4.1'],
		'Cleveland Cavaliers': ['107.8', '44.2', '25.2', '7.1', '4.2'],
		'Dallas Mavericks': ['108', '43', '23.4', '6.7', '4'],
		'Denver Nuggets': ['112.7', '44.1', '27.8', '7.2', '3.7'],
		'Detroit Pistons': ['104.8', '43', '23.5', '7.7', '4.8'],
		'Golden State Warriors': ['111', '45.5', '27.1', '8.8', '4.5'],
		'Houston Rockets': ['109.7', '42', '23.6', '7.3', '4.7'],
		'Indiana Pacers': ['111.5', '43.9', '25.4', '7.1', '5.6'],
		'Los Angeles Clippers': ['108.4', '44', '24', '7.4', '5'],
		'Los Angeles Lakers': ['112.1', '44', '24', '7.6', '5.2'],
		'Memphis Grizzlies': ['115.6', '49.2', '26', '9.8', '6.5'],
		'Miami Heat': ['110', '43.7', '25.5', '7.4', '3.2'],
		'Milwaukee Bucks': ['115.5', '46.7', '23.9', '7.6', '4'],
		'Minnesota Timberwolves': ['115.9', '44.2', '25.7', '8.8', '5.6'],
		'New Orleans Pelicans': ['109.3', '45.2', '25', '8.3', '4'],
		'New York Knicks': ['106.5', '46.1', '21.9', '7', '4.9'],
		'Oklahoma City Thunder': ['103.7', '45.6', '22.2', '7.6', '4.6'],
		'Orlando Magic': ['104.2', '44.3', '23.7', '6.8', '4.5'],
		'Philadelphia 76ers': ['109.9', '42.3', '23.7', '7.7', '5.3'],
		'Phoenix Suns': ['114.8', '45.3', '27.4', '8.6', '4.4'],
		'Portland Trail Blazers': ['106.2', '42.9', '22.9', '8', '4.5'],
		'Sacramento Kings': ['110.3', '42.9', '23.7', '7.2', '4.5'],
		'San Antonio Spurs': ['113.2', '45.3', '27.9', '7.6', '4.9'],
		'Toronto Raptors': ['109.4', '45.3', '22.1', '9', '4.6'],
		'Utah Jazz': ['113.6', '46.3', '22.4', '7.2', '4.9'],
		'Washington Wizards': ['108.6', '43.1', '25', '6.4', '5'],
	}
	
	echar_1(name1, qd_nub[name1], name2, qd_nub[name2]);
	let dc1 = document.getElementsByClassName("dc")[0];
	let dc2 = document.getElementsByClassName("dc")[2];
	dc1.children[0].style = "background: url(" + qd[name1] + ");background-position:center;background-size: cover;";
	dc1.children[1].innerText = name1;
	dc2.children[0].style = "background: url(" + qd[name2] + ");background-position:center;background-size: cover;";
	dc2.children[1].innerText = name2;
}
document.getElementsByClassName("sjbj")[0].onclick = () =>{
	let cd = 0,a =0;
	let name1,name2;
	for(let i in qd){
		cd++;
		
	}
	
	function rand(){
		let nub1= Math.floor(Math.random() * cd);
		let nub2= Math.floor(Math.random() * cd);
		if(nub1 == nub2){
			rand();
		}
		return [nub1,nub2];
	}
	let ran = rand();
	for(let i in qd){
		if(a == ran[0]){
			name1 = i;
		}
		if(a == ran[1]){
			name2 = i;
		}
		a++;
	}
	
	qd_gh(name1, name2)
}



function qt_img(data){
	$(".ab").removeClass("cli_color");
	if(data == 1){
		document.getElementsByClassName("hd_top_img")[0].style="transform: translateX(0);";
		document.getElementsByClassName("ab")[0].classList.add("cli_color");
	}else if(data == 2){
		document.getElementsByClassName("hd_top_img")[0].style="transform: translateX(-100vw);"
		document.getElementsByClassName("ab")[1].classList.add("cli_color");
	}else{
		document.getElementsByClassName("hd_top_img")[0].style="transform: translateX(-200vw);"
		document.getElementsByClassName("ab")[2].classList.add("cli_color");
	}
}
let cshu = 2;
var tim_qh = setInterval(function(){
	qt_img(cshu);
	if(cshu == 3){
		cshu = 0;
	}
	cshu++;
},8000);
document.getElementsByClassName("hd_top_img")[0].addEventListener("mouseover",function(){
	clearTimeout(tim_qh);
})
document.getElementsByClassName("hd_top_img")[0].addEventListener("mouseout",function(){
	tim_qh = setInterval(function(){
		qt_img(cshu);
		if(cshu == 3){
			cshu = 0;
		}
		cshu++;
	},8000);
})


