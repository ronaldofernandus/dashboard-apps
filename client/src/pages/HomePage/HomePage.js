import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { lihatFilm } from "../../axios/filmAxios";

const HomePage = () => {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    lihatFilm((result) => setFilm(result));
  }, []);

  return (
    <main>
      <section className="section-popular">
        <div className="container">
          <div className="row">
            <div className="col text-center section-popular-heading">
              <h2>Film Populer</h2>
              <p>Berikut daftar film yang sedang populer</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-popular-content" id="popularcontent">
        <div className="container">
          <div className="section-popular-film row justify-content-center">
            {film.map((filmm) => {
              const { id, namaFilm,image } = filmm;
              return (
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div
                    className="card-film text-center d-flex-column"
                    src={image}
                  >
                    <div className="judul-film">{filmm.namaFilm} </div>
                    <div className="film-button mt-auto">
                      <Link
                        to={`/detail/${id}`}
                        className="btn btn-film-detail px-4"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
