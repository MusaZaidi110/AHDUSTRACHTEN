import React, { useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

import img1 from "../../assets/Delivery/Delivery-Packing-1.webp";
import img2 from "../../assets/Delivery/Delivery-Packing-2.webp";
import img3 from "../../assets/Delivery/Delivery-Received.webp";
import img4 from "../../assets/Delivery/Delivery-Transport-1.webp";
import img5 from "../../assets/Delivery/Delivery-Transport-2.webp";
import img6 from "../../assets/Machine/Machine-1.webp";
import img7 from "../../assets/Machine/Machine-3.webp";
import img8 from "../../assets/Making/Making-Part-4.webp";
import img9 from "../../assets/Making/Making-Part-5.webp";
import img10 from "../../assets/Making/Making-Part-6.webp";
import img11 from "../../assets/Making/Making-Part-7.webp";
import img12 from "../../assets/Making/Making-Parts-1.webp";
import img13 from "../../assets/Making/Making-Parts-2.webp";
import img14 from "../../assets/Making/Making-Parts-3.webp";
import img15 from "../../assets/Product/Product-1.webp";
import img16 from "../../assets/Product/Product-2.webp";
import img17 from "../../assets/Product/Product-3.webp";
import img18 from "../../assets/Product/Product-4.webp";
import img19 from "../../assets/Product/Product-5.webp";
import img20 from "../../assets/Product/Product-6.webp";
import img21 from "../../assets/Product/Product-7.webp";
import img22 from "../../assets/Product/Product-8.webp";
import img23 from "../../assets/Product/Product-9.webp";
import img24 from "../../assets/Product/Product-10.webp";
import img25 from "../../assets/Product/Product-Leather-1.webp";
import img26 from "../../assets/Product/Product-Leather-2.webp";
import img27 from "../../assets/Team/Machine-3.webp";
import img28 from "../../assets/Team/Making-Part-10.webp";
import img29 from "../../assets/Team/Making-Part-11.webp";
import img30 from "../../assets/Team/Making-Part-7.webp";
import img31 from "../../assets/Team/Making-Part-9.webp";
import img32 from "../../assets/Team/Team-1.webp";

// CSS animations and styles
const scroll = keyframes`
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
`;

const ScrollerContainer = styled.div`
  max-width: 760px;
  overflow: hidden;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  ${({ animated }) =>
    animated &&
    css`
      -webkit-mask: linear-gradient(
        90deg,
        transparent,
        white 20%,
        white 80%,
        transparent
      );
      mask: linear-gradient(
        90deg,
        transparent,
        white 20%,
        white 80%,
        transparent
      );
    `}
`;

const ScrollerInner = styled.div`
  display: flex;
  gap: 1rem;
  padding-block: 1rem;
  flex-wrap: ${({ animated }) => (animated ? "nowrap" : "wrap")};
  width: ${({ animated }) => (animated ? "max-content" : "auto")};
  animation: ${({ animated, speed, direction }) =>
    animated &&
    css`
      ${scroll} ${speed || "40s"} ${direction || "forwards"} linear infinite;
    `};
`;

const Img = styled.img`
  border-radius: 8px;
  max-width: 150px;
  object-fit: cover;
  height: 200px;
`;

// Main Component
const LoopElement = () => {
  useEffect(() => {
    // Check if user prefers reduced motion
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  const addAnimation = () => {
    // Add clones for continuous scrolling effect
    const scrollerInner = document.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  };

  return (
    <ScrollerContainer animated data-direction="right" data-speed="slow">
      <ScrollerInner
        className="scroller__inner"
        animated
        speed="160s"
        direction="reverse"
      >
        <Img src={img1} alt="Avatar 1" />
        <Img src={img2} alt="Avatar 2" />
        <Img src={img3} alt="Avatar 3" />
        <Img src={img4} alt="Avatar 4" />
        <Img src={img5} alt="Avatar 5" />
        <Img src={img6} alt="Avatar 6" />
        <Img src={img7} alt="Avatar 7" />
        <Img src={img8} alt="Avatar 8" />
        <Img src={img9} alt="Avatar 9" />
        <Img src={img10} alt="Avatar 10" />
        <Img src={img11} alt="Avatar 11" />
        <Img src={img12} alt="Avatar 12" />
        <Img src={img13} alt="Avatar 13" />
        <Img src={img14} alt="Avatar 14" />
        <Img src={img15} alt="Avatar 15" />
        <Img src={img16} alt="Avatar 16" />
        <Img src={img17} alt="Avatar 17" />
        <Img src={img18} alt="Avatar 18" />
        <Img src={img19} alt="Avatar 19" />
        <Img src={img20} alt="Avatar 20" />
        <Img src={img21} alt="Avatar 21" />
        <Img src={img22} alt="Avatar 22" />
        <Img src={img23} alt="Avatar 23" />
        <Img src={img24} alt="Avatar 24" />
        <Img src={img25} alt="Avatar 25" />
        <Img src={img26} alt="Avatar 26" />
        <Img src={img27} alt="Avatar 27" />
        <Img src={img28} alt="Avatar 28" />
        <Img src={img29} alt="Avatar 29" />
        <Img src={img30} alt="Avatar 30" />
        <Img src={img31} alt="Avatar 31" />
        <Img src={img32} alt="Avatar 32" />
      </ScrollerInner>
    </ScrollerContainer>
  );
};

export default LoopElement;
