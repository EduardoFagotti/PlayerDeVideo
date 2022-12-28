import { useState } from "react";
import { Container, StyledButtons } from "./styles";
import foto1 from "../../assets/poster/Bateria.foto.PNG";
import foto2 from "../../assets/poster/Carrilhão.foto.PNG";
import foto3 from "../../assets/poster/Guitarist.foto.PNG";
import foto4 from "../../assets/poster/Street.foto.PNG";

export default function VideoFilter() {
  const videos = [
    {
      type: "musica",
      foto: foto1,
      name: "Bateria",
    },
    {
      type: "musica",
      foto: foto2,
      name: "Carrilhao",
    },
    {
      type: "musica",
      foto: foto3,
      name: "Guitarra",
    },
    {
      type: "rua",
      foto: foto4,
      name: "Street",
    },
  ];
  const videoStreet = [
    {
      type: "rua",
      foto: foto4,
      name: "Street",
    },
  ];

  const videosMusic = [
    {
      type: "musica",
      foto: foto1,
      name: "Bateria",
    },
    {
      type: "musica",
      foto: foto2,
      name: "Carrilhao",
    },
    {
      type: "musica",
      foto: foto3,
      name: "Guitarra",
    },
  ];

  const [filter, setFilter] = useState(videos);

  function alterarStreet() {
    setFilter(videoStreet);
  }

  function alterarMusic() {
    setFilter(videosMusic);
  }

  function allVideos() {
    setFilter(videos);
  }

  const listaVideos = filter.map((v) => (
    <div className="list">
      <img alt="img do video" className="foto" src={v.foto}></img>
      <p> {v.name}</p>
    </div>
  ));

  return (
    <>
      <Container>
        <StyledButtons>
          <button onClick={allVideos}>Todos</button>
          <button onClick={alterarMusic}>Musica</button>
          <button onClick={alterarStreet}>Rua</button>
        </StyledButtons>
        {listaVideos}
      </Container>
    </>
  );
}
