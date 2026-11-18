"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BadgeCheck, Mail, MapPin, Menu, Phone, X, Plus } from "lucide-react";
import { asset, company, credentials, divisions, fleet, fmtNaira, gallery, principles, steps, projects, stats } from "@/lib/site";

const nav = [
  { href: "#about", l: "About" },
  { href: "#divisions", l: "Divisions" },
  { href: "#projects", l: "Track record" },
  { href: "#method", l: "How we work" },
  { href: "#standing", l: "Compliance" },
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function Tag({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`mb-5 inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] ${dark ? "text-brand" : "text-brand-deep"}`}>
      <span className="h-px w-8 bg-current" aria-hidden />
      {children}
    </p>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/92 backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label={`${company.name} — home`} className="flex items-center gap-3">
          <img src={asset("/logo-emblem.png")} alt="" className="h-11 w-auto sm:h-12" width={519} height={535} />
          <span className="leading-none">
            <span className="block font-display text-[15px] font-bold uppercase tracking-[0.08em] sm:text-[17px]">Rylin Tech Nigeria Limited</span>
            <span className="mt-1 block font-mono text-[10px] tracking-[0.2em] text-brand-deep">{company.rc}</span>
          </span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-[13.5px] font-medium text-mute transition hover:text-ink">{n.l}</a>
          ))}
          <a href="#contact" className="cut-sm bg-ink px-5 py-2.5 text-[13.5px] font-semibold text-white transition hover:bg-brand-deep">Request a quote</a>
        </nav>
        <button className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-line bg-paper px-6 pb-6 lg:hidden">
          {nav.concat([{ href: "#contact", l: "Contact" }]).map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-line py-3.5 font-display text-2xl">{n.l}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const words = ["Construction", "Consultancy", "Computer IT / ICT", "General Supplies", "General Contracts"];
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-white">
      <div className="grid-ink absolute inset-0" aria-hidden />
      <div className="absolute -left-40 top-1/3 h-[34rem] w-[34rem] rounded-full bg-brand/15 blur-3xl" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-28 pt-16 sm:px-8 lg:grid-cols-12 lg:pb-32 lg:pt-24">
        <motion.div className="lg:col-span-7" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Tag dark>Kaduna, Nigeria · {company.rc}</Tag>
          <h1 className="text-[clamp(2.8rem,7.2vw,6rem)] font-semibold leading-[0.95]">
            We build it.<br />
            We <span className="text-brand">wire</span> it.<br />
            We deliver it.
          </h1>
          <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-white/70">
            Rylin Tech Nigeria Limited is a multidisciplinary firm that joins engineering and construction with consultancy, ICT and procurement, so public and private clients deal with one accountable team from planning to completion.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="group cut-sm inline-flex items-center gap-3 bg-brand px-7 py-4 text-sm font-semibold text-ink transition hover:bg-white">
              Discuss your project <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </a>
            <a href="#projects" className="inline-flex items-center gap-3 border border-white/25 px-7 py-4 text-sm font-semibold transition hover:border-brand hover:text-brand">
              See our track record
            </a>
          </div>
        </motion.div>

        <motion.div className="relative lg:col-span-5" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }}>
          <div className="cut scan relative overflow-hidden border border-brand/40 bg-ink-2">
            <img src={asset("/images/duplex-front.jpg")} alt="Two-storey duplex with stone and render finish, completed by Rylin Tech in Abuja" className="aspect-[4/5] w-full object-cover object-[30%_50%]" width={951} height={696} />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" aria-hidden />
            <p className="absolute bottom-4 left-5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/90">Fig. 01 — APO 3, Abuja</p>
          </div>
          {/* dimension marks */}
          <svg className="absolute -left-5 top-8 hidden h-[78%] w-3 text-brand sm:block" viewBox="0 0 12 100" preserveAspectRatio="none" aria-hidden>
            <path d="M6 0 V100 M0 1 H12 M0 99 H12" stroke="currentColor" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="absolute -bottom-7 right-4 bg-white px-5 py-4 text-ink shadow-2xl sm:-right-4">
            <img src={asset("/logo-emblem.png")} alt="" className="h-12 w-auto" width={519} height={535} />
          </div>
        </motion.div>
      </div>

      <div className="relative overflow-hidden border-t border-white/10 bg-ink-2 py-4" aria-hidden>
        <div className="drift flex w-max gap-12 whitespace-nowrap font-mono text-[12px] uppercase tracking-[0.22em] text-white/55">
          {[...words, ...words, ...words, ...words].map((w, i) => (
            <span key={i} className="flex items-center gap-12">{w}<span className="text-brand">◆</span></span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section aria-label="At a glance" className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-12 sm:px-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.v} delay={i * 0.06} className="border-l-2 border-brand pl-5 pr-3">
            <p className="font-display text-4xl font-semibold sm:text-5xl">{s.v}</p>
            <p className="mt-2 text-[13px] leading-snug text-mute">{s.l}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="grid-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Tag>Who we are</Tag>
            <h2 className="text-4xl font-semibold leading-[1.02] sm:text-5xl">An indigenous firm built to remove the gaps between disciplines.</h2>
            <div className="mt-8 flex items-center gap-4 border-t border-line pt-6 text-sm text-mute">
              <img src={asset("/logo-emblem.png")} alt="" className="h-11 w-auto" width={519} height={535} />
              <span>Incorporated {company.incorporated} under the Companies and Allied Matters Act · {company.rc}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-[17px] leading-relaxed text-mute lg:col-span-7">
            <p>Rylin Tech Nigeria Limited was established by a team of experienced Nigerian professionals who pooled their expertise and resources to deliver integrated services in Construction, Consultancy, Computer IT/ICT, General Supplies and General Contracts.</p>
            <p>Working from our Kaduna office, we provide comprehensive contract solutions for public and private sector clients. The company exists to address the need for reliable multidisciplinary firms that can handle complex projects while minimising the coordination problems between clients, consultants, contractors and technical advisers.</p>
            <p className="border-l-4 border-brand bg-white py-4 pl-6 pr-4 font-display text-2xl font-medium leading-snug text-ink">
              Quality and safety are not optional. They are essential components of sustainable project success.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px border border-line bg-line md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08} className="bg-white p-8">
              <p className="font-mono text-xs text-brand-deep">0{i + 1}</p>
              <h3 className="mt-4 text-xl font-semibold leading-snug">{p.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mute">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Divisions() {
  const [active, setActive] = useState(0);
  const cur = divisions[active];
  return (
    <section id="divisions" className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="max-w-3xl">
          <Tag dark>Five divisions · one company</Tag>
          <h2 className="text-4xl font-semibold leading-[1.02] sm:text-5xl">Everything a project needs, under one roof.</h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div role="tablist" aria-label="Divisions" className="lg:col-span-5">
            {divisions.map((d, i) => (
              <button key={d.id} role="tab" id={`tab-${d.id}`} aria-selected={active === i} aria-controls="division-panel" onClick={() => setActive(i)}
                className={`group flex w-full items-center gap-5 border-t border-white/15 px-1 py-5 text-left transition last:border-b ${active === i ? "text-brand" : "text-white/60 hover:text-white"}`}>
                <span className="font-mono text-xs">{d.n}</span>
                <span className="font-display text-xl font-medium sm:text-2xl">{d.t}</span>
                <ArrowUpRight size={20} className={`ml-auto shrink-0 transition ${active === i ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`} />
              </button>
            ))}
          </div>

          <div id="division-panel" role="tabpanel" aria-labelledby={`tab-${cur.id}`} className="lg:col-span-7">
            <motion.div key={cur.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="cut relative border border-brand/30 bg-ink-2 p-8 sm:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">{cur.n} / {cur.tag}</p>
              <h3 className="mt-3 text-3xl font-semibold sm:text-4xl">{cur.t}</h3>
              <p className="mt-5 text-[16px] leading-relaxed text-white/70">{cur.d}</p>
              <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {cur.pts.map((p) => (
                  <li key={p} className="flex gap-3 text-[14.5px] text-white/85">
                    <Plus size={16} className="mt-0.5 shrink-0 text-brand" /> {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Convergence() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:py-28">
        <Reveal className="relative lg:col-span-6">
          <div className="grid h-[460px] grid-cols-5 grid-rows-5 gap-3">
            <img src={asset("/images/ict-desk.jpg")} alt="Engineer working across multiple screens and a laptop" className="cut-sm col-span-3 row-span-5 h-full w-full object-cover" width={873} height={765} />
            <img src={asset("/images/ict-cloud.jpg")} alt="Hands holding a tablet with cloud and connected-device icons" className="col-span-2 row-span-2 h-full w-full object-cover" width={924} height={428} />
            <img src={asset("/images/consulting.jpg")} alt="Team in an IT consulting session around a laptop and documents" className="col-span-2 row-span-3 h-full w-full object-cover" width={512} height={288} />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6">
          <Tag>Engineering × Technology</Tag>
          <h2 className="text-4xl font-semibold leading-[1.02] sm:text-5xl">Technology is part of how we build, not an add-on.</h2>
          <p className="mt-6 text-[17px] leading-relaxed text-mute">
            Our expansion into Computer IT/ICT recognises the role technology now plays in infrastructure, business operations and project management. We integrate ICT systems into engineering and construction operations to improve efficiency, transparency, documentation and real-time project monitoring.
          </p>
          <ul className="mt-8 divide-y divide-line border-y border-line text-[15px]">
            {["Networks, CCTV and surveillance for the sites and buildings we deliver", "Software, databases and websites for corporate and government clients", "Solar-powered ICT where grid power cannot be relied on", "Cybersecurity support and ICT equipment supply and maintenance"].map((t) => (
              <li key={t} className="flex gap-3 py-3.5"><BadgeCheck size={18} className="mt-0.5 shrink-0 text-brand" />{t}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Projects() {
  const total = projects.reduce((s, p) => s + p.value, 0);
  return (
    <section id="projects" className="grid-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Tag>Track record</Tag>
            <h2 className="text-4xl font-semibold leading-[1.02] sm:text-5xl">Awarded by government and private clients.</h2>
          </div>
          <div className="text-right">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">Combined award value</p>
            <p className="font-display text-4xl font-semibold text-brand-deep sm:text-5xl">{fmtNaira(total)}</p>
          </div>
        </Reveal>

        <div className="mt-14 border-t-2 border-ink">
          {projects.map((p, i) => (
            <Reveal key={p.ref} delay={i * 0.05}>
              <article className="grid gap-4 border-b border-line py-8 lg:grid-cols-12 lg:items-start lg:gap-8">
                <div className="lg:col-span-2">
                  <p className="font-mono text-xs text-brand-deep">{p.date}</p>
                  <p className="mt-2 inline-block bg-brand-soft px-2.5 py-1 font-mono text-[11px] font-medium text-brand-deep">{p.status}</p>
                </div>
                <div className="lg:col-span-6">
                  <h3 className="text-xl font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-mute">{p.client}</p>
                </div>
                <div className="lg:col-span-2">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-mute">{p.sector}</p>
                  <p className="mt-1 text-sm text-mute">Period: {p.term}</p>
                </div>
                <p className="font-display text-2xl font-semibold lg:col-span-2 lg:text-right">{fmtNaira(p.value)}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-xs text-mute">Values are contract award sums from award letters in our 2026 company profile. Copies are available to prospective clients on request.</p>

        <div className="mt-20 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Tag>Plant &amp; fleet</Tag>
            <h3 className="text-3xl font-semibold leading-tight">The machines to match the scope.</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-mute">From our equipment schedule: owned and leased plant for earthworks, concrete and site logistics.</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:col-span-8">
            {fleet.map((f, i) => (
              <Reveal key={f.l} delay={i * 0.04} className="bg-white p-6">
                <p className="font-display text-4xl font-semibold text-brand-deep">{f.n}</p>
                <p className="mt-1 text-sm text-mute">{f.l}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section id="method" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="max-w-3xl">
          <Tag>How we work</Tag>
          <h2 className="text-4xl font-semibold leading-[1.02] sm:text-5xl">Every project has a manager, a method and a record.</h2>
        </Reveal>
        <ol className="mt-14 grid gap-px border border-line bg-line md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.07} className="relative bg-paper p-8">
              <p className="font-display text-6xl font-semibold text-brand/25">{i + 1}</p>
              <h3 className="mt-3 text-xl font-semibold">{s.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mute">{s.d}</p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={i * 0.06}>
              <figure>
                <img src={asset(g.src)} alt={g.alt} loading="lazy" className="cut-sm aspect-[4/3] w-full object-cover" />
                <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-wider text-mute">{g.cap}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Standing() {
  return (
    <section id="standing" className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Tag dark>Compliance</Tag>
            <h2 className="text-4xl font-semibold leading-[1.02]">In good standing, on paper.</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/65">Our corporate, tax, pension, training-fund, employee-compensation and procurement documents are compiled in our company profile and available to clients and procurement officers on request.</p>
          </Reveal>
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:col-span-8">
            {credentials.map((c, i) => (
              <Reveal key={c.k} delay={i * 0.04} className="flex items-center gap-4 bg-ink-2 p-6">
                <span className="flex h-12 w-16 shrink-0 items-center justify-center border border-brand/50 font-mono text-[11px] font-semibold text-brand">{c.k}</span>
                <div><p className="font-semibold">{c.t}</p>{c.d && <p className="mt-1 text-sm text-white/55">{c.d}</p>}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [href, setHref] = useState("");
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Enquiry from ${f.get("name")} — ${f.get("service")}`;
    const body = `Name: ${f.get("name")}\nOrganisation: ${f.get("org") || "-"}\nPhone: ${f.get("phone") || "-"}\nEmail: ${f.get("email")}\nInterest: ${f.get("service")}\n\n${f.get("message")}`;
    const q = `su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setHref(`https://mail.google.com/mail/?view=cm&to=${company.email}&${q}`);
    setSent(true);
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  const field = "w-full border border-line bg-white px-4 py-3.5 text-[15px] outline-none transition focus:border-brand";
  return (
    <section id="contact" className="grid-paper">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:py-32">
        <Reveal className="lg:col-span-5">
          <Tag>Contact</Tag>
          <h2 className="text-4xl font-semibold leading-[1.02] sm:text-5xl">Tell us what you need built, installed or supplied.</h2>
          <address className="mt-10 space-y-6 not-italic">
            <div className="flex gap-4"><MapPin className="mt-1 shrink-0 text-brand-deep" size={20} />
              <div><p className="font-semibold">Head office</p><p className="text-mute">{company.addressLines.join(" ")}</p>
                <a href={company.map} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-brand-deep hover:underline">Open in Maps <ArrowUpRight size={14} /></a></div></div>
            <div className="flex gap-4"><Phone className="mt-1 shrink-0 text-brand-deep" size={20} />
              <div><p className="font-semibold">Call</p>{company.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`} className="block text-mute hover:text-ink">{p.display}</a>)}</div></div>
            <div className="flex gap-4"><Mail className="mt-1 shrink-0 text-brand-deep" size={20} />
              <div><p className="font-semibold">Email</p><a href={`mailto:${company.email}`} className="text-mute hover:text-ink">{company.email}</a></div></div>
          </address>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <form onSubmit={onSubmit} className="cut space-y-4 border border-line bg-white p-6 sm:p-9">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium">Full name<input required name="name" autoComplete="name" className={`${field} mt-1.5`} /></label>
              <label className="block text-sm font-medium">Organisation<input name="org" autoComplete="organization" className={`${field} mt-1.5`} /></label>
              <label className="block text-sm font-medium">Email<input required type="email" name="email" autoComplete="email" className={`${field} mt-1.5`} /></label>
              <label className="block text-sm font-medium">Phone<input type="tel" name="phone" autoComplete="tel" className={`${field} mt-1.5`} /></label>
            </div>
            <label className="block text-sm font-medium">I&rsquo;m interested in
              <select name="service" className={`${field} mt-1.5`} defaultValue={divisions[0].t}>
                {divisions.map((d) => <option key={d.id}>{d.t}</option>)}
                <option>Something else</option>
              </select>
            </label>
            <label className="block text-sm font-medium">Project details<textarea required name="message" rows={5} className={`${field} mt-1.5`} /></label>
            <button className="cut-sm inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm font-semibold text-white transition hover:bg-brand-deep">Send enquiry <ArrowRight size={17} /></button>
            {sent && (
              <p role="status" className="text-sm text-mute">Your email app should open with the message filled in. If it didn&rsquo;t, <a className="font-semibold text-brand-deep underline" href={href} target="_blank" rel="noreferrer">send it with Gmail</a> or write to {company.email}.</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <div className="bg-white p-3"><img src={asset("/logo-emblem.png")} alt="" className="h-12 w-auto" width={519} height={535} /></div>
          <div className="text-sm"><p className="font-display text-lg font-semibold text-white">{company.name}</p><p>{company.rc} · {company.address}</p></div>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {nav.map((n) => <a key={n.href} href={n.href} className="hover:text-brand">{n.l}</a>)}
          <a href="#contact" className="hover:text-brand">Contact</a>
        </nav>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs text-white/45">© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Divisions />
        <Convergence />
        <Projects />
        <Method />
        <Standing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
