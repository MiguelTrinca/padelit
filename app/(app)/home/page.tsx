import Image from "next/image";

const Home = () => {

    const user = {
        name: "Zoey Lang",
        image: "/zoey.jpg",
        badges: ["React", "Next.js", "Tailwind"],
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
        </div>
    )
}

export default Home