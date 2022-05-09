import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { lihatPenghubung } from "../../axios/penghubungAxios";

const DetailPage = () => {
  const [penghubung, setPenghubung] = useState({});

  const params = useParams();

  useEffect(() => {
    const { id } = params;
    lihatPenghubung(
      (id,
      (result) => {
        setPenghubung({
          image: result[0].image,
          namaFilm: result[0].namaFilm,
          sinopsis: result[0].sinopsis,
          kategoriId: result[0].kategoriId,
          hariTayang: result[0].hariTayang,
          jamTayang: result[0].jamTayang,

          filmId: result[0].filmId,
        });
      })
    );
  }, []);

  return (
    <main>
      <section className="section-details-header"></section>
      <section className="section-details-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 pl-lg-0">
              <div className="card card-details">
                <h1>{penghubung.namaFilm}</h1>
                <div className="gallery">
                  <div className="xzoom-container">
                    <img
                      src={penghubung.image}
                      class="xzoom"
                      id="xzoom-default"
                    />
                  </div>
                </div>
                <h2>Sinopsis</h2>
                <p>{penghubung.sinopsis}</p>
                <div className="features row">
                  <div className="col-md-4 border-left">
                    <div className="description">
                      <h3>Kategori</h3>
                      <p>{penghubung.namaKategori}</p>
                    </div>
                  </div>
                  <div className="col-md-4 border-left">
                    <div className="description">
                      {penghubung.map((penghubungResult) => {
                        return (
                          <div>
                            <h3>Hari Tayang</h3>{" "}
                            <p>{penghubungResult.hariTayang}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-4 border-left">
                    <div className="description">
                      {penghubung.map((penghubungResult) => {
                        return (
                          <div>
                            <h3>Jam Tayang</h3>{" "}
                            <p>{penghubungResult.jamTayang}</p>
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
