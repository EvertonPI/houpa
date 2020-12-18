import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import bars from "../../assets/bars.svg";
import shoppingCart from "../../assets/shoppingCart.svg";
import styles from "../../styles/home/Header.module.css";

const Example = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className={styles.barNavigation} light expand="md">
        <Container className={styles.layoutPosition}>
          <div className={styles.flexRow}>
            <NavbarToggler
              onClick={toggle}
              style={{ border: "none", outline: "none", fontSize: "2.2rem" }}
            />
            <div className="d-flex">
              <img src={bars} className={styles.imgBars} alt="bars do header" />

              <NavbarBrand
                className={styles.navHome}
                style={{ fontSize: "1.6rem", color: "#707070" }}
                href="/"
              >
                Menu
              </NavbarBrand>
            </div>
          </div>
          <div className={(styles.flexRow, styles.position)}>
            <Collapse isOpen={isOpen} navbar>
              <Nav className={styles.navMenu} navbar>
                <NavItem className={styles.linkDistance}>
                  <NavLink href="/">
                    <FontAwesomeIcon
                      className={styles.iconSearch}
                      icon="search"
                    />
                  </NavLink>
                  <input
                    id="search"
                    placeholder="Buscar"
                    className={styles.inputSearch}
                    type="text"
                    pattern=".+"
                    required
                  />
                </NavItem>
                <NavItem className={styles.linkDistance}>
                  <NavLink href="/">
                    <FontAwesomeIcon
                      className={styles.iconFavorite}
                      icon={["far", "heart"]}
                    />
                  </NavLink>
                  <p className={styles.textItens}> Meus favoritos</p>
                </NavItem>
                <NavItem
                  style={{ width: "20rem" }}
                  className={styles.linkDistance}
                >
                  {/* link do next deixa a pagina estatica
                   e não recarrega isso na perfomance e´outro  */}
                  <Link href="/">
                    <NavLink href="/">
                      <img
                        src={shoppingCart}
                        className={styles.shoppingCart}
                        alt="carrinho de Compras"
                      />
                    </NavLink>
                  </Link>
                  <p className={styles.textItens}>{title} </p>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Container>
      </Navbar>
      <div></div>
    </div>
  );
};

export default Example;
