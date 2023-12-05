import React from 'react'
import Image from 'next/image';
import RewardCard from '@/components/newsletter-page/reward-card';
import NewsletterForm from '@/components/newsletter-page/newsletter-form';
import Link from 'next/link';
import BackButton from '@/components/terms-of-service/back-button';

const NewsletterNew = () => {
  return (
    <div className="relative w-screen min-h-screen rounded-lg overflow-hidden flex flex-col items-center justify-center text-center text-dark-gray font-inter md:h-full">
  
      <Image
        alt="background-padel"
        src="/newsletter/darken-newsletterImage.png"
        fill
        objectFit="cover"
      />
  
      <div className="max-w-[600px] p-5 relative z-10">
        <div className="self-stretch flex flex-col items-center justify-start gap-[20px] relative">
          <b className="self-stretch relative leading-[120%] text-white text-[50px] md:text-21xl ">
            Junta-te à Padelit!
          </b>
          <div className="self-stretch relative leading-[24px] text-[20px] text-white md:text-lg">
            Sê um dos primeiros a te juntares à Padelit e ganha estas <span className='text-bold text-accent-yellow'>recompensas</span>!
          </div>

          <div className="rounded-lg bg-white p-5 flex flex-col items-center justify-start text-left text-sm text-dark-gray md:text-lg">
  
          <NewsletterForm/>
  
          </div>
  
          <div className="flex flex-wrap justify-center gap-[20px]">
  
            <RewardCard title="Notícias" icon="/newsletter/news-icon.svg" />
            <RewardCard title="Premium" icon="/newsletter/premium-icon.svg" />
            <RewardCard title="Descontos Exclusivos" icon="/newsletter/sale-icon.svg" />
            <RewardCard title="Prioridade de Acesso" icon="/newsletter/betafeatures-icon.svg" />
            <RewardCard title="Crachás Exclusivos" icon="/newsletter/badge-icon.svg" />
            <RewardCard title="Muito Mais" icon="/newsletter/more-icon.svg" />
  
          </div>
  
        </div>
  
      
        <BackButton/>
        
      </div>
    </div>
  );
  
  };
  
  export default NewsletterNew;
  
  