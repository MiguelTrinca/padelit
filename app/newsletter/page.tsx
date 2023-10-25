import type { NextPage } from "next";
import Image from "next/image";
import RewardsSection from "../../components/newsletter-page/sections/rewards-section";
import NewsletterSection from "../../components/newsletter-page/sections/newsletter-section";

const NewsletterPage: NextPage = () => {
  return (
	<div className="flex">
    {/* First Column */}
    <div className="w-1/2 h-screen relative">
		<Image
        	alt=""
        	src={"/newsletter/darken-newsletterImage.png"}
        	layout="fill"
			objectFit="cover"
      	/>

		<RewardsSection/>
    <div className="h-screen">Hello 1</div>
	</div>

    {/* Second Column */}
	<NewsletterSection/>
  </div>
  );
};

export default NewsletterPage;


