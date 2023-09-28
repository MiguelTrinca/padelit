import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ProductTestimonialCardSizeType = {
  dimensionCode?: string;
  personName?: string;
  dimensionValue?: string;
  dimensionCodeText?: string;
  dimensionText?: string;
  dimensionValueText?: string;
  dimensionSizeCode?: string;

  /** Style props */
  productTestimonialCardSizHeight?: CSSProperties["height"];
  productTestimonialCardSizWidth?: CSSProperties["width"];
  productTestimonialCardSizMinWidth?: CSSProperties["minWidth"];
  jaySmithColor?: CSSProperties["color"];
};

const ProductTestimonialCardSize: NextPage<ProductTestimonialCardSizeType> = ({
  dimensionCode,
  personName,
  dimensionValue,
  dimensionCodeText,
  dimensionText,
  dimensionValueText,
  dimensionSizeCode,
  productTestimonialCardSizHeight,
  productTestimonialCardSizWidth,
  productTestimonialCardSizMinWidth,
  jaySmithColor,
}) => {
  const productTestimonialCardSizeStyle: CSSProperties = useMemo(() => {
    return {
      height: productTestimonialCardSizHeight,
      width: productTestimonialCardSizWidth,
      minWidth: productTestimonialCardSizMinWidth,
    };
  }, [
    productTestimonialCardSizHeight,
    productTestimonialCardSizWidth,
    productTestimonialCardSizMinWidth,
  ]);

  const jaySmithStyle: CSSProperties = useMemo(() => {
    return {
      color: jaySmithColor,
    };
  }, [jaySmithColor]);

  return (
    <div
      className="h-full rounded-5xs bg-white shadow-[0px_3px_16px_rgba(0,_0,_0,_0.08)] w-[207px] flex flex-col items-center justify-start py-6 px-4 box-border gap-[24px] text-center text-base text-black font-text-small"
      style={productTestimonialCardSizeStyle}
    >
      <img
        className="relative rounded-[50%] w-[119.98px] h-[119.98px] object-cover"
        alt=""
        src={dimensionCode}
      />
      <div className="self-stretch flex flex-col items-center justify-start">
        <div
          className="self-stretch relative leading-[24px] font-semibold"
          style={jaySmithStyle}
        >
          {personName}
        </div>
        <div className="relative text-xs leading-[20px] text-gray-blue text-left">
          Web Designer
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[6px]">
        <img className="relative w-5 h-[19px]" alt="" src={dimensionValue} />
        <img className="relative w-5 h-[19px]" alt="" src={dimensionCodeText} />
        <img className="relative w-5 h-[19px]" alt="" src={dimensionText} />
        <img
          className="relative w-5 h-[19px]"
          alt=""
          src={dimensionValueText}
        />
        <img className="relative w-5 h-[19px]" alt="" src={dimensionSizeCode} />
      </div>
    </div>
  );
};

export default ProductTestimonialCardSize;
