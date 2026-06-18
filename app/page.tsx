import { FloatingContact } from "@/components/FloatingContact";
import { ClickableServicePortal } from "@/components/ClickableServicePortal";
import { QualificationAdvantages } from "@/components/QualificationAdvantages";
import { QualificationHistory } from "@/components/QualificationHistory";
import { QualificationIntro } from "@/components/QualificationIntro";
import { QualificationPartners } from "@/components/QualificationPartners";
import { QualificationStages } from "@/components/QualificationStages";
import { QualificationStats } from "@/components/QualificationStats";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <ClickableServicePortal />
        <QualificationStats />
        <QualificationIntro />
        <QualificationAdvantages />
        <QualificationPartners />
        <QualificationStages />
        <QualificationHistory />
        <ContactSection />
      </main>
      <FloatingContact />
      <SiteFooter />
    </>
  );
}
