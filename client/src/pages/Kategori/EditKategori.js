import React, { useState, useEffect } from "react";
import { editKategori, lihatKategori } from "../../axios/kategoriAxios";
import { useNavigate, useParams } from "react-router-dom";

const EditKategori = () => {
  const [input, setKategori] = useState({
    namaKategori: "",
  });
  const navigation = useNavigate();

  const params = useParams();

  useEffect(() => {
    const { id } = params;

    lihatKategori(+id, (result) => {
      setKategori({
        namaKategori: result[0].namaKategori,
      });
    });
  }, []);

  const editHandler = () => {
    editKategori(+params.id, input);
    navigation("/kategori");
  };

  return (
    <div className="row ">
      <div className="col-12 text-center">
        <h5>Edit Data Kategori</h5>
        <p>Berisi Halaman Form Edit</p>
      </div>
      <div className="col-12 my-2">
        <div className="mb-3">
          <label className="form-label" for="customFile">
            Kategori
          </label>
          <input
            value={input.namaKategori}
            onChange={(e) =>
              setKategori({ ...input, namaKategori: e.target.value })
            }
            type="text"
            className="form-control"
            id="customFile"
            name="namaKategori"
          />
        </div>

        <button
          onClick={() => editHandler()}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditKategori;
