import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import ProductTestimonialCardSize from "./product-testimonial-card-size";

type CardContainerType = {
  /** Style props */
  frameDivJustifyContent?: CSSProperties["justifyContent"];
  frameDivGap?: CSSProperties["gap"];
};

const CardContainer: NextPage<CardContainerType> = ({
  frameDivJustifyContent,
  frameDivGap,
}) => {
  const wrapper1Style: CSSProperties = useMemo(() => {
    return {
      justifyContent: frameDivJustifyContent,
      gap: frameDivGap,
    };
  }, [frameDivJustifyContent, frameDivGap]);

  return (
    <div
      className="w-full flex flex-row flex-wrap items-center justify-between max-w-[900px] sm:flex-col sm:gap-[72px] sm:items-center sm:justify-start"
      style={wrapper1Style}
    >
      <ProductTestimonialCardSize
        dimensionCode="/ellipse-21@2x.png"
        personName="Jay Smith"
        dimensionValue="/vector4.svg"
        dimensionCodeText="/vector4.svg"
        dimensionText="/vector4.svg"
        dimensionValueText="/vector4.svg"
        dimensionSizeCode="/vector4.svg"
        productTestimonialCardSizHeight="unset"
        productTestimonialCardSizWidth="252px"
        productTestimonialCardSizMinWidth="204px"
        jaySmithColor="#202835"
      />
      <ProductTestimonialCardSize
        dimensionCode="/ellipse-22@2x.png"
        personName="Jerome Bell"
        dimensionValue="/vector4.svg"
        dimensionCodeText="/vector4.svg"
        dimensionText="/vector4.svg"
        dimensionValueText="/vector4.svg"
        dimensionSizeCode="/vector4.svg"
        productTestimonialCardSizHeight="unset"
        productTestimonialCardSizWidth="252px"
        productTestimonialCardSizMinWidth="204px"
        jaySmithColor="#202835"
      />
      <ProductTestimonialCardSize
        dimensionCode="/ellipse-23@2x.png"
        personName="Devon Lane"
        dimensionValue="/vector4.svg"
        dimensionCodeText="/vector4.svg"
        dimensionText="/vector4.svg"
        dimensionValueText="/vector4.svg"
        dimensionSizeCode="/vector4.svg"
        productTestimonialCardSizHeight="unset"
        productTestimonialCardSizWidth="252px"
        productTestimonialCardSizMinWidth="204px"
        jaySmithColor="#202835"
      />
    </div>
  );
};

export default CardContainer;
