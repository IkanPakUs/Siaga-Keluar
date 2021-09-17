// ------ Import Components ------ //
import { mapPage, infoPage, infoCase, detailPage, list } from "./Components/page.js";

// ****** Global Variable ****** //

const data = [
	{
		id: 1,
		name: "Politeknik Negeri Bali",
		last_update: "2021-09-12",
		confirm: 20,
		positive: 2,
		die: 2,
		recover: 16,
		lat: -8.800048218262715,
		lng: 115.16155725049012,
		status: "Rendah",
		status_color: "green",
		radius: 300,
	},
	{
		id: 2,
		name: "Fakultas Pariwisata Universitas Udayana",
		last_update: "2021-09-12",
		confirm: 32,
		positive: 6,
		die: 9,
		recover: 15,
		lat: -8.79891640654014,
		lng: 115.16713875419433,
		status: "Sedang",
		status_color: "orange",
		radius: 150,
	},
	{
		id: 3,
		name: "Udayana University Hospital",
		last_update: "2021-09-12",
		confirm: 50,
		positive: 30,
		die: 6,
		recover: 14,
		lat: -8.790414368500372,
		lng: 115.17537039500931,
		status: "Tinggi",
		status_color: "red",
		radius: 400,
	},
	{
		id: 4,
		name: "RSU Bali Jimbaran",
		last_update: "2021-09-12",
		confirm: 47,
		positive: 25,
		die: 5,
		recover: 17,
		lat: -8.790414368500372,
		lng: 115.17537039500931,
		status: "Tinggi",
		status_color: "red",
		radius: 400,
	},
];

let data_label = ["Apr 2021", "Mey 2021", "Jun 2021", "Jul 2021", "Aug 2021", "Sep 2021"];

let data_confirm = [41618, 46738, 47638, 48871, 49672, 48882];

let data_recover = [33512, 34425, 34878, 38733, 39373, 40736];

let data_die = [3512, 2425, 2878, 1733, 2373, 1736];

let data_daily = [
	{ id: 1, data: [13, 15, 17, 21, 20] },
	{ id: 2, data: [35, 38, 40, 37, 32] },
	{ id: 3, data: [55, 50, 58, 52, 50] },
	{ id: 4, data: [50, 48, 42, 45, 47] },
];

let chart_text = "Bulan";

let leaf_map;

let bar_chart;

let line_chart;

const menu = $(".container");

// ------ Startup Function ------ //
$(document).ready(() => {
	// setLineChart();
	// chartButtonFUnc();
	// setInfoCase();

	mainPage();
});

// ****** Function ****** ///

// ------ Map Function ------- //

function setMap() {
	leaf_map = L.map("map", {
		center: [-8.799147001375449, 115.16167526768629],
		zoom: 17,
		zoomControl: false,
	});

	data.forEach((v) => {
		makeCircle(v).addTo(leaf_map);
	});

	L.control
		.zoom({
			position: "topright",
		})
		.addTo(leaf_map);

	L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: "mapbox/streets-v11",
		tileSize: 512,
		zoomOffset: -1,
		accessToken: "pk.eyJ1IjoiaWthbnBha3VzIiwiYSI6ImNrdGUwcXB0NzJsZ3Iycm84ZmIwdHhwOGUifQ.UuPpaRsQnt0aB1Jlhk4tZg",
	}).addTo(leaf_map);

	leaf_map.on("click", function () {
		getDetailFromMap();
	});
}

function makeCircle(data) {
	let circle = L.circle([data.lat, data.lng], {
		color: false,
		fillColor: data.status_color,
		fillOpacity: 0.2,
		radius: data.radius,
	});

	return circle;
}

// ------ Chart Function ------ //

function setLineChart() {
	let el_chart = $("#chart");

	if (bar_chart) {
		bar_chart.destroy();
	}

	if (line_chart) {
		line_chart.destroy();
	}

	line_chart = new Chart(el_chart, {
		type: "line",
		data: {
			labels: data_label,
			datasets: [
				{
					backgroundColor: "#fc7303",
					borderColor: "#fc7303",
					label: "Terkonfirmasi",
					data: data_confirm,
				},
				{
					backgroundColor: "#09ad95",
					borderColor: "#09ad95",
					label: "Sembuh",
					data: data_recover,
				},
				{
					backgroundColor: "#f82649",
					borderColor: "#f82649",
					label: "Meninggal",
					data: data_die,
				},
			],
		},
		options: {
			plugins: {
				legend: {
					title: {
						text: "Data Covid Bali",
						display: true,
						color: "#d4ecdd",
						font: {
							size: 23,
						},
					},
					labels: {
						color: "#d4ecdd",
					},
				},
			},
			tooltip: {
				mode: "x-axis",
			},
			scales: {
				x: {
					title: {
						display: true,
						text: chart_text,
						color: "#d4ecdd",
					},
					grid: {
						color: "#17283a",
					},
					ticks: {
						color: "#d4ecdd",
					},
				},
				y: {
					title: {
						display: true,
						text: "Orang",
						color: "#d4ecdd",
					},
					grid: {
						color: "#17283a",
					},
					ticks: {
						color: "#d4ecdd",
					},
				},
			},
		},
	});
}

function setBarChart(id) {
	let el_chart = $("#bar-chart");

	let data = data_daily.find((v) => v.id == id);
	bar_chart = new Chart(el_chart, {
		type: "bar",
		data: {
			labels: ["8", "9", "10", "11", "12"],
			datasets: [
				{
					backgroundColor: "#fc7303",
					barThickness: 30,
					data: data.data,
				},
			],
		},
		options: {
			plugins: {
				tooltip: {
					enabled: false,
				},
				legend: {
					display: false,
				},
			},
			scales: {
				x: {
					title: {
						display: true,
						text: "Tanggal",
						color: "#d4ecdd",
					},
					ticks: {
						color: "#d4ecdd",
					},
				},
				y: {
					ticks: {
						color: "#d4ecdd",
					},
				},
			},
		},
	});
}

// ------ Feauture Function ------ //

function liveSearch() {
	$("#search-form").on("keyup", function () {
		$(".menu-content").empty();
		$(".menu-content").append(`<div class="option"></div>`);

		let data_search = $(this).val();
		let expre = new RegExp(data_search, "i");

		$.each(data, function (id, place) {
			if (place.name.search(expre) != -1) {
				getList(place);
			}
		});

		getDetail();
	});
}

function selectFilter() {
	$("#select-form").on("change", function () {
		let key = this.value;

		let value_list = data.filter((v) => {
			return v.status == key;
		});

		if (key == "") value_list = data;

		$(".menu-content").empty();
		$(".menu-content").append(`<div class="option"></div>`);

		value_list.forEach((value) => {
			getList(value);
		});

		getDetail();
	});
}

// ------ Button Function ------ //

function hideButton() {
	let hide_btn = $(".hide-btn");
	let content = $("#content");
	let expand = true;

	hide_btn.on("click", function () {
		content.removeClass("show");
		content.addClass("hide");
		$(".expand-btn").css({ transition: "all 0.6s ease-out 0.5s" });

		setTimeout(() => {
			expand = false;
		}, 500);
	});

	content.on("click", function () {
		if (expand == false) {
			$(".expand-btn").css({ transition: "all 0.1s ease-out" });
			content.removeClass("hide");
			content.addClass("show");

			expand = true;
		}
	});
}

function backBtnFunc() {
	$(".back-btn").on("click", function () {
		$(".menu-content").addClass("animate");

		setTimeout(() => {
			setList();
		}, 300);

		setTimeout(() => {
			$(".menu-content").removeClass("animate");
			$(".detail-page").detach();
		}, 400);

		getDetail();
	});
}

function menuButtonFunc() {
	$(".menu-btn").on("click", function () {
		$(".menu-page").removeClass("hide");
		$(".menu-page").addClass("show");
	});

	$(".menu-page").on("click", function () {
		$(".menu-page").removeClass("show");
		$(".menu-page").addClass("hide");
	});
}

function statsButtonFunc() {
	$(".stats a").on("click", function () {
		getInfoPage();
	});
}

function upButtonFunc() {
	$(".up-btn").on("click", function () {
		mainPage();

		menu.addClass("animate");
		menu.removeClass("info-mode");

		setTimeout(() => {
			menu.removeClass("animate");
			setTimeout(() => {
				$("#info-page").detach();
			}, 400);
		}, 300);
	});
}

function chartButtonFUnc() {
	$(".box").on("click", function () {
		$(".box").removeClass("active");

		$(this).addClass("active");

		if ($(this).attr("for") == "daily") {
			data_label = ["06 Sep", "07 Sep", "08 Sep", "09 Sep", "10 Sep", "11 Sep", "12 Sep"];
			data_confirm = [618, 738, 638, 871, 672, 882, 734];
			data_recover = [512, 425, 878, 733, 573, 736, 893];
			data_die = [72, 75, 58, 33, 43, 36, 20];
			chart_text = "Tanggal";
		}

		if ($(this).attr("for") == "monthly") {
			data_label = ["Apr 2021", "Mey 2021", "Jun 2021", "Jul 2021", "Aug 2021", "Sep 2021"];
			data_confirm = [41618, 46738, 47638, 48871, 49672, 48882];
			data_recover = [33512, 34425, 34878, 38733, 39373, 40736];
			data_die = [3512, 2425, 2878, 1733, 2373, 1736];
			chart_text = "Bulan";
		}

		if ($(this).attr("for") == "yearly") {
			data_label = ["2020", "2021"];
			data_confirm = [102618, 86738];
			data_recover = [90512, 64425];
			data_die = [8512, 5425];
			chart_text = "Tahun";
		}

		setLineChart();
		setInfoCase();
	});
}

// ------ Injection Function ------ //

function mainPage() {
	let page = mapPage;

	menu.append(page);

	// Call Function
	setMap();
	liveSearch();
	selectFilter();
	hideButton();
	statsButtonFunc();
	menuButtonFunc();
	setList();
}

function getInfoPage() {
	menu.addClass("animate");

	let page = infoPage;
	menu.append(page);

	setTimeout(() => {
		menu.addClass("info-mode");
		menu.removeClass("animate");

		setTimeout(() => {
			$("#map-page").detach();
		}, 500);
	}, 300);

	setInfoCase();
	setLineChart();
	upButtonFunc();
	chartButtonFUnc();
}

function setList() {
	$(".menu-content").empty();
	$(".menu-content").append(`<div class="option"></div>`);

	data.forEach((data) => {
		getList(data);
	});
	getDetail();
}

function getList(page_data) {
	let data = page_data;

	$(".option").append(list(data));
}

function getDetail() {
	let place = $(".place-content");

	place.on("click", function () {
		let id = $(this).attr("place-id");

		let target_place = data.find((v) => v.id == id);
		let el = detailPage(target_place);

		leaf_map.setView([target_place.lat, target_place.lng]);

		$(".menu-content").addClass("animate");
		$(".menu-content").append(el);

		setTimeout(() => {
			$(".menu-content").removeClass("animate");
			$(".option").detach();

			// Call Function
			backBtnFunc();
			setBarChart(id);
		}, 400);
	});
}

function getDetailFromMap() {
	if (!$(".detail-page").length) {
		let target_place = data[0];
		let el = detailPage(target_place);

		$(".menu-content").addClass("animate");
		$(".menu-content").append(el);

		setTimeout(() => {
			$(".menu-content").removeClass("animate");
			$(".option").detach();

			// Call Function
			backBtnFunc();
			setBarChart(1);
		}, 400);
	}
}

function setInfoCase() {
	let data = {
		confirm: data_confirm[data_confirm.length - 1],
		die: data_die[data_die.length - 1],
		recover: data_recover[data_recover.length - 1],
	};

	let el = infoCase(data);

	$(".num-info").empty();
	$(".num-info").append(el);
}
