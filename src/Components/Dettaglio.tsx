import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IArticle } from "../types/type";
import { Container, Image } from "react-bootstrap";

const Dettaglio = () => {
  const { articleId } = useParams();
  const [articolo, setArticolo] = useState<IArticle | null>(null);

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${articleId}`)
      .then((res) => res.json())
      .then((data: IArticle) => setArticolo(data))
      .catch((err) => console.error(err));
  }, [articleId]);

  if (!articolo)
    return <p className="text-white text-center">Caricamento...</p>;

  return (
    <Container className="text-white mt-5">
      <Image src={articolo.image_url} fluid rounded className="mb-4" />
      <h1>{articolo.title}</h1>
      <p className="lead">{articolo.summary}</p>
      <a
        href={articolo.url}
        target="_blank"
        rel="noreferrer"
        className="btn btn-info"
      >
        Leggi l'articolo originale
      </a>
    </Container>
  );
};

export default Dettaglio;
