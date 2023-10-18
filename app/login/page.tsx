const LoginPage = () => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden flex flex-col items-center justify-center text-center text-xs text-white font-montserrat">
      <div className="rounded-4xl bg-dark-blue w-[559px] h-[575px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-8 pb-[21px] pr-10 pl-[26px] box-border">
        <button className="cursor-pointer [border:none] py-1 px-2.5 bg-[transparent] overflow-hidden flex flex-row items-start justify-start">
          <img
            className="relative w-[17.36px] h-[17.36px]"
            alt=""
            src="/vector9.svg"
          />
        </button>
        <div className="flex-1 flex flex-col items-center justify-center py-0 px-16 gap-[24px] ml-[-24px]">
          <img
            className="relative w-[66.24px] h-[44.76px]"
            alt=""
            src="/combined-shape-167251.svg"
          />
          <h1 className="m-0 relative text-5xl font-normal font-inherit inline-block w-[340px] h-[25px] shrink-0">
            Sign in to PadelIt
          </h1>
          <button className="cursor-pointer [border:none] py-[21px] px-14 bg-white rounded-[45px] flex flex-col items-center justify-center hover:bg-gainsboro-300">
            <div className="flex flex-row items-center justify-center gap-[14px]">
              <img
                className="relative w-[22.74px] h-[22.74px]"
                alt=""
                src="/google-icon.svg"
              />
              <span className="relative text-mini font-montserrat text-black text-center">
                Sign in with Google
              </span>
            </div>
          </button>
          <div className="flex flex-row items-center justify-center gap-[22px]">
            <img
              className="relative w-[164.5px] h-[0.5px]"
              alt=""
              src="/vector-1.svg"
            />
            <span className="relative">or</span>
            <img
              className="relative w-[164.5px] h-[0.5px]"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <input
            className="font-montserrat text-xs bg-white box-border w-[347.64px] h-[58px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-3 px-[18px] border-[1px] border-solid border-gray-400"
            placeholder="john.doe@hotmail.com"
            type="text"
          />
          <input
            className="bg-white box-border w-[347.64px] h-[58px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-3 px-[18px] border-[1px] border-solid border-gray-400"
            type="text"
          />
          <div className="flex flex-row items-center justify-center gap-[24px]">
            <div className="relative inline-block w-[211px] h-[25px] shrink-0">
              <span>{`Don’t have an account? `}</span>
              <span className="text-cornflowerblue-100">Sign up</span>
            </div>
            <button className="cursor-pointer [border:none] p-2.5 bg-accent-yellow rounded-41xl w-[135px] h-[58px] flex flex-row items-center justify-center box-border hover:bg-darkorange">
              <b className="relative text-xs font-montserrat text-white text-center">
                Sign In
              </b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
