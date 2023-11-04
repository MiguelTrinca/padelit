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
          Funcionalidades para Todos!
        </b>
        <div className="relative text-base leading-[24px]">
        
        <p>
          Descubra o fascinante mundo do Padel com a <span className="font-bold text-accent-yellow">Padelit</span>, a plataforma de padel em Portugal para todos os amantes deste emocionante desporto! Seja você um jogador ávido, um clube de Padel entusiasmado ou uma organização dedicada, a <span className="font-bold text-accent-yellow">Padelit</span> é o seu destino definitivo para se conectar, competir e crescer no universo do Padel.
        </p>
                      
        <p>
          A nossa paixão pelo Padel é incomparável, e nossa missão é ajudá-lo a explorar e desfrutar deste jogo incrível ao máximo. <Link href="/newsletter" style={{ textDecoration: 'none', color: 'inherit' }}> <span className="font-semibold underline text-accent-yellow">Subscreva a newsletter</span></Link> para estar atualizado e ganhe recompensas!
        </p>
          
        </div>
      </div>

      <FeaturesList
        icon1="/heroiconsusergroupsolid1.svg"
        title1="Encontrar Grupo"
        description1="Encontre e conecte-se com outros jogadores que partilham a sua paixão e joguem juntos! Crie uma publicação detalhando a hora, a data e o local."
        
        icon2="/icoutlinesearch1.svg"
        title2="Procurar por Campos de Padel"
        description2="Explore uma vasta gama de campos de padel disponíveis com base na localização, disponibilidade e se são interiores ou exteriores."

        icon3="/icbaselinerocket7.svg"
        title3="Equipas e Torneios"
        description3="Una-se a jogadores com interesses semelhantes e forme equipas imbatíveis. Compita em torneios para provar a sua supremacia!"

      />
      
          
      <FeaturesList
        icon1="/icbaselinerocket9.svg"
        title1="Crachás no seu Perfil"
        description1="Ganhe reconhecimento pelas suas conquistas e destaque-se da multidão com os nossos distintivos únicos."
        
        icon2="/icbaselinerocket10.svg"
        title2="Reserve Campos de Padel"
        description2="Reserve o seu campo de Padel desejado e garanta o seu lugar para um jogo através da nossa funcionalidade de reserva."

        icon3="/icbaselinerocket11.svg"
        title3="Affiliate Program"
        description3="Partilhe a emoção da nossa plataforma com outros e colha os benefícios das suas referências."

      />

      <FeaturesList
        icon1="/icbaselinerocket12.svg"
        title1="Comunidades"
        description1="Conecte-se com outros jogadores nas nossas comunidades! Discuta estratégias e partilhe experiências!"
        
        icon2="/icbaselinerocket13.svg"
        title2="Produtos Premium"
        description2="Mostre o seu amor pelo Padel com a nossa exclusiva mercadoria. Vestuário elegante, raquetes e acessórios!"

        icon3="/phcrownsimple1.svg"
        title3="Ranked Matchmaking"
        description3=" Envolva-se em jogos contra jogadores que correspondam ao seu nível de habilidade, melhore o seu rank!"

      />
      
    </div>
  );
};

export default ExitingFeaturesSection;
