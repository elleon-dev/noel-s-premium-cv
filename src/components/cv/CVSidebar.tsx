const skills = {
  core: [
    "Entrepreneurship",
    "Business Development",
    "Strategic Thinking",
    "Startup Growth",
    "Project Management",
  ],
  stack: [
    "Full Stack Development",
    "React / TypeScript",
    "Node.js",
    "Digital Products",
    "Web Applications",
  ],
  business: [
    "Import & Trade",
    "International Sourcing",
    "Sales Operations",
  ],
};

const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Elementary" },
];

const CVSidebar = () => {
  return (
    <aside className="space-y-8">
      <SkillSection title="Core Skills" items={skills.core} />
      <SkillSection title="Technical Stack" items={skills.stack} />
      <SkillSection title="Business" items={skills.business} />

      <section>
        <SectionTitle>Languages</SectionTitle>
        <div className="space-y-2.5">
          {languages.map((lang) => (
            <div key={lang.name} className="flex justify-between text-[11px]">
              <span className="text-foreground font-medium">{lang.name}</span>
              <span className="text-cv-muted italic">{lang.level}</span>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-[10px] uppercase tracking-[0.15em] text-cv-muted font-semibold mb-4">
    {children}
  </h3>
);

const SkillSection = ({ title, items }: { title: string; items: string[] }) => (
  <section>
    <SectionTitle>{title}</SectionTitle>
    <div className="flex flex-wrap gap-1.5">
      {items.map((skill) => (
        <span
          key={skill}
          className="px-2.5 py-1 bg-cv-subtle text-foreground text-[10px] font-medium rounded border border-cv-border"
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default CVSidebar;
