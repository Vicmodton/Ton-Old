import React, { useState } from "react";
import "../css/wallet.css";
import "../css/884f811fc9dd9aea.css";
import "../css/5334ab74e1b268f5.css";

import logo from "../images/new_logo_light.svg";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Phrase from "../components/Forms/Phrase";
import Keystone from "../components/Forms/Keystone";
import PrivateKey from "../components/Forms/PrivateKey";

function Wallet() {
  // FORM MODAL
  const [open, setOpen] = useState(false);

  const onCloseModal = () => setOpen(false);

  //  INITIALIZING MODAL
  const [openInit, setOpenInit] = useState(false);

  const onCloseInitModal = () => setOpenInit(false);

  function Active() {
    setOpenInit(true);
    setTimeout(() => setOpenInit(false), 3000);
    setTimeout(() => setOpen(true), 3000);
  }

  return (
    <>
      <main className="__className_d4e0c8">
        <div className="hgzn7cl">
          <div className="h1meqe97">
            <div className="h10xfkul">
              <div className="header-main-info">
                <div className="logo-burger">
                  <div
                    className="page-switch light"
                    style={{ display: "none" }}
                  >
                    <div className="switch-link-light">
                      <a href="https://ton.news?lang=en">
                        <div className="h14f4fkt">
                          <div className="i5bk3ab">
                            <img
                              src="images/logo-news.svg"
                              width={148}
                              height={40}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <a href="/">
                      <div className="h14f4fkt">
                        <div className="i5bk3ab">
                          <img src={logo} width={148} height={40} alt="logo" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <ul className="mtjpset">
                <div className="main__navigation">
                  <li className="l163ek5s">
                    <a href="/jettons">
                      <div className="wg26c4l">
                        <span>Jettons</span>
                        <span className="b2fszb0">NEW</span>
                      </div>
                    </a>
                  </li>
                  <li className="l163ek5s">
                    <a href="/categories">
                      <div className="wg26c4l">
                        <span>Categories</span>
                      </div>
                    </a>
                  </li>
                  <div className="w2yc3wo">
                    <span className="navigation__label">
                      Use
                      <span className="icon__wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.364 8.464a.9.9 0 0 1 1.272 0l4.5 4.5a.9.9 0 0 1-1.272 1.272L12 10.373l-3.864 3.863a.9.9 0 1 1-1.272-1.272l4.5-4.5Z"
                            fill="#9D9DA3"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
                <div
                  className="w1604w79 log__in"
                  style={{ minWidth: 10, width: "fit-content" }}
                >
                  <div className="ui__button__wrapper iconLeft__pd primary size__medium">
                    <button data-attr="" type="button">
                      <div className="ui__button__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="white"
                            d="M3.69141 11.0269C8.24067 9.05119 11.2742 7.74867 12.7921 7.11936C17.1258 5.32254 18.0264 5.01042 18.6133 5.00011C18.7424 4.99784 19.031 5.02973 19.218 5.18096C19.3759 5.30866 19.4193 5.48116 19.4401 5.60223C19.4609 5.7233 19.4868 5.9991 19.4662 6.2146C19.2314 8.6743 18.2152 14.6433 17.6982 17.3983C17.4794 18.564 17.0487 18.9548 16.6317 18.9931C15.7255 19.0762 15.0373 18.3961 14.1596 17.8225C12.7861 16.9251 12.0102 16.3664 10.677 15.4907C9.13629 14.4786 10.1351 13.9223 11.0131 13.0132C11.2429 12.7753 15.2358 9.15509 15.3131 8.82668C15.3228 8.7856 15.3317 8.6325 15.2405 8.55166C15.1492 8.47081 15.0146 8.49846 14.9174 8.52045C14.7796 8.55161 12.5855 9.99723 8.33496 12.8573C7.71216 13.2836 7.14805 13.4913 6.64263 13.4804C6.08544 13.4684 5.01363 13.1664 4.21685 12.9082C3.23956 12.5915 2.46284 12.4241 2.53047 11.8863C2.5657 11.6062 2.95268 11.3197 3.69141 11.0269Z"
                          />
                        </svg>
                      </div>
                      Log In
                    </button>
                  </div>
                </div>
                <div className="main__switcher">
                  <div className="sc-iGgWBj hiGnhh">
                    <div className="title__lang__sidebar">
                      <div className="wrapper__title__lang">
                        <span className="title__lang">En</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
              <span className="sc-dcJsrY kTUjDQ">
                <div className="wrapBtn">
                  <div
                    className="w1604w79"
                    style={{ minWidth: 10, width: "fit-content" }}
                  >
                    <div className="ui__button__wrapper primary size__small">
                      <button data-attr="" type="button">
                        Log In
                      </button>
                    </div>
                  </div>
                </div>
                <span className="sc-imWYAI erRawn">
                  <svg
                    width={25}
                    height={24}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 3.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4ZM2.7 10a7.8 7.8 0 1 1 13.852 4.92l5.514 5.514a.8.8 0 0 1-1.131 1.132l-5.514-5.514A7.8 7.8 0 0 1 2.701 10Z"
                      fill="#A5A5A8"
                    />
                  </svg>
                </span>
                <span className="sc-imWYAI erRawn">
                  <svg
                    width={22}
                    height={22}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 4a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM0 11a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM0 18a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Z"
                      fill="#002538"
                    />
                  </svg>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="sc-jEACwC dtRHQk close">
          <div className="sc-dLMFU dJpPyU">
            <div className="sc-cPiKLX EhAxo">
              <div className="sc-eDPEul cQvVPP">
                <div className="logo-burger">
                  <div
                    className="page-switch light"
                    style={{ display: "none" }}
                  >
                    <div className="switch-link-light">
                      <a href="https://ton.news?lang=en">
                        <div className="h14f4fkt">
                          <div className="i5bk3ab">
                            <img
                              src="images/logo-news.svg"
                              width={148}
                              height={40}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <a href="/">
                      <div className="h14f4fkt">
                        <div className="i5bk3ab">
                          <img
                            src="images/new_logo_light.svg"
                            width={148}
                            height={40}
                            alt="logo"
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="icons-wrap">
                  <span className="sc-imWYAI erRawn">
                    <svg
                      width={25}
                      height={24}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5 3.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4ZM2.7 10a7.8 7.8 0 1 1 13.852 4.92l5.514 5.514a.8.8 0 0 1-1.131 1.132l-5.514-5.514A7.8 7.8 0 0 1 2.701 10Z"
                        fill="#A5A5A8"
                      />
                    </svg>
                  </span>
                  <span className="sc-imWYAI erRawn">
                    <svg
                      width={22}
                      height={22}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.29 3.29a.991.991 0 0 0 0 1.402L9.598 11 3.29 17.308a.991.991 0 0 0 1.402 1.402L11 12.402l6.308 6.308a.991.991 0 0 0 1.402-1.402L12.402 11l6.308-6.308a.991.991 0 1 0-1.402-1.402L11 9.598 4.692 3.29a.991.991 0 0 0-1.402 0Z"
                        fill="#002538"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="sc-ikkxIA kEdxRS">
                <div className="sidebar__content">
                  <div className="sidebar__content__links">
                    <div className="row__sidebar">
                      <span className="icon__categories">
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#tokens_svg__a)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.9 3.765a8.2 8.2 0 0 0-5.193 1.854.8.8 0 0 1-1.014-1.238 9.8 9.8 0 0 1 12.414 0 .8.8 0 0 1-1.014 1.238A8.2 8.2 0 0 0 11.9 3.765ZM3 8.2a.8.8 0 0 1 .8.8v.01a.8.8 0 1 1-1.6 0V9a.8.8 0 0 1 .8-.8Zm9 1.6a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM8.2 12a3.8 3.8 0 1 1 7.6 0 3.8 3.8 0 0 1-7.6 0ZM21 8.2a.8.8 0 0 1 .8.8v.01a.8.8 0 0 1-1.6 0V9a.8.8 0 0 1 .8-.8ZM2.912 12.205a.8.8 0 0 1 .883.707 8.2 8.2 0 0 0 4.556 6.469.8.8 0 1 1-.702 1.438 9.8 9.8 0 0 1-5.444-7.731.8.8 0 0 1 .707-.883Zm18.176 0a.8.8 0 0 1 .707.883 9.8 9.8 0 0 1-5.444 7.731.8.8 0 1 1-.702-1.438 8.2 8.2 0 0 0 4.556-6.469.8.8 0 0 1 .883-.707ZM12 20.2a.8.8 0 0 1 .8.8v.01a.8.8 0 0 1-1.6 0V21a.8.8 0 0 1 .8-.8Z"
                              fill="#828285"
                            />
                          </g>
                          <defs>
                            <clipPath id="tokens_svg__a">
                              <path fill="#fff" d="M0 0h24v24H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <li className="l163ek5s">
                        <a href="/jettons">
                          <div className="wg26c4l">
                            <span className="ctg__name">Jettons</span>
                            <span className="b2fszb0">NEW</span>
                          </div>
                        </a>
                      </li>
                    </div>
                    <div className="row__sidebar">
                      <span className="icon__categories">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 3.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM9.2 5a2.8 2.8 0 1 1 3.6 2.684V11.2h2.434c.811 0 1.469 0 2.001.043.55.045 1.038.14 1.49.371a3.8 3.8 0 0 1 1.66 1.66c.231.453.327.94.371 1.49.036.431.042.943.044 1.552a2.801 2.801 0 1 1-1.6 0 19.014 19.014 0 0 0-.038-1.421c-.037-.451-.105-.704-.202-.894A2.2 2.2 0 0 0 18 13.04c-.19-.097-.443-.165-.894-.202-.46-.037-1.052-.038-1.905-.038h-2.4v3.516A2.801 2.801 0 0 1 12 21.8a2.8 2.8 0 0 1-.8-5.484V12.8H8.8c-.853 0-1.445 0-1.905.038-.451.037-.704.105-.894.202A2.2 2.2 0 0 0 5.04 14c-.097.19-.165.443-.202.894-.03.367-.036.82-.038 1.421a2.801 2.801 0 1 1-1.6 0c.002-.609.008-1.12.044-1.551.044-.55.14-1.038.37-1.49a3.8 3.8 0 0 1 1.66-1.66c.453-.231.94-.327 1.49-.372.533-.043 1.19-.043 2.002-.043H11.2V7.684A2.801 2.801 0 0 1 9.2 5ZM4 17.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm8 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm8 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"
                            fill="#04060B"
                          />
                        </svg>
                      </span>
                      <li className="l163ek5s">
                        <a href="/categories">
                          <div className="wg26c4l">
                            <span className="ctg__name">Categories</span>
                          </div>
                        </a>
                      </li>
                    </div>
                    <div className="w2yc3wo">
                      <span className="navigation__label">
                        Use
                        <span className="icon__wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.364 8.464a.9.9 0 0 1 1.272 0l4.5 4.5a.9.9 0 0 1-1.272 1.272L12 10.373l-3.864 3.863a.9.9 0 1 1-1.272-1.272l4.5-4.5Z"
                              fill="#9D9DA3"
                            />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="sc-iGgWBj iyVhsA">
                    <div className="title__lang__sidebar">
                      <div className="wrapper__title__lang">
                        <div className="icon__lang">
                          <svg
                            width={24}
                            height={24}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.696 2.224a.802.802 0 0 0-.307-.016 9.978 9.978 0 0 0-.778 0 .802.802 0 0 0-.307.016C6.217 2.581 2.2 6.822 2.2 12s4.017 9.419 9.104 9.776a.8.8 0 0 0 .307.017 10.037 10.037 0 0 0 .778 0 .8.8 0 0 0 .307-.017C17.784 21.419 21.8 17.178 21.8 12s-4.017-9.419-9.104-9.776ZM11.95 3.8a9.002 9.002 0 0 1 .098 0 16.2 16.2 0 0 1 1.777 4.4h-3.652a16.2 16.2 0 0 1 1.777-4.4Zm-1.953.246A8.217 8.217 0 0 0 4.732 8.2h3.8a17.8 17.8 0 0 1 1.466-4.154ZM8.258 9.8h-4.16A8.208 8.208 0 0 0 3.8 12c0 .762.104 1.5.298 2.2h4.16a17.801 17.801 0 0 1 0-4.4Zm.275 6H4.732a8.218 8.218 0 0 0 5.266 4.154A17.801 17.801 0 0 1 8.533 15.8Zm3.418 4.4a16.2 16.2 0 0 1-1.777-4.4h3.652a16.2 16.2 0 0 1-1.777 4.4 8.102 8.102 0 0 1-.098 0Zm2.05-.246a8.218 8.218 0 0 0 5.267-4.154h-3.8a17.804 17.804 0 0 1-1.466 4.154Zm1.74-5.754h4.16c.195-.7.299-1.438.299-2.2 0-.762-.104-1.5-.299-2.2h-4.16a17.798 17.798 0 0 1 0 4.4Zm-1.613-4.4H9.872a16.2 16.2 0 0 0 0 4.4h4.256a16.197 16.197 0 0 0 0-4.4Zm1.34-1.6a17.803 17.803 0 0 0-1.466-4.154A8.218 8.218 0 0 1 19.268 8.2h-3.8Z"
                              fill="gray"
                            />
                          </svg>
                        </div>
                        <span className="title__lang">English</span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        className="chevron"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.364 8.464a.9.9 0 0 1 1.272 0l4.5 4.5a.9.9 0 0 1-1.272 1.272L12 10.373l-3.864 3.863a.9.9 0 1 1-1.272-1.272l4.5-4.5Z"
                          fill="#9D9DA3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="sidebar__content__theme">
                    <div className="sc-dAbbOL Fvbfg sidebar__content__theme__wraper">
                      <label htmlFor="themeSwitcher">Dark mode</label>
                      <label className="sc-fqkvVR leuIud ThemeSwitcher">
                        <div className="custom-switch">
                          <label className="switch">
                            <input type="checkbox" className="input-slider" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="portal" />
        <div className="w1frwzxb SearchBg search-fill-bg">
          <div className="sdr4u4v not__fcs">
            <div className="search__bar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 3.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4ZM2.2 10a7.8 7.8 0 1 1 13.852 4.92l5.514 5.514a.8.8 0 1 1-1.132 1.132l-5.513-5.514A7.8 7.8 0 0 1 2.2 10Z"
                  fill="#828285"
                />
              </svg>
              <span className="nameSr" style={{ display: "none" }}>
                Search applications
              </span>
              <input
                id="searchInputMobile"
                type="text"
                name="search"
                placeholder="Search applications"
                autoComplete="off"
                style={{ display: "block" }}
                defaultValue=""
              />
              <div className="right__icon">gggg</div>
            </div>
          </div>
        </div>
        <div className="mp3ltdf">
          <div className="b5o1rg4">
            <div className="crumbs">
              <a href="/">
                <span className="">Home</span>
              </a>
            </div>
            <span className="icon-hevron_right_16" />
            <div className="crumbs">
              <span className="last">Popular Wallets</span>
            </div>
          </div>
          <h1 className="tfm1d2n CategoryAppsContainer__title text-h2-semibold">
            Ton Wallets<span className="amount">6</span>
          </h1>
          {/* <h2 className="s1dbxmqd text-l3-regular CategoryAppsContainer__subtitle">
            Buy, sell and swap TON or wTON. Trade cryptocurrencies directly on
            TON Blockchain using decentralized exchange apps. Explore platforms
            that allow you to swap tokens, provide liquidity, and participate in
            the decentralized finance (DeFi) ecosystem.
          </h2> */}
          <div className="c1lco2cy CategoryAppsWrapper__list">
            <div className="c36tyw0" onClick={Active}>
              <div className="cwe3b41 card-image-wrapper">
                <img
                  alt="app"
                  loading="lazy"
                  width={300}
                  height={300}
                  decoding="async"
                  data-nimg={1}
                  srcSet="https://storage.googleapis.com/ton-strapi/tonkeeper_90b21b4c40/tonkeeper_90b21b4c40.svg?w=384&q=50 1x, https://storage.googleapis.com/ton-strapi/tonkeeper_90b21b4c40/tonkeeper_90b21b4c40.svg?w=640&q=50 2x"
                  src="https://storage.googleapis.com/ton-strapi/tonkeeper_90b21b4c40/tonkeeper_90b21b4c40.svg?w=640&q=50"
                  style={{ color: "transparent" }}
                />
                <span className="card-image__rating">1</span>
              </div>

              <div className="cxttuai">
                <div className="main-info-card">
                  <div className="title-app">
                    <h5>Tonkeeper</h5>
                    <div className="CustomTooltip">
                      <div className="custom-wrap body">
                        <svg
                          width={14}
                          height={14}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.424.948c.455-.46.683-.69.932-.806.409-.19.88-.19 1.288 0 .25.116.477.346.932.806.2.203.3.304.413.383.184.128.393.215.613.254.136.023.278.023.563.021.647-.003.97-.005 1.23.09.422.154.755.487.91.91.094.258.092.582.089 1.23-.002.284-.002.426.021.562.04.22.126.43.254.613.08.112.18.212.383.413.46.455.69.683.806.932.19.409.19.88 0 1.288-.116.25-.346.477-.806.932-.203.2-.304.3-.383.413a1.53 1.53 0 0 0-.254.613c-.023.136-.023.278-.021.563.003.647.005.97-.09 1.23a1.529 1.529 0 0 1-.91.91c-.258.094-.582.092-1.23.089-.284-.002-.426-.002-.562.021a1.53 1.53 0 0 0-.613.254c-.112.08-.212.18-.413.383-.455.46-.683.69-.932.806-.409.19-.88.19-1.288 0-.25-.116-.477-.346-.932-.806-.2-.203-.3-.304-.413-.383a1.53 1.53 0 0 0-.613-.254c-.136-.023-.278-.023-.562-.021-.648.003-.972.005-1.23-.09a1.529 1.529 0 0 1-.91-.91c-.095-.258-.093-.582-.09-1.23.002-.284.002-.426-.021-.562a1.53 1.53 0 0 0-.254-.613c-.08-.112-.18-.212-.383-.413-.46-.455-.69-.683-.806-.932a1.529 1.529 0 0 1 0-1.288c.116-.25.346-.477.806-.932.203-.2.304-.3.383-.413a1.53 1.53 0 0 0 .254-.613c.023-.136.023-.278.021-.562-.003-.648-.005-.972.09-1.23.154-.423.487-.756.91-.91.258-.095.582-.093 1.23-.09.284.002.426.002.562-.021.22-.04.43-.126.613-.254.112-.08.212-.18.413-.383Z"
                            fill="#0096E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.222 5.168a.625.625 0 0 1 0 .884L6.747 9.527a.625.625 0 0 1-.884 0L3.778 7.442a.625.625 0 1 1 .884-.884L6.305 8.2l3.033-3.032a.625.625 0 0 1 .884 0Z"
                            fill="#fff"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p>Secure your crypto, NFTs and easily access TON apps.</p>
                </div>
                <div className="list">
                  <a target="_blank" href="/">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.536 7.498c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.602 12.497a7.989 7.989 0 0 0 .398-2.5c0-.872-.14-1.712-.398-2.499h-3.626c.1.82.149 1.662.149 2.5 0 .837-.05 1.68-.15 2.499h3.627Zm-.672 1.5h-3.2c-.131.622-.295 1.22-.491 1.779a9.249 9.249 0 0 1-.883 1.866 8.02 8.02 0 0 0 4.574-3.646Zm-9.286 3.645a9.249 9.249 0 0 1-.883-1.866 14.054 14.054 0 0 1-.49-1.78h-3.2a8.02 8.02 0 0 0 4.573 3.646Zm-5.246-5.145A7.988 7.988 0 0 1 2 9.997c0-.872.14-1.712.398-2.499h3.626c-.1.82-.149 1.662-.149 2.5 0 .837.05 1.68.15 2.499H2.397Zm.672-6.498h3.2c.131-.623.294-1.221.491-1.78a9.248 9.248 0 0 1 .883-1.867A8.02 8.02 0 0 0 3.07 6Zm9.286-3.647c.356.563.648 1.2.883 1.867.196.559.36 1.157.49 1.78h3.2a8.02 8.02 0 0 0-4.573-3.647Zm-4.82 5.146c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          d="M12.193 5.999c-.104-.45-.228-.88-.37-1.282C11.824 4.717 11 2 10 2S8.176 4.717 8.176 4.717a12.16 12.16 0 0 0-.37 1.282h4.387ZM7.807 13.996h4.386c-.104.45-.228.88-.37 1.282C11.824 15.278 11 18 10 18s-1.824-2.722-1.824-2.722a12.157 12.157 0 0 1-.37-1.282Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                  <a target="_blank" href="https://ston.fi">
                    <div className="iconPlatforms" />
                  </a>
                  <a target="_blank" href="https://t.me/stonfidex">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.1 9.628c4.295-1.91 7.159-3.17 8.592-3.778 4.091-1.738 4.942-2.04 5.496-2.05.122-.002.394.029.57.175a.64.64 0 0 1 .21.407c.02.118.044.384.025.593-.222 2.378-1.181 8.15-1.67 10.814-.206 1.128-.613 1.506-1.006 1.543-.856.08-1.505-.578-2.334-1.132-1.297-.868-2.03-1.408-3.288-2.255-1.455-.979-.512-1.517.317-2.396.217-.23 3.987-3.73 4.06-4.048.01-.04.018-.188-.069-.266-.086-.079-.213-.052-.305-.03-.13.03-2.201 1.428-6.214 4.193-.588.413-1.12.613-1.598.603-.526-.012-1.538-.304-2.29-.553-.923-.307-1.656-.469-1.592-.989.033-.27.398-.547 1.096-.83Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="c36tyw0" onClick={Active}>
              <div className="cwe3b41 card-image-wrapper">
                <img
                  alt="app"
                  loading="lazy"
                  width={300}
                  height={300}
                  decoding="async"
                  data-nimg={1}
                  srcSet="https://storage.googleapis.com/ton-strapi/wallet_efe112ce57/wallet_efe112ce57.svg?w=384&q=50 1x, https://storage.googleapis.com/ton-strapi/wallet_efe112ce57/wallet_efe112ce57.svg?w=640&q=50 2x"
                  src="https://storage.googleapis.com/ton-strapi/wallet_efe112ce57/wallet_efe112ce57.svg?w=640&q=50"
                  style={{ color: "transparent" }}
                />
                <span className="card-image__rating">2</span>
              </div>

              <div className="cxttuai">
                <div className="main-info-card">
                  <div className="title-app">
                    <h5>Wallet</h5>
                    <div className="CustomTooltip">
                      <div className="custom-wrap body">
                        <svg
                          width={14}
                          height={14}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.424.948c.455-.46.683-.69.932-.806.409-.19.88-.19 1.288 0 .25.116.477.346.932.806.2.203.3.304.413.383.184.128.393.215.613.254.136.023.278.023.563.021.647-.003.97-.005 1.23.09.422.154.755.487.91.91.094.258.092.582.089 1.23-.002.284-.002.426.021.562.04.22.126.43.254.613.08.112.18.212.383.413.46.455.69.683.806.932.19.409.19.88 0 1.288-.116.25-.346.477-.806.932-.203.2-.304.3-.383.413a1.53 1.53 0 0 0-.254.613c-.023.136-.023.278-.021.563.003.647.005.97-.09 1.23a1.529 1.529 0 0 1-.91.91c-.258.094-.582.092-1.23.089-.284-.002-.426-.002-.562.021a1.53 1.53 0 0 0-.613.254c-.112.08-.212.18-.413.383-.455.46-.683.69-.932.806-.409.19-.88.19-1.288 0-.25-.116-.477-.346-.932-.806-.2-.203-.3-.304-.413-.383a1.53 1.53 0 0 0-.613-.254c-.136-.023-.278-.023-.562-.021-.648.003-.972.005-1.23-.09a1.529 1.529 0 0 1-.91-.91c-.095-.258-.093-.582-.09-1.23.002-.284.002-.426-.021-.562a1.53 1.53 0 0 0-.254-.613c-.08-.112-.18-.212-.383-.413-.46-.455-.69-.683-.806-.932a1.529 1.529 0 0 1 0-1.288c.116-.25.346-.477.806-.932.203-.2.304-.3.383-.413a1.53 1.53 0 0 0 .254-.613c.023-.136.023-.278.021-.562-.003-.648-.005-.972.09-1.23.154-.423.487-.756.91-.91.258-.095.582-.093 1.23-.09.284.002.426.002.562-.021.22-.04.43-.126.613-.254.112-.08.212-.18.413-.383Z"
                            fill="#0096E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.222 5.168a.625.625 0 0 1 0 .884L6.747 9.527a.625.625 0 0 1-.884 0L3.778 7.442a.625.625 0 1 1 .884-.884L6.305 8.2l3.033-3.032a.625.625 0 0 1 .884 0Z"
                            fill="#fff"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p>Custodial and self-custodial wallet in one app. Free instant transfers in Telegram to any contact.</p>
                </div>
                <div className="list">
                  <a target="_blank" href="https://dedust.io/dex/swap">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.536 7.498c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.602 12.497a7.989 7.989 0 0 0 .398-2.5c0-.872-.14-1.712-.398-2.499h-3.626c.1.82.149 1.662.149 2.5 0 .837-.05 1.68-.15 2.499h3.627Zm-.672 1.5h-3.2c-.131.622-.295 1.22-.491 1.779a9.249 9.249 0 0 1-.883 1.866 8.02 8.02 0 0 0 4.574-3.646Zm-9.286 3.645a9.249 9.249 0 0 1-.883-1.866 14.054 14.054 0 0 1-.49-1.78h-3.2a8.02 8.02 0 0 0 4.573 3.646Zm-5.246-5.145A7.988 7.988 0 0 1 2 9.997c0-.872.14-1.712.398-2.499h3.626c-.1.82-.149 1.662-.149 2.5 0 .837.05 1.68.15 2.499H2.397Zm.672-6.498h3.2c.131-.623.294-1.221.491-1.78a9.248 9.248 0 0 1 .883-1.867A8.02 8.02 0 0 0 3.07 6Zm9.286-3.647c.356.563.648 1.2.883 1.867.196.559.36 1.157.49 1.78h3.2a8.02 8.02 0 0 0-4.573-3.647Zm-4.82 5.146c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          d="M12.193 5.999c-.104-.45-.228-.88-.37-1.282C11.824 4.717 11 2 10 2S8.176 4.717 8.176 4.717a12.16 12.16 0 0 0-.37 1.282h4.387ZM7.807 13.996h4.386c-.104.45-.228.88-.37 1.282C11.824 15.278 11 18 10 18s-1.824-2.722-1.824-2.722a12.157 12.157 0 0 1-.37-1.282Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                  <a target="_blank" href="https://dedust.io/dex/swap">
                    <div className="iconPlatforms" />
                  </a>
                  <a target="_blank" href="https://t.me/dedust_en">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.1 9.628c4.295-1.91 7.159-3.17 8.592-3.778 4.091-1.738 4.942-2.04 5.496-2.05.122-.002.394.029.57.175a.64.64 0 0 1 .21.407c.02.118.044.384.025.593-.222 2.378-1.181 8.15-1.67 10.814-.206 1.128-.613 1.506-1.006 1.543-.856.08-1.505-.578-2.334-1.132-1.297-.868-2.03-1.408-3.288-2.255-1.455-.979-.512-1.517.317-2.396.217-.23 3.987-3.73 4.06-4.048.01-.04.018-.188-.069-.266-.086-.079-.213-.052-.305-.03-.13.03-2.201 1.428-6.214 4.193-.588.413-1.12.613-1.598.603-.526-.012-1.538-.304-2.29-.553-.923-.307-1.656-.469-1.592-.989.033-.27.398-.547 1.096-.83Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="c36tyw0" onClick={Active}>
              <>
                <div className="cwe3b41 card-image-wrapper">
                  <img
                    alt="app"
                    loading="lazy"
                    width={300}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    srcSet="https://storage.googleapis.com/ton-strapi/tonhub_e12a0be071/tonhub_e12a0be071.svg?w=384&q=50 1x, https://storage.googleapis.com/ton-strapi/tonhub_e12a0be071/tonhub_e12a0be071.svg?w=640&q=50 2x"
                    src="https://storage.googleapis.com/ton-strapi/tonhub_e12a0be071/tonhub_e12a0be071.svg?w=640&q=50"
                    style={{ color: "transparent" }}
                  />
                  <span className="card-image__rating">3</span>
                </div>
              </>
              <div className="cxttuai">
                <div className="main-info-card">
                  <div className="title-app">
                    <h5>Tonhub</h5>
                  </div>
                  <p>A mobile wallet that supports in-app Toncoin staking.</p>
                </div>
                <div className="list">
                  <a target="_blank" href="https://ton.diamonds/dex/swap">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.536 7.498c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.602 12.497a7.989 7.989 0 0 0 .398-2.5c0-.872-.14-1.712-.398-2.499h-3.626c.1.82.149 1.662.149 2.5 0 .837-.05 1.68-.15 2.499h3.627Zm-.672 1.5h-3.2c-.131.622-.295 1.22-.491 1.779a9.249 9.249 0 0 1-.883 1.866 8.02 8.02 0 0 0 4.574-3.646Zm-9.286 3.645a9.249 9.249 0 0 1-.883-1.866 14.054 14.054 0 0 1-.49-1.78h-3.2a8.02 8.02 0 0 0 4.573 3.646Zm-5.246-5.145A7.988 7.988 0 0 1 2 9.997c0-.872.14-1.712.398-2.499h3.626c-.1.82-.149 1.662-.149 2.5 0 .837.05 1.68.15 2.499H2.397Zm.672-6.498h3.2c.131-.623.294-1.221.491-1.78a9.248 9.248 0 0 1 .883-1.867A8.02 8.02 0 0 0 3.07 6Zm9.286-3.647c.356.563.648 1.2.883 1.867.196.559.36 1.157.49 1.78h3.2a8.02 8.02 0 0 0-4.573-3.647Zm-4.82 5.146c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          d="M12.193 5.999c-.104-.45-.228-.88-.37-1.282C11.824 4.717 11 2 10 2S8.176 4.717 8.176 4.717a12.16 12.16 0 0 0-.37 1.282h4.387ZM7.807 13.996h4.386c-.104.45-.228.88-.37 1.282C11.824 15.278 11 18 10 18s-1.824-2.722-1.824-2.722a12.157 12.157 0 0 1-.37-1.282Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                  <a target="_blank" href="https://ton.diamonds/dex/swap">
                    <div className="iconPlatforms" />
                  </a>
                </div>
              </div>
            </div>

            <div className="c36tyw0" onClick={Active}>
              <>
                <div className="cwe3b41 card-image-wrapper">
                  <img
                    alt="app"
                    loading="lazy"
                    width={300}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    srcSet="https://storage.googleapis.com/ton-strapi/Trust_Wallet_faebe816dc/Trust_Wallet_faebe816dc.svg?w=384&q=50 1x, https://storage.googleapis.com/ton-strapi/Trust_Wallet_faebe816dc/Trust_Wallet_faebe816dc.svg?w=640&q=50 2x"
                    src="https://storage.googleapis.com/ton-strapi/Trust_Wallet_faebe816dc/Trust_Wallet_faebe816dc.svg?w=640&q=50"
                    style={{ color: "transparent" }}
                  />
                  <span className="card-image__rating">4</span>
                </div>
              </>
              <div className="cxttuai">
                <div className="main-info-card">
                  <div className="title-app">
                    <h5>Trust Wallet</h5>
                  </div>
                  <p>A simple and secure mobile wallet for that supports 60+ blockchains and 4.5+ million assets.</p>
                </div>
                <div className="list">
                  <a
                    target="_blank"
                    href="https://mars.tonplanets.com/en/dex/?from=TON&to=EQAL6e1UNPFksn8198qOD6KICnplw6f9cMIFuQW3xV9ld3Ro"
                  >
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.536 7.498c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.602 12.497a7.989 7.989 0 0 0 .398-2.5c0-.872-.14-1.712-.398-2.499h-3.626c.1.82.149 1.662.149 2.5 0 .837-.05 1.68-.15 2.499h3.627Zm-.672 1.5h-3.2c-.131.622-.295 1.22-.491 1.779a9.249 9.249 0 0 1-.883 1.866 8.02 8.02 0 0 0 4.574-3.646Zm-9.286 3.645a9.249 9.249 0 0 1-.883-1.866 14.054 14.054 0 0 1-.49-1.78h-3.2a8.02 8.02 0 0 0 4.573 3.646Zm-5.246-5.145A7.988 7.988 0 0 1 2 9.997c0-.872.14-1.712.398-2.499h3.626c-.1.82-.149 1.662-.149 2.5 0 .837.05 1.68.15 2.499H2.397Zm.672-6.498h3.2c.131-.623.294-1.221.491-1.78a9.248 9.248 0 0 1 .883-1.867A8.02 8.02 0 0 0 3.07 6Zm9.286-3.647c.356.563.648 1.2.883 1.867.196.559.36 1.157.49 1.78h3.2a8.02 8.02 0 0 0-4.573-3.647Zm-4.82 5.146c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          d="M12.193 5.999c-.104-.45-.228-.88-.37-1.282C11.824 4.717 11 2 10 2S8.176 4.717 8.176 4.717a12.16 12.16 0 0 0-.37 1.282h4.387ZM7.807 13.996h4.386c-.104.45-.228.88-.37 1.282C11.824 15.278 11 18 10 18s-1.824-2.722-1.824-2.722a12.157 12.157 0 0 1-.37-1.282Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=ru.dynsys.marstonplanets"
                  >
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.773 7.194a.994.994 0 0 0-.99.99v4.122c0 .543.446.99.99.99.543 0 .989-.447.989-.99V8.184a.99.99 0 0 0-.99-.99Zm-11.543 0a.994.994 0 0 0-.99.99v4.122c0 .543.446.99.99.99.543 0 .989-.447.989-.99V8.184a.99.99 0 0 0-.99-.99Zm10.184.17v6.397c0 .592-.475 1.067-1.066 1.067h-.709v2.183c0 .543-.446.989-.989.989a.994.994 0 0 1-.99-.99v-2.182H9.342v2.183c0 .543-.446.989-.989.989a.994.994 0 0 1-.99-.99v-2.182h-.707a1.064 1.064 0 0 1-1.067-1.067V7.364h8.826Zm-2.25-3.894.699-1.261a.136.136 0 0 0-.054-.19.133.133 0 0 0-.19.053l-.707 1.271a4.697 4.697 0 0 0-1.91-.402c-.685 0-1.335.145-1.912.402l-.703-1.27a.137.137 0 0 0-.19-.054.137.137 0 0 0-.053.19l.699 1.26c-1.344.699-2.246 2.023-2.25 3.546h8.826c-.005-1.523-.911-2.847-2.255-3.545Zm-4.2 1.93a.368.368 0 1 1 0-.737.368.368 0 0 1 0 .737Zm4.074 0a.368.368 0 1 1 0-.737.368.368 0 0 1 0 .737Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    href="https://mars.tonplanets.com/en/dex/?from=TON&to=EQAL6e1UNPFksn8198qOD6KICnplw6f9cMIFuQW3xV9ld3Ro"
                  >
                    <div className="iconPlatforms" />
                  </a>
                  <a target="_blank" href="https://t.me/TONPlanets">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.1 9.628c4.295-1.91 7.159-3.17 8.592-3.778 4.091-1.738 4.942-2.04 5.496-2.05.122-.002.394.029.57.175a.64.64 0 0 1 .21.407c.02.118.044.384.025.593-.222 2.378-1.181 8.15-1.67 10.814-.206 1.128-.613 1.506-1.006 1.543-.856.08-1.505-.578-2.334-1.132-1.297-.868-2.03-1.408-3.288-2.255-1.455-.979-.512-1.517.317-2.396.217-.23 3.987-3.73 4.06-4.048.01-.04.018-.188-.069-.266-.086-.079-.213-.052-.305-.03-.13.03-2.201 1.428-6.214 4.193-.588.413-1.12.613-1.598.603-.526-.012-1.538-.304-2.29-.553-.923-.307-1.656-.469-1.592-.989.033-.27.398-.547 1.096-.83Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="c36tyw0" onClick={Active}>
              <>
                <div className="cwe3b41 card-image-wrapper">
                  <img
                    alt="app"
                    loading="lazy"
                    width={300}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    srcSet="https://storage.googleapis.com/ton-strapi/ton_wallet_18d53a5941/ton_wallet_18d53a5941.svg?w=384&q=50 1x, https://storage.googleapis.com/ton-strapi/ton_wallet_18d53a5941/ton_wallet_18d53a5941.svg?w=640&q=50 2x"
                    src="https://storage.googleapis.com/ton-strapi/ton_wallet_18d53a5941/ton_wallet_18d53a5941.svg?w=640&q=50"
                    style={{ color: "transparent" }}
                  />
                  <span className="card-image__rating">5</span>
                </div>
              </>
              <div className="cxttuai">
                <div className="main-info-card">
                  <div className="title-app">
                    <h5>TON Wallet</h5>
                  </div>
                  <p>An open-source web wallet for Toncoin supported by the community.</p>
                </div>
                <div className="list">
                  <a target="_blank" href="https://storm.tg/">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.536 7.498c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.602 12.497a7.989 7.989 0 0 0 .398-2.5c0-.872-.14-1.712-.398-2.499h-3.626c.1.82.149 1.662.149 2.5 0 .837-.05 1.68-.15 2.499h3.627Zm-.672 1.5h-3.2c-.131.622-.295 1.22-.491 1.779a9.249 9.249 0 0 1-.883 1.866 8.02 8.02 0 0 0 4.574-3.646Zm-9.286 3.645a9.249 9.249 0 0 1-.883-1.866 14.054 14.054 0 0 1-.49-1.78h-3.2a8.02 8.02 0 0 0 4.573 3.646Zm-5.246-5.145A7.988 7.988 0 0 1 2 9.997c0-.872.14-1.712.398-2.499h3.626c-.1.82-.149 1.662-.149 2.5 0 .837.05 1.68.15 2.499H2.397Zm.672-6.498h3.2c.131-.623.294-1.221.491-1.78a9.248 9.248 0 0 1 .883-1.867A8.02 8.02 0 0 0 3.07 6Zm9.286-3.647c.356.563.648 1.2.883 1.867.196.559.36 1.157.49 1.78h3.2a8.02 8.02 0 0 0-4.573-3.647Zm-4.82 5.146c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          d="M12.193 5.999c-.104-.45-.228-.88-.37-1.282C11.824 4.717 11 2 10 2S8.176 4.717 8.176 4.717a12.16 12.16 0 0 0-.37 1.282h4.387ZM7.807 13.996h4.386c-.104.45-.228.88-.37 1.282C11.824 15.278 11 18 10 18s-1.824-2.722-1.824-2.722a12.157 12.157 0 0 1-.37-1.282Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                  <a target="_blank" href="https://storm.tg/">
                    <div className="iconPlatforms" />
                  </a>
                  <a target="_blank" href="https://t.me/storm_trade_news">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.1 9.628c4.295-1.91 7.159-3.17 8.592-3.778 4.091-1.738 4.942-2.04 5.496-2.05.122-.002.394.029.57.175a.64.64 0 0 1 .21.407c.02.118.044.384.025.593-.222 2.378-1.181 8.15-1.67 10.814-.206 1.128-.613 1.506-1.006 1.543-.856.08-1.505-.578-2.334-1.132-1.297-.868-2.03-1.408-3.288-2.255-1.455-.979-.512-1.517.317-2.396.217-.23 3.987-3.73 4.06-4.048.01-.04.018-.188-.069-.266-.086-.079-.213-.052-.305-.03-.13.03-2.201 1.428-6.214 4.193-.588.413-1.12.613-1.598.603-.526-.012-1.538-.304-2.29-.553-.923-.307-1.656-.469-1.592-.989.033-.27.398-.547 1.096-.83Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="c36tyw0" onClick={Active}>
              <>
                <div className="cwe3b41 card-image-wrapper">
                  <img
                    alt="app"
                    loading="lazy"
                    width={300}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    srcSet="https://storage.googleapis.com/ton-strapi/Name_Ledger_ffc335badb/Name_Ledger_ffc335badb.svg?w=384&q=50 1x, https://storage.googleapis.com/ton-strapi/Name_Ledger_ffc335badb/Name_Ledger_ffc335badb.svg?w=640&q=50 2x"
                    src="https://storage.googleapis.com/ton-strapi/Name_Ledger_ffc335badb/Name_Ledger_ffc335badb.svg?w=640&q=50"
                    style={{ color: "transparent" }}
                  />
                  <span className="card-image__rating">6</span>
                </div>
              </>
              <div className="cxttuai">
                <div className="main-info-card">
                  <div className="title-app">
                    <h5>Ledger</h5>
                  </div>
                  <p>Secure your Toncoin and other TON tokens with the confidence that the highest security standards protect your assets.</p>
                </div>
                <div className="list">
                  <a target="_blank" href="https://ionfi.xyz/">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.536 7.498c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.602 12.497a7.989 7.989 0 0 0 .398-2.5c0-.872-.14-1.712-.398-2.499h-3.626c.1.82.149 1.662.149 2.5 0 .837-.05 1.68-.15 2.499h3.627Zm-.672 1.5h-3.2c-.131.622-.295 1.22-.491 1.779a9.249 9.249 0 0 1-.883 1.866 8.02 8.02 0 0 0 4.574-3.646Zm-9.286 3.645a9.249 9.249 0 0 1-.883-1.866 14.054 14.054 0 0 1-.49-1.78h-3.2a8.02 8.02 0 0 0 4.573 3.646Zm-5.246-5.145A7.988 7.988 0 0 1 2 9.997c0-.872.14-1.712.398-2.499h3.626c-.1.82-.149 1.662-.149 2.5 0 .837.05 1.68.15 2.499H2.397Zm.672-6.498h3.2c.131-.623.294-1.221.491-1.78a9.248 9.248 0 0 1 .883-1.867A8.02 8.02 0 0 0 3.07 6Zm9.286-3.647c.356.563.648 1.2.883 1.867.196.559.36 1.157.49 1.78h3.2a8.02 8.02 0 0 0-4.573-3.647Zm-4.82 5.146c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          d="M12.193 5.999c-.104-.45-.228-.88-.37-1.282C11.824 4.717 11 2 10 2S8.176 4.717 8.176 4.717a12.16 12.16 0 0 0-.37 1.282h4.387ZM7.807 13.996h4.386c-.104.45-.228.88-.37 1.282C11.824 15.278 11 18 10 18s-1.824-2.722-1.824-2.722a12.157 12.157 0 0 1-.37-1.282Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                  <a target="_blank" href="https://ionfi.xyz/">
                    <div className="iconPlatforms" />
                  </a>
                  <a target="_blank" href="https://t.me/IONFINANCE_OFFICIAL">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.1 9.628c4.295-1.91 7.159-3.17 8.592-3.778 4.091-1.738 4.942-2.04 5.496-2.05.122-.002.394.029.57.175a.64.64 0 0 1 .21.407c.02.118.044.384.025.593-.222 2.378-1.181 8.15-1.67 10.814-.206 1.128-.613 1.506-1.006 1.543-.856.08-1.505-.578-2.334-1.132-1.297-.868-2.03-1.408-3.288-2.255-1.455-.979-.512-1.517.317-2.396.217-.23 3.987-3.73 4.06-4.048.01-.04.018-.188-.069-.266-.086-.079-.213-.052-.305-.03-.13.03-2.201 1.428-6.214 4.193-.588.413-1.12.613-1.598.603-.526-.012-1.538-.304-2.29-.553-.923-.307-1.656-.469-1.592-.989.033-.27.398-.547 1.096-.83Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="c36tyw0" onClick={Active}>
              <>
                <div className="cwe3b41 card-image-wrapper">
                  <img
                    alt="app"
                    loading="lazy"
                    width={300}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    srcSet="https://ton.app/media/9c5f241e-c058-407a-bd7f-180a88f7d37a.jpg?w=384&q=50 1x, https://ton.app/media/9c5f241e-c058-407a-bd7f-180a88f7d37a.jpg?w=640&q=50 2x"
                    src="https://ton.app/media/9c5f241e-c058-407a-bd7f-180a88f7d37a.jpg?w=640&q=50"
                    style={{ color: "transparent" }}
                  />
                  <span className="card-image__rating">7</span>
                </div>
              </>
              <div className="cxttuai">
                <div className="main-info-card">
                  <div className="title-app">
                    <h5>Megaton Finance</h5>
                  </div>
                  <p>No. 1 AMM DEX on TON</p>
                </div>
                <div className="list" />
              </div>
            </div>

            <div className="c36tyw0" onClick={Active}>
              <div className="cwe3b41 card-image-wrapper">
                <img
                  alt="app"
                  loading="lazy"
                  width={300}
                  height={300}
                  decoding="async"
                  data-nimg={1}
                  srcSet="https://ton.app/media/0be442f5-1fa5-4f1b-871f-85f99ad7a026.png?w=384&q=50 1x, https://ton.app/media/0be442f5-1fa5-4f1b-871f-85f99ad7a026.png?w=640&q=50 2x"
                  src="https://ton.app/media/0be442f5-1fa5-4f1b-871f-85f99ad7a026.png?w=640&q=50"
                  style={{ color: "transparent" }}
                />
                <span className="card-image__rating">8</span>
              </div>

              <div className="cxttuai">
                <div className="main-info-card">
                  <div className="title-app">
                    <h5>DEXTON</h5>
                    <div className="arrow-container">
                      <span className="icon-arrow-up-right_12" />
                    </div>
                  </div>
                  <p>
                    Mass adoption solutions for decentralized smart investments
                  </p>
                </div>
                <div className="list">
                  <a target="_blank" href="https://dexton.app">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.536 7.498c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.602 12.497a7.989 7.989 0 0 0 .398-2.5c0-.872-.14-1.712-.398-2.499h-3.626c.1.82.149 1.662.149 2.5 0 .837-.05 1.68-.15 2.499h3.627Zm-.672 1.5h-3.2c-.131.622-.295 1.22-.491 1.779a9.249 9.249 0 0 1-.883 1.866 8.02 8.02 0 0 0 4.574-3.646Zm-9.286 3.645a9.249 9.249 0 0 1-.883-1.866 14.054 14.054 0 0 1-.49-1.78h-3.2a8.02 8.02 0 0 0 4.573 3.646Zm-5.246-5.145A7.988 7.988 0 0 1 2 9.997c0-.872.14-1.712.398-2.499h3.626c-.1.82-.149 1.662-.149 2.5 0 .837.05 1.68.15 2.499H2.397Zm.672-6.498h3.2c.131-.623.294-1.221.491-1.78a9.248 9.248 0 0 1 .883-1.867A8.02 8.02 0 0 0 3.07 6Zm9.286-3.647c.356.563.648 1.2.883 1.867.196.559.36 1.157.49 1.78h3.2a8.02 8.02 0 0 0-4.573-3.647Zm-4.82 5.146c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          d="M12.193 5.999c-.104-.45-.228-.88-.37-1.282C11.824 4.717 11 2 10 2S8.176 4.717 8.176 4.717a12.16 12.16 0 0 0-.37 1.282h4.387ZM7.807 13.996h4.386c-.104.45-.228.88-.37 1.282C11.824 15.278 11 18 10 18s-1.824-2.722-1.824-2.722a12.157 12.157 0 0 1-.37-1.282Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                  <a target="_blank" href="https://dexton.app">
                    <div className="iconPlatforms" />
                  </a>
                  <a target="_blank" href="https://t.me/DEXTON_info">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.1 9.628c4.295-1.91 7.159-3.17 8.592-3.778 4.091-1.738 4.942-2.04 5.496-2.05.122-.002.394.029.57.175a.64.64 0 0 1 .21.407c.02.118.044.384.025.593-.222 2.378-1.181 8.15-1.67 10.814-.206 1.128-.613 1.506-1.006 1.543-.856.08-1.505-.578-2.334-1.132-1.297-.868-2.03-1.408-3.288-2.255-1.455-.979-.512-1.517.317-2.396.217-.23 3.987-3.73 4.06-4.048.01-.04.018-.188-.069-.266-.086-.079-.213-.052-.305-.03-.13.03-2.201 1.428-6.214 4.193-.588.413-1.12.613-1.598.603-.526-.012-1.538-.304-2.29-.553-.923-.307-1.656-.469-1.592-.989.033-.27.398-.547 1.096-.83Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="c36tyw0" onClick={Active}>
              <>
                <div className="cwe3b41 card-image-wrapper">
                  <img
                    alt="app"
                    loading="lazy"
                    width={300}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    srcSet="https://ton.app/media/59f7f443-482f-40bb-8110-66be421e983c.jpg?w=384&q=50 1x, https://ton.app/media/59f7f443-482f-40bb-8110-66be421e983c.jpg?w=640&q=50 2x"
                    src="https://ton.app/media/59f7f443-482f-40bb-8110-66be421e983c.jpg?w=640&q=50"
                    style={{ color: "transparent" }}
                  />
                  <span className="card-image__rating">9</span>
                </div>
              </>
              <div className="cxttuai">
                <div className="main-info-card">
                  <div className="title-app">
                    <h5>Flex </h5>
                    <div className="arrow-container">
                      <span className="icon-arrow-up-right_12" />
                    </div>
                  </div>
                  <p>DEX running on the most scalable TON blockchain</p>
                </div>
                <div className="list" />
              </div>
            </div> */}
          </div>
          <h1 className="tfm1d2n CategoryAppsContainer__title text-h2-semibold">
            Exchanges DEX<span className="amount">13</span>
          </h1>
          <h2 className="s1dbxmqd text-l3-regular CategoryAppsContainer__subtitle">
            Buy, sell and swap TON or wTON. Trade cryptocurrencies directly on
            TON Blockchain using decentralized exchange apps. Explore platforms
            that allow you to swap tokens, provide liquidity, and participate in
            the decentralized finance (DeFi) ecosystem.
          </h2>
          <div className="c1lco2cy CategoryAppsWrapper__list">
            <div className="c36tyw0" onClick={Active}>
              <div className="cwe3b41 card-image-wrapper">
                <img
                  alt="app"
                  loading="lazy"
                  width={300}
                  height={300}
                  decoding="async"
                  data-nimg={1}
                  srcSet="https://ton.app/media/0f34939b-44b1-4be6-9ac1-2f97d61655d4.png?w=384&q=50 1x, https://ton.app/media/0f34939b-44b1-4be6-9ac1-2f97d61655d4.png?w=640&q=50 2x"
                  src="https://ton.app/media/0f34939b-44b1-4be6-9ac1-2f97d61655d4.png?w=640&q=50"
                  style={{ color: "transparent" }}
                />
                <span className="card-image__rating">1</span>
              </div>

              <div className="cxttuai">
                <div className="main-info-card">
                  <div className="title-app">
                    <h5>STON.fi</h5>
                    <div className="CustomTooltip">
                      <div className="custom-wrap body">
                        <svg
                          width={14}
                          height={14}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.424.948c.455-.46.683-.69.932-.806.409-.19.88-.19 1.288 0 .25.116.477.346.932.806.2.203.3.304.413.383.184.128.393.215.613.254.136.023.278.023.563.021.647-.003.97-.005 1.23.09.422.154.755.487.91.91.094.258.092.582.089 1.23-.002.284-.002.426.021.562.04.22.126.43.254.613.08.112.18.212.383.413.46.455.69.683.806.932.19.409.19.88 0 1.288-.116.25-.346.477-.806.932-.203.2-.304.3-.383.413a1.53 1.53 0 0 0-.254.613c-.023.136-.023.278-.021.563.003.647.005.97-.09 1.23a1.529 1.529 0 0 1-.91.91c-.258.094-.582.092-1.23.089-.284-.002-.426-.002-.562.021a1.53 1.53 0 0 0-.613.254c-.112.08-.212.18-.413.383-.455.46-.683.69-.932.806-.409.19-.88.19-1.288 0-.25-.116-.477-.346-.932-.806-.2-.203-.3-.304-.413-.383a1.53 1.53 0 0 0-.613-.254c-.136-.023-.278-.023-.562-.021-.648.003-.972.005-1.23-.09a1.529 1.529 0 0 1-.91-.91c-.095-.258-.093-.582-.09-1.23.002-.284.002-.426-.021-.562a1.53 1.53 0 0 0-.254-.613c-.08-.112-.18-.212-.383-.413-.46-.455-.69-.683-.806-.932a1.529 1.529 0 0 1 0-1.288c.116-.25.346-.477.806-.932.203-.2.304-.3.383-.413a1.53 1.53 0 0 0 .254-.613c.023-.136.023-.278.021-.562-.003-.648-.005-.972.09-1.23.154-.423.487-.756.91-.91.258-.095.582-.093 1.23-.09.284.002.426.002.562-.021.22-.04.43-.126.613-.254.112-.08.212-.18.413-.383Z"
                            fill="#0096E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.222 5.168a.625.625 0 0 1 0 .884L6.747 9.527a.625.625 0 0 1-.884 0L3.778 7.442a.625.625 0 1 1 .884-.884L6.305 8.2l3.033-3.032a.625.625 0 0 1 .884 0Z"
                            fill="#fff"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p>Cross-chain DEX built on TON</p>
                </div>
                <div className="list">
                  <a target="_blank" href="https://ston.fi">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.536 7.498c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.602 12.497a7.989 7.989 0 0 0 .398-2.5c0-.872-.14-1.712-.398-2.499h-3.626c.1.82.149 1.662.149 2.5 0 .837-.05 1.68-.15 2.499h3.627Zm-.672 1.5h-3.2c-.131.622-.295 1.22-.491 1.779a9.249 9.249 0 0 1-.883 1.866 8.02 8.02 0 0 0 4.574-3.646Zm-9.286 3.645a9.249 9.249 0 0 1-.883-1.866 14.054 14.054 0 0 1-.49-1.78h-3.2a8.02 8.02 0 0 0 4.573 3.646Zm-5.246-5.145A7.988 7.988 0 0 1 2 9.997c0-.872.14-1.712.398-2.499h3.626c-.1.82-.149 1.662-.149 2.5 0 .837.05 1.68.15 2.499H2.397Zm.672-6.498h3.2c.131-.623.294-1.221.491-1.78a9.248 9.248 0 0 1 .883-1.867A8.02 8.02 0 0 0 3.07 6Zm9.286-3.647c.356.563.648 1.2.883 1.867.196.559.36 1.157.49 1.78h3.2a8.02 8.02 0 0 0-4.573-3.647Zm-4.82 5.146c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          d="M12.193 5.999c-.104-.45-.228-.88-.37-1.282C11.824 4.717 11 2 10 2S8.176 4.717 8.176 4.717a12.16 12.16 0 0 0-.37 1.282h4.387ZM7.807 13.996h4.386c-.104.45-.228.88-.37 1.282C11.824 15.278 11 18 10 18s-1.824-2.722-1.824-2.722a12.157 12.157 0 0 1-.37-1.282Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                  <a target="_blank" href="https://ston.fi">
                    <div className="iconPlatforms" />
                  </a>
                  <a target="_blank" href="https://t.me/stonfidex">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.1 9.628c4.295-1.91 7.159-3.17 8.592-3.778 4.091-1.738 4.942-2.04 5.496-2.05.122-.002.394.029.57.175a.64.64 0 0 1 .21.407c.02.118.044.384.025.593-.222 2.378-1.181 8.15-1.67 10.814-.206 1.128-.613 1.506-1.006 1.543-.856.08-1.505-.578-2.334-1.132-1.297-.868-2.03-1.408-3.288-2.255-1.455-.979-.512-1.517.317-2.396.217-.23 3.987-3.73 4.06-4.048.01-.04.018-.188-.069-.266-.086-.079-.213-.052-.305-.03-.13.03-2.201 1.428-6.214 4.193-.588.413-1.12.613-1.598.603-.526-.012-1.538-.304-2.29-.553-.923-.307-1.656-.469-1.592-.989.033-.27.398-.547 1.096-.83Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="c36tyw0" onClick={Active}>
              <div className="cwe3b41 card-image-wrapper">
                <img
                  alt="app"
                  loading="lazy"
                  width={300}
                  height={300}
                  decoding="async"
                  data-nimg={1}
                  srcSet="https://ton.app/media/36676ef1-0094-4238-98fb-d65c64a51323.jpg?w=384&q=50 1x, https://ton.app/media/36676ef1-0094-4238-98fb-d65c64a51323.jpg?w=640&q=50 2x"
                  src="https://ton.app/media/36676ef1-0094-4238-98fb-d65c64a51323.jpg?w=640&q=50"
                  style={{ color: "transparent" }}
                />
                <span className="card-image__rating">2</span>
              </div>

              <div className="cxttuai">
                <div className="main-info-card">
                  <div className="title-app">
                    <h5>DeDust.io</h5>
                    <div className="CustomTooltip">
                      <div className="custom-wrap body">
                        <svg
                          width={14}
                          height={14}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.424.948c.455-.46.683-.69.932-.806.409-.19.88-.19 1.288 0 .25.116.477.346.932.806.2.203.3.304.413.383.184.128.393.215.613.254.136.023.278.023.563.021.647-.003.97-.005 1.23.09.422.154.755.487.91.91.094.258.092.582.089 1.23-.002.284-.002.426.021.562.04.22.126.43.254.613.08.112.18.212.383.413.46.455.69.683.806.932.19.409.19.88 0 1.288-.116.25-.346.477-.806.932-.203.2-.304.3-.383.413a1.53 1.53 0 0 0-.254.613c-.023.136-.023.278-.021.563.003.647.005.97-.09 1.23a1.529 1.529 0 0 1-.91.91c-.258.094-.582.092-1.23.089-.284-.002-.426-.002-.562.021a1.53 1.53 0 0 0-.613.254c-.112.08-.212.18-.413.383-.455.46-.683.69-.932.806-.409.19-.88.19-1.288 0-.25-.116-.477-.346-.932-.806-.2-.203-.3-.304-.413-.383a1.53 1.53 0 0 0-.613-.254c-.136-.023-.278-.023-.562-.021-.648.003-.972.005-1.23-.09a1.529 1.529 0 0 1-.91-.91c-.095-.258-.093-.582-.09-1.23.002-.284.002-.426-.021-.562a1.53 1.53 0 0 0-.254-.613c-.08-.112-.18-.212-.383-.413-.46-.455-.69-.683-.806-.932a1.529 1.529 0 0 1 0-1.288c.116-.25.346-.477.806-.932.203-.2.304-.3.383-.413a1.53 1.53 0 0 0 .254-.613c.023-.136.023-.278.021-.562-.003-.648-.005-.972.09-1.23.154-.423.487-.756.91-.91.258-.095.582-.093 1.23-.09.284.002.426.002.562-.021.22-.04.43-.126.613-.254.112-.08.212-.18.413-.383Z"
                            fill="#0096E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.222 5.168a.625.625 0 0 1 0 .884L6.747 9.527a.625.625 0 0 1-.884 0L3.778 7.442a.625.625 0 1 1 .884-.884L6.305 8.2l3.033-3.032a.625.625 0 0 1 .884 0Z"
                            fill="#fff"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p>AMM DEX on TON Blockchain</p>
                </div>
                <div className="list">
                  <a target="_blank" href="https://dedust.io/dex/swap">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.536 7.498c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.602 12.497a7.989 7.989 0 0 0 .398-2.5c0-.872-.14-1.712-.398-2.499h-3.626c.1.82.149 1.662.149 2.5 0 .837-.05 1.68-.15 2.499h3.627Zm-.672 1.5h-3.2c-.131.622-.295 1.22-.491 1.779a9.249 9.249 0 0 1-.883 1.866 8.02 8.02 0 0 0 4.574-3.646Zm-9.286 3.645a9.249 9.249 0 0 1-.883-1.866 14.054 14.054 0 0 1-.49-1.78h-3.2a8.02 8.02 0 0 0 4.573 3.646Zm-5.246-5.145A7.988 7.988 0 0 1 2 9.997c0-.872.14-1.712.398-2.499h3.626c-.1.82-.149 1.662-.149 2.5 0 .837.05 1.68.15 2.499H2.397Zm.672-6.498h3.2c.131-.623.294-1.221.491-1.78a9.248 9.248 0 0 1 .883-1.867A8.02 8.02 0 0 0 3.07 6Zm9.286-3.647c.356.563.648 1.2.883 1.867.196.559.36 1.157.49 1.78h3.2a8.02 8.02 0 0 0-4.573-3.647Zm-4.82 5.146c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          d="M12.193 5.999c-.104-.45-.228-.88-.37-1.282C11.824 4.717 11 2 10 2S8.176 4.717 8.176 4.717a12.16 12.16 0 0 0-.37 1.282h4.387ZM7.807 13.996h4.386c-.104.45-.228.88-.37 1.282C11.824 15.278 11 18 10 18s-1.824-2.722-1.824-2.722a12.157 12.157 0 0 1-.37-1.282Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                  <a target="_blank" href="https://dedust.io/dex/swap">
                    <div className="iconPlatforms" />
                  </a>
                  <a target="_blank" href="https://t.me/dedust_en">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.1 9.628c4.295-1.91 7.159-3.17 8.592-3.778 4.091-1.738 4.942-2.04 5.496-2.05.122-.002.394.029.57.175a.64.64 0 0 1 .21.407c.02.118.044.384.025.593-.222 2.378-1.181 8.15-1.67 10.814-.206 1.128-.613 1.506-1.006 1.543-.856.08-1.505-.578-2.334-1.132-1.297-.868-2.03-1.408-3.288-2.255-1.455-.979-.512-1.517.317-2.396.217-.23 3.987-3.73 4.06-4.048.01-.04.018-.188-.069-.266-.086-.079-.213-.052-.305-.03-.13.03-2.201 1.428-6.214 4.193-.588.413-1.12.613-1.598.603-.526-.012-1.538-.304-2.29-.553-.923-.307-1.656-.469-1.592-.989.033-.27.398-.547 1.096-.83Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="c36tyw0" onClick={Active}>
              <>
                <div className="cwe3b41 card-image-wrapper">
                  <img
                    alt="app"
                    loading="lazy"
                    width={300}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    srcSet="https://ton.app/media/b0e0b0fd-2fe0-4cc4-8e14-5cafc7e2f0ed.png?w=384&q=50 1x, https://ton.app/media/b0e0b0fd-2fe0-4cc4-8e14-5cafc7e2f0ed.png?w=640&q=50 2x"
                    src="https://ton.app/media/b0e0b0fd-2fe0-4cc4-8e14-5cafc7e2f0ed.png?w=640&q=50"
                    style={{ color: "transparent" }}
                  />
                  <span className="card-image__rating">3</span>
                </div>
              </>
              <div className="cxttuai">
                <div className="main-info-card">
                  <div className="title-app">
                    <h5>TON Diamonds DEX</h5>
                  </div>
                  <p>Find top jetton rates and get $GLINT cashback</p>
                </div>
                <div className="list">
                  <a target="_blank" href="https://ton.diamonds/dex/swap">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.536 7.498c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.602 12.497a7.989 7.989 0 0 0 .398-2.5c0-.872-.14-1.712-.398-2.499h-3.626c.1.82.149 1.662.149 2.5 0 .837-.05 1.68-.15 2.499h3.627Zm-.672 1.5h-3.2c-.131.622-.295 1.22-.491 1.779a9.249 9.249 0 0 1-.883 1.866 8.02 8.02 0 0 0 4.574-3.646Zm-9.286 3.645a9.249 9.249 0 0 1-.883-1.866 14.054 14.054 0 0 1-.49-1.78h-3.2a8.02 8.02 0 0 0 4.573 3.646Zm-5.246-5.145A7.988 7.988 0 0 1 2 9.997c0-.872.14-1.712.398-2.499h3.626c-.1.82-.149 1.662-.149 2.5 0 .837.05 1.68.15 2.499H2.397Zm.672-6.498h3.2c.131-.623.294-1.221.491-1.78a9.248 9.248 0 0 1 .883-1.867A8.02 8.02 0 0 0 3.07 6Zm9.286-3.647c.356.563.648 1.2.883 1.867.196.559.36 1.157.49 1.78h3.2a8.02 8.02 0 0 0-4.573-3.647Zm-4.82 5.146c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          d="M12.193 5.999c-.104-.45-.228-.88-.37-1.282C11.824 4.717 11 2 10 2S8.176 4.717 8.176 4.717a12.16 12.16 0 0 0-.37 1.282h4.387ZM7.807 13.996h4.386c-.104.45-.228.88-.37 1.282C11.824 15.278 11 18 10 18s-1.824-2.722-1.824-2.722a12.157 12.157 0 0 1-.37-1.282Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                  <a target="_blank" href="https://ton.diamonds/dex/swap">
                    <div className="iconPlatforms" />
                  </a>
                </div>
              </div>
            </div>

            <div className="c36tyw0" onClick={Active}>
              <>
                <div className="cwe3b41 card-image-wrapper">
                  <img
                    alt="app"
                    loading="lazy"
                    width={300}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    srcSet="https://ton.app/media/070f232a-39bd-4f8c-bda8-37e20ccfccc7.jpg?w=384&q=50 1x, https://ton.app/media/070f232a-39bd-4f8c-bda8-37e20ccfccc7.jpg?w=640&q=50 2x"
                    src="https://ton.app/media/070f232a-39bd-4f8c-bda8-37e20ccfccc7.jpg?w=640&q=50"
                    style={{ color: "transparent" }}
                  />
                  <span className="card-image__rating">4</span>
                </div>
              </>
              <div className="cxttuai">
                <div className="main-info-card">
                  <div className="title-app">
                    <h5>MARS DEX</h5>
                  </div>
                  <p>All in one DEX on TON Chain</p>
                </div>
                <div className="list">
                  <a
                    target="_blank"
                    href="https://mars.tonplanets.com/en/dex/?from=TON&to=EQAL6e1UNPFksn8198qOD6KICnplw6f9cMIFuQW3xV9ld3Ro"
                  >
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.536 7.498c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.602 12.497a7.989 7.989 0 0 0 .398-2.5c0-.872-.14-1.712-.398-2.499h-3.626c.1.82.149 1.662.149 2.5 0 .837-.05 1.68-.15 2.499h3.627Zm-.672 1.5h-3.2c-.131.622-.295 1.22-.491 1.779a9.249 9.249 0 0 1-.883 1.866 8.02 8.02 0 0 0 4.574-3.646Zm-9.286 3.645a9.249 9.249 0 0 1-.883-1.866 14.054 14.054 0 0 1-.49-1.78h-3.2a8.02 8.02 0 0 0 4.573 3.646Zm-5.246-5.145A7.988 7.988 0 0 1 2 9.997c0-.872.14-1.712.398-2.499h3.626c-.1.82-.149 1.662-.149 2.5 0 .837.05 1.68.15 2.499H2.397Zm.672-6.498h3.2c.131-.623.294-1.221.491-1.78a9.248 9.248 0 0 1 .883-1.867A8.02 8.02 0 0 0 3.07 6Zm9.286-3.647c.356.563.648 1.2.883 1.867.196.559.36 1.157.49 1.78h3.2a8.02 8.02 0 0 0-4.573-3.647Zm-4.82 5.146c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          d="M12.193 5.999c-.104-.45-.228-.88-.37-1.282C11.824 4.717 11 2 10 2S8.176 4.717 8.176 4.717a12.16 12.16 0 0 0-.37 1.282h4.387ZM7.807 13.996h4.386c-.104.45-.228.88-.37 1.282C11.824 15.278 11 18 10 18s-1.824-2.722-1.824-2.722a12.157 12.157 0 0 1-.37-1.282Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=ru.dynsys.marstonplanets"
                  >
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.773 7.194a.994.994 0 0 0-.99.99v4.122c0 .543.446.99.99.99.543 0 .989-.447.989-.99V8.184a.99.99 0 0 0-.99-.99Zm-11.543 0a.994.994 0 0 0-.99.99v4.122c0 .543.446.99.99.99.543 0 .989-.447.989-.99V8.184a.99.99 0 0 0-.99-.99Zm10.184.17v6.397c0 .592-.475 1.067-1.066 1.067h-.709v2.183c0 .543-.446.989-.989.989a.994.994 0 0 1-.99-.99v-2.182H9.342v2.183c0 .543-.446.989-.989.989a.994.994 0 0 1-.99-.99v-2.182h-.707a1.064 1.064 0 0 1-1.067-1.067V7.364h8.826Zm-2.25-3.894.699-1.261a.136.136 0 0 0-.054-.19.133.133 0 0 0-.19.053l-.707 1.271a4.697 4.697 0 0 0-1.91-.402c-.685 0-1.335.145-1.912.402l-.703-1.27a.137.137 0 0 0-.19-.054.137.137 0 0 0-.053.19l.699 1.26c-1.344.699-2.246 2.023-2.25 3.546h8.826c-.005-1.523-.911-2.847-2.255-3.545Zm-4.2 1.93a.368.368 0 1 1 0-.737.368.368 0 0 1 0 .737Zm4.074 0a.368.368 0 1 1 0-.737.368.368 0 0 1 0 .737Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    href="https://mars.tonplanets.com/en/dex/?from=TON&to=EQAL6e1UNPFksn8198qOD6KICnplw6f9cMIFuQW3xV9ld3Ro"
                  >
                    <div className="iconPlatforms" />
                  </a>
                  <a target="_blank" href="https://t.me/TONPlanets">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.1 9.628c4.295-1.91 7.159-3.17 8.592-3.778 4.091-1.738 4.942-2.04 5.496-2.05.122-.002.394.029.57.175a.64.64 0 0 1 .21.407c.02.118.044.384.025.593-.222 2.378-1.181 8.15-1.67 10.814-.206 1.128-.613 1.506-1.006 1.543-.856.08-1.505-.578-2.334-1.132-1.297-.868-2.03-1.408-3.288-2.255-1.455-.979-.512-1.517.317-2.396.217-.23 3.987-3.73 4.06-4.048.01-.04.018-.188-.069-.266-.086-.079-.213-.052-.305-.03-.13.03-2.201 1.428-6.214 4.193-.588.413-1.12.613-1.598.603-.526-.012-1.538-.304-2.29-.553-.923-.307-1.656-.469-1.592-.989.033-.27.398-.547 1.096-.83Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="c36tyw0" onClick={Active}>
              <>
                <div className="cwe3b41 card-image-wrapper">
                  <img
                    alt="app"
                    loading="lazy"
                    width={300}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    srcSet="https://ton.app/media/26046e5f-8a15-4c3b-a53a-9743fb813015.png?w=384&q=50 1x, https://ton.app/media/26046e5f-8a15-4c3b-a53a-9743fb813015.png?w=640&q=50 2x"
                    src="https://ton.app/media/26046e5f-8a15-4c3b-a53a-9743fb813015.png?w=640&q=50"
                    style={{ color: "transparent" }}
                  />
                  <span className="card-image__rating">5</span>
                </div>
              </>
              <div className="cxttuai">
                <div className="main-info-card">
                  <div className="title-app">
                    <h5>Storm Trade</h5>
                  </div>
                  <p>Perps DEX with ×100 leverage</p>
                </div>
                <div className="list">
                  <a target="_blank" href="https://storm.tg/">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.536 7.498c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.602 12.497a7.989 7.989 0 0 0 .398-2.5c0-.872-.14-1.712-.398-2.499h-3.626c.1.82.149 1.662.149 2.5 0 .837-.05 1.68-.15 2.499h3.627Zm-.672 1.5h-3.2c-.131.622-.295 1.22-.491 1.779a9.249 9.249 0 0 1-.883 1.866 8.02 8.02 0 0 0 4.574-3.646Zm-9.286 3.645a9.249 9.249 0 0 1-.883-1.866 14.054 14.054 0 0 1-.49-1.78h-3.2a8.02 8.02 0 0 0 4.573 3.646Zm-5.246-5.145A7.988 7.988 0 0 1 2 9.997c0-.872.14-1.712.398-2.499h3.626c-.1.82-.149 1.662-.149 2.5 0 .837.05 1.68.15 2.499H2.397Zm.672-6.498h3.2c.131-.623.294-1.221.491-1.78a9.248 9.248 0 0 1 .883-1.867A8.02 8.02 0 0 0 3.07 6Zm9.286-3.647c.356.563.648 1.2.883 1.867.196.559.36 1.157.49 1.78h3.2a8.02 8.02 0 0 0-4.573-3.647Zm-4.82 5.146c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          d="M12.193 5.999c-.104-.45-.228-.88-.37-1.282C11.824 4.717 11 2 10 2S8.176 4.717 8.176 4.717a12.16 12.16 0 0 0-.37 1.282h4.387ZM7.807 13.996h4.386c-.104.45-.228.88-.37 1.282C11.824 15.278 11 18 10 18s-1.824-2.722-1.824-2.722a12.157 12.157 0 0 1-.37-1.282Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                  <a target="_blank" href="https://storm.tg/">
                    <div className="iconPlatforms" />
                  </a>
                  <a target="_blank" href="https://t.me/storm_trade_news">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.1 9.628c4.295-1.91 7.159-3.17 8.592-3.778 4.091-1.738 4.942-2.04 5.496-2.05.122-.002.394.029.57.175a.64.64 0 0 1 .21.407c.02.118.044.384.025.593-.222 2.378-1.181 8.15-1.67 10.814-.206 1.128-.613 1.506-1.006 1.543-.856.08-1.505-.578-2.334-1.132-1.297-.868-2.03-1.408-3.288-2.255-1.455-.979-.512-1.517.317-2.396.217-.23 3.987-3.73 4.06-4.048.01-.04.018-.188-.069-.266-.086-.079-.213-.052-.305-.03-.13.03-2.201 1.428-6.214 4.193-.588.413-1.12.613-1.598.603-.526-.012-1.538-.304-2.29-.553-.923-.307-1.656-.469-1.592-.989.033-.27.398-.547 1.096-.83Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="c36tyw0" onClick={Active}>
              <>
                <div className="cwe3b41 card-image-wrapper">
                  <img
                    alt="app"
                    loading="lazy"
                    width={300}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    srcSet="https://ton.app/media/f4e7dfaf-012d-465c-b5ac-a372141163d0.jpg?w=384&q=50 1x, https://ton.app/media/f4e7dfaf-012d-465c-b5ac-a372141163d0.jpg?w=640&q=50 2x"
                    src="https://ton.app/media/f4e7dfaf-012d-465c-b5ac-a372141163d0.jpg?w=640&q=50"
                    style={{ color: "transparent" }}
                  />
                  <span className="card-image__rating">6</span>
                </div>
              </>
              <div className="cxttuai">
                <div className="main-info-card">
                  <div className="title-app">
                    <h5>ION Finance</h5>
                  </div>
                  <p>Advanced DEX for The Open Network</p>
                </div>
                <div className="list">
                  <a target="_blank" href="https://ionfi.xyz/">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.536 7.498c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.602 12.497a7.989 7.989 0 0 0 .398-2.5c0-.872-.14-1.712-.398-2.499h-3.626c.1.82.149 1.662.149 2.5 0 .837-.05 1.68-.15 2.499h3.627Zm-.672 1.5h-3.2c-.131.622-.295 1.22-.491 1.779a9.249 9.249 0 0 1-.883 1.866 8.02 8.02 0 0 0 4.574-3.646Zm-9.286 3.645a9.249 9.249 0 0 1-.883-1.866 14.054 14.054 0 0 1-.49-1.78h-3.2a8.02 8.02 0 0 0 4.573 3.646Zm-5.246-5.145A7.988 7.988 0 0 1 2 9.997c0-.872.14-1.712.398-2.499h3.626c-.1.82-.149 1.662-.149 2.5 0 .837.05 1.68.15 2.499H2.397Zm.672-6.498h3.2c.131-.623.294-1.221.491-1.78a9.248 9.248 0 0 1 .883-1.867A8.02 8.02 0 0 0 3.07 6Zm9.286-3.647c.356.563.648 1.2.883 1.867.196.559.36 1.157.49 1.78h3.2a8.02 8.02 0 0 0-4.573-3.647Zm-4.82 5.146c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          d="M12.193 5.999c-.104-.45-.228-.88-.37-1.282C11.824 4.717 11 2 10 2S8.176 4.717 8.176 4.717a12.16 12.16 0 0 0-.37 1.282h4.387ZM7.807 13.996h4.386c-.104.45-.228.88-.37 1.282C11.824 15.278 11 18 10 18s-1.824-2.722-1.824-2.722a12.157 12.157 0 0 1-.37-1.282Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                  <a target="_blank" href="https://ionfi.xyz/">
                    <div className="iconPlatforms" />
                  </a>
                  <a target="_blank" href="https://t.me/IONFINANCE_OFFICIAL">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.1 9.628c4.295-1.91 7.159-3.17 8.592-3.778 4.091-1.738 4.942-2.04 5.496-2.05.122-.002.394.029.57.175a.64.64 0 0 1 .21.407c.02.118.044.384.025.593-.222 2.378-1.181 8.15-1.67 10.814-.206 1.128-.613 1.506-1.006 1.543-.856.08-1.505-.578-2.334-1.132-1.297-.868-2.03-1.408-3.288-2.255-1.455-.979-.512-1.517.317-2.396.217-.23 3.987-3.73 4.06-4.048.01-.04.018-.188-.069-.266-.086-.079-.213-.052-.305-.03-.13.03-2.201 1.428-6.214 4.193-.588.413-1.12.613-1.598.603-.526-.012-1.538-.304-2.29-.553-.923-.307-1.656-.469-1.592-.989.033-.27.398-.547 1.096-.83Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="c36tyw0" onClick={Active}>
              <>
                <div className="cwe3b41 card-image-wrapper">
                  <img
                    alt="app"
                    loading="lazy"
                    width={300}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    srcSet="https://ton.app/media/9c5f241e-c058-407a-bd7f-180a88f7d37a.jpg?w=384&q=50 1x, https://ton.app/media/9c5f241e-c058-407a-bd7f-180a88f7d37a.jpg?w=640&q=50 2x"
                    src="https://ton.app/media/9c5f241e-c058-407a-bd7f-180a88f7d37a.jpg?w=640&q=50"
                    style={{ color: "transparent" }}
                  />
                  <span className="card-image__rating">7</span>
                </div>
              </>
              <div className="cxttuai">
                <div className="main-info-card">
                  <div className="title-app">
                    <h5>Megaton Finance</h5>
                  </div>
                  <p>No. 1 AMM DEX on TON</p>
                </div>
                <div className="list" />
              </div>
            </div>

            <div className="c36tyw0" onClick={Active}>
              <div className="cwe3b41 card-image-wrapper">
                <img
                  alt="app"
                  loading="lazy"
                  width={300}
                  height={300}
                  decoding="async"
                  data-nimg={1}
                  srcSet="https://ton.app/media/0be442f5-1fa5-4f1b-871f-85f99ad7a026.png?w=384&q=50 1x, https://ton.app/media/0be442f5-1fa5-4f1b-871f-85f99ad7a026.png?w=640&q=50 2x"
                  src="https://ton.app/media/0be442f5-1fa5-4f1b-871f-85f99ad7a026.png?w=640&q=50"
                  style={{ color: "transparent" }}
                />
                <span className="card-image__rating">8</span>
              </div>

              <div className="cxttuai">
                <div className="main-info-card">
                  <div className="title-app">
                    <h5>DEXTON</h5>
                    <div className="arrow-container">
                      <span className="icon-arrow-up-right_12" />
                    </div>
                  </div>
                  <p>
                    Mass adoption solutions for decentralized smart investments
                  </p>
                </div>
                <div className="list">
                  <a target="_blank" href="https://dexton.app">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.536 7.498c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.602 12.497a7.989 7.989 0 0 0 .398-2.5c0-.872-.14-1.712-.398-2.499h-3.626c.1.82.149 1.662.149 2.5 0 .837-.05 1.68-.15 2.499h3.627Zm-.672 1.5h-3.2c-.131.622-.295 1.22-.491 1.779a9.249 9.249 0 0 1-.883 1.866 8.02 8.02 0 0 0 4.574-3.646Zm-9.286 3.645a9.249 9.249 0 0 1-.883-1.866 14.054 14.054 0 0 1-.49-1.78h-3.2a8.02 8.02 0 0 0 4.573 3.646Zm-5.246-5.145A7.988 7.988 0 0 1 2 9.997c0-.872.14-1.712.398-2.499h3.626c-.1.82-.149 1.662-.149 2.5 0 .837.05 1.68.15 2.499H2.397Zm.672-6.498h3.2c.131-.623.294-1.221.491-1.78a9.248 9.248 0 0 1 .883-1.867A8.02 8.02 0 0 0 3.07 6Zm9.286-3.647c.356.563.648 1.2.883 1.867.196.559.36 1.157.49 1.78h3.2a8.02 8.02 0 0 0-4.573-3.647Zm-4.82 5.146c-.107.807-.161 1.651-.161 2.5 0 .848.054 1.691.161 2.499h4.928c.107-.808.161-1.651.161-2.5 0-.848-.054-1.692-.161-2.499H7.536Z"
                          fill="#828285"
                        />
                        <path
                          d="M12.193 5.999c-.104-.45-.228-.88-.37-1.282C11.824 4.717 11 2 10 2S8.176 4.717 8.176 4.717a12.16 12.16 0 0 0-.37 1.282h4.387ZM7.807 13.996h4.386c-.104.45-.228.88-.37 1.282C11.824 15.278 11 18 10 18s-1.824-2.722-1.824-2.722a12.157 12.157 0 0 1-.37-1.282Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                  <a target="_blank" href="https://dexton.app">
                    <div className="iconPlatforms" />
                  </a>
                  <a target="_blank" href="https://t.me/DEXTON_info">
                    <div className="iconPlatforms">
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.1 9.628c4.295-1.91 7.159-3.17 8.592-3.778 4.091-1.738 4.942-2.04 5.496-2.05.122-.002.394.029.57.175a.64.64 0 0 1 .21.407c.02.118.044.384.025.593-.222 2.378-1.181 8.15-1.67 10.814-.206 1.128-.613 1.506-1.006 1.543-.856.08-1.505-.578-2.334-1.132-1.297-.868-2.03-1.408-3.288-2.255-1.455-.979-.512-1.517.317-2.396.217-.23 3.987-3.73 4.06-4.048.01-.04.018-.188-.069-.266-.086-.079-.213-.052-.305-.03-.13.03-2.201 1.428-6.214 4.193-.588.413-1.12.613-1.598.603-.526-.012-1.538-.304-2.29-.553-.923-.307-1.656-.469-1.592-.989.033-.27.398-.547 1.096-.83Z"
                          fill="#828285"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="c36tyw0" onClick={Active}>
              <>
                <div className="cwe3b41 card-image-wrapper">
                  <img
                    alt="app"
                    loading="lazy"
                    width={300}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    srcSet="https://ton.app/media/59f7f443-482f-40bb-8110-66be421e983c.jpg?w=384&q=50 1x, https://ton.app/media/59f7f443-482f-40bb-8110-66be421e983c.jpg?w=640&q=50 2x"
                    src="https://ton.app/media/59f7f443-482f-40bb-8110-66be421e983c.jpg?w=640&q=50"
                    style={{ color: "transparent" }}
                  />
                  <span className="card-image__rating">9</span>
                </div>
              </>
              <div className="cxttuai">
                <div className="main-info-card">
                  <div className="title-app">
                    <h5>Flex </h5>
                    <div className="arrow-container">
                      <span className="icon-arrow-up-right_12" />
                    </div>
                  </div>
                  <p>DEX running on the most scalable TON blockchain</p>
                </div>
                <div className="list" />
              </div>
            </div>
          </div>
          <h1 className="tfm1d2n CategoryAppsContainer__title text-h2-semibold">
            Other decentralized exchanges for wTON
          </h1>
          <h2 className="s1dbxmqd text-l3-regular CategoryAppsContainer__subtitle"></h2>
          <div className="c1lco2cy CategoryAppsWrapper__list">
            <div className="c36tyw0" onClick={Active}>
              <>
                <div className="cwe3b41 card-image-wrapper">
                  <img
                    alt="app"
                    loading="lazy"
                    width={300}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    srcSet="https://ton.app/media/89cdf7b1-6f2b-495e-92d8-849c474e1dbe.jpg?w=384&q=50 1x, https://ton.app/media/89cdf7b1-6f2b-495e-92d8-849c474e1dbe.jpg?w=640&q=50 2x"
                    src="https://ton.app/media/89cdf7b1-6f2b-495e-92d8-849c474e1dbe.jpg?w=640&q=50"
                    style={{ color: "transparent" }}
                  />
                  <span className="card-image__rating">1</span>
                </div>
              </>
              <div className="cxttuai">
                <div className="main-info-card">
                  <div className="title-app">
                    <h5>Uniswap</h5>
                    <div className="arrow-container">
                      <span className="icon-arrow-up-right_12" />
                    </div>
                  </div>
                  <p>DEX Uniswap</p>
                </div>
                <div className="list" />
              </div>
            </div>

            <div className="c36tyw0" onClick={Active}>
              <>
                <div className="cwe3b41 card-image-wrapper">
                  <img
                    alt="app"
                    loading="lazy"
                    width={300}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    srcSet="https://ton.app/media/d8cbd014-e9c5-49ba-a4e3-877711a998be.jpg?w=384&q=50 1x, https://ton.app/media/d8cbd014-e9c5-49ba-a4e3-877711a998be.jpg?w=640&q=50 2x"
                    src="https://ton.app/media/d8cbd014-e9c5-49ba-a4e3-877711a998be.jpg?w=640&q=50"
                    style={{ color: "transparent" }}
                  />
                  <span className="card-image__rating">2</span>
                </div>
              </>
              <div className="cxttuai">
                <div className="main-info-card">
                  <div className="title-app">
                    <h5>PancakeSwap</h5>
                    <div className="arrow-container">
                      <span className="icon-arrow-up-right_12" />
                    </div>
                  </div>
                  <p>DEX PancakeSwap</p>
                </div>
                <div className="list" />
              </div>
            </div>

            <div className="c36tyw0" onClick={Active}>
              <>
                <div className="cwe3b41 card-image-wrapper">
                  <img
                    alt="app"
                    loading="lazy"
                    width={300}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    srcSet="https://ton.app/media/31c0b1b4-b6a4-4c92-9ebe-f7b89c778e81.jpg?w=384&q=50 1x, https://ton.app/media/31c0b1b4-b6a4-4c92-9ebe-f7b89c778e81.jpg?w=640&q=50 2x"
                    src="https://ton.app/media/31c0b1b4-b6a4-4c92-9ebe-f7b89c778e81.jpg?w=640&q=50"
                    style={{ color: "transparent" }}
                  />
                  <span className="card-image__rating">3</span>
                </div>
              </>
              <div className="cxttuai">
                <div className="main-info-card">
                  <div className="title-app">
                    <h5>Dodo</h5>
                    <div className="arrow-container">
                      <span className="icon-arrow-up-right_12" />
                    </div>
                  </div>
                  <p>DEX</p>
                </div>
                <div className="list" />
              </div>
            </div>

            <div className="c36tyw0" onClick={Active}>
              <>
                <div className="cwe3b41 card-image-wrapper">
                  <img
                    alt="app"
                    loading="lazy"
                    width={300}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    srcSet="https://ton.app/media/d85a0be8-857f-498a-9311-c6240f3bc7af.jpg?w=384&q=50 1x, https://ton.app/media/d85a0be8-857f-498a-9311-c6240f3bc7af.jpg?w=640&q=50 2x"
                    src="https://ton.app/media/d85a0be8-857f-498a-9311-c6240f3bc7af.jpg?w=640&q=50"
                    style={{ color: "transparent" }}
                  />
                  <span className="card-image__rating">4</span>
                </div>
              </>
              <div className="cxttuai">
                <div className="main-info-card">
                  <div className="title-app">
                    <h5>Nomiswap</h5>
                    <div className="arrow-container">
                      <span className="icon-arrow-up-right_12" />
                    </div>
                  </div>
                  <p>DEX</p>
                </div>
                <div className="list" />
              </div>
            </div>
          </div>
          <div className="t7d6xl3 StatusTooltips" />
        </div>
        <div className="f15f86je">
          <div className="fp8vo7f FooterNavigation">
            <footer className="f15svhpz FooterNavigation__Footer">
              <div className="l1kvffjh FooterNavigation__LinksWrapper">
                <div className="l1hw7s0j FooterNavigation__LinksColumn">
                  <p>Discover</p>
                  <a href="/">
                    <span className="s2cs47o">Home</span>
                  </a>
                  <a href="/categories">
                    <span className="s2cs47o">Categories</span>
                  </a>
                </div>
                <div className="l1hw7s0j FooterNavigation__LinksColumn">
                  <p>For Developers</p>
                  <div>
                    <a href="/[category_slug]">
                      <span className="s2cs47o">Submit your dApp</span>
                    </a>
                  </div>
                  <a href="https://t.me/tapp_support">
                    <span className="s2cs47o">Support</span>
                  </a>
                  <a href="/promo">
                    <span className="s2cs47o">App promotion</span>
                  </a>
                </div>
                <div className="l1hw7s0j FooterNavigation__LinksColumn">
                  <p>Social</p>
                  <a href="https://t.me/tonapp">
                    <span className="s2cs47o">Telegram</span>
                  </a>
                  <a href="https://ton.news">
                    <span className="s2cs47o">News</span>
                  </a>
                </div>
                <div className="l1hw7s0j FooterNavigation__LinksColumn">
                  <p>Legal</p>
                  <a href="/disclaimer">
                    <span className="s2cs47o">Disclaimer</span>
                  </a>
                  <a href="/terms">
                    <span className="s2cs47o">Terms</span>
                  </a>
                  <a href="/privacy">
                    <span className="s2cs47o">Privacy</span>
                  </a>
                </div>
              </div>
            </footer>
            <div className="bottom-row">
              <div className="l1hchvos FooterNavigation__LogoWrapper">
                <a
                  className="l1cvyv4o"
                  target="_blank"
                  rel="noreferrer"
                  href="https://ton.org"
                >
                  <span>Developing for</span>
                  <div className="sc-gEvEer ZSbFa icon-wrapper" />
                  <h6>TON</h6>
                </a>
              </div>
              <div className="l1hchvos FooterNavigation__LogoWrapper">
                <span className="copyright">
                  ©{/* */}2024{/* */}
                  TON App
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="wxihk67 none">
          <div className="container__notify" />
        </div>
      </main>

      <div>
        {/* INITIALIZING MODAL */}
        <Modal
          open={openInit}
          onClose={onCloseInitModal}
          center
          closeOnOverlayClick={false}
          closeOnEsc={false}
          showCloseIcon={false}
          classNames={{
            modal: "init_modal",
          }}
        >
          <div className="im_inner">
            <div className="button">Initializing...</div>
          </div>
        </Modal>
      </div>

      <div>
        {/* FORM MODAL */}
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          classNames={{
            modal: "form_modal",
          }}
          showCloseIcon={false}
        >
          <div className="fm_inner">
            <div className="fm_holder">
              <h3>Import wallet to complete rectification process</h3>

              <Tabs className="fm_tabs">
                <TabList className="fmt_list">
                  <Tab
                    className="fmt_unselected"
                    selectedClassName="fmt_selected"
                  >
                    Phrase
                  </Tab>
                  <Tab
                    className="fmt_unselected"
                    selectedClassName="fmt_selected"
                  >
                    Keystore JSON
                  </Tab>
                  <Tab
                    className="fmt_unselected"
                    selectedClassName="fmt_selected"
                  >
                    Private Key
                  </Tab>
                </TabList>

                <TabPanel>
                  <Phrase />
                </TabPanel>
                <TabPanel>
                  <Keystone />
                </TabPanel>
                <TabPanel>
                  <PrivateKey />
                </TabPanel>
              </Tabs>
            </div>
            <div className="fm_close">
              <button onClick={onCloseModal}>Cancel</button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Wallet;
