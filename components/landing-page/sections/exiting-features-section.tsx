import FeaturesList from "../features-list";
import Link from "next/link";

const ExitingFeaturesSection = ({

}) => {
  
  return (
    <div
      className="bg-white flex flex-col items-center justify-start py-[100px] px-5 box-border gap-[120px] text-center text-lg text-dark-blue font-inter self-stretch"
    >
      <div
        className="flex flex-col items-center justify-start gap-[6px] text-21xl text-dark-blue text-center"
      >
        <b className="relative leading-[120%] text-center">
          Funcionalidades para todos!
        </b>
        <div className="relative text-base leading-[24px]">
        
        <p>
          Descobre o mundo do Padel com a <span className="font-bold text-accent-yellow">Padelit</span>, a mais recente e única plataforma portuguesa que te vai permitir encontrar o jogador ideal para completares o teu grupo. Sejas tu o jogador ávido, o clube entusiasmado ou a organização dedicada, a Padelit é o <span className="italic">serviço</span> ideal para ti! 😉
        </p>

        <p>
        <Link href="/newsletter" style={{ textDecoration: 'none', color: 'inherit' }}> <span className="font-semibold underline text-accent-yellow hover:text-hover-yellow">Subscreve à newsletter</span></Link> para estares atualizado e ganha recompensas!
        </p>              
        
        <p>
          A nossa paixão pelo Padel é incomparável, e nossa missão é ajudar-te a explorar e desfrutar deste jogo incrível ao máximo. Estas são algumas das funcionalidades que estamos a desenvolver: 
        </p>
          
        </div>
      </div>

      <FeaturesList
        icon1="/heroiconsusergroupsolid1.svg"
        title1="Encontrar Grupo"
        description1="Encontra e conecta-te com outros jogadores que partilham a tua paixão e joguem juntos! Cria uma publicação detalhando a hora, a data e o local."
        
        icon2="/icoutlinesearch1.svg"
        title2="Procurar por Campos de Padel"
        description2="Explora uma vasta gama de campos de Padel disponíveis com base na localização, disponibilidade e se são interiores ou exteriores."

        icon3="/icbaselinerocket7.svg"
        title3="Equipas e Torneios"
        description3="Une-te a jogadores com interesses semelhantes e forma equipas imbatíveis. Compete em torneios para provar a tua supremacia!"

      />
      
          
      <FeaturesList
        icon1="/icbaselinerocket9.svg"
        title1="Crachás no seu Perfil"
        description1="Ganha reconhecimento pelas tuas conquistas e destaca-te da multidão com os nossos crachás únicos."
        
        icon2="/icbaselinerocket10.svg"
        title2="Reserve Campos de Padel"
        description2="Reserva o teu campo de Padel desejado e garante o teu lugar para um jogo através da nossa funcionalidade de reserva."

        icon3="/icbaselinerocket11.svg"
        title3="Affiliate Program"
        description3="Partilha a emoção da nossa plataforma com outros e colhe os benefícios das tuas referências."

      />

      <FeaturesList
        icon1="/icbaselinerocket12.svg"
        title1="Comunidades"
        description1="Conecta-te com outros jogadores nas nossas comunidades! Discute estratégias e partilha experiências!"
        
        icon2="/icbaselinerocket13.svg"
        title2="Produtos Premium"
        description2="Mostra o teu amor pelo Padel com a nossa exclusiva mercadoria. Vestuário elegante, raquetes e acessórios!"

        icon3="/phcrownsimple1.svg"
        title3="Ranked Matchmaking"
        description3=" Envolve-te em jogos contra jogadores que correspondam ao teu nível de habilidade, melhora o teu rank!"

      />
      
    </div>
  );
};

export default ExitingFeaturesSection;
