import type { NextPage } from "next";

const FAQContainer: NextPage = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-[13px] text-left text-lg text-gray-100 font-dm-sans">
      <div className="flex flex-col items-start justify-start gap-[9px]">
        <div className="flex flex-row items-center justify-start py-0 px-[13px] gap-[15px]">
          <img
            className="relative w-5 h-5 object-cover"
            alt=""
            src="/combined-shape-15714.png"
          />
          <div className="relative tracking-[-0.5px] leading-[40px] font-medium inline-block w-[400px] h-10 shrink-0">
            What happens when no one shows up?
          </div>
        </div>
        <img
          className="relative w-[752px] h-[3px] object-cover"
          alt=""
          src="/dividor.png"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-[10px]">
        <div className="flex flex-row items-center justify-start py-0 px-[13px] gap-[15px]">
          <img
            className="relative w-5 h-5 object-cover"
            alt=""
            src="/combined-shape-15713.png"
          />
          <div className="relative tracking-[-0.5px] leading-[40px] font-medium inline-block w-[511px] h-10 shrink-0">
            App installation failed, how to update system information?
          </div>
        </div>
        <img
          className="relative w-[752px] h-[3px] object-cover"
          alt=""
          src="/dividor-copy.png"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-[33px]">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start gap-[5px]">
            <div className="flex flex-row items-center justify-start py-0 px-[13px] gap-[15px]">
              <img
                className="relative w-5 h-5 object-cover"
                alt=""
                src="/combined-shape-15712.png"
              />
              <div className="relative tracking-[-0.5px] leading-[40px] font-medium inline-block w-[412px] h-10 shrink-0">
                Website reponse taking time, how to improve?
              </div>
            </div>
            <div className="flex flex-row items-start justify-center py-[7px] px-[47px] text-base text-darkslategray">
              <div className="relative leading-[32px] inline-block w-[713px] shrink-0">
                Get your blood tests delivered at the home collect a sample from
                management news. Get your blood tests delivered at the home
                collect a sample from management news. Get your blood tests
                delivered at the home collect a sample from management news. Get
                your blood tests delivered at the home.
              </div>
            </div>
          </div>
        </div>
        <img
          className="relative w-[752px] h-[3px] object-cover"
          alt=""
          src="/dividor-copy-2.png"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-[10px]">
        <div className="flex flex-row items-center justify-start py-0 px-[13px] gap-[15px]">
          <img
            className="relative w-5 h-5 object-cover"
            alt=""
            src="/combined-shape-15711.png"
          />
          <div className="relative tracking-[-0.5px] leading-[30px] font-medium inline-block w-[321px] h-10 shrink-0">
            New update fixed all bug and issues
          </div>
        </div>
        <img
          className="relative w-[752px] h-[3px] object-cover"
          alt=""
          src="/dividor-copy-4.png"
        />
      </div>
    </div>
  );
};

export default FAQContainer;
