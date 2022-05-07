import React from 'react'
import {Link} from 'react-router-dom'
import {Outlet} from 'react-router-dom'

const kategori = () => {
  return (
    <div className="container my-3">
    <div className="row text-center bg-success bg-opacity-25">
        <div className="col-12">
            <h3>Tukang Film</h3>
            <p>Selamat Datang di bioskop mini</p>

        </div>
    </div>
    <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <i className="fa-solid fa-home me-2"></i>Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" href="/film">Film</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/jadwal">Jadwal</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/kategori">Kategori</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/penghubung/add">Penghubung</Link>
                          </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <Outlet></Outlet>
</div>
  )
}

export default kategori