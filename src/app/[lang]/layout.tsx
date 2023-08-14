import "./../globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { i18n } from "@/i18n-config";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "BIG Discounts - Daily Deals on New & Preloved Products - BargainFox.com",
  description:
    "Buy bargains online with big discounts! Deals on Home, Kitchen, Electronics, Health & Beauty and Toys. Free delivery on orders over £50. BIG on Service - BIG on Savings.",
  keywords: "BargainFox.com",
  themeColor: "#ff7315",
  authors: [{ name: "bargainfox.com" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_APPLICATION_BASE_URL || ""),
  openGraph: {
    title:
      "BIG Discounts - Daily Deals on New & Preloved Products - BargainFox.com",
    description:
      "Buy bargains online with big discounts! Deals on Home, Kitchen, Electronics, Health & Beauty and Toys. Free delivery on orders over £50. BIG on Service - BIG on Savings.",
    url: process.env.NEXT_PUBLIC_APPLICATION_BASE_URL || "",
    siteName: "bargainfox.com",
    type: "website",
    images: [
      {
        url: "/images/main-logo-white.png",
        alt: "bargainfox",
        width: 374,
        height: 170,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary",
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang}>
      <body className={`${inter.variable} font-sans`}>
        <div>
          <header className="barfain-head">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 d-flex align-items-center justify-content-center justify-content-md-between flex-wrap">
                  <div className="barfain-logo">
                    <Link href={"/"} className="d-block" title="barfain-logo">
                      <Image
                        src="/images/barfain-logo.png"
                        alt="barfain-logo"
                        width={187}
                        height={85}
                      />
                    </Link>
                  </div>
                  <div className="barfain-search d-none d-xl-flex">
                    <div className="lag-select d-xl-flex">
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle d-flex align-items-center justify-content-start"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          title="Language"
                        >
                          ALL
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              title="Home & kitchen"
                            >
                              Home & kitchen
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              title="Health & Beauty"
                            >
                              Health & Beauty
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <form action="#">
                      <div className="input-group search-bar">
                        <input
                          className="form-control ac-text fs-16"
                          type="search"
                          placeholder="Search Product"
                        ></input>
                        <span className="input-group-append">
                          <button className="btn" type="button">
                            <Image
                              src="/images/svg/search-normal.svg"
                              alt="search-normal"
                              width={24}
                              height={24}
                            />
                          </button>
                        </span>
                      </div>
                    </form>
                    <ul id="search-show" className="ui-memu">
                      <li>sanni kalariya</li>
                      <li>sanni kalariya</li>
                      <li>sanni kalariya</li>
                      <li>sanni kalariya</li>
                      <li>sanni kalariya</li>
                      <li>sanni kalariya</li>
                      <li>sanni kalariya</li>
                      <li className="">sanni kalariya</li>
                    </ul>
                  </div>
                  <div className="barfain-social ml-5 my-3 my-md-0">
                    <ul className="list-inline m-0">
                      <li className="list-inline-item">
                        <Link href={"s"} title="heart">
                          <Image
                            src="/images/svg/heart.svg"
                            alt="heart-logo"
                            width={31}
                            height={31}
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          href={"s"}
                          className="position-relative"
                          title="shopping-cart"
                        >
                          <Image
                            src="/images/svg/shopping-cart.svg"
                            alt="shopping-cart"
                            width={31}
                            height={31}
                          />
                          <span className="card-amount">2</span>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <div className="drop-user">
                          <div className="d-flex align-items-center">
                            <Link href={"s"} className="me-2" title="user">
                              <Image
                                src="/images/svg/user.svg"
                                alt="user"
                                width={31}
                                height={31}
                              />
                            </Link>
                            <Link
                              href={"s"}
                              className="sign-reg"
                              title="Sign in "
                            >
                              <p className="m-0">
                                Hello there,
                                <span className="d-block fw-bold text-uppercase">
                                  Sign in / Register
                                </span>
                              </p>
                            </Link>
                          </div>
                          <div className="drop-login text-center">
                            <div className="drop-sub text-center">
                              <ul>
                                <li>
                                  <Link
                                    className="user-reg d-flex align-items-center"
                                    title="Sign in"
                                    href="/"
                                  >
                                    <Image
                                      src="/images/svg/user.svg"
                                      className="user-img"
                                      alt="user"
                                      width={37}
                                      height={37}
                                    ></Image>
                                    <p className="m-0 fw-bold fs-16 fh-18">
                                      Stephen Parker
                                      <span className="d-block fw-400 f-14 fh-18">
                                        View Profile
                                      </span>
                                    </p>
                                  </Link>
                                </li>
                                <li>
                                  <button className="btn lr" type="button">
                                    Login/Register
                                  </button>
                                </li>
                                <li>
                                  <Link href="/" title="Divisions">
                                    Your Profile
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/" title="Your Orders">
                                    Your Orders
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/" title="Address">
                                    Address
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/" title="Wishlist">
                                    Wishlist
                                  </Link>
                                </li>
                                <li>
                                  <button className="btn lr" type="button">
                                    Logout
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="d-inline-block d-xl-none">
                        <Link
                          href={"#search"}
                          className="d-block"
                          title="search-interface-symbol"
                        >
                          <Image
                            src="/images/svg/search-interface-symbol.svg"
                            alt="search-interface-symbol-logo"
                            width={31}
                            height={31}
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <section id="main-content">
            <div className="global_search d-flex d-xl-none">
              <Link href={"#"} className="close-btn" id="close-search">
                <Image
                  src="/images/svg/close.svg"
                  alt="close"
                  width={30}
                  height={30}
                />
              </Link>
              <div className="barfain-search d-flex d-xl-none">
                <div className="lag-select d-xl-flex">
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle d-flex align-items-center justify-content-start"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      title="Language"
                    >
                      ALL
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#" title="English">
                          English
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" title="Franch">
                          Franch
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <form action="#">
                  <div className="input-group search-bar">
                    <input
                      className="form-control ac-text fs-16"
                      type="search"
                      placeholder="Search Product"
                    ></input>
                    <span className="input-group-append">
                      <button className="btn" type="button">
                        <Image
                          src="/images/svg/search-normal.svg"
                          alt="search-normal"
                          width={24}
                          height={24}
                        />
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            {children}
          </section>
          <footer>
            <div className="footer text-center text-xl-start">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-sm-4 col-xs-12">
                    <div className="single_footer">
                      <h4>Help</h4>
                      <ul>
                        <li>
                          <Link href="#">Delivery</Link>
                        </li>
                        <li>
                          <Link href="#">Returns</Link>
                        </li>
                        <li>
                          <Link href="#">Help Centre</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="single_footer footer-aboutus">
                      <h4>About Us</h4>
                      <ul>
                        <li>
                          <Link href="#">About Us</Link>
                        </li>
                        <li>
                          <Link href="#">Our Blog</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="single_footer footer-account">
                      <h4>Your Account</h4>
                      <ul>
                        <li>
                          <Link href="#">Your Orders</Link>
                        </li>
                        <li>
                          <Link href="#">Checkout</Link>
                        </li>
                        <li>
                          <Link href="#">Download the App</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-bottom text-center text-xl-start">
                  <div className="row align-items-center">
                    <div className="col-12 col-xl-4">
                      <div className="social_media">
                        <ul>
                          <li>
                            <Link href="#">
                              <Image
                                src="/images/svg/Facebook.svg"
                                alt="Facebook"
                                width={7}
                                height={16}
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <Image
                                src="/images/svg/twiter.svg"
                                alt="twiter"
                                width={16}
                                height={13}
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <Image
                                src="/images/svg/instagram.svg"
                                alt="instagram"
                                width={18}
                                height={18}
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <Image
                                src="/images/svg/pinterest.svg"
                                alt="pinterest"
                                width={16}
                                height={19}
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4">
                      <p className="copyright mt-2 mt-xl-0 mb-0">
                        All rights reserved © 2023&nbsp;
                        <Link href="#">BargainFox.com</Link>
                      </p>
                    </div>
                    <div className="col-12 col-xl-4">
                      <div className="footer-last text-center text-xl-end mt-2 mt-xl-0 mb-0">
                        <ul>
                          <li>
                            <Link href="#">Terms of Service</Link>
                          </li>
                          <li>
                            <Link href="#">Privacy Policy</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
