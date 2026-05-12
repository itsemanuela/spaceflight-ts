import { useEffect, useState } from "react";
import type { IArticle, SpaceflightResponse } from "../types/type";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const MyFetch = () => {
  const [dati, setDati] = useState<IArticle[]>([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status.toString());
        }
      })
      .then((res: SpaceflightResponse) => {
        setDati(res.results);
        console.log("Dati salvati nello stato:", res.results, dati);
      })
      .catch((err) => {
        console.error("Errore nel recupero dati:", err);
      });
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="text-white mb-4">Ultime Notizie Spaziali</h2>
      <Row className="g-4">
        {dati.map((articolo) => (
          <Col xs={12} md={6} lg={4} key={articolo.id}>
            <Card className="h-100 bg-dark text-white border-secondary shadow-sm">
              <Card.Img
                variant="top"
                src={articolo.image_url}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-6 fw-bold">
                  {articolo.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-info small">
                  {articolo.news_site}
                </Card.Subtitle>
                <Card.Text className="small text-secondary flex-grow-1">
                  {articolo.summary.substring(0, 100)}...
                </Card.Text>
                <Button variant="outline-light" size="sm" className="mt-3">
                  Leggi di più
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default MyFetch;
