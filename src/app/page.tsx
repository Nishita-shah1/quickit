// pages/home/page.tsx
import Nav from '@/components/Nav';
import SlidingBanner from '@/components/SliddingBanner';
import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';


export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <SlidingBanner />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
