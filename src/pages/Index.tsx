import CVHeader from "@/components/cv/CVHeader";
import CVSidebar from "@/components/cv/CVSidebar";
import CVExperience from "@/components/cv/CVExperience";

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary flex items-start justify-center py-8 md:py-16 px-4">
      <div className="w-full max-w-4xl bg-background p-8 md:p-12 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)] rounded-sm">
        <CVHeader />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Sidebar */}
          <div className="md:col-span-4 order-2 md:order-1">
            <CVSidebar />
          </div>

          {/* Main Content */}
          <div className="md:col-span-8 order-1 md:order-2 space-y-10">
            {/* Summary */}
            <section>
              <p className="text-[12px] leading-relaxed text-cv-muted max-w-[55ch]">
                Technology entrepreneur and full stack developer with experience
                building digital products, leading technology projects, and
                developing business opportunities. Passionate about innovation,
                scalable systems, and technology-driven businesses. Experienced
                in software development, project management, and international
                product sourcing.
              </p>
            </section>

            <CVExperience />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-cv-border">
          <p className="text-[9px] text-cv-muted text-center tracking-wider uppercase">
            Built with precision — Lima, Peru — 2025
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
