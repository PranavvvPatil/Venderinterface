import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
const HomePage = React.lazy(() => import("./pages/Home/HomePage"));
const CartPage = React.lazy(() => import("./pages/Cart/CartPage"));
const ShopProducts = React.lazy(
  () => import("./components/SearchProducts/ShopProducts")
);
const FavoritePage = React.lazy(() => import("./pages/Favorite/FavoritePage"));
const Login = React.lazy(() => import("./pages/Login/LoginPage"));
const SignUpPage = React.lazy(()=> import("./pages/SignUp/SignUpPage"))
import Layout from "./layout/Layout";
import { Suspense } from "react";
import ProductLanding from "./components/SearchProducts/ProductLanding";
import Loading from "./components/Loading/Loading";
import AddressPage from "./pages/Address/AddressPage";
import OrderPlaced from "./components/OrderPlaced/OrderPlaced";
import About from "./pages/About/About";
import PlantCareProduct from "./components/PlantCare/PlantCareProduct";
import Blog from "./components/Blog/Blog";
import AccountPage from "./pages/Account/AccountPage";
import EditProfile from "./components/Account/pages/EditProfile";
import PlantCareHome from "./components/PlantCare/PlantHome/PlantCareHome";
import Orders from "./components/Account/pages/Orders/Orders";
import Contact from "./components/Contact/Contact";
import OrderDetails from "./components/OrderDetail/OrderDetails";
import Faq from "./components/Account/pages/FAQ/Faq";
import { Terms } from "./components/Account/pages/Terms/Terms";
import { Help } from "./components/Account/pages/Help/Help";
import Address from "./pages/Address/Address";
import PayCheckout from "./pages/PaymentPage/PayCheckout";
import CheckOut from "./components/CheckOut/page/CheckOut";
import LoginOtp from "./components/Login/LoginOtp";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
              <Suspense fallback={<Loading />}>
                <Login />
              </Suspense>
          }
        />
                <Route
          path="/otp"
          element={
              <Suspense fallback={<Loading />}>
                <LoginOtp />
              </Suspense>
          }
        />
        <Route
          path="/signup"
          element={

              <Suspense fallback={<Loading />}>
                <SignUpPage />
              </Suspense>

          }
        />
        <Route
          path="/orderplaced"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <OrderPlaced />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/shop-plants"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <ShopProducts />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/shop-plants/:id"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <ProductLanding />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <CartPage />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/shipping-address"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <AddressPage />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/payment-window"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <PayCheckout />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/favorite"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <FavoritePage />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/checkout"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <CheckOut />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <Contact />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <About />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/plant-care"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <PlantCareHome />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/plant-care/details"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <PlantCareProduct />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <Blog />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/account"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <AccountPage />
              </Suspense>
            </Layout>
          }
        >
          <Route index element={<EditProfile />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/details" element={<OrderDetails />} />
          <Route path="your-cart" element={<div>cart page</div>} />
          <Route path="wishlist" element={<div>wishlist page</div>} />
          <Route
            path="address-book"
            element={
              <div className="flex justify-center items-center">
                <Address flag={true} />
              </div>
            }
          />
          <Route path="help" element={<Help />} />
          <Route path="faqs" element={<Faq />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
