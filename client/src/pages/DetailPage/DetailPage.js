import React from 'react'

const DetailPage = () => {
  return (
    <main>
    <section className="section-details-header">
    </section>
    <section className="section-details-content">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 pl-lg-0">
                    <div className="card card-details">

                        <h1>
                            {/* <%= tempPenghubung.film.namaFilm %> */}
                        </h1>
                        <div className="gallery">
                            <div className="xzoom-container">
                                {/* <img src="<%= tempPenghubung.film.image %>" className="xzoom" id="xzoom-default"> */}
                            </div>
                        </div>
                        <h2>
                            Sinopsis
                        </h2>
                        <p>
                            {/* <%= tempPenghubung.film.sinopsis %> */}
                        </p>
                        <div className="features row">
                            <div className="col-md-4 border-left">

                                <div className="description">
                                    <h3>
                                        Kategori
                                    </h3>
                                    {/* <p><%= tempPenghubung.kategori.namaKategori %></p> */}
                                </div>
                            </div>
                            <div className="col-md-4 border-left">

                                <div className="description">
                                    {/* <% tempPenghubung.film.jadwals.forEach(jadwal=>{ %> */}
                                    <h3>
                                        Hari Tayang
                                    </h3>
                                    {/* <p><%= jadwal.hariTayang %></p> */}
                                    {/* <% }) %> */}

                                </div>
                            </div>
                            <div className="col-md-4 border-left">

                                <div className="description">
                                    {/* <% tempPenghubung.film.jadwals.forEach(jadwal=>{ %> */}
                                    <h3>
                                        Jam Tayang
                                    </h3>
                                    {/* <p><%= jadwal.jamTayang %>
                                    </p> */}
                                    {/* <% }) %> */}

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
  )
}

export default DetailPage