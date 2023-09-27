import type { NextPage } from "next";

const FooterLinks: NextPage = () => {
  return (
    <footer
      className="absolute top-[calc(50%_+_2814px)] left-[calc(50%_-_519px)] w-[1038px] h-[280px] text-left text-lg text-gray-100 font-dm-sans"
      id="Footer"
    >
      <div className="absolute top-[46px] left-[870px] w-[150px] flex flex-col items-start justify-start gap-[22px]">
        <div className="relative tracking-[-0.5px] leading-[30px] font-medium">
          Policy
        </div>
        <a className="[text-decoration:none] relative text-sm leading-[250%] text-darkslategray inline-block w-[180px] opacity-[0.8]">
          <p className="m-0">Application security</p>
          <p className="m-0">Software principles</p>
          <p className="m-0">Unwanted software policy</p>
          <p className="m-0">Responsible supply chain</p>
        </a>
      </div>
      <div className="absolute top-[46px] left-[580px] w-[150px] flex flex-col items-start justify-start gap-[22px]">
        <div className="relative tracking-[-0.5px] leading-[30px] font-medium">
          My Account
        </div>
        <a className="[text-decoration:none] relative text-sm leading-[250%] text-darkslategray inline-block w-[161px] h-[182px] shrink-0 opacity-[0.8]">
          <p className="m-0">Press inquiries</p>
          <p className="m-0">{`Social media `}</p>
          <p className="m-0">directories</p>
          <p className="m-0">{`Images & B-roll`}</p>
          <p className="m-0">Permissions</p>
        </a>
      </div>
      <div className="absolute top-[46px] left-[290px] w-[150px] flex flex-col items-start justify-start gap-[22px]">
        <div className="relative tracking-[-0.5px] leading-[30px] font-medium">
          Our Information
        </div>
        <a className="[text-decoration:none] relative text-sm leading-[250%] text-darkslategray opacity-[0.8]">
          <p className="m-0">{`Return Policy `}</p>
          <p className="m-0">Privacy Policy</p>
          <p className="m-0">{`Terms & Conditions`}</p>
          <p className="m-0">Site Map</p>
          <p className="m-0">Store Hours</p>
        </a>
      </div>
      <div className="absolute top-[46px] left-[0px] w-[150px] flex flex-col items-start justify-start gap-[22px]">
        <div className="relative tracking-[-0.5px] leading-[30px] font-medium">
          About Us
        </div>
        <a className="[text-decoration:none] relative text-sm leading-[250%] text-darkslategray inline-block w-[164px] h-[175px] shrink-0 opacity-[0.8]">
          <p className="m-0">Support Center</p>
          <p className="m-0">Customer Support</p>
          <p className="m-0">About Us</p>
          <p className="m-0">Copyright</p>
          <p className="m-0">Popular Campaign</p>
        </a>
      </div>
      <img
        className="absolute top-[1px] left-[40.2px] w-[900px] h-[3px] object-cover"
        alt=""
        src="/dividor1.png"
      />
    </footer>
  );
};

export default FooterLinks;
