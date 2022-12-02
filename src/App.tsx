import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Main from "./components/pages/Main/Main";
import Cart from "./components/pages/Cart/Cart";
import { useDispatch } from "react-redux";
import AccessoriesPage from "./components/pages/AccessoriesPage/AccessoriesPage";
import { useState, useEffect } from "react";
import { windowResize } from "./redux/deviseRedux";
import NotFound from "./components/pages/NotFound/NotFound";
import Footer from "./components/layout/Footer/Footer";
import { fetchKickscooters } from "./redux/kickscooterRedux";
import { fetchAccessories } from "./redux/accessoriesRedux";
import OrderStatus from "./components/pages/OrderStatus/OrderStatus";
import { fetchOrders } from "./redux/ordersRedux";
import Info from "./components/pages/Info/Info";

function App() {
  const dispatch = useDispatch();

  useEffect(
    () => dispatch(fetchKickscooters()),
    //dispatch(fetchAccessories()),
    //dispatch(fetchOrders()),

    [dispatch]
  );

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    sizeChange();

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);

  const isDesktop = width >= 768;
  const sizeChange = (e) => {
    dispatch(windowResize({ isDesktop }));
  };

  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/orders" element={<OrderStatus />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
