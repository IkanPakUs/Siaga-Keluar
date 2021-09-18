// ------ Html Page Component ------ //

const mapPage = () => {
	return `<div id="map-page">
				<div id="map"></div>
				<div id="content" class="show">
					<div class="menu-page hide">
						<div class="stats"> 
							<a href="#">Statistik</a>
						</div>
						<div class="news"> 
							<a href="#">Berita</a>
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

const newsPage = () => {
	return `<div id="news-page">
				<div class="up-btn-news">
					<button>
						<svg xmlns="/assets/images/chevron-double-down.svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
							<path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
						</svg>
					</button>
				</div>
				<div id="page-container">
					<div class="head-title">
						<h1>Berita <span>Covid</span> <small>Terkini</small></h1>
					</div>
					<div class="news-content">
						<div class="latest-news">
							<div class="news">
								<div class="news-head">
									<div class="news-image">
										<img src="assets/images/news1.jpg" />
									</div>
									<div class="date-time"><small>Sabtu, 18 September 2021 15:57 WIB</small></div>
								</div>
								<div class="news-desc">
									<h3><a href="https://www.tribunnews.com/internasional/2021/09/18/vietnam-setujui-penggunaan-vaksin-abdala-buatan-kuba-untuk-lawan-covid-19">Vietnam Setujui Penggunaan Vaksin Abdala</a></h3>
									<p>Vietnam telah memberikan persetujuan vaksin Abdala dari Kuba untuk melawan wabah virus corona.</p>
								</div>
							</div>
						</div>
						<div class="bottom-latest">
							<!-- All Artikel from tribun news -->
							<div class="news">
								<div class="news-head">
									<div class="news-image">
										<a href="https://www.tribunnews.com/corona/2021/09/18/dr-reisa-ajak-masyarakat-pakai-masker-ganda-dan-skrining-pribadi-sebelum-bepergian"><img src="assets/images/news2.jpg" /></a>
									</div>
									<div class="date-time"><small>Sabtu, 18 September 2021 15:21 WIB</small></div>
								</div>
								<div class="news-desc">
									<h3><a href="https://www.tribunnews.com/corona/2021/09/18/dr-reisa-ajak-masyarakat-pakai-masker-ganda-dan-skrining-pribadi-sebelum-bepergian">dr Reisa Ajak Masyarakat Pakai Masker Ganda dan Skrining Pribadi Sebelum Bepergian</a></h3>
								</div>
							</div>
							<div class="news">
								<div class="news-head">
									<div class="news-image">
										<a href="https://www.tribunnews.com/bisnis/2021/09/18/peluang-usaha-mudah-dan-menguntungkan-anti-pandemi-dengan-passive-income-menjanjikan"><img src="assets/images/news3.jpg" /></a>
									</div>
									<div class="date-time"><small>Sabtu, 18 September 2021 12:04 WIB</small></div>
								</div>
								<div class="news-desc">
									<h3><a href="https://www.tribunnews.com/bisnis/2021/09/18/peluang-usaha-mudah-dan-menguntungkan-anti-pandemi-dengan-passive-income-menjanjikan">Peluang Usaha Mudah dan Menguntungkan, Anti Pandemi dengan Passive Income Menjanjikan </a></h3>
								</div>
							</div>
							<div class="news">
								<div class="news-head">
									<div class="news-image">
										<a href="https://www.tribunnews.com/nasional/2021/09/18/orang-asing-pemegang-visa-atau-izin-tinggal-diperbolehkan-masuk-indonesia-tapi-ada-syaratnya"><img src="assets/images/news4.jpg" /></a>
									</div>
									<div class="date-time"><small>Sabtu, 18 September 2021 07:39 WIB</small></div>
								</div>
								<div class="news-desc">
									<h3><a href="https://www.tribunnews.com/nasional/2021/09/18/orang-asing-pemegang-visa-atau-izin-tinggal-diperbolehkan-masuk-indonesia-tapi-ada-syaratnya">Orang Asing Pemegang Visa atau Izin Tinggal Diperbolehkan Masuk Indonesia, Tapi Ada Syaratnya</a></h3>
								</div>
							</div>
							<div class="news">
								<div class="news-head">
									<div class="news-image">
										<a href="https://www.tribunnews.com/bisnis/2021/09/17/mendag-lutfi-akui-aplikasi-pedulilindungi-sulit-diterapkan-di-pasar-rakyat"><img src="assets/images/news5.jpg" /></a>
									</div>
									<div class="date-time"><small>Jumat, 17 September 2021 18:08 WIB</small></div>
								</div>
								<div class="news-desc">
									<h3><a href="https://www.tribunnews.com/bisnis/2021/09/17/mendag-lutfi-akui-aplikasi-pedulilindungi-sulit-diterapkan-di-pasar-rakyat">Mendag Lutfi Akui Aplikasi PeduliLindungi Sulit Diterapkan di Pasar Rakyat</a></h3>
								</div>
							</div>
							<div class="news">
								<div class="news-head">
									<div class="news-image">
										<a href="https://www.tribunnews.com/corona/2021/09/17/update-corona-17-september-kasus-positif-bertambah-3835-pasien-angka-sembuh-menurun"><img src="assets/images/news6.jpg" /></a>
									</div>
									<div class="date-time"><small>Jumat, 17 September 2021 17:33 WIB</small></div>
								</div>
								<div class="news-desc">
									<h3><a href="https://www.tribunnews.com/corona/2021/09/17/update-corona-17-september-kasus-positif-bertambah-3835-pasien-angka-sembuh-menurun">UPDATE Corona 17 September: Kasus Positif Bertambah 3.835 Pasien, Angka Sembuh Menurun</a></h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>`;
};

export { mapPage, infoPage, newsPage, infoCase, detailPage, list };
