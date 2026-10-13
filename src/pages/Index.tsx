import CVHeader from "@/components/cv/CVHeader";
import CVSidebar from "@/components/cv/CVSidebar";
import CVExperience from "@/components/cv/CVExperience";
import CVEducation from "@/components/cv/CVEducation";
import { Target, Award, Download } from "lucide-react";

const handleDownload = () => {
  const previous = document.title;
  document.title = "Noel Moriano - Curriculum Vitae";
  const restore = () => {
    document.title = previous;
    window.removeEventListener("afterprint", restore);
  };
  window.addEventListener("afterprint", restore);
  window.print();
};

const Index = () => {
  return (
    <div className="cv-page min-h-screen bg-secondary flex items-start justify-center py-8 md:py-16 px-4 print:py-0 print:px-0 print:bg-background">
      <button
        type="button"
        onClick={handleDownload}
        aria-label="Descargar currículum en PDF"
        className="print:hidden fixed top-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-cv-accent px-4 py-2.5 text-xs font-semibold text-background shadow-lg transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-cv-accent focus-visible:ring-offset-2"
      >
        <Download className="w-4 h-4" />
        Descargar PDF
      </button>
      <div className="cv-sheet w-full max-w-[850px] bg-background p-8 md:p-14 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.03)] rounded print:shadow-none print:p-0">
        <CVHeader />

        {/* Section divider */}
        <div className="flex items-center gap-4 mb-8 md:mb-12 print:mb-4">
          <div className="flex-1 h-px bg-gradient-to-r from-cv-accent/20 via-cv-border to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-cv-accent/30" />
          <div className="flex-1 h-px bg-gradient-to-l from-cv-accent/20 via-cv-border to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 print:grid-cols-12 gap-8 md:gap-12 print:gap-8">
          {/* Sidebar */}
          <div className="md:col-span-4 print:col-span-4 order-2 md:order-1 print:order-1">
            <CVSidebar />
          </div>

          {/* Main Content */}
          <div className="md:col-span-8 print:col-span-8 order-1 md:order-2 print:order-2 space-y-10 print:space-y-4">
            <CVExperience />

            {/* Achievements */}
            <section>
              <h3 className="flex items-center gap-2 text-[12px] uppercase tracking-[0.12em] text-foreground font-bold mb-5 print:mb-3">
                <span className="w-5 h-px bg-cv-accent" />
                Logros Destacados
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-3">
                <AchievementCard
                  icon={<Target className="w-5 h-5" />}
                  title="Fundación de Empresa"
                  description="Cofundador de Iubizon, empresa de importación de tecnología multimedia"
                />
                <AchievementCard
                  icon={<Award className="w-5 h-5" />}
                  title="+6 Años en Tech"
                  description="Trayectoria consolidada en desarrollo full stack y liderazgo tecnológico"
                />
              </div>
            </section>

            <CVEducation />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-14 pt-6 print:mt-6 print:pt-3 break-inside-avoid border-t border-cv-border">
          <div className="flex items-center justify-between">
            <p className="text-[11px] text-cv-muted tracking-wider uppercase">
              Noel Moriano — Currículum Vitae
            </p>
            <p className="text-[11px] text-cv-muted tracking-wider uppercase">
              Lima, Perú — Octubre 2026
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

const AchievementCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="p-5 print:p-4 rounded-lg break-inside-avoid bg-cv-subtle border border-cv-border hover:border-cv-accent/20 transition-colors duration-200 group">
    <div className="text-cv-accent mb-2.5 group-hover:scale-110 transition-transform duration-200 inline-block">
      {icon}
    </div>
    <h4 className="text-[14px] font-bold text-foreground mb-1">{title}</h4>
    <p className="text-[13px] text-cv-muted leading-relaxed">{description}</p>
  </div>
);

export default Index;
