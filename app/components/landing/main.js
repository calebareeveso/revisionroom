"use client";
import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import Footer from "./footer";
import Nav from "./nav";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

// hooks
import useWindowSize from "../../../hooks/usewndowsize";

// import gsap
import { gsap } from "gsap";

// import ScrollTrigger
import { ScrollTrigger } from "gsap/ScrollTrigger";

// auth
import { useAuthContext } from "../../context/authContext";

// routing
import { useRouter } from "next/navigation";
// next link
import Link from "next/link";
export default function main() {
  // routing
  const router = useRouter();
  // handle auth
  const { user } = useAuthContext();
  useEffect(() => {
    console.log("USER log from feed", user);
    if (user !== null) router.push("/feed");
  }, [user]);
  const [windowHeight, windowWidth] = useWindowSize();

  // refs
  const boxRef = useRef();
  const moving_room_card = useRef();
  const rotating_share_icon = useRef();
  const rotating_share_icon_large = useRef();
  const embed_room = useRef();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(moving_room_card.current, {
      x: -200,
      ease: "Power0.easeNone",
      duration: 5,
      scrollTrigger: {
        trigger: moving_room_card.current,
        scrub: true,
      },
    });
    gsap.to(rotating_share_icon.current, {
      rotation: 45,
      ease: "Power0.easeNone",
      duration: 5,
      scrollTrigger: {
        trigger: rotating_share_icon.current,
        scrub: true,
      },
    });
    gsap.to(rotating_share_icon_large.current, {
      rotation: 45,
      ease: "Power0.easeNone",
      duration: 5,
      scrollTrigger: {
        trigger: rotating_share_icon_large.current,
        scrub: true,
      },
    });
    gsap.to(embed_room.current, {
      yPercent: -50,
      ease: "Power0.easeNone",
      duration: 5,
      scrollTrigger: {
        trigger: embed_room.current,
        scrub: true,
      },
    });
  });
  return (
    <main className="">
      <Nav />
      <>
        <section>
          <div className="max-w-7xl mx-auto px-4 md:px-0">
            <div className="container mx-auto lg:flex">
              <div className="w-full lg:w-4/6 flex items-center py-10 lg:h-screen">
                <div className="lg:pr-6 xl:-translate-y-10">
                  <h1 className="font-dm-sans sm:-mb-2">
                    {/* create  */}
                    <span className="inline-flex items-center space-x-1 ">
                      <span className="sm:text-4xl text-2xl   sm:mt-2 ">
                        Create
                      </span>
                      <span>
                        <svg
                          className="-translate-y-1 sm:translate-y-0 mt-2 ml-1 "
                          width={26}
                          height={19}
                          viewBox="0 0 26 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="h-80 w-40"
                            d="M10.187 18.85C12.412 18.15 11.9245 16.22 10.7995 15C9.68705 13.75 8.14955 12.89 6.59955 12.06C5.49361 11.5024 4.50616 10.8069 3.67455 10C3.32455 9.67 2.61205 9.06 3.33705 8.94C4.07455 8.82 5.34955 9.4 5.99955 9.62C7.13705 10 8.26205 10.44 9.31205 10.96L10.5745 9.26C8.62455 8.23 6.12455 7.32 3.79955 7.05C2.47455 6.89 1.07455 7.11 0.624547 8.26C0.224547 9.25 0.862047 10.25 1.58705 11.03C3.29955 12.86 5.96205 13.74 7.94955 15.32C8.37455 15.65 8.88705 16.04 9.13705 16.5C9.39955 16.94 9.33705 16.97 8.74955 16.97C7.19955 16.97 5.26205 16 3.99955 15.36L2.73705 17.06C4.64955 18 7.84955 19.47 10.187 18.85ZM21.6995 5.33L14.612 11H11.7495V8.71L18.837 3.03L21.6995 5.33ZM25.9495 4.55C25.937 4.85 25.5495 5.16 25.1495 5.47L21.9995 8L20.912 7.13L24.162 4.54L23.4245 3.95L22.587 4.62L19.7245 2.33L22.412 0.18C22.712 -0.06 23.1995 -0.06 23.487 0.18L25.2745 1.61C25.5745 1.83 25.5745 2.23 25.2745 2.47C25.012 2.68 24.762 2.88 24.762 3.08C24.737 3.28 24.987 3.5 25.237 3.67C25.5995 3.97 25.962 4.25 25.9495 4.55Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </span>
                    {/* discuss  */}
                    <span className="inline-flex items-center space-x-1">
                      <span className="sm:text-4xl text-2xl   sm:mt-2 ">
                        , Discuss{" "}
                      </span>
                      <span>
                        <svg
                          className="-translate-y-1 sm:translate-y-0 mt-2 ml-1"
                          width={30}
                          height={28}
                          viewBox="0 0 30 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 4.15625C0 2.34312 1.47 0.875 3.28125 0.875H19.2188C21.0319 0.875 22.5 2.34312 22.5 4.15625V14.4687C22.5 15.339 22.1543 16.1736 21.5389 16.7889C20.9236 17.4043 20.089 17.75 19.2188 17.75H13.2394L8.41313 22.5744C8.03107 22.9562 7.54438 23.2163 7.01457 23.3216C6.48477 23.4269 5.93563 23.3728 5.43656 23.1661C4.93749 22.9595 4.5109 22.6094 4.21071 22.1604C3.91051 21.7113 3.75019 21.1833 3.75 20.6431V17.75H3.28125C2.41101 17.75 1.57641 17.4043 0.961056 16.7889C0.345702 16.1736 0 15.339 0 14.4687L0 4.15625ZM3.28125 3.6875C3.15693 3.6875 3.0377 3.73689 2.94979 3.82479C2.86189 3.9127 2.8125 4.03193 2.8125 4.15625V14.4687C2.8125 14.7275 3.0225 14.9375 3.28125 14.9375H5.15625C5.52921 14.9375 5.8869 15.0857 6.15062 15.3494C6.41434 15.6131 6.5625 15.9708 6.5625 16.3437V20.4481L11.6625 15.35C11.7928 15.2191 11.9476 15.1153 12.1182 15.0445C12.2887 14.9737 12.4716 14.9374 12.6562 14.9375H19.2188C19.3431 14.9375 19.4623 14.8881 19.5502 14.8002C19.6381 14.7123 19.6875 14.5931 19.6875 14.4687V4.15625C19.6875 4.03193 19.6381 3.9127 19.5502 3.82479C19.4623 3.73689 19.3431 3.6875 19.2188 3.6875H3.28125ZM26.7188 7.4375H25.7812C25.4083 7.4375 25.0506 7.28934 24.7869 7.02562C24.5232 6.76189 24.375 6.40421 24.375 6.03125C24.375 5.65829 24.5232 5.3006 24.7869 5.03688C25.0506 4.77316 25.4083 4.625 25.7812 4.625H26.7188C28.5319 4.625 30 6.09312 30 7.90625V18.2187C30 19.089 29.6543 19.9236 29.0389 20.5389C28.4236 21.1543 27.589 21.5 26.7188 21.5H26.25V24.3931C26.2498 24.9333 26.0895 25.4613 25.7893 25.9104C25.4891 26.3594 25.0625 26.7095 24.5634 26.9161C24.0644 27.1228 23.5152 27.1769 22.9854 27.0716C22.4556 26.9663 21.9689 26.7062 21.5869 26.3244L17.2875 22.025C17.157 21.8945 17.0535 21.7396 16.9829 21.5691C16.9122 21.3986 16.8759 21.2158 16.8759 21.0312C16.8759 20.8467 16.9122 20.6639 16.9829 20.4934C17.0535 20.3229 17.157 20.168 17.2875 20.0375C17.418 19.907 17.5729 19.8035 17.7434 19.7328C17.9139 19.6622 18.0967 19.6259 18.2812 19.6259C18.4658 19.6259 18.6486 19.6622 18.8191 19.7328C18.9896 19.8035 19.1445 19.907 19.275 20.0375L23.4375 24.1981V20.0937C23.4375 19.7208 23.5857 19.3631 23.8494 19.0994C24.1131 18.8357 24.4708 18.6875 24.8438 18.6875H26.7188C26.8431 18.6875 26.9623 18.6381 27.0502 18.5502C27.1381 18.4623 27.1875 18.3431 27.1875 18.2187V7.90625C27.1875 7.78193 27.1381 7.6627 27.0502 7.57479C26.9623 7.48688 26.8431 7.4375 26.7188 7.4375ZM16.4625 7.9625L10.8375 13.5875C10.7073 13.7186 10.5525 13.8226 10.3819 13.8936C10.2114 13.9646 10.0285 14.0011 9.84375 14.0011C9.65902 14.0011 9.47611 13.9646 9.30556 13.8936C9.13501 13.8226 8.98018 13.7186 8.85 13.5875L6.0375 10.775C5.907 10.6445 5.80348 10.4896 5.73285 10.3191C5.66223 10.1486 5.62588 9.96581 5.62588 9.78125C5.62588 9.59669 5.66223 9.41394 5.73285 9.24343C5.80348 9.07293 5.907 8.918 6.0375 8.7875C6.168 8.657 6.32293 8.55348 6.49344 8.48285C6.66394 8.41223 6.84669 8.37587 7.03125 8.37587C7.21581 8.37587 7.39856 8.41223 7.56906 8.48285C7.73957 8.55348 7.8945 8.657 8.025 8.7875L9.84375 10.6044L14.475 5.975C14.7386 5.71144 15.096 5.56337 15.4688 5.56337C15.8415 5.56337 16.1989 5.71144 16.4625 5.975C16.7261 6.23856 16.8741 6.59602 16.8741 6.96875C16.8741 7.34148 16.7261 7.69894 16.4625 7.9625Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <span className="sm:text-4xl text-2xl  mt-2">, </span>
                    </span>
                    {/* , brainstorm  */}
                    <br className="sm:block md:hidden" />
                    <span className="inline-flex items-center space-x-1">
                      <span className="sm:text-4xl text-2xl sm:mt-2 ">
                        <span className="px-1 hidden md:inline lg:hidden xl:inline"></span>
                        Brainstorm
                      </span>
                      <span>
                        <svg
                          className="-translate-y-1 sm:translate-y-0 mt-2 ml-1"
                          width={26}
                          height={19}
                          viewBox="0 0 26 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.375 16C2.87228 16 3.3492 16.158 3.70083 16.4393C4.05246 16.7206 4.25 17.1022 4.25 17.5C4.25 17.8978 4.05246 18.2794 3.70083 18.5607C3.3492 18.842 2.87228 19 2.375 19C1.87772 19 1.40081 18.842 1.04917 18.5607C0.697544 18.2794 0.5 17.8978 0.5 17.5C0.5 17.1022 0.697544 16.7206 1.04917 16.4393C1.40081 16.158 1.87772 16 2.375 16ZM8.625 13C9.4538 13 10.2487 13.2634 10.8347 13.7322C11.4208 14.2011 11.75 14.837 11.75 15.5C11.75 16.163 11.4208 16.7989 10.8347 17.2678C10.2487 17.7366 9.4538 18 8.625 18C7.7962 18 7.00134 17.7366 6.41529 17.2678C5.82924 16.7989 5.5 16.163 5.5 15.5C5.5 14.837 5.82924 14.2011 6.41529 13.7322C7.00134 13.2634 7.7962 13 8.625 13ZM16.125 12C14.6375 12 13.2875 11.5 12.375 10.65C11.4625 11.5 10.1125 12 8.625 12C6.175 12 4.1375 10.59 3.7125 8.74C2.7685 8.44794 1.95674 7.93464 1.38353 7.2673C0.810316 6.59997 0.502364 5.8097 0.5 5C0.5 3.93913 1.02678 2.92172 1.96447 2.17157C2.90215 1.42143 4.17392 1 5.5 1L6.4625 1.07C7.375 0.41 8.5625 0 9.875 0C11.3625 0 12.7125 0.5 13.625 1.35C14.5375 0.5 15.8875 0 17.375 0C19.825 0 21.8625 1.41 22.2875 3.26C23.2315 3.55206 24.0433 4.06536 24.6165 4.7327C25.1897 5.40003 25.4976 6.1903 25.5 7C25.5 8.06087 24.9732 9.07828 24.0355 9.82843C23.0979 10.5786 21.8261 11 20.5 11L19.5375 10.93C18.625 11.59 17.4375 12 16.125 12ZM5.5 3C4.83696 3 4.20107 3.21071 3.73223 3.58579C3.26339 3.96086 3 4.46957 3 5C3 5.53043 3.26339 6.03914 3.73223 6.41421C4.20107 6.78929 4.83696 7 5.5 7C5.9125 7 6.3 6.92 6.65 6.78C6.31133 7.1291 6.12672 7.5581 6.125 8C6.125 8.53043 6.38839 9.03914 6.85723 9.41421C7.32608 9.78929 7.96196 10 8.625 10C9.375 10 10.05 9.73 10.5 9.31L12.3375 7.63L14.25 9.34C14.725 9.74 15.3875 10 16.125 10C17.375 10 18.4125 9.26 18.625 8.3C19.05 8.73 19.7375 9 20.5 9C21.163 9 21.7989 8.78929 22.2678 8.41421C22.7366 8.03914 23 7.53043 23 7C23 6.46957 22.7366 5.96086 22.2678 5.58579C21.7989 5.21071 21.163 5 20.5 5C20.0875 5 19.7 5.08 19.35 5.22C19.6887 4.8709 19.8733 4.4419 19.875 4C19.875 3.46957 19.6116 2.96086 19.1428 2.58579C18.6739 2.21071 18.038 2 17.375 2C16.6375 2 15.975 2.26 15.5 2.66L13.5875 4.37L11.75 2.69C11.3 2.27 10.625 2 9.875 2C8.625 2 7.5875 2.74 7.375 3.7C6.95 3.27 6.2625 3 5.5 3ZM8.625 14.5C8.29348 14.5 7.97554 14.6054 7.74112 14.7929C7.5067 14.9804 7.375 15.2348 7.375 15.5C7.375 15.7652 7.5067 16.0196 7.74112 16.2071C7.97554 16.3946 8.29348 16.5 8.625 16.5C8.95652 16.5 9.27446 16.3946 9.50889 16.2071C9.74331 16.0196 9.875 15.7652 9.875 15.5C9.875 15.2348 9.74331 14.9804 9.50889 14.7929C9.27446 14.6054 8.95652 14.5 8.625 14.5Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </span>
                    {/* and Revise in audio rooms with friends!  */}{" "}
                    <span className="sm:text-4xl text-2xl -translate-y-0 xs:translate-y-0 inline-block pl-1">
                      and
                    </span>
                    <br className=" block xl:hidden" />
                    <span className="font-hi-melody text-[36px] sm:text-5xl -translate-y-1 xs:translate-y-0 inline-block xl:pl-1">
                      Revise
                    </span>{" "}
                    <span className="leading-[0.25] sm:mt-0">
                      <span className="sm:text-4xl text-2xl -translate-y-1 xs:translate-y-0 xl:-translate-y-1 inline-block pl-1">
                        in
                      </span>{" "}
                      <span className="sm:text-4xl text-2xl -translate-y-1 xs:translate-y-0  xl:-translate-y-1 inline-block pl-1">
                        audio
                      </span>{" "}
                      <br className="block xs:hidden" />
                      <span className="sm:text-4xl text-2xl -translate-y-1 xs:translate-y-0  sm:-translate-y-0 md:translate-y-0  xl:-translate-y-1 inline-block xs:pl-1">
                        rooms
                      </span>
                      <br className="hidden xs:block md:hidden" />{" "}
                      <span className="sm:text-4xl text-2xl -translate-y-1 xs:translate-y-0 sm:-translate-y-2 md:translate-y-0 inline-block lg:-translate-y-2 xl:-translate-y-1 pl-1">
                        with
                      </span>{" "}
                      <span className="sm:text-4xl text-2xl -translate-y-1 xs:translate-y-0 sm:-translate-y-2 md:translate-y-0 inline-block lg:-translate-y-2 xl:-translate-y-1 pl-1">
                        friends!
                      </span>
                    </span>
                  </h1>
                  <p className="text-base sm:text-xl my-2 sm:-mt-2 pl-0.5 font-dm-sans text-secondary">
                    Revise with students from across England
                  </p>
                  <span className="inline-flex space-x-2 justify-start mt-2">
                    <Link
                      href="/signup"
                      className="mx-auto text-white rounded-lg bg-primary px-4 py-2 text-base sm:text-xl font-dm-sans no-underline"
                    >
                      <span className="pr-1">Get Started</span>
                    </Link>
                    <Link
                      href="/signin"
                      className="mx-auto text-primary underline px-4 py-2 text-base sm:text-xl font-dm-sans"
                    >
                      Login
                    </Link>
                  </span>
                </div>
              </div>
              {/* Vertiacl slider */}
              <div className="hidden lg:flex w-fit space-x-2">
                <div className="w-3/6">
                  {/* slide 1  */}
                  <Swiper
                    // spaceBetween={0}
                    speed={40000}
                    slidesPerView={
                      windowHeight > 3000
                        ? 7
                        : windowHeight > 2000
                        ? 6
                        : windowHeight > 1500
                        ? 5
                        : windowHeight > 1200
                        ? 4
                        : 3
                    }
                    direction={"vertical"}
                    lazy={true}
                    loop={true}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="swiper-container swiper-container-free-mode"
                  >
                    <SwiperSlide>
                      <img src="/images/hero7.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/hero8.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/hero9.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/hero10.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/hero11.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/hero12.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                    {/* more */}
                    <SwiperSlide>
                      <img src="/images/hero1.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/hero2.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/hero3.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/hero4.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/hero5.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/hero6.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                  </Swiper>
                </div>
                {/* slide 2  */}
                <div className="swiper-container-2 swiper-container-free-mode-2 w-3/6">
                  <Swiper
                    // spaceBetween={0}
                    speed={41050}
                    slidesPerView={
                      windowHeight > 3000
                        ? 7
                        : windowHeight > 2000
                        ? 6
                        : windowHeight > 1500
                        ? 5
                        : windowHeight > 1200
                        ? 4
                        : 3
                    }
                    direction={"vertical"}
                    lazy={true}
                    loop={true}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                      reverseDirection: true,
                    }}
                    modules={[Autoplay]}
                    className="swiper-container swiper-container-free-mode"
                  >
                    <SwiperSlide>
                      <img src="/images/hero1.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/hero2.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/hero3.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/hero4.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/hero5.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/hero6.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                    {/* more  */}
                    <SwiperSlide>
                      <img src="/images/hero7.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/hero8.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/hero9.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/hero10.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/hero11.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/hero12.jpg" loading={"lazy"} />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </section>

        {/* HERO SECTION ENDS */}
        {/* EXPLORE SECTION STARTS */}
        <section className="w-full overflow-x-hidden overflow-y-visible relative z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-0">
            <div className="container mx-auto lg:flex mb-20 sm:mb-40 mt-20 md:mt-60">
              <div className="w-full lg:w-1/2 relative">
                <img
                  className="rounded-lg object-left sm:object-center h-56 xs:h-64 sm:h-[26rem] md:h-[30rem] lg:h-[20rem] xl:h-[26rem] min-w-full"
                  src="/images/explore.jpg"
                  loading={"lazy"}
                />
                <div
                  ref={moving_room_card}
                  className="moving_room_card -top-28 xs:-top-24 md:-top-32 left-[6rem] xs:-left-80 right-0 absolute z-10"
                >
                  <div className="scale-[0.60] xs:scale-75 md:scale-100 overflow-x-visible w-screen whitespace-nowrap no-scrollbar">
                    {/* ROOM CARD 1*/}

                    <div className="max-w-lg sm:max-w-xl inline-block mr-4">
                      <div className="bg-primary px-4 pt-3 pb-1 rounded-t-lg">
                        <div className="flex space-x-2 items-center">
                          <span>
                            <svg
                              width={12}
                              height={12}
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                opacity="0.5"
                                cx={6}
                                cy={6}
                                r={6}
                                fill="#D9E9FF"
                              />
                              <circle
                                cx="6.0002"
                                cy="6.0002"
                                r="2.8"
                                fill="white"
                              />
                            </svg>
                          </span>
                          <span className="text-white font-dm-sans font-medium text-sm sm:text-base">
                            LIVE
                          </span>
                        </div>
                        <h3 className="text-white text-xl font-dm-sans pb-3 pt-1">
                          Exponential and logarithms revision
                        </h3>
                        <div>
                          <span className="text-[12px] font-dm-sans sm:text-sm border-[1px] border-tertiary px-[6px] py-[2px] rounded-[4px] inline-block mr-1 text-tertiary">
                            #maths
                          </span>
                          <span className="text-[12px] font-dm-sans sm:text-sm border-[1px] border-tertiary px-[6px] py-[2px] rounded-[4px] inline-block mr-1 text-tertiary">
                            #exponentials
                          </span>
                          <span className="text-[12px] font-dm-sans sm:text-sm border-[1px] border-tertiary px-[6px] py-[2px] rounded-[4px] inline-block mr-1 text-tertiary">
                            #logarithms
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center mt-2">
                          <div className="flex -space-x-2 items-center">
                            <img
                              className=" h-6 w-6 border-[1px] border-primary rounded-[100%]"
                              src="/images/room_card_avatar_2.jpg"
                              loading={"lazy"}
                            />
                            <img
                              className=" h-6 w-6 border-[1px] border-primary rounded-[100%]"
                              src="/images/room_card_avatar_4.jpg"
                              loading={"lazy"}
                            />
                            <img
                              className=" h-6 w-6 border-[1px] border-primary rounded-[100%]"
                              src="/images/room_card_avatar_5.jpg"
                              loading={"lazy"}
                            />
                          </div>
                          <span className="text-[12px] font-dm-sans sm:text-sm block my-2 mr-2 text-tertiary">
                            50 listening
                          </span>
                        </div>
                      </div>
                      <div className="bg-[#2983FF] py-2 px-4 rounded-b-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="bg-[#398DFF] px-2 py-1 rounded-[5px] text-[10px] font-dm-sans sm:text-sm text-white">
                              About Room
                            </span>
                            <span className="text-[12px] font-dm-sans sm:text-sm block my-2 mr-2 text-white pl-1">
                              Revision room for student struggling with Advanced
                              Exponential and logarithms
                            </span>
                          </div>
                          <a href="#" className="">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20ZM10.47 6.47C10.6106 6.32955 10.8012 6.25066 11 6.25066C11.1988 6.25066 11.3894 6.32955 11.53 6.47L14.53 9.47C14.6705 9.61063 14.7493 9.80125 14.7493 10C14.7493 10.1988 14.6705 10.3894 14.53 10.53L11.53 13.53C11.4613 13.6037 11.3785 13.6628 11.2865 13.7038C11.1945 13.7448 11.0952 13.7668 10.9945 13.7686C10.8938 13.7704 10.7938 13.7518 10.7004 13.7141C10.607 13.6764 10.5222 13.6203 10.451 13.549C10.3797 13.4778 10.3236 13.393 10.2859 13.2996C10.2482 13.2062 10.2296 13.1062 10.2314 13.0055C10.2332 12.9048 10.2552 12.8055 10.2962 12.7135C10.3372 12.6215 10.3963 12.5387 10.47 12.47L12.19 10.75H6C5.80109 10.75 5.61032 10.671 5.46967 10.5303C5.32902 10.3897 5.25 10.1989 5.25 10C5.25 9.80109 5.32902 9.61032 5.46967 9.46967C5.61032 9.32902 5.80109 9.25 6 9.25H12.19L10.47 7.53C10.3295 7.38937 10.2507 7.19875 10.2507 7C10.2507 6.80125 10.3295 6.61063 10.47 6.47Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* ROOM CARD 2 */}
                    <div className="max-w-lg sm:max-w-xl inline-block">
                      <div className="bg-primary px-4 pt-3 pb-1 rounded-t-lg">
                        <div className="flex space-x-2 items-center">
                          <span>
                            <svg
                              width={12}
                              height={12}
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                opacity="0.5"
                                cx={6}
                                cy={6}
                                r={6}
                                fill="#D9E9FF"
                              />
                              <circle
                                cx="6.0002"
                                cy="6.0002"
                                r="2.8"
                                fill="white"
                              />
                            </svg>
                          </span>
                          <span className="text-white font-dm-sans font-medium text-sm sm:text-base">
                            LIVE
                          </span>
                        </div>
                        <h3 className="text-white text-xl font-dm-sans pb-3 pt-1">
                          Binomial Distribution revision
                        </h3>
                        <div>
                          <span className="text-[12px] font-dm-sans sm:text-sm border-[1px] border-tertiary px-[6px] py-[2px] rounded-[4px] inline-block mr-1 text-tertiary">
                            #statistics
                          </span>
                          <span className="text-[12px] font-dm-sans sm:text-sm border-[1px] border-tertiary px-[6px] py-[2px] rounded-[4px] inline-block mr-1 text-tertiary">
                            #binomial
                          </span>
                          <span className="text-[12px] font-dm-sans sm:text-sm border-[1px] border-tertiary px-[6px] py-[2px] rounded-[4px] inline-block mr-1 text-tertiary">
                            #probability
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center mt-2">
                          <div className="flex -space-x-2 items-center">
                            <img
                              className=" h-6 w-6 border-[1px] border-primary rounded-[100%]"
                              src="/images/room_card_avatar_1.jpg"
                              loading={"lazy"}
                            />
                            <img
                              className=" h-6 w-6 border-[1px] border-primary rounded-[100%]"
                              src="/images/room_card_avatar_2.jpg"
                              loading={"lazy"}
                            />
                            <img
                              className=" h-6 w-6 border-[1px] border-primary rounded-[100%]"
                              src="/images/room_card_avatar_3.jpg"
                              loading={"lazy"}
                            />
                          </div>
                          <span className="text-[12px] font-dm-sans sm:text-sm block my-2 mr-2 text-tertiary">
                            101 listening
                          </span>
                        </div>
                      </div>
                      <div className="bg-[#2983FF] py-2 px-4 rounded-b-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="bg-[#398DFF] px-2 py-1 rounded-[5px] text-[10px] font-dm-sans sm:text-sm text-white">
                              About Room
                            </span>
                            <span className="text-[12px] font-dm-sans sm:text-sm block my-2 mr-2 text-white pl-1">
                              Revision room for student struggling with advanced
                              level binomial distribution
                            </span>
                          </div>
                          <a href="#" className="">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20ZM10.47 6.47C10.6106 6.32955 10.8012 6.25066 11 6.25066C11.1988 6.25066 11.3894 6.32955 11.53 6.47L14.53 9.47C14.6705 9.61063 14.7493 9.80125 14.7493 10C14.7493 10.1988 14.6705 10.3894 14.53 10.53L11.53 13.53C11.4613 13.6037 11.3785 13.6628 11.2865 13.7038C11.1945 13.7448 11.0952 13.7668 10.9945 13.7686C10.8938 13.7704 10.7938 13.7518 10.7004 13.7141C10.607 13.6764 10.5222 13.6203 10.451 13.549C10.3797 13.4778 10.3236 13.393 10.2859 13.2996C10.2482 13.2062 10.2296 13.1062 10.2314 13.0055C10.2332 12.9048 10.2552 12.8055 10.2962 12.7135C10.3372 12.6215 10.3963 12.5387 10.47 12.47L12.19 10.75H6C5.80109 10.75 5.61032 10.671 5.46967 10.5303C5.32902 10.3897 5.25 10.1989 5.25 10C5.25 9.80109 5.32902 9.61032 5.46967 9.46967C5.61032 9.32902 5.80109 9.25 6 9.25H12.19L10.47 7.53C10.3295 7.38937 10.2507 7.19875 10.2507 7C10.2507 6.80125 10.3295 6.61063 10.47 6.47Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex items-center pt-5 sm:pt-10 xl:pt-0 sm:pl-10 ">
                <div>
                  <h2 className="sm:text-4xl text-2xl  font-dm-sans">
                    <span className="text-primary">Explore</span> RevisionRooms
                  </h2>
                  <p className="text-base sm:text-xl sm:my-2 font-dm-sans text-secondary">
                    Discover the world of RevisionRooms and unlock limitless
                    collaborative learning possibilities on our innovative
                    platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* EXPLORE SECTION ENDS */}
        {/* CREATE SECTION STARTS */}
        <section className="bg-[#FAFCFE] py-20">
          <div className="max-w-7xl mx-auto">
            <div className="container mx-auto lg:flex my-10 sm:my-40">
              {/* small screen imac image */}
              <div className="block lg:hidden w-full relative px-10 xs:px-16 mb-8">
                <img
                  className="rounded-[6px] xs:rounded-[0px] object-cover object-center h-54 xs:h-64 sm:h-[27rem] md:h-[34rem] lg:h-[20rem] xl:h-[26rem] min-w-full"
                  src="/images/imac.jpg"
                  loading={"lazy"}
                />
                <div
                  ref={rotating_share_icon}
                  className="rotating_share_icon -top-[4.2rem] -left-5 xs:-top-[5.3rem] xs:-left-4  absolute "
                >
                  <img
                    className=" h-32 w-32 xs:h-40 xs:w-40 z-[1]"
                    src="/images/imac_share.png"
                    loading={"lazy"}
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex items-center pl-5 sm:pl-10">
                <div>
                  <h2 className="sm:text-4xl text-2xl font-dm-sans">
                    <span className="text-primary">Create </span>New Room{" "}
                    <br className="sm:block" />
                    &amp; <span className="text-primary">Share </span>with
                    Friends
                  </h2>
                  <p className="text-base sm:text-xl my-2 font-dm-sans text-secondary">
                    Easily create a new room and share it with your friends for
                    seamless collaboration and learning on our platform.
                  </p>
                </div>
              </div>
              {/* large screen imac image */}
              <div className="lg:w-1/2 relative hidden lg:block">
                <img
                  className="rounded-lg object-cover object-center h-full min-w-full"
                  src="/images/imac.jpg"
                  loading={"lazy"}
                />
                <div
                  ref={rotating_share_icon_large}
                  className="rotating_share_icon_large -top-[7.8rem] -left-28 absolute "
                >
                  <img
                    className=" h-60 w-60 z-[1]"
                    src="/images/imac_share.png"
                    loading={"lazy"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CREATE SECTION ENDS */}
        {/* CONNECT SECTION STARTS */}
        <section className="bg-white py-10 relative overflow-x-hidden overflow-y-visible">
          <div className="max-w-7xl mx-auto px-4 md:px-0">
            <div className="container mx-auto lg:flex mt-24 mb-10 sm:my-40">
              <div className="w-full lg:w-1/2 relative overflow-y-visible">
                <img
                  className="rounded-lg object-cover object-center h-56 xs:h-64 sm:h-[26rem] md:h-[30rem] lg:h-[20rem] xl:h-[26rem] min-w-full"
                  src="/images/connect.jpg"
                  loading={"lazy"}
                />
                <div
                  ref={embed_room}
                  className="embed_room -top-14 -right-28 sm:-right-14 xs:-right-24 lg:-right-20  absolute w-80"
                >
                  {/* EMEBED SECTION */}
                  <div className="px-8 py-6 rounded-lg box-shadow w-fit bg-white scale-[0.60] xs:scale-75 sm:scale-100">
                    {/* eggheads */}

                    <div className="mt-2">
                      <div className="flex">
                        <h5 className="font-dm-sans text-xl font-bold">
                          Eggheads
                        </h5>{" "}
                        <span className="ml-1 py-1 px-2 bg-secondaryBg rounded-[10px] text-primary">
                          32
                        </span>
                      </div>
                      <div className="flex space-x-4">
                        <div className="my-2 text-center inline-flex flex-col justify-around">
                          <img
                            className=" h-14 w-14 border-[1px] border-primary rounded-[100%]"
                            src="/images/listeners_avatar_1.jpeg"
                            loading={"lazy"}
                          />
                          <span className="text-secondary text-sm">Caleb</span>
                        </div>
                        <div className="my-2 text-center inline-flex flex-col justify-around">
                          <img
                            className=" h-14 w-14 border-[1px] border-primary rounded-[100%]"
                            src="/images/listeners_avatar_2.jpeg"
                            loading={"lazy"}
                          />
                          <span className="text-secondary text-sm">Toni</span>
                        </div>
                        <div className="my-2 text-center inline-flex flex-col justify-around">
                          <div className="text-[#ADBDD3] border-[1px] border-tertiary rounded-[100%] bg-secondaryBg px-3 py-3.5">
                            +30
                          </div>
                          <span className="text-secondary text-sm">others</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex items-center pt-8 xs:pt-5 sm:pt-10 lg:pt-0 sm:pl-10">
                <div>
                  <h2 className="sm:text-4xl text-2xl  font-dm-sans">
                    <span className="text-primary">Connect </span>with students{" "}
                    <br className="block sm:hidden" />
                    from all over England
                  </h2>
                  <p className="text-base sm:text-xl my-2 font-dm-sans text-secondary">
                    Join our platform to connect with students across England,
                    fostering a vibrant global learning community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CONNECT SECTION ENDS */}
        <div></div>
      </>
      <Footer />
    </main>
  );
}
