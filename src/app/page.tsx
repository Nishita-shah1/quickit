// pages/home/page.tsx
import Nav from '@/components/Nav';
import SlidingBanner from '@/components/SliddingBanner';
import Section1 from '@/components/Section1';


export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <SlidingBanner />
      <Section1 />
    </div>
  );
}
