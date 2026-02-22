import { setRequestLocale } from "next-intl/server";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Problem from "@/components/sections/Problem";
import RootCause from "@/components/sections/RootCause";
import Concept from "@/components/sections/Concept";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import Comparison from "@/components/sections/Comparison";
import UseCases from "@/components/sections/UseCases";
import WhyNow from "@/components/sections/WhyNow";
import Author from "@/components/sections/Author";
import Speaking from "@/components/sections/Speaking";
import References from "@/components/sections/References";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Problem />
        <RootCause />
        <Concept />
        <HowItWorks />
        <FAQ />
        <Comparison />
        <UseCases />
        <WhyNow />
        <Author />
        <Speaking />
        <References />
      </main>
      <Footer />
    </>
  );
}
