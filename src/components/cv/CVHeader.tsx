import { Mail, Linkedin, MapPin, Phone, Github } from "lucide-react";
import fotoAsset from "@/assets/noel-moriano-foto.jpg";

const CVHeader = () => {
  return (
    <header className="mb-8 md:mb-12 print:mb-6">
      {/* Top bar accent */}
      <div className="w-12 h-1 bg-cv-accent rounded-full mb-8" />

      <div className="grid grid-cols-12 gap-6 md:gap-8">
        <div className="col-span-12 md:col-span-7 print:col-span-7">
          <h1 className="text-[38px] md:text-[46px] font-bold tracking-[-0.04em] text-foreground leading-none">
            Noel Moriano
          </h1>
          <p className="text-cv-accent font-mono text-[12px] uppercase tracking-[0.14em] mt-4 leading-relaxed font-medium">
            Emprendedor • Desarrollador Full Stack • Negocios Digitales e Importación
          </p>
          <p className="text-[15px] leading-[1.7] text-cv-muted mt-5 max-w-[60ch]">
            Emprendedor tecnológico y desarrollador full stack con experiencia en la creación de productos digitales, dirección de proyectos tecnológicos y desarrollo de oportunidades de negocio. Me caracterizo por mi estabilidad y enfoque en los proyectos en los cuales tengo la oportunidad de participar.
          </p>
        </div>
        <div className="col-span-12 md:col-span-5 print:col-span-5 md:text-right print:text-right space-y-3 md:mt-1">
          <div className="flex md:justify-end print:justify-end mb-2">
            <img
              src={fotoAsset}
              alt="Retrato de Noel Moriano"
              className="w-20 h-20 rounded-full object-cover ring-1 ring-cv-border shadow-sm print:w-[86px] print:h-[86px]"
            />
          </div>
          <ContactItem
            icon={<Mail className="w-4 h-4" />}
            text="nmoriano26@gmail.com"
            href="mailto:nmoriano26@gmail.com"
          />
          <ContactItem
            icon={<Linkedin className="w-4 h-4" />}
            text="linkedin.com/in/elleondev"
            href="https://www.linkedin.com/in/elleondev"
          />
          <ContactItem
            icon={<Github className="w-4 h-4" />}
            text="github.com/elleon-dev"
            href="https://github.com/elleon-dev"
          />
          <ContactItem
            icon={<MapPin className="w-4 h-4" />}
            text="Lima, Perú"
          />
          <ContactItem
            icon={<Phone className="w-4 h-4" />}
            text="+51 972 332 824"
          />
        </div>
      </div>
    </header>
  );
};

const ContactItem = ({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) => {
  const inner = (
    <div className="flex items-center md:justify-end print:justify-end gap-2.5 text-[13px] text-cv-muted group-hover:text-cv-accent transition-colors duration-200">
      <span className="opacity-70 group-hover:opacity-100 transition-opacity">{icon}</span>
      <span>{text}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        {inner}
      </a>
    );
  }

  return <div className="group">{inner}</div>;
};

export default CVHeader;
