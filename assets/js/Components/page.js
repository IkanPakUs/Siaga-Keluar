// ------ Html Page Component ------ //

const mapPage = () => {
	return `<div id="map-page">
				<div id="map"></div>
				<div id="content" class="show">
					<div class="menu-page hide">
						<div class="stats"> 
							<svg
								class="chart-icon"
								version="1.1"
								baseProfile="full"
								viewBox="0 0 100 100"
								xmlns="http://www.w3.org/2000/svg">
							
								<line x1="22.5" y1="91" x2="22.5" y2="62" stroke-width="10" stroke-linecap="butt" class="chart-line" />
								<line x1="42.5" y1="91" x2="42.5" y2="37" stroke-width="10" stroke-linecap="butt" class="chart-line" />
								<line x1="62.5" y1="91" x2="62.5" y2="46" stroke-width="10" stroke-linecap="butt" class="chart-line" />
								<line x1="82.5" y1="91" x2="82.5" y2="23" stroke-width="10" stroke-linecap="butt" class="chart-line" />
								<line x1="5" y1="95" x2="5" y2="5" stroke-width="5" class="chart-scale" />
								<line x1="2.5" y1="95" x2="100" y2="95" stroke-width="5" class="chart-scale" />
							</svg>
							<a href=#">Statistik</a>
						</div>
					</div>
					<div class="expand-btn">
						<button>
							<svg xmlns="/assets/image/chevron-double-right.svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
								<path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
							</svg>
						</button>
					</div>
					<div id="box-control">
						<button type="button" class="hide-btn">
							<!-- Bootstrap Icon -->
							<svg xmlns="/assets/images/chevron-double-left.svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
								<path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
							</svg>
						</button>
						<button type="button" class="menu-btn">
							<!-- Bootstrap Icon -->
							<svg xmlns="/assets/images/list.svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
								<path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
							</svg>
						</button>
					</div>
					<div class="filter-box">
						<div class="search-box">
							<input type="text" id="search-form" placeholder="Cari lokasi" />
						</div>
						<div class="select-box">
							<select id="select-form">
								<option value="">Semua</option>
								<option value="Tinggi">Resiko Tinggi</option>
								<option value="Sedang">Resiko Sedang</option>
								<option value="Rendah">Resiko Rendah</option>
							</select>
						</div>
					</div>
					<div class="menu-content"></div>
				</div>
			</div>`;
};

const infoPage = () => {
	return `<div id="info-page">
				<div class="up-btn">
					<button>
						<svg xmlns="/assets/images/chevron-double-down.svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
							<path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
						</svg>
					</button>
				</div>
				<div class="filter-box">
					<div class="daily box" for="daily">
						<button>Harian</button>
					</div>
					<div class="monthly box active" for="monthly">
						<button>Bulanan</button>
					</div>
					<div class="yearly box" for="yearly">
						<button>Tahunan</button>
					</div>
				</div>
				<div class="info-content">
					<div class="chart-content">
						<canvas id="chart"></canvas>
					</div>
					<div class="detail-content">
						<div class="head-title">
							<h3>Per Tanggal : 2021-09-12</h3>
						</div>
						<div class="num-info"></div>
					</div>
				</div>
			</div>`;
};

const infoCase = (data) => {
	return `<div class="confirm border">
				<div class="case-title">
					<h4>Terkonfirmasi</h4>
				</div>
				<div class="num-case">${data.confirm} <small>Orang</small></div>
			</div>
			<div class="die border">
				<div class="case-title">
					<h4>Meninggal</h4>
				</div>
				<div class="num-case">${data.die} <small>Orang</small></div>
			</div>
			<div class="recover border">
				<div class="case-title">
					<h4>Sembuh</h4>
				</div>
				<div class="num-case">${data.recover} <small>Orang</small></div>
			</div>`;
};

const detailPage = (data) => {
	return `<div class="detail-page">
                <div class="body-content">
                    <div class="detail-head">
                        <div class="title">
                            <h3>${data.name}</h3>
                            <small>${data.last_update}</small>
                        </div>
                        <div class="badge" style="background-color: ${data.status_color}">
                            <small>Resiko ${data.status}</small>
                        </div>
                    </div>
                    <div class="list-case">
						<div class="case">
							<div class="confirm border">
								<div class="case-title">
									<h4>Terkonfirmasi</h4>
								</div>
								<div class="num-case">${data.confirm} <small>Orang</small></div>
							</div>
							<div class="die border">
								<div class="case-title">
									<h4>Meninggal</h4>
								</div>
								<div class="num-case">${data.die} <small>Orang</small></div>
							</div>
							<div class="recover border">
								<div class="case-title">
									<h4>Sembuh</h4>
								</div>
								<div class="num-case">${data.recover} <small>Orang</small></div>
							</div>
						</div>
						<canvas id="bar-chart"></canvas>
                    </div>
                </div>
                <div class="foot">
                    <button class="back-btn">
                        <svg xmlns="/assets/images/arrow-left.svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </button>
                </div>
            </div>`;
};

const list = (data) => {
	return `<div class="place-content" place-id="${data.id}">
                <div class="status" style="background-color: ${data.status_color}"><i class="fa fa-question" data-toggle="tooltip" data-placement="top" title="Resiko ${data.status}">&nbsp;</i></div>
                <div class="title">
                    <h4>${data.name}</h4>
                </div>
            </div>`;
};

export { mapPage, infoPage, infoCase, detailPage, list };
