"use client";
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import VerticalCardRoadmap from '@/components/sections/layouts/roadmap/VerticalCardRoadmap';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "smooth" }}>
      <NavbarBase
        brand="Photonex"
        leftActionLabel="Menu"
        rightActionLabel="Book Now"
        onLeftAction={() => console.log('Menu clicked')}
        onRightAction={() => console.log('Booking action')}
      />
      <BillboardHero
        title="Future-forward photography that transcends time"
        subtitle="A portfolio blending light, motion, and neon-infused visuals for bold storytelling."
      />
      <SplitAbout
        heading="About the photographer"
        description="Vision-driven photographer blending cinematic lighting with sci-fi aesthetics. Based in [Location], available for international shoots."
      />
      <TokenBillboardHero
        title="Explore Photography"
        subtitle="Crafting moments through the lens"
        contractAddress="0x..."
        copyButtonText="Copy Address"
        copiedText="Address Copied!"
      />
      <VerticalCardRoadmap
        title="Our Roadmap"
        items={
          [
            { title: "Step 1", description: "Browse the portfolio", image: "/images/placeholder1.avif" },
            { title: "Step 2", description: "Choose a package", image: "/images/placeholder2.avif" },
            { title: "Step 3", description: "Book & shoot", image: "/images/placeholder3.avif" }
          ]
        }
      />
      <CentralFAQ
        heading="Frequently Asked Questions"
        lead="Find answers to common questions about photography services."
        items={
          [
            { title: "What is the booking process?", content: "You can browse our portfolio, select a package, and book through our site." },
            { title: "Do you offer international shoots?", content: "Yes, we provide photography services globally." }
          ]
        }
      />
    </SiteThemeProvider>
  );
}
