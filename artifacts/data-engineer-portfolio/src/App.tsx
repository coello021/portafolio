import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Copy, Layers3, Mail, Menu, Radio, Workflow, X } from 'lucide-react';

const navItems = [
  ['Trabajo', '#trabajo'],
  ['Método', '#metodo'],
  ['Perfil', '#perfil'],
  ['Contacto', '#contacto'],
];

const projects = [
  {
    number: '01',
    type: 'CASO CONCEPTUAL · MODELADO ANALÍTICO',
    title: 'Una sola versión del pedido',
    description: 'Un recorrido desde eventos de compra duplicados y estados cambiantes hasta un modelo de pedidos que finanzas y operaciones pueden leer de la misma manera.',
    tags: ['dbt', 'SQL', 'tests de datos'],
    accent: 'sage',
    diagram: 'orders',
  },
  {
    number: '02',
    type: 'CASO CONCEPTUAL · INGESTA Y CALIDAD',
    title: 'Cuando la fuente no avisa',
    description: 'Diseño de una ingesta tolerante a esquemas que cambian: conservar el dato crudo, detectar la deriva y poner en cuarentena lo que no se puede confiar.',
    tags: ['Python', 'Parquet', 'observabilidad'],
    accent: 'clay',
    diagram: 'stream',
  },
  {
    number: '03',
    type: 'CASO CONCEPTUAL · PRODUCTO DE DATOS',
    title: 'De métricas a decisiones',
    description: 'Una capa semántica pequeña y documentada para que cada equipo deje de reconstruir definiciones de retención, cohortes y actividad.',
    tags: ['warehouse', 'métricas', 'documentación'],
    accent: 'blue',
    diagram: 'metrics',
  },
];

const skills = [
  { title: 'Ingesta', text: 'APIs, archivos y eventos con contratos explícitos; idempotencia donde importa.', icon: Radio },
  { title: 'Transformación', text: 'SQL legible, modelos con propósito y lógica de negocio en un lugar claro.', icon: Workflow },
  { title: 'Confiabilidad', text: 'Pruebas, alertas accionables y linaje que reduce el tiempo hasta entender.', icon: Check },
  { title: 'Entrega', text: 'Tablas y métricas pensadas para quien toma la decisión, no solo para quien las construye.', icon: Layers3 },
];

function DataIllustration() {
  return (
    <div className="relative w-full overflow-hidden rounded-[2px] border border-[#315f52]/20 bg-[#e7e4d7] p-5 sm:p-7">
      <div className="absolute inset-0 grid-paper opacity-60" />
      <div className="relative flex items-center justify-between pb-5">
        <span className="eyebrow text-[#526960]">Un sistema que se puede seguir</span>
        <span className="font-mono text-[10px] text-[#718078]">FIG. 01 / FLUJO DE DATOS</span>
      </div>
      <svg className="relative h-auto w-full" viewBox="0 0 620 274" role="img" aria-label="Diagrama ilustrativo de fuentes de datos, transformación y producto analítico">
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="#315f52" />
          </marker>
        </defs>
        <path className="flow-line" d="M150 61 C200 61 197 121 245 121 M150 137 C200 137 200 137 245 137 M150 213 C200 213 197 153 245 153" fill="none" stroke="#315f52" strokeWidth="1.4" markerEnd="url(#arrowhead)" />
        <path className="flow-line" d="M385 137 C432 137 425 83 472 83 M385 137 C430 137 428 190 472 190" fill="none" stroke="#315f52" strokeWidth="1.4" markerEnd="url(#arrowhead)" />
        <g fill="#f5f2e8" stroke="#aebbb0">
          <rect x="8" y="38" width="142" height="46" rx="4" /><rect x="8" y="114" width="142" height="46" rx="4" /><rect x="8" y="190" width="142" height="46" rx="4" />
        </g>
        <g fill="#193f36" fontFamily="DM Mono, monospace" fontSize="10">
          <text x="22" y="57">01 / API + EVENTOS</text><text x="22" y="72" fill="#798a7d">fuentes que cambian</text>
          <text x="22" y="133">02 / ARCHIVOS</text><text x="22" y="148" fill="#798a7d">CSV, hojas, legado</text>
          <text x="22" y="209">03 / BASES</text><text x="22" y="224" fill="#798a7d">transaccional</text>
        </g>
        <rect x="245" y="98" width="140" height="78" rx="5" fill="#315f52" />
        <text x="263" y="124" fill="#e8e7d8" fontFamily="DM Mono, monospace" fontSize="10">CAPA DE CONFIANZA</text>
        <text x="263" y="145" fill="#f6f2e8" fontFamily="Manrope, sans-serif" fontWeight="700" fontSize="14">Validar · modelar</text>
        <text x="263" y="162" fill="#c9d6c8" fontFamily="DM Mono, monospace" fontSize="9">contratos + trazabilidad</text>
        <g fill="#f5f2e8" stroke="#aebbb0">
          <rect x="472" y="59" width="138" height="48" rx="4" /><rect x="472" y="166" width="138" height="48" rx="4" />
        </g>
        <g fill="#193f36" fontFamily="DM Mono, monospace" fontSize="10">
          <text x="489" y="79">MODELOS</text><text x="489" y="95" fill="#798a7d">una lógica compartida</text>
          <text x="489" y="186">DECISIONES</text><text x="489" y="202" fill="#798a7d">datos listos para usar</text>
        </g>
        <circle cx="314" cy="226" r="2.5" fill="#dd7555" /><text x="324" y="230" fill="#65776e" fontFamily="DM Mono, monospace" fontSize="9">cada salto deja evidencia</text>
      </svg>
      <div className="relative flex justify-between border-t border-[#315f52]/15 pt-3 font-mono text-[9px] uppercase tracking-[.08em] text-[#78857c]">
        <span>Origen</span><span>Reglas</span><span>Uso</span>
      </div>
    </div>
  );
}

function ProjectDiagram({ kind }: { kind: string }) {
  if (kind === 'orders') {
    return <div className="mini-visual visual-sage"><div className="table-chip">raw.orders</div><span className="visual-arrow">→</span><div className="model-chip">int_orders<br /><small>deduplicado · tipado</small></div><span className="visual-arrow">→</span><div className="table-chip">fct_orders</div></div>;
  }
  if (kind === 'stream') {
    return <div className="mini-visual visual-clay"><div className="stream-stack"><i /><i /><i /></div><div className="stream-label">validar<br /><span>schema drift</span></div><div className="stream-stack muted-stack"><i /><i /></div><div className="stream-label">cuarentena<br /><span>sin perder origen</span></div></div>;
  }
  return <div className="mini-visual visual-blue"><div className="metric-line"><span>retención</span><b>cohorte semanal</b></div><div className="metric-line"><span>actividad</span><b>definición común</b></div><div className="metric-line"><span>fuente</span><b>linaje visible</b></div></div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = 'tu.email@ejemplo.com';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <main className="site-shell min-h-[100dvh] bg-[#f2f0e6] text-[#193f36]">
      <header className="sticky top-0 z-50 border-b border-[#193f36]/10 bg-[#f2f0e6]/95 backdrop-blur-md">
        <div className="section-wrap flex h-[72px] items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Volver al inicio" data-testid="link-inicio">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-[#315f52]/30 font-mono text-xs font-medium">OC</span>
            <span className="font-display text-[13px] font-bold tracking-[-.03em]">Oscar Coello<span className="ml-1 text-[#dd7555]">.</span></span>
          </a>
          <nav className="desktop-nav flex items-center gap-8" aria-label="Navegación principal">
            {navItems.map(([label, href]) => <a className="nav-link text-[13px] text-[#47645b] hover:text-[#193f36]" href={href} key={href} data-testid={`link-nav-${label.toLowerCase()}`}>{label}</a>)}
            <a className="ml-1 inline-flex items-center gap-2 rounded-full bg-[#315f52] px-4 py-2.5 text-xs font-semibold text-[#f2f0e6] transition hover:bg-[#234b40]" href="#contacto" data-testid="link-hablemos">Hablemos <ArrowUpRight size={14} /></a>
          </nav>
          <button className="grid h-10 w-10 place-items-center md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} data-testid="button-menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && <nav className="border-t border-[#193f36]/10 bg-[#f2f0e6] px-5 py-3 md:hidden" aria-label="Navegación móvil">{navItems.map(([label, href]) => <a key={href} className="block border-b border-[#193f36]/10 py-3 text-sm" href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
      </header>

      <section id="inicio" className="relative overflow-hidden border-b border-[#193f36]/10">
        <div className="section-wrap relative grid min-h-[700px] items-center gap-12 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
          <div className="relative z-10 max-w-[660px]">
            <div className="eyebrow reveal mb-7 flex items-center gap-3 text-[#557166]"><span className="h-px w-8 bg-[#dd7555]" /> Análisis de datos · El Salvador</div>
            <h1 className="hero-title font-display reveal reveal-delay-1 max-w-[720px] text-[clamp(4.3rem,8.6vw,7.6rem)] font-semibold leading-[.91] tracking-[-.085em]">
              El dato útil<br />no aparece.<br /><span className="text-[#dd7555]">Se construye.</span>
            </h1>
            <p className="reveal reveal-delay-2 mt-8 max-w-[490px] text-[17px] leading-[1.7] text-[#53695f]">
              Soy Oscar, estudiante de Ingeniería en Sistemas. Me enfoco en el análisis de datos y el desarrollo de software: convierto datos desordenados en información clara para decidir mejor.
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-5">
              <a className="inline-flex items-center gap-3 rounded-full bg-[#315f52] px-5 py-3.5 text-[13px] font-semibold text-[#f2f0e6] transition hover:-translate-y-0.5 hover:bg-[#234b40]" href="#trabajo" data-testid="link-ver-trabajo">Ver cómo trabajo <ArrowDown size={15} /></a>
              <a className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#315f52] underline decoration-[#315f52]/35 underline-offset-4 hover:decoration-[#315f52]" href="#contacto" data-testid="link-contacto-hero">Estoy abierto a conversar <ArrowUpRight size={14} /></a>
            </div>
            <p className="eyebrow mt-12 text-[#8a9386]">Casos de ejemplo · reemplazar por proyectos reales</p>
          </div>
          <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
            <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full border border-[#dd7555]/30" />
            <div className="absolute -right-3 -top-5 h-28 w-28 rounded-full border border-[#dd7555]/35" />
            <div className="relative z-10 rotate-[1deg]">
              <DataIllustration />
            </div>
            <div className="absolute -bottom-5 -left-5 z-20 flex items-center gap-3 border border-[#193f36]/10 bg-[#f2f0e6] px-4 py-3 shadow-[0_12px_30px_rgba(25,63,54,.08)]">
              <span className="h-2 w-2 rounded-full bg-[#dd7555]" />
              <span className="font-mono text-[10px] uppercase tracking-[.08em] text-[#47645b]">Del origen al criterio</span>
            </div>
          </div>
        </div>
        <a href="#enfoque" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[.13em] text-[#74837a] lg:flex" data-testid="link-scroll-enfoque">Desliza para explorar <ChevronDown size={14} /></a>
      </section>

      <section id="enfoque" className="section-wrap grid gap-10 border-b border-[#193f36]/10 py-9 md:grid-cols-[1fr_2.1fr] md:items-center">
        <p className="eyebrow flex items-center gap-3 text-[#7c897f]"><span className="text-[#dd7555]">01</span> La premisa</p>
        <p className="font-display max-w-[800px] text-[clamp(1.25rem,2.5vw,2rem)] font-medium leading-[1.35] tracking-[-.045em]">
          Un buen pipeline no es el que solo corre. Es el que alguien más puede <span className="text-[#dd7555]">entender, confiar y cambiar</span> sin miedo.
        </p>
      </section>

      <section id="trabajo" className="section-wrap section-pad">
        <div className="mb-14 grid gap-5 md:grid-cols-[1fr_.75fr] md:items-end">
          <div>
            <p className="eyebrow mb-5 text-[#dd7555]">02 / Trabajo ilustrativo</p>
            <h2 className="font-display max-w-[680px] text-5xl font-semibold leading-[1.03] tracking-[-.07em] sm:text-6xl">Problemas reales.<br />Casos <span className="text-[#dd7555]">conceptuales.</span></h2>
          </div>
          <p className="max-w-[400px] pb-1 text-sm leading-7 text-[#62746b]">Estos ejemplos muestran el tipo de decisiones técnicas que me interesan. Son escenarios demostrativos, no proyectos ni resultados atribuidos a clientes.</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.number} className={`project-card group flex min-h-[440px] flex-col border border-[#193f36]/15 bg-[#f6f4eb] p-6 sm:p-7 ${project.accent === 'clay' ? 'project-clay' : project.accent === 'blue' ? 'project-blue' : ''}`} data-testid={`card-proyecto-${project.number}`}>
              <div className="flex items-start justify-between">
                <span className="eyebrow text-[#dd7555]">{project.number} / {project.type}</span>
                <ArrowUpRight size={17} className="shrink-0 text-[#708077] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#dd7555]" />
              </div>
              <h3 className="mt-8 font-display text-[26px] font-semibold leading-[1.1] tracking-[-.055em]">{project.title}</h3>
              <p className="mt-4 text-[13px] leading-[1.75] text-[#60736a]">{project.description}</p>
              <ProjectDiagram kind={project.diagram} />
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {project.tags.map(tag => <span className="rounded-full border border-[#315f52]/20 px-2.5 py-1 font-mono text-[9px] text-[#53695f]" key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 font-mono text-[10px] text-[#8a9386]">Nota: reemplaza estos casos por proyectos propios antes de publicar.</p>
      </section>

      <section id="metodo" className="bg-[#193f36] text-[#f2f0e6]">
        <div className="section-wrap section-pad">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow mb-6 text-[#e28a6d]">03 / Mi método</p>
              <h2 className="font-display text-5xl font-semibold leading-[1.02] tracking-[-.07em] sm:text-6xl">Primero, entender.<br /><span className="text-[#a9c7b6]">Después, automatizar.</span></h2>
              <p className="mt-7 max-w-[370px] text-sm leading-7 text-[#bfd0c4]">La herramienta correcta cambia. El criterio para elegirla y mantenerla, no tanto.</p>
              <a href="#contacto" className="arrow-link mt-8 inline-flex items-center gap-3 border-b border-[#f2f0e6]/30 pb-2 text-[13px] font-medium text-[#f2f0e6]" data-testid="link-conversemos">Conversemos sobre tu stack <ArrowRight size={15} /></a>
            </div>
            <div className="border-t border-[#f2f0e6]/20">
              {[
                ['01', 'Rastrear el origen', 'Qué llega, quién lo produce, con qué frecuencia y qué se rompe si cambia.'],
                ['02', 'Hacer explícitas las reglas', 'Nombrar supuestos, resolver ambigüedades y acordar qué significa “correcto”.'],
                ['03', 'Diseñar para el cambio', 'Separar responsabilidades, versionar transformaciones y probar los bordes.'],
                ['04', 'Entregar contexto', 'Documentar decisiones, linaje y alertas para que el sistema sea operable por el equipo.'],
              ].map(([n, title, text]) => <div className="grid grid-cols-[48px_1fr] gap-4 border-b border-[#f2f0e6]/20 py-6 sm:grid-cols-[70px_1fr] sm:gap-7" key={n}>
                <span className="font-mono text-xs text-[#e28a6d]">{n}</span>
                <div><h3 className="font-display text-[19px] font-semibold tracking-[-.03em]">{title}</h3><p className="mt-2 max-w-[490px] text-[13px] leading-6 text-[#b8c9bd]">{text}</p></div>
              </div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap section-pad">
        <div className="mb-12 grid gap-5 md:grid-cols-[1fr_.7fr] md:items-end">
          <div><p className="eyebrow mb-5 text-[#dd7555]">04 / Oficio</p><h2 className="font-display text-5xl font-semibold tracking-[-.07em] sm:text-6xl">Un sistema de datos<br /><span className="text-[#758a7d]">es un producto.</span></h2></div>
          <p className="max-w-[390px] text-sm leading-7 text-[#62746b]">Pienso en el ciclo completo: desde la primera fila que llega hasta la persona que necesita actuar con ella.</p>
        </div>
        <div className="grid border-t border-[#193f36]/15 sm:grid-cols-2">
          {skills.map(({ title, text, icon: Icon }, index) => <div className={`grid grid-cols-[46px_1fr] gap-4 border-b border-[#193f36]/15 py-7 ${index % 2 === 0 ? 'sm:pr-9 sm:border-r' : 'sm:pl-9'}`} key={title}>
            <div className="grid h-10 w-10 place-items-center rounded-full border border-[#315f52]/25 text-[#315f52]"><Icon size={17} strokeWidth={1.7} /></div>
            <div><h3 className="font-display text-lg font-semibold tracking-[-.035em]">{title}</h3><p className="mt-2 max-w-[400px] text-[13px] leading-6 text-[#69796f]">{text}</p></div>
          </div>)}
        </div>
      </section>

      <section className="bg-[#e4e2d6]">
        <div className="section-wrap section-pad">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className="eyebrow mb-5 text-[#dd7555]">05 / Caja de herramientas</p><h2 className="font-display text-5xl font-semibold leading-[1.02] tracking-[-.07em]">Pragmático con<br />la tecnología.</h2><p className="mt-6 max-w-[330px] text-sm leading-7 text-[#64766c]">El stack es un medio, no una identidad. Estas son las herramientas que uso hoy y sigo aprendiendo.</p></div>
            <div className="grid gap-x-8 sm:grid-cols-2">
              {[
                ['Visualización', 'Power BI · DAX · dashboards'],
                ['Modelado', 'Esquema estrella · SQL'],
                ['Programación', 'Python · pandas · notebooks'],
                ['Bases de datos', 'SQLite · Excel'],
                ['Automatización', 'Power Platform · scripts'],
                ['Control de versiones', 'Git · GitHub · Node.js'],
              ].map(([label, value], i) => <div key={label} className="flex gap-4 border-b border-[#193f36]/15 py-5">
                <span className="font-mono text-[10px] text-[#dd7555]">0{i + 1}</span><div><p className="font-display text-[15px] font-semibold">{label}</p><p className="mt-1 font-mono text-[10px] leading-5 text-[#64766c]">{value}</p></div>
              </div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="perfil" className="section-wrap section-pad">
        <div className="grid gap-14 md:grid-cols-[.65fr_1.35fr]">
          <div><p className="eyebrow mb-5 text-[#dd7555]">06 / Perfil</p><div className="relative grid aspect-[4/4.5] max-w-[330px] place-items-center overflow-hidden bg-[#315f52] text-[#f2f0e6]">
            <div className="absolute inset-4 border border-[#f2f0e6]/25" /><div className="absolute left-8 top-8 font-mono text-[9px] tracking-[.14em] text-[#c3d5c8]">OC / EN CONSTRUCCIÓN</div>
            <div className="relative"><div className="font-display text-[130px] font-semibold leading-none tracking-[-.12em]">O<span className="text-[#e28a6d]">.</span></div><div className="mt-1 text-right font-mono text-[9px] uppercase tracking-[.18em] text-[#c3d5c8]">ingeniería + curiosidad</div></div>
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between border-t border-[#f2f0e6]/25 pt-3"><span className="font-mono text-[9px] uppercase tracking-[.1em]">Ing. en Sistemas</span><span className="font-mono text-[9px]">EL SALVADOR</span></div>
          </div></div>
          <div className="pt-1">
            <p className="font-display max-w-[680px] text-[clamp(2.1rem,4.2vw,3.8rem)] font-medium leading-[1.12] tracking-[-.065em]">Me interesa el espacio entre <span className="text-[#dd7555]">“tenemos datos”</span> y “sabemos qué hacer”.</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <p className="text-[13px] leading-7 text-[#62746b]">Ese espacio suele llenarse de definiciones duplicadas, procesos frágiles y preguntas que nadie sabe responder con confianza. Ahí es donde disfruto trabajar.</p>
              <p className="text-[13px] leading-7 text-[#62746b]">Estudio Ingeniería en Sistemas en El Salvador y trabajo con Power BI, DAX y Python en proyectos de logística y digitalización de procesos. Valoro la claridad y aprender del problema antes de elegir la herramienta.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">{['Curiosidad antes que dogma', 'Claridad sobre complejidad', 'Calidad desde el diseño'].map(item => <span key={item} className="rounded-full border border-[#315f52]/20 px-3 py-2 font-mono text-[9px] uppercase tracking-[.04em] text-[#526960]">{item}</span>)}</div>
          </div>
        </div>
      </section>

      <section id="contacto" className="relative overflow-hidden bg-[#dd7555] text-[#332b24]">
        <div className="section-wrap relative z-10 py-24 sm:py-32">
          <p className="eyebrow mb-7 text-[#553c30]">07 / Siguiente paso</p>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><h2 className="font-display max-w-[790px] text-[clamp(3.4rem,8vw,7.1rem)] font-semibold leading-[.91] tracking-[-.085em]">¿Qué dato te<br />está quitando<br /><span className="text-[#f4eadd]">el sueño?</span></h2><p className="mt-7 max-w-[450px] text-[15px] leading-7 text-[#533b30]">Cuéntame el contexto, el problema y lo que ya intentaste. Las conversaciones buenas empiezan por ahí.</p></div>
            <a href={`mailto:${email}`} className="arrow-link inline-flex w-fit items-center gap-3 border-b border-[#332b24]/40 pb-3 text-[15px] font-semibold" data-testid="link-email"><Mail size={18} /> Escribir un correo <ArrowUpRight size={16} /></a>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#533b30]/25 pt-5">
            <span className="font-mono text-[10px] uppercase tracking-[.1em] text-[#664a3b]">Correo editable · reemplazar antes de publicar</span>
            <span className="font-mono text-[12px]">{email}</span>
            <button onClick={copyEmail} className="inline-flex items-center gap-2 rounded-full border border-[#533b30]/30 px-3 py-1.5 font-mono text-[10px] transition hover:bg-[#f2f0e6]/25" aria-label="Copiar correo de contacto" data-testid="button-copiar-correo">{copied ? <Check size={13} /> : <Copy size={13} />}{copied ? 'Copiado' : 'Copiar'}</button>
          </div>
        </div>
        <div className="pointer-events-none absolute -bottom-28 -right-24 h-[410px] w-[410px] rounded-full border border-[#533b30]/20" /><div className="pointer-events-none absolute -bottom-16 -right-12 h-[300px] w-[300px] rounded-full border border-[#533b30]/20" />
      </section>

      <footer className="bg-[#193f36] text-[#f2f0e6]">
        <div className="section-wrap flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
          <a href="#inicio" className="font-display text-sm font-bold tracking-[-.03em]" data-testid="link-pie-inicio">Oscar Coello<span className="text-[#e28a6d]">.</span></a>
          <p className="font-mono text-[9px] uppercase tracking-[.08em] text-[#afc2b5]">El Salvador · <a className="underline underline-offset-2" href="https://github.com/coello021" target="_blank" rel="noreferrer" data-testid="link-github">github.com/coello021</a> · © {new Date().getFullYear()}</p>
          <a href="#inicio" className="arrow-link inline-flex items-center gap-2 text-[11px] text-[#d6e0d5]" data-testid="link-volver-arriba">Volver arriba <ArrowUpRight size={13} /></a>
        </div>
      </footer>
    </main>
  );
}

export default App;
