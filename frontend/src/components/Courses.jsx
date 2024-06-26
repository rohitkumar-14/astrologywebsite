import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PaymentPopup from "./PaymentPopup"

const Courses = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState(null);
  const [paymentId, setPaymentId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");

  const createPayment = (amount, courseName) => {
    fetch("http://localhost:5000/create-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount, courseName, email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setQrCodeUrl(data.url);
        setPaymentId(data.id);
        setShowPopup(true);
      })
      .catch((error) => console.error("Error:", error));
  };

  const checkPayment = () => {
    if (!paymentId) return;

    fetch(`http://localhost:5000/pay/${paymentId}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Payment successful! Redirecting to homepage...");
          window.location.href = "/";
        }
      })
      .catch((error) => console.error("Error:", error));
  };
  const closePopup = () => {
    setShowPopup(false);
  };
  // Simulate payment check every 5 seconds
  useEffect(() => {
    const interval = setInterval(checkPayment, 5000);
    return () => clearInterval(interval);
  }, [paymentId]);

  const cards = [
    {
      id: 1,
      img: "http://localhost:5173/src/assets/images/blog_single1.jpg",
      price: 1000,
      courseName: "Course Name1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste repellendus itaque quam doloribus dolores velit, quo quae earum nobis! Adipisci, vel provident! Quasi autem, beatae perferendis nisi placeat ea facilis!",
    },

    {
      id: 2,
      img: "http://localhost:5173/src/assets/images/blog_single1.jpg",
      price: 4500,
      courseName: "Course Name2",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste repellendus itaque quam doloribus dolores velit, quo quae earum nobis! Adipisci, vel provident! Quasi autem, beatae perferendis nisi placeat ea facilis!",
    },

    {
      id: 3,
      img: "http://localhost:5173/src/assets/images/blog_single1.jpg",
      price: 8000,
      courseName: "Course Name3",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste repellendus itaque quam doloribus dolores velit, quo quae earum nobis! Adipisci, vel provident! Quasi autem, beatae perferendis nisi placeat ea facilis!",
    },
  ];
  return (
    <section className="as_pricing_plan as_padderBottom50 as_padderTop80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="as_heading as_heading_center">Our Courses</h1>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="240"
                height="15"
                viewBox="0 0 240 15">
                <image
                  id="Vector_Smart_Object"
                  data-name="Vector Smart Object"
                  width="240"
                  height="15"
                  xlinkHref="data:img/png;base64,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"></image>
              </svg>
            </span>
            <p className="as_font14 as_padderBottom50 as_padderTop20">
              Consectetur adipiscing elit, sed do eiusmod tempor
              incididuesdeentiut labore
              <br />
              etesde dolore magna aliquapspendisse and the gravida.
            </p>
          </div>
        </div>
        <div className="row">
          {cards.map((card, index) => (
            <div className="col-lg-6 col-md-4 col-sm-6 col-12">
              <div className="as_pricing_box text-center">
                <div className="as_pric_icon" style={{ height: "200px" }}>
                  <img src={card.img} style={{ height: "200px" }} alt="" />
                </div>
                <div className="as_pricing as_gradient_text">
                  <sup className="as_gradient_text">Rs</sup>
                  {card.price}{" "}
                </div>
                <h1 className="as_heading as_gradient_text">
                  {card.courseName}
                </h1>
                <p>{card.description}</p>
                <div className="d-flex gap-2 align-items-center justify-content-center">
                  <NavLink to={`/coursedetail/${card.id}`} className="as_btn">
                    Read More
                  </NavLink>
                  <a
                    href="#"
                    className="as_btn"
                    onClick={() => createPayment(card.price, card.courseName)}>
                    Choose Now
                  </a>
                </div>
              </div>
            </div>
          ))}
          {showPopup && (
            <PaymentPopup
              qrCodeUrl={qrCodeUrl}
              email={email}
              setEmail={setEmail}
              onClose={closePopup}
            />
          )}
         
        </div>
      </div>
    </section>
  );
};

export default Courses;
