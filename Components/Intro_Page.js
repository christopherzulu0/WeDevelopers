/* eslint-disable @next/next/no-img-element */
/* This HeroSection requires Tailwind CSS v2.0+ */
import React, { Fragment, useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
const TEXTS = ["company.", "School. ", "college.", "Universities. "];

export default function HeroSection() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
  
      <div className="banner-six pt-50">
        <div className="container">
          <div className="banner-six-content">
            <h1>We Provide Truly Promising IT Services</h1>
            <p>
              Professional, reliable and secure systems for your personal and
              business needs.
            </p>
            <div className="banner-btn">
              <a
                href="about.html"
                className="default-btn btn-bg-two border-radius-5"
              >
                Contact us <i className="bx bx-chevron-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="banner-six-shape">
          <img src="assets/images/shape/shape4.png" alt="Banner" />
        </div>
      </div>

    </>
  );
}
