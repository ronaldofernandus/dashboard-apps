  const [penghubung, setPenghubung] = useState({
    filmId: 0,
    kategoriId: "",
    jadwalId: 0,
    
  });
 const [input, setInput] = useState({
    image: "",
    namaFilm: "",
    sinopsis: "",
    kategoriId: 0,
  });
  const [jadwal, setJadwal] = useState({
    hariTayang: "",
    jamTayang: "",
    filmId: 0,
  });
  const [kategori, setKategori] = useState({
    namaKategori: "",
  });

  const params = useParams();
  useEffect(() => {
    const { id } = params;
    lihatJadwal(
      (+id,
      (result) => {
        setJadwal({
          hariTayang: result[0].hariTayang,
          jamTayang: result[0].jamTayang,

          filmId: result[0].filmId,
        });
      })
    );
  }, []);
  useEffect(() => {
    const { id } = params;
    lihatFilm(
      (+id,
      (result) => {
        setInput({
          image: result[0].image,
          namaFilm: result[0].namaFilm,
          sinopsis: result[0].sinopsis,
          kategoriId: result[0].kategoriId,
        });
      })
    );
  }, []);
  useEffect(() => {
    const { id } = params;

    lihatKategori(+id, (result) => {
      setKategori({
        namaKategori: result[0].namaKategori,
      });
    });
  }, []);