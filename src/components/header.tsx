"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="z-50 sticky top-0">
      {/* Figma Design: Rectangle 64 - Main Header Container */}
      <div className="bg-[#081528] max-w-screen" style={{ height: "123px" }}>
        {/* Top Bar with Gradient Background - Rectangle 197 */}
        <div
          className="relative w-full py-3 bg-gradient-to-r from-[#081528] via-[#081528] to-[#109afc]"
          style={{
            background: "linear-gradient(90deg, #081528 30.29%, #109afc 100%)",
          }}
        >
          <div className="max-w-screen-xl mx-auto flex items-center justify-end gap-6">
            {/* Left Side - Social Icons Group (Group 12711) */}
            <div className="flex items-center justify-end gap-3">
              {/* TikTok */}
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                style={{ width: "19px", height: "20px" }}
              >
                <Image
                  src="/icons/Social Icons-1.svg"
                  alt="TikTok"
                  width={19}
                  height={20}
                  className="w-full h-full"
                />
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                style={{ width: "20px", height: "20px" }}
              >
                <Image
                  src="/icons/Social Icons-5.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="w-full h-full"
                />
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                style={{ width: "20px", height: "20px" }}
              >
                <Image
                  src="/icons/Social Icons-4.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="w-full h-full"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                style={{ width: "20px", height: "20px" }}
              >
                <Image
                  src="/icons/Social Icons-3.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="w-full h-full"
                />
              </a>

              {/* Draugiem.lv */}
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                style={{ width: "24px", height: "24px" }}
              >
                <Image
                  src="/icons/draugiem-lv 2.svg"
                  alt="Draugiem.lv"
                  width={24}
                  height={24}
                  className="w-full h-full"
                />
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                style={{ width: "19px", height: "20px" }}
              >
                <Image
                  src="/icons/Social Icons-2.svg"
                  alt="YouTube"
                  width={19}
                  height={20}
                  className="w-full h-full"
                />
              </a>
            </div>

            {/* Right Side - Phone Number Group (Group 12710) */}
            <div className="flex items-end justify-end space-x-2">
              {/* Phone Icon */}
              <Image
                src="/icons/vuesax/bold/call-calling.svg"
                alt="Phone"
                width={22}
                height={22}
                className="w-[22px] h-[22px]"
              />

              {/* Phone Number */}
              <span
                className="text-white font-nunito text-base"
                style={{
                  letterSpacing: "0",
                  fontFamily:
                    '"Nunito Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif',
                  fontSize: "16px",
                }}
              >
                +371 22 330 002
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center py-2 max-w-screen-xl mx-auto">
          <Link href="/" className="z-50">
            <Image
              src="/logo.svg"
              alt="Reāls Piedzīvojums Logo"
              width={186}
              height={77}
              className="w-[186px] h-full z-10 -mt-8"
            />
          </Link>

          {/* Main Navigation Section - Auto Wrapper 2 */}
          <div className="flex pt-2.5 items-center justify-stretch gap-5">
            {/* Navigation Menu - Group 12715 */}
            <div className="flex items-center justify-around gap-10">
              <a
                href="#"
                className="text-white text-center uppercase font-medium hover:opacity-80 transition-opacity"
                style={{
                  fontFamily:
                    '"Nunito Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif',
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                Kolektīviem
              </a>

              <a
                href="#"
                className="text-white text-center uppercase font-medium hover:opacity-80 transition-opacity"
                style={{
                  fontFamily:
                    '"Nunito Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif',
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                Skolām
              </a>

              <a
                href="#"
                className="text-white text-center uppercase font-medium hover:opacity-80 transition-opacity"
                style={{
                  fontFamily:
                    '"Nunito Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif',
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                Ģimenēm
              </a>

              <a
                href="#"
                className="text-white text-center uppercase font-medium hover:opacity-80 transition-opacity"
                style={{
                  fontFamily:
                    '"Nunito Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif',
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                galerija
              </a>

              <a
                href="#"
                className="text-white text-center uppercase font-medium hover:opacity-80 transition-opacity"
                style={{
                  fontFamily:
                    '"Nunito Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif',
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                par mums
              </a>

              <a
                href="#"
                className="text-white uppercase font-medium hover:opacity-80 transition-opacity"
                style={{
                  fontFamily:
                    '"Nunito Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif',
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                BEZMAKSAS
              </a>
            </div>

            {/* WhatsApp Button - Group 12712 */}
            <div
              className="flex items-start justify-between gap-3 rounded-[5px] bg-[#25d366] hover:bg-[#20c55a] transition-colors cursor-pointer"
              style={{
                padding: "7px 21px 7px 21px",
              }}
            >
              <span
                className="text-white uppercase font-medium mt-[5px]"
                style={{
                  lineHeight: "17px",
                  letterSpacing: "0.45px",
                  fontFamily:
                    '"Nunito Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif',
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                sazināties
              </span>

              <Image
                src="/icons/Social Icons.svg"
                alt="WhatsApp"
                width={28}
                height={25}
                className="w-[28px] h-[25px]"
              />
            </div>

            {/* Language Selector - Group 12574 */}
            <div
              className="relative"
              style={{ width: "32px", height: "32px" }}
            >
              <div
                className="absolute border border-[#28e7c5] rounded-[5px]"
                style={{
                  width: "32px",
                  height: "32px",
                }}
              />
              <div
                className="flex items-center justify-center text-white uppercase font-medium"
                style={{
                  top: "1px",
                  left: "0",
                  width: "32px",
                  height: "31px",
                  lineHeight: "14px",
                  letterSpacing: "0",
                  fontFamily:
                    '"Nunito Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif',
                  fontSize: "13px",
                  fontWeight: "500",
                }}
              >
                LV
              </div>
            </div>

            {/* Additional Icon - Group 1000001851 */}
            <div
              className=""
              style={{ width: "32px", height: "32px" }}
            >
              <Image
                src="/icons/Group 1000001851.svg"
                alt="Additional Icon"
                style={{width: "32px"}}
                width={32}
                height={32}
                className="size-[32px]"
              />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white hover:text-[#0BC8E5] transition-colors ml-4"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Logo positioned absolutely - Layer 1 */}
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#081528] border-t border-[#109afc]/30">
          <nav className="px-8 py-6">
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-white uppercase font-medium hover:opacity-80 transition-opacity text-lg"
                style={{
                  fontFamily:
                    '"Nunito Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif',
                  fontWeight: "500",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Kolektīviem
              </a>
              <a
                href="#"
                className="text-white uppercase font-medium hover:opacity-80 transition-opacity text-lg"
                style={{
                  fontFamily:
                    '"Nunito Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif',
                  fontWeight: "500",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Skolām
              </a>
              <a
                href="#"
                className="text-white uppercase font-medium hover:opacity-80 transition-opacity text-lg"
                style={{
                  fontFamily:
                    '"Nunito Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif',
                  fontWeight: "500",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Ģimenēm
              </a>
              <a
                href="#"
                className="text-white uppercase font-medium hover:opacity-80 transition-opacity text-lg"
                style={{
                  fontFamily:
                    '"Nunito Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif',
                  fontWeight: "500",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                galerija
              </a>
              <a
                href="#"
                className="text-white uppercase font-medium hover:opacity-80 transition-opacity text-lg"
                style={{
                  fontFamily:
                    '"Nunito Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif',
                  fontWeight: "500",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                par mums
              </a>
              <a
                href="#"
                className="text-white uppercase font-medium hover:opacity-80 transition-opacity text-lg"
                style={{
                  fontFamily:
                    '"Nunito Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif',
                  fontWeight: "500",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                BEZMAKSAS
              </a>

              {/* Mobile WhatsApp Button */}
              <div
                className="flex items-center justify-center mt-4 rounded-[5px] bg-[#25d366] hover:bg-[#20c55a] transition-colors cursor-pointer w-fit"
                style={{ padding: "10px 20px" }}
              >
                <span
                  className="text-white uppercase font-medium mr-2"
                  style={{
                    fontFamily:
                      '"Nunito Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif',
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  sazināties
                </span>
                <Image
                  src="/icons/whatsapp.svg"
                  alt="WhatsApp"
                  width={24}
                  height={22}
                  className="w-[24px] h-[22px]"
                />
              </div>

              {/* Mobile Phone Number */}
              <div className="flex items-center mt-4">
                <Image
                  src="/figma-images/memm2mzi-kyxl3fx.svg"
                  alt="Phone"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px] mr-2"
                />
                <span
                  className="text-white"
                  style={{
                    fontFamily:
                      '"Nunito Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif',
                    fontSize: "16px",
                  }}
                >
                  +371 22 330 002
                </span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
