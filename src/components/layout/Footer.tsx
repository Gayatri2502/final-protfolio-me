import { companyInfo } from "@/data/companyInfo";
import { NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background">
      <div className="container-custom py-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="/" className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-sm font-bold">GS</span>
              <span className="font-display font-semibold">Gayatri Samal</span>
              <span className="mono-label text-muted-foreground hidden sm:inline">— AI/ML Studio</span>
            </a>
            <p className="mt-4 max-w-[420px] text-sm leading-6 text-muted-foreground">
              We build AI systems that help businesses scale. AI automation and SaaS development studio.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 mono-label">
              <span className="rounded-full border border-line bg-card px-3 py-1.5">Mumbai · Remote</span>
              <span className="rounded-full border border-line bg-card px-3 py-1.5 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulseDot" />
                Selective availability
              </span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="mono-label text-muted-foreground mb-4">Navigate</div>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
              <li><a href="/about" className="text-muted-foreground hover:text-foreground">About</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="mono-label text-muted-foreground mb-4">Services</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="/services" className="hover:text-foreground">AI Automation & Agents</a></li>
              <li><a href="/services" className="hover:text-foreground">Websites & Mobile Apps</a></li>
              <li><a href="/services" className="hover:text-foreground">Custom SaaS</a></li>
              <li><a href="/services" className="hover:text-foreground">ERP & CRM</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="mono-label text-muted-foreground mb-4">Contact</div>
            <div className="space-y-2 text-sm">
              <a href={companyInfo.social.email} className="block font-mono text-foreground hover:text-primary">
                {companyInfo.email}
              </a>
              <div className="text-muted-foreground">{companyInfo.location}</div>
              <div className="flex gap-3 mono-label pt-2">
                <a href={companyInfo.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a>
                <span className="opacity-30">·</span>
                <a href={companyInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
                <span className="opacity-30">·</span>
                <a href={companyInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">X</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-line pt-6 mono-label text-muted-foreground">
          <span>© {year} Gayatri Samal · AI/ML Studio</span>
          <a href="#main-content" className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-3 py-1.5 hover:border-foreground/20 hover:text-foreground transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
