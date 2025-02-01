import Image from "next/image";

const Home = () => {

    const user = {
        name: "Miguel Trinca",
        rank: "Gold",
        wins: 42,
        losses: 18,
      };


    return (
        <div>
          <div className="flex m-4 bg-amber-500">
            <div className="flex flex-col gap-4 p-4 justify-center items-center bg-red-400">
                <Image
                  src="logo/Logo-Dark.svg" 
                  alt="Padelit"
                  object-fit = "contain"
                  width="160"
                  height="160"
                />

                <div>⭐⭐⭐⭐⭐</div>
            </div>
            <div className="flex flex-col p-4 justify-start bg-slate-500">
              <span>Quick Bite BAGDG1 BADGE 2</span>
              <span>Rank M1</span>
              <span> Wins: 15</span>
              <span> Losses: 70</span>
            </div>
          </div>

        <div className="flex pl-4 gap-8 justify-start">
          <div className="flex gap-4"> 
            <div className="flex justify-center items-center">
                <span>Icon</span>
              </div>
            <div className="flex flex-col justify-start">
              <span>Card to play</span>
              <span>Be excited to play</span>
              
            </div>
          </div>

          <div className="flex gap-4"> 
            <div className="flex justify-center items-center">
                <span>Icon</span>
              </div>
            <div className="flex flex-col justify-start">
              <span>Card to play</span>
              <span>Be excited to play</span>
              
            </div>
          </div>
        </div>

        <br></br>
        <div> Card to invite</div>
        <div> List of friends</div>

        </div>
    )
}

export default Home