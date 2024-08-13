import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showProducts } from "../Features/ProductSlice";
import { MdDiscount } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaAppStoreIos } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { PiPackageBold } from "react-icons/pi";
import {
  incrementProduct,
  decrementProduct,
  removeProduct,
} from "../Features/ProductSlice";

const Card = () => {
  const products = [
    {
      id: 1,
      title: "Apple iPhone 11",
      description:
        "The iPhone 11 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle..",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: ["https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2.jpg"],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "It was the first iPhone to use an OLED screen, branded as a Super Retina HD display. The home button's fingerprint sensor was replaced with a new type of authentication called Face ID, which uses sensors to scan the user's face to unlock the device.",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://www.kindpng.com/picc/m/503-5031097_iphone-x-pro-max-hd-png-download.png",
      ],
    },
    {
      id: 3,
      title: "Samsung S24 Ultra",
      description:
        "The Galaxy S24 Ultra not only packs far more powerful hardware—including a better sensor, sharper lens and 100x Space Zoom—but also leverages the state-of-the-art ProVisual engine with AI optimizations that will improve your ability to shoot, edit and share the most beautiful and memorable photos possible",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: [
        "https://m.media-amazon.com/images/I/41fCDR6pjpL._SX300_SY300_QL70_FMwebp_.jpg",
      ],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images: ["https://m.media-amazon.com/images/I/71Hy+RrYQOL._SL1500_.jpg"],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "https://m.media-amazon.com/images/I/61mweDjNvZL._AC_SL1000_.jpg",
      ],
    },
  ];

  const dispatchProducts = useDispatch();
  const ProductList = useSelector((state) => state.prodReducer);
  useEffect(() => {
    dispatchProducts(showProducts(products));
  }, [dispatchProducts]);
  const totalPrice = ProductList.reduce(
    (Total, Data) => Total + Data.price * (Data.quantity || 1),
    0
  );
  const totalQuantity = ProductList.reduce(
    (Total, Data) => Total + (Data.quantity || 1),
    0
  );
  const handleInc = (id, quantity) => {
    dispatchProducts(incrementProduct({ id }));
  };
  const handleDec = (id, quantity) => {
    if (quantity > 1) dispatchProducts(decrementProduct({ id }));
  };
  const RemovefromCart = (id, quantity) => {
    dispatchProducts(removeProduct({ id }));
  };
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center">
          <b>
            <span className="cart">
              ...
              <MdOutlineDoubleArrow />
              <i>
                <FaAppStoreIos />
                Shopping Cart !!
              </i>
              <MdOutlineDoubleArrow />
              ...
            </span>
          </b>
        </h1>
        <hr />
        <h1 className="text-center">
          <span className="icons">
            <MdDiscount />
            <b className="Dis">
              50% Off - Smartphones / Smartphones & Basic ...
            </b>
          </span>
        </h1>
        <h1 className="text-center">
          <span className="icon">
            <i className="box">
              <PiPackageBold />
            </i>
            <b className="free">
              <i>Free Shipping</i>
            </b>
            ...
            <FaShippingFast />
          </span>
        </h1>
        <hr />
        <br />
        <div className="d-flex justify-content-between mb-3 one">
          <h3 style={{ color: "rgb(35,142,142)" }}>
            Total Quantity:{totalQuantity}
          </h3>
          <h3 style={{ color: "rgb(102,149,32)" }}>
            Total Price:
            <MdCurrencyRupee />
            {totalPrice}
          </h3>
        </div>
        {ProductList.map((element, index) => {
          return (
            <div
              key={index}
              className="card mb-3  justify-content-center"
              style={{ maxWidth: "1000px" }}
            >
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src={element.images}
                    className="rounded float-start"
                    alt="..."
                    style={{
                      width: "300px",
                      padding: "30px",
                      margin: "30px",
                      paddingTop: "70px",
                    }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h2
                      className="card-title"
                      style={{ textDecoration: "underline" }}
                    >
                      {element.title}
                    </h2>
                    <br />
                    <h5 className="card-text">
                      Discription:{element.description}
                    </h5>
                    <br />
                    <h5 className="card-text">
                      Price:
                      <MdCurrencyRupee />
                      {element.price}
                    </h5>
                    <br />
                    <h5 className="card-text">
                      Discount:{element.discountPercentage}%
                    </h5>
                    <br />
                    <h5 className="card-text">
                      Rating:
                      <span
                        className="badge text-bg-success"
                        style={{ height: "30px", width: "60px" }}
                      >
                        {element.rating}
                      </span>
                    </h5>
                    <br />
                    <h5 className="card-text">Stock:{element.stock}</h5>
                    <br />
                    <h5 className="card-text">
                      Brand:<b>{element.brand}</b>
                    </h5>
                    <div className="d-flex align-items-center justify-content-end">
                      <button
                        className="btn btn-primary me-2"
                        onClick={() =>
                          handleDec(element.id, element.quantity || 1)
                        }
                      >
                        -
                      </button>
                      <div>
                        <b>{element.quantity ? element.quantity : 1}</b>
                      </div>
                      <button
                        className="btn btn-primary ms-2"
                        onClick={() =>
                          handleInc(element.id, element.quantity || 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <br />
                    <div className="d-flex align-items-center justify-content-end">
                      <button
                        className="btn btn-danger ms-auto"
                        onClick={() => {
                          RemovefromCart(element.id, element.quantity || 1);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
