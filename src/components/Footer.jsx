import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components/index";

function Footer() {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <section className="relative  mt-8 overflow-hidden px-6 py-10 bg-black border border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  &copy; Copyright {year}. All Rights Reserved by{" "}
                  <span>
                    <Link
                      to="https://github.com/meet2aman"
                      className="text-gray-500 text-md font-semibold underline hover:text-sky-500"
                    >
                      Aman.
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-300">
                Company
              </h3>
              <ul className="!text-gray-500">
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-500 hover:text-gray-600"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-500 hover:text-gray-600"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-500 hover:text-gray-600"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-500 hover:text-gray-600"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-300">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-500 hover:text-gray-600"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-500 hover:text-gray-600"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-500 hover:text-gray-600"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-500 hover:text-gray-600"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-300">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-500 hover:text-gray-600"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-500 hover:text-gray-600"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-500 hover:text-gray-600"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
