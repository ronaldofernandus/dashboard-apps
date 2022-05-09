import React, { useState, useEffect } from "react";
import { lihatFilm } from "../../axios/filmAxios";
import { lihatKategori } from "../../axios/kategoriAxios";
import { lihatJadwal } from "../../axios/jadwalAxios";
import { lihatDetails } from "../../axios/detailAxios";

const DetailPage = () => {
  const [film, setFilm] = useState([]);
  const [jadwal, setJadwal] = useState([]);
  const [kategori, setKategori] = useState([]);

  useEffect(() => {
    lihatFilm((result) => setFilm(result));
  }, []);

  useEffect(() => {
    lihatJadwal((result) => setJadwal(result));
  }, []);

  useEffect(() => {
    lihatKategori((result) => setKategori(result));
  }, []);

  return (
    <main>
      <section className="section-details-header"></section>
      <section className="section-details-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 pl-lg-0">
              <div className="card card-details">
                <h1>{film.namaFilm}</h1>
                <div className="gallery">
                  <div className="xzoom-container">
                    <img src={film.image} class="xzoom" id="xzoom-default" />
                  </div>
                </div>
                <h2>Sinopsis</h2>
                <p>{film.sinopsis}</p>
                <div className="features row">
                  <div className="col-md-4 border-left">
                    <div className="description">
                      <h3>Kategori</h3>
                      <p>{kategori.namaKategori}</p>
                    </div>
                  </div>
                  <div className="col-md-4 border-left">
                    <div className="description">
                      {jadwal.map((jadwalResult) => {
                        return (
                          <div>
                            <h3>Hari Tayang</h3>{" "}
                            <p>{jadwalResult.hariTayang}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-4 border-left">
                    <div className="description">
                      {jadwal.map((jadwalResult) => {
                        return (
                          <div>
                            <h3>Jam Tayang</h3> <p>{jadwalResult.jamTayang}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DetailPage;
