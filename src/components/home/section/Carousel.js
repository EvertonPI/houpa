import Link from "next/link";
import Slider from "react-slick";

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

export default function Carousel({ sales, onCard }) {
  const database = sales;

  let settings = {
    infinite: true,
    speed: 700,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleClick = ({ target }) => {
    onCard(target);
  };
  return (
    <div className="container">
      {database.length === 0 ? (
        <div style={{ fontSize: "1.8rem" }}>
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <span className="ml-4">Carregando carrousel</span>
        </div>
      ) : (
        <Slider {...settings}>
          {database.map((current) => {
            const product = current.map(
              ({ id, name, description, photo, price, isCheck }) => {
                return (
                  <Link href="/about" rightCheck={onCard}>
                    <div className="link">
                      <Card key={id} className="card" onClick={handleClick}>
                        <CardImg
                          top
                          className="imgCard"
                          src={photo}
                          alt={name}
                        />
                        <CardBody>
                          <CardTitle tag="h5" className="card-title">
                            {name}
                          </CardTitle>
                          <CardText className="description">
                            {description}
                          </CardText>
                          <CardSubtitle tag="h6" className="mt-2 text-muted">
                            {price}
                          </CardSubtitle>
                          <Button className="buttonCard">Comprar</Button>
                        </CardBody>
                      </Card>
                    </div>
                  </Link>
                );
              }
            );

            return product;
          })}
        </Slider>
      )}
    </div>
  );
}
