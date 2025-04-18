import Hero from "../components/Home/Hero";
import NewArrivalsSection from "../components/Home/newArrivalsSection";
import TrendingProductsSection from "../components/Home/trendingProductsSection";
import SpecialOffersSection from "../components/Home/specialOffersSection";
import NewsletterSignup from "../components/Home/newsletterSignup";

export default function Home() {
  return (
    <>
      <Hero />
      <NewArrivalsSection />
      <TrendingProductsSection />
      <SpecialOffersSection />
      <NewsletterSignup />
    </>
  );
}
