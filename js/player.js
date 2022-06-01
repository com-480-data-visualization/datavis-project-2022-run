const bio = document.getElementsByClassName("bio");
for (let i = 0; i < bio.length; i++) {
	bio[i].onclick = function() {
		const bil = document.getElementsByClassName("Bi");
		for (let i2 = 0; i2 < bil.length; i2++) {
			document.getElementsByClassName("Bi")[i2].classList.remove("disp-block");
		}
		for (let i3 = 0; i3 < bio.length; i3++) {
			bio[i3].classList.remove("col_bl");
		}
		document.getElementsByClassName("Bi")[i].classList.add("disp-block");
		bio[i].classList.add("col_bl");
	}

}


const xr = (html = "xrbfb") => {
	const xrbfb = document.getElementsByClassName(html);
	for (let i = 0; i < xrbfb.length; i++) {
		const chil = xrbfb[i].children.length
		let b = (nub) => {
			for (let i2 = 0; i2 < nub; i2++) {
				let text = xrbfb[i].children[i2].innerText;
				let zzbd = () => {
					let r = /^\d+/,
						r2 = /\d$/;
					let n = r.test(text) && r2.test(text);
					if (!n) {
						let r3 = /[a~z]/i,
							r4 = /^\d[%]$/;
						let n2 = r3.test(text);
						if (n2) {
							return 0;
						}
						if (r4) {
							return text.replace("%", "");
						}
					}
					return 0;
				}
				let val = zzbd();
			
				let p = document.createElement("p");
				p.style = "width:" + val + "%;'";
				xrbfb[i].children[i2].append(p);

			}
		};
		b(chil);
	}
}
xr();
const xr2 = (data, html = "xrbfb") => {
	const xrbfb = document.getElementsByClassName(html);
	for (let i = 0; i < xrbfb.length; i++) {
		const chil = xrbfb[i].children.length;
		let b = (nub) => {
			for (let i2 = 0; i2 < nub; i2++) {
				let car = i ? "career" : "data";
				let text = data[car][i2];
				let zzbd = () => {
					let r = /^\d+/,
						r2 = /\d$/;
					let n = r.test(text) && r2.test(text);
					if (!n) {
						let r3 = /[a~z]/i,
							r4 = /^\d[%]$/;
						let n2 = r3.test(text);
						if (n2) {
							return 0;
						}
						if (r4) {
							return text;
						}
					}
					return 0;
				}
				let val = zzbd();
				
				xrbfb[i].children[i2].innerHTML = data[car][i2] + "<p style='width:" + val+";'></p>";
				
			}
		};
		b(chil);
		
	}
}
let pla_data = {
	season: {
		"2019-20": {
			"data": ['48.1%','38.2%','72.4%', '33.9', '20.3', '6.4', '2.1', '1.1', ],
			"career": ['CAREER','46.8%','37.1%','67.8%', '26.3', '13.1', '4.5', '1.4', '0.9', ]
		},
		"2018-19": {
			"data": ['46.50%','34.40%','65.80%', '25.9', '13', '4.2', '1.4', '0.9', ],
			"career": ['CAREER','46.8%','37.1%','67.8%', '26.3', '13.1', '4.5', '1.4', '0.9'],
		},
		"2017-18": {
			"data": ['46.5%','39.5%','64.4%','30.7', '14.5', '4.9', '1.6', '1', ],
			"career": ['CAREER','46.8%','37.1%','67.8%', '26.3', '13.1', '4.5', '1.4', '0.9', ]
		},
		"2016-17": {
			"data": ['45.5%','34.3%','68.5%', '17.2', '6.6', '2.8', '0.8', '0.5', ],
			"career": ['CAREER','46.8%','37.1%','67.8%', '26.3', '13.1', '4.5', '1.4', '0.9', ]
		}
	},

}

let sele = document.getElementsByClassName("sele")[0];
sele.onchange = function() {
	let thi = this.value;
	xr2(pla_data.season[thi])
	
	document.getElementsByClassName("tr_hb")[0].children[0].innerHTML = "<p>"+thi+"</p>";
	
}
