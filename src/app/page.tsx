import Awards from "@/components/Home/Awards";
import Differences from "@/components/Home/Differences";
import EnterprisePlan from "@/components/Home/EnterprisePlan";
import PricingSection from "@/components/Home/PricingSection";

export default function Home() {
  return (
    <div>
      <PricingSection />
      <Awards />
      <Differences />
      <EnterprisePlan />
    </div>
  );
}
