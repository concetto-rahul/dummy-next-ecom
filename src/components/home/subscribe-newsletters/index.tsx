"use client";

import Image from "next/image";
import { useState } from "react";

import "./subscribe-newsletters.scss";

export default function SubscribeNewsletters() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const submitSubscibeNow = () => {
    if (email && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrorMessage("");
      console.log("submit the form");
    } else {
      setErrorMessage("Please enter a valid email address");
    }
  };
  return (
    <section className="container mt-5">
      <div className="subscribe-newsletters-box">
        <div className="">
          <h2>Subscribe to Our Newsletters</h2>
          <p>
            Receive exclusive offers, unique gift ideas, and personalised tips
            for shopping and selling on <strong>BargainFox</strong>.
          </p>
        </div>
        <div className="icon">
          <Image
            src="/images/svg/subscribe-newsletters-white-ring.svg"
            alt="subscribe newsletters white ring"
            width="116"
            height="109"
          />
        </div>
        <div>
          <div className="input-box">
            <input
              type="text"
              name="email"
              id="email"
              className={`${errorMessage ? "error" : ""}`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-dark"
              onClick={submitSubscibeNow}
            >
              Subscibe Now
            </button>
            <p className="error-message">{errorMessage}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
