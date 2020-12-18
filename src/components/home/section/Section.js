import React, { useState, useEffect } from "react";
import data from "../../../../public/data.json";
import { getData } from "../../../api/apiService";
import { Container } from "reactstrap";
import styles from "../../../styles/home/section.module.css";
import CardCarousel from "./Carousel";
import Link from "next/link";

export default function Section() {
  const database = data.showcases;
  const [allSales, setAllSales] = useState([]);

  // // Trazendo direto api pelo fetch e usando o estado para setala
  // useEffect(() => {
  //  const data =async(){
  // const result = fetch("https://sandbox.houpa.app/api-tests/showcases")

  //     .then((res) => res.json())
  //     .then((data) => {
  // setTimeout(() => {
  //       setAllSales(data);
  // },2000);
  //     });
  // return result
  // }
  // }, []);

  // Usando async e await na requesição pela api
  useEffect(() => {
    const data = async () => {
      const sales = await getData();
      setTimeout(() => {
        setAllSales(sales);
      }, 2000);
    };
    data();
  }, []);
  const handleCheck = (item) => {
    // e.preventDefault();
    console.log(item);
  };

  return (
    <div>
      {/* trouxe a api pelo arquivo mas poderia trazer por fetch,
      ou pelo pacote axios */}
      {database.map(({ id, name, thumb }) => {
        return (
          <Container className={styles.container} key={id}>
            <div className={styles.layout}>
              <img src={thumb} className={styles.imgLogo} alt={name} />
              <p className={styles.title}> {name}</p>
            </div>

            <CardCarousel sales={allSales} onCard={handleCheck} />
          </Container>
        );
      })}
    </div>
  );
}
