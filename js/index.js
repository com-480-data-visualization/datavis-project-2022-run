var T_name = {
	'wa': 'Washington',
	'or': 'Oregon',
	'ca': 'California',
	'id': 'Idaho',
	'nv': 'Nevada',
	'mt': 'Montana',
	'wy': 'Wyoming',
	'ut': 'Utah',
	'az': 'Arizona',
	'co': 'Colorado',
	'nm': 'New Mexico',
	'nd': 'North Dakota',
	'sd': 'South Dakota',
	'ne': 'Nebraska',
	'ks': 'Kansas',
	'ok': 'Oklahoma',
	'tx': 'Texas',
	'mn': 'Minnesota',
	'ia': 'Iowa',
	'mo': 'Missouri',
	'ar': 'Arkansas',
	'la': 'Louisiana',
	'wi': 'Wisconsin',
	'il': 'Illinois',
	'mi': 'Michigan',
	'in': 'Indiana',
	'ky': 'Kentucky',
	'tn': 'Tennessee',
	'ms': 'Mississippi',
	'al': 'Alabama',
	'ga': 'Georgia',
	'oh': 'Ohio',
	'wv': 'West Virginia',
	'ny': 'New York',
	'pa': 'Pennsylvania',
	'md': 'Maryland',
	'va': 'Virginia',
	'nc': 'North Carolina',
	'sc': 'South Carolina',
	'fl': 'Florida',
	'vt': 'Vermont',
	'nh': 'New Hampshire',
	'me': 'Maine',
	'ma': 'Massachusetts',
	'ct': 'Connecticut',
	'nj': 'New Jersey',
	'de': 'Delaware',
	'ri': 'Rhode Island',
	'ak': 'Alaska',
	'hi': 'Hawaii',
}
var team = {
	'Washington': 'Washington Wizards',
	'Oregon': 'Portland Trail Blazers',
	'California': ['Golden State Warriors', 'Los Angeles Clippers', 'Los Angeles Lakers', 'Sacramento Kings'],
	'Utah': 'Utah Jazz',
	'Arizona': 'Phoenix Suns',
	'Colorado': 'Denver Nuggets',
	'Oklahoma': 'Oklahoma City Thunder',
	'Texas': ['Dallas Mavericks', "Houston Rockets", "San Antonio Spurs"],
	'Minnesota': 'Minnesota Timberwolves',
	'Louisiana': 'New Orleans Pelicans',
	'Wisconsin': 'Milwaukee Bucks',
	'Illinois': 'Chicago Bulls',
	'Michigan': 'Detroit Pistons',
	'Indiana': 'Indiana Pacers',
	'Tennessee': 'Memphis Grizzlies',
	'Georgia': 'Atlanta Hawks',
	'Ohio': 'Cleveland Cavaliers',
	'New York': ['Brooklyn Nets', "New York Knicks","Toronto Raptors(Toronto)"],
	'Pennsylvania': 'Philadelphia 76ers',
	'North Carolina': 'Charlotte Hornets',
	'Florida': ['Miami Heat', "Orlando Magic"],
	'Massachusetts': 'Boston Celtics',
}
var team_src = {
	'Washington Wizards': 'https://www.nba.com/wizards/',
	'Portland Trail Blazers': 'https://www.nba.com/blazers/',
	'Golden State Warriors': 'https://www.nba.com/warriors/',
	'Utah Jazz': 'https://www.nba.com/jazz/',
	'Phoenix Suns': 'https://www.nba.com/suns/',
	'Denver Nuggets': 'https://www.nba.com/nuggets',
	'Oklahoma City Thunder': 'https://www.nba.com/thunder',
	'Dallas Mavericks': 'https://www.mavs.com/',
	'Minnesota Timberwolves': 'https://www.nba.com/timberwolves',
	'New Orleans Pelicans': 'https://www.nba.com/pelicans/',
	'Milwaukee Bucks': 'https://www.nba.com/bucks',
	'Chicago Bulls': 'https://www.nba.com/bulls/',
	'Detroit Pistons': 'https://www.nba.com/pistons',
	'Indiana Pacers': 'https://www.nba.com/pacers',
	'Memphis Grizzlies': 'https://www.nba.com/grizzlies/',
	'Atlanta Hawks': 'https://www.nba.com/hawks/',
	'Cleveland Cavaliers': 'https://www.nba.com/cavaliers/',
	'Brooklyn Nets': 'https://www.nba.com/nets/',
	'Philadelphia 76ers': 'https://www.nba.com/sixers/',
	'Charlotte Hornets': 'https://www.nba.com/hornets/',
	'Miami Heat': 'https://www.nba.com/heat/home',
	'Boston Celtics': 'https://www.nba.com/celtics/',
	'Los Angeles Clippers': 'https://www.nba.com/clippers/',
	'Houston Rockets': 'https://www.nba.com/rockets/',
	'New York Knicks': 'https://www.nba.com/knicks/',
	'Orlando Magic': 'https://www.nba.com/magic',
	'Los Angeles Lakers': 'https://www.nba.com/lakers/',
	'Sacramento Kings': 'https://www.nba.com/kings/',
	'San Antonio Spurs': 'https://www.nba.com/spurs/',
	"Toronto Raptors(Toronto)":"https://www.nba.com/raptors"
}
var team_img = {
	'Washington Wizards': 'https://pic2.zhimg.com/v2-04d46e6061d9163022831bea39bf3435_qhd.jpg?source=57bbeac9',
	'Portland Trail Blazers': 'https://www.nba.com/blazers/sites/blazers/files/tb_primary_rgb_2.png?w=180&h=105',
	'Golden State Warriors': 'https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg',
	'Utah Jazz': 'https://pic2.zhimg.com/v2-bac4cc2a19a57280f03f4344271ae0bb_qhd.jpg?source=57bbeac9',
	'Phoenix Suns': 'https://www.nba.com/suns/sites/suns/files/phoenix_suns_logo.png?w=180&h=105',
	'Denver Nuggets': 'https://pica.zhimg.com/v2-b0b2e916cc874285df0a124b04c2a47e_qhd.jpg?source=57bbeac9',
	'Oklahoma City Thunder': 'http://bdata.7m.com.cn/basketball_team_data/17/logo_Img/club_logo.jpg',
	'Dallas Mavericks': 'https://www.mavs.com/wp-content/themes/mavs/images/logo.svg',
	'Minnesota Timberwolves': 'https://pic2.zhimg.com/v2-7f66dc9f2742570267f716ed371eedaa_qhd.jpg?source=57bbeac9',
	'New Orleans Pelicans': 'https://www.nba.com/pelicans/sites/pelicans/files/1415_nop_hdrlogo2.png?',
	'Milwaukee Bucks': 'https://cdn.nba.com/teams/uploads/sites/1610612749/2021/09/logo.svg',
	'Chicago Bulls': 'https://www.nba.com/resources/static/team/v2/bulls/reboot/resources/images/bullhead-1819.png',
	'Detroit Pistons': 'https://pic2.zhimg.com/v2-dfff86f6f97d8a271a5c379d6ecc2656_qhd.jpg?source=57bbeac9',
	'Indiana Pacers': 'https://d2p3bygnnzw9w3.cloudfront.net/req/202204281/tlogo/bbr/IND.png',
	'Memphis Grizzlies': 'https://pic2.zhimg.com/v2-767638f2d59fc90c6206a2a02910d77f_qhd.jpg?source=57bbeac9',
	'Atlanta Hawks': 'https://pic3.zhimg.com/v2-5471ecb7b638b020595d70f7933c4b03_qhd.jpg?source=57bbeac9',
	'Cleveland Cavaliers': 'https://www.nba.com/cavaliers/sites/cavaliers/files/cavs-shield-nav.png',
	'Brooklyn Nets': 'https://pic1.zhimg.com/v2-95756f73cea56a99395acb73fda32c28_qhd.jpg?source=57bbeac9',
	'Philadelphia 76ers': 'https://pic3.zhimg.com/v2-ce22e7a120dd3468ce8591213bfa6c4c_qhd.jpg?source=57bbeac9',
	'Charlotte Hornets': 'https://www.nba.com/hornets/sites/hornets/files/150429_site_logo.png',
	'Miami Heat': 'https://pica.zhimg.com/v2-cf13ba6e752243ebdae7ba634966d3c1_qhd.jpg?source=57bbeac9',
	'Boston Celtics': 'https://pic2.zhimg.com/v2-cbaf45bd094968149190c089b1b15673_qhd.jpg?source=57bbeac9',
	'Los Angeles Clippers': 'https://www.nba.com/clippers/sites/clippers/files/lac-global-180705.png?w=180&h=105',
	'Houston Rockets': 'https://pic3.zhimg.com/v2-21ae0183babd636bfc175fd0a9700a24_qhd.jpg?source=57bbeac9',
	'New York Knicks': 'https://www.nba.com/resources/static/team/v2/knicks/media/2019-20/img/NYK1718-Primary-Logo-Pres-by-Chase-for-LIGHT-BKGND.png',
	'Orlando Magic': 'https://cdn.nba.com/teams/uploads/sites/1610612753/2021/12/Magic-Global-Logo-2.svg',
	'Los Angeles Lakers': 'https://www.nba.com/lakers/sites/lakers/files/lakers_logo_500.png?w=180&h=105',
	'San Antonio Spurs': 'https://www.nba.com/spurs/sites/spurs/files/2014_spurs_logo.png?',
	'Sacramento Kings': 'https://pic3.zhimg.com/v2-2cc291096b73e0bcb391c1097fe06780_qhd.jpg?source=57bbeac9',
	"Toronto Raptors(Toronto)":"images/Raptors.png"
}



var cli = 0;
var arr = [];
cz();

function cz() {
	let path = document.getElementsByTagName("path");
	cli = 0;
	for (let i = 0; i < (path.length - 1); i++) {
		arr[i] = document.getElementsByTagName("path")[i];
		let att = arr[i].getAttribute("data-state");
		arr[i].addEventListener("mousemove", function() {
			if (cli == 0) {
				tc(att)
			}

		});
		arr[i].addEventListener("mouseout", function() {
			tc_3();
		});

		arr[i].onclick = function() {

			this.removeEventListener("mousemove", tc);
			cli = 2;
		}

	}
}


function tc_3() {
	if (!cli) {
		document.getElementsByClassName("tc_title")[0].style = "display:none";
		cli = 0;
	}
}



function tc(att) {
	add_html(att);
	var posX = 0;
	posY = 0;
	var event = event || window.event;
	if (event.pageX || event.pageY) {
		posX = event.pageX;
		posY = event.pageY;
	} else if (event.clientX || event.clientY) {
		posX = event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
		posY = event.clientY + document.documentElement.scrollTop + document.body.scrollTop;
	}

	let tc_title = document.getElementsByClassName("tc_title")[0];
	let tc_width = tc_title.offsetWidth;
	let body_width = document.body.clientWidth;

	if (body_width - posX < tc_width) {
		tc_title.style = "display:block;transform: translate(" + (posX - 340) + "px," + posY +
			"px);";
	} else {
		tc_title.style = "display:block;transform: translate(" + (posX + 40) + "px," + posY +
			"px);";
	}



}

function add_html(att) {
	let ur = T_name[att.toLowerCase()];
	document.getElementsByClassName("gz")[0].innerText = ur;
	let z_name = team[ur];
	if (z_name) {
		if (Array.isArray(z_name) && z_name.length > 0) {
			document.getElementsByClassName("tc_ul")[0].innerHTML = ``;
			let arr_qd = [];
			for (let i = 0; i < z_name.length; i++) {
				arr_qd[i] = z_name[i];
				let li = document.createElement("li");
				li.innerHTML = `<div class="log_img" style="background:url(` + team_img[z_name[i]] +
					`) no-repeat;background-size: cover;background-position: center;"></div><span class="tcname"><a href="` +
					team_src[z_name] + `">` +
					z_name[i] + `</a></span>`;
				let tbody = document.getElementsByClassName("tc_ul")[0];
				tbody.appendChild(li);
			}

		} else {
			document.getElementsByClassName("tc_ul")[0].innerHTML =
				`<li><div class="log_img" style="background:url(` + team_img[z_name] +
				`) no-repeat;background-size: cover;background-position: center;"></div><span class="tcname"><a href="` +
				team_src[z_name] + `">` + z_name +
				`</a></span></li>`;
		}

	} else {
		document.getElementsByClassName("tc_ul")[0].innerHTML =
			`<li><div class="log_img"></div><span class="tcname">Null</span></li>`;
	}

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