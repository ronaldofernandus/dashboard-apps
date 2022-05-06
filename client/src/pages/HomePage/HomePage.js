import React from "react";
import "./HomePage.css";
import bioskop from "../../images/bioskop.png";
import bioskop2 from "../../images/bioskop2.png";
import cgv from "../../images/cgv.jpg";
import cinepolis from "../../images/cinepolis.jpg";

const HomePage = () => {
  return (
    <main>
      <section class="section-popular">
        <div class="container">
          <div class="row">
            <div class="col text-center section-popular-heading">
              <h2>Film Populer</h2>
              <p>Berikut daftar film yang sedang populer</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-popular-content" id="popularcontent">
        <div className="container">
          <div className="section-popular-film row justify-content-center">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="card-film text-center d-flex-column">
                <div className="judul-film">Spiderman </div>
                <div className="film-button mt-auto">
                  <a href="" className="btn btn-film-detail px-4">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="card-film2 text-center d-flex-column">
                <div className="film-country"> Dr.Strange </div>
                <div className="film-button mt-auto">
                  <a href="" className="btn btn-film-detail px-4">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="card-film text-center d-flex-column">
                <div className="film-country"> </div>
                <div className="film-button mt-auto">
                  <a href="" className="btn btn-film-detail px-4">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="card-film text-center d-flex-column">
                <div className="film-country"> </div>
                <div className="film-button mt-auto">
                  <a href="" className="btn btn-film-detail px-4">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
