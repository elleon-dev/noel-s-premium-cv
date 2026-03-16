import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const CVHeader = () => {
  return (
    <header className="grid grid-cols-12 gap-6 md:gap-8 mb-10 md:mb-12">
      <div className="col-span-12 md:col-span-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
          Noel Moriano
        </h1>
        <p className="text-cv-accent font-mono text-[10px] uppercase tracking-[0.2em] mt-2">
          Entrepreneur • Full Stack Developer • Import & Digital Business
        </p>
      </div>
      <div className="col-span-12 md:col-span-4 md:text-right space-y-1.5 mt-2 md:mt-0">
        <ContactItem
          icon={<Mail className="w-3 h-3" />}
          text="nmoriano26@gmail.com"
          href="mailto:nmoriano26@gmail.com"
        />
        <ContactItem
          icon={<Linkedin className="w-3 h-3" />}
          text="linkedin.com/in/elleondev"
          href="https://www.linkedin.com/in/elleondev"
        />
        <ContactItem
          icon={<MapPin className="w-3 h-3" />}
          text="Lima, Peru"
        />
        <ContactItem
          icon={<Phone className="w-3 h-3" />}
          text="+51 (---) --- ---"
        />
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
  const content = (
    <div className="flex items-center md:justify-end gap-2 text-[11px] text-cv-muted">
      {icon}
      <span>{text}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:text-cv-accent transition-colors duration-200"
      >
        {content}
      </a>
    );
  }

  return content;
};

export default CVHeader;
