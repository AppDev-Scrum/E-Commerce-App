import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// Bootstrap
import Button from "../components/Button.jsx";
import Dropdown from "react-bootstrap/Dropdown";
// CSS style
import Style from "../css modules/Design.module.css";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// Components
import ProductList from "../components/ProductList.jsx";

export default function ViewProductPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const [isUserAdmin, setIsUserAdmin] = useState();
  const [userId, setUserId] = useState();
  const location = useLocation();
  useEffect(() => {
    setIsUserAdmin(location.state?.isUserAdmin);
    setUserId(location.state?.userId);
  }, [location]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      .then((products) => setProducts(products))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  function handleLogout() {
    navigate("/", { replace: true });
  }

  return (
    <section className={Style.viewProductPage}>
      <header className={Style.header}>
        <div className={Style.header__Title}>
          <div className={Style.titleLayout}>
            <h1 className={Style.pageTitle}>E-commerce 2.0</h1>
          </div>

          <Dropdown className={Style.header__userIcon}>
            <Dropdown.Toggle
              className={Style.iconBorder}
              variant="link"
              id="dropdown-basic"
            >
              <FontAwesomeIcon
                icon={faUser}
                size="lg"
                style={{ color: "#4470FE" }}
              />
            </Dropdown.Toggle>

            <Dropdown.Menu className="m-0 p-0">
              <Button
                className={`d-flex justify-content-center align-items-center dropdown-item m-0 p-0 ${Style.logoutButton}`}
                name={"Log Out"}
                onClick={handleLogout}
              />
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className={Style.adminBanner}>
          {isUserAdmin ? <h2>Admin Dashboard</h2> : <h2>Product List</h2>}
        </div>
      </header>

      {/* Main Product List Section */}
      <div className={Style.productListContainer}>
        <ProductList products={products} isUserAdmin={isUserAdmin} userId={userId} />
      </div>
    </section>
  );
}
