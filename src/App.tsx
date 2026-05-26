import {
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  Award,
  Infinity as InfinityIcon,
  MessagesSquare,
  Headphones,
  Rocket,
  Target,
  PenLine,
  Filter,
  Search,
  Share2,
  Workflow,
  TrendingUp,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/hero-dashboard.jpg";

const benefits = [
  { icon: Rocket, title: "Do zero ao avançado", desc: "Trilha completa para quem está começando ou quer se profissionalizar." },
  { icon: Target, title: "Estratégias atualizadas", desc: "Métodos validados no mercado em 2026, sem teoria ultrapassada." },
  { icon: InfinityIcon, title: "Acesso vitalício", desc: "Estude no seu ritmo, com acesso permanente a todas as aulas." },
  { icon: Award, title: "Certificado de conclusão", desc: "Comprove sua qualificação ao final do treinamento." },
  { icon: MessagesSquare, title: "Comunidade exclusiva", desc: "Networking direto com outros alunos e profissionais da área." },
  { icon: Headphones, title: "Suporte direto", desc: "Tire suas dúvidas com o time de instrutores quando precisar." },
];

const modules = [
  { icon: TrendingUp, title: "Tráfego Pago", desc: "Fundamentos, planejamento e leitura de métricas." },
  { icon: Target, title: "Meta Ads", desc: "Campanhas no Facebook e Instagram que convertem." },
  { icon: Search, title: "Google Ads", desc: "Pesquisa, display e performance no buscador." },
  { icon: PenLine, title: "Copywriting", desc: "Escrita persuasiva para anúncios, páginas e e-mails." },
  { icon: Filter, title: "Funis de Venda", desc: "Estruture jornadas que vendem todos os dias." },
  { icon: Share2, title: "Social Media", desc: "Conteúdo estratégico para crescer nas redes." },
  { icon: Sparkles, title: "SEO", desc: "Apareça no Google com tráfego orgânico qualificado." },
  { icon: Workflow, title: "Automação", desc: "Ferramentas e fluxos para escalar sem travar." },
  { icon: Rocket, title: "Estratégias de Conversão", desc: "Otimize cada etapa para vender mais com o mesmo tráfego." },
];

const testimonials = [
  {
    name: "Mariana Alves",
    role: "Loja de moda online",
    text: "Em três meses, consegui estruturar campanhas no Meta Ads e triplicar o faturamento da minha loja. O conteúdo é direto e prático.",
  },
  {
    name: "Rafael Monteiro",
    role: "Gestor de tráfego",
    text: "Saí do zero e hoje atendo seis clientes fixos. O módulo de copywriting mudou completamente meus resultados em anúncios.",
  },
  {
    name: "Juliana Castro",
    role: "Infoprodutora",
    text: "O treinamento entrega o que promete. As aulas de funis e automação me ajudaram a escalar o lançamento sem depender de equipe.",
  },
];

const offerIncludes = [
  "Acesso completo a todos os módulos",
  "Atualizações futuras inclusas",
  "Comunidade exclusiva de alunos",
  "Bônus: templates de campanhas e copy",
  "Certificado de conclusão",
  "Garantia incondicional de 7 dias",
];

const faqs = [
  { q: "O curso serve para iniciantes?", a: "Sim. A trilha começa do absoluto zero e avança até estratégias usadas por gestores de tráfego profissionais. Você não precisa ter experiência prévia." },
  { q: "Terei certificado ao concluir?", a: "Sim. Ao finalizar todos os módulos você recebe um certificado digital de conclusão para comprovar sua qualificação." },
  { q: "Por quanto tempo terei acesso ao conteúdo?", a: "O acesso é vitalício. Você assiste no seu ritmo, revisita os módulos quando quiser e recebe todas as atualizações futuras sem custo." },
  { q: "Preciso aparecer nas redes sociais?", a: "Não. As estratégias funcionam mesmo para quem prefere atuar nos bastidores, como gestor de tráfego ou prestador de serviço para outras marcas." },
  { q: "As aulas são atualizadas?", a: "Sim. O conteúdo é revisado constantemente para acompanhar mudanças nas plataformas de anúncios, algoritmos e tendências do mercado." },
];

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Curriculum />
        <Results />
        <About />
        <Offer />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background">
            <span className="text-sm font-bold">M</span>
          </span>
          <span>Mestre do Digital</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#beneficios" className="hover:text-foreground">Benefícios</a>
          <a href="#conteudo" className="hover:text-foreground">Conteúdo</a>
          <a href="#depoimentos" className="hover:text-foreground">Depoimentos</a>
          <a href="#oferta" className="hover:text-foreground">Investimento</a>
        </nav>
        <a
          href="#oferta"
          className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:bg-foreground/90 sm:inline-flex"
        >
          Inscreva-se
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Turma 2026 aberta
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Aprenda Marketing Digital na prática e construa uma renda online real.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Domine tráfego pago, redes sociais, funis, copywriting e estratégias que realmente
            geram vendas com um método direto, atualizado e validado no mercado.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#oferta"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-sm transition hover:bg-accent/90"
            >
              Quero me inscrever
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">+3.000 alunos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="font-medium">4.9/5</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-secondary to-transparent" />
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_80px_-30px_rgba(20,20,20,0.25)]">
            <img
              src={heroImage}
              alt="Painel de métricas de campanhas digitais em laptop e celular"
              width={1280}
              height={960}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="beneficios" className="border-t border-border/60 bg-secondary/30 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Tudo o que você precisa para crescer no digital
          </h2>
          <p className="mt-4 text-muted-foreground">
            Um treinamento construído para gerar resultado prático, com método, suporte e a
            estrutura certa para você aplicar do primeiro dia.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-6 transition hover:border-foreground/20"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 text-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Curriculum() {
  return (
    <section id="conteudo" className="py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              O que você vai aprender
            </h2>
            <p className="mt-4 text-muted-foreground">
              Nove áreas essenciais para dominar o marketing digital de ponta a ponta — da
              atração ao fechamento da venda.
            </p>
          </div>
          <span className="text-sm text-muted-foreground">+120 aulas práticas</span>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {modules.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card p-6">
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-accent" />
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  const stats = [
    { value: "+R$ 2M", label: "gerados por alunos" },
    { value: "+3.000", label: "estudantes ativos" },
    { value: "+120", label: "aulas em vídeo" },
    { value: "4.9/5", label: "avaliação média" },
  ];
  return (
    <section id="depoimentos" className="bg-foreground py-20 text-background lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Resultados que falam por si
          </h2>
          <p className="mt-4 text-background/70">
            Histórias de alunos que aplicaram o método e transformaram a forma de atuar no
            mercado digital.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-background/10 p-6">
              <div className="text-3xl font-semibold tracking-tight">{s.value}</div>
              <div className="mt-1 text-sm text-background/60">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col justify-between rounded-xl border border-background/10 bg-background/[0.03] p-6"
            >
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-background/85">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-medium">{t.name}</div>
                <div className="text-xs text-background/60">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Um treinamento direto ao ponto, pensado para o mercado real
          </h2>
        </div>
        <div className="space-y-5 text-muted-foreground lg:col-span-7">
          <p>
            O Mestre do Digital foi construído para quem busca aplicação prática. Sem rodeios,
            sem teoria desnecessária: cada módulo é direcionado para que você implemente o
            conteúdo no mesmo dia em que assistir à aula.
          </p>
          <p>
            Você aprende a estruturar campanhas, criar funis, escrever copy persuasiva e
            interpretar métricas com a mesma clareza de quem já atua no mercado profissional —
            seja para escalar o próprio negócio ou para prestar serviço como gestor de tráfego.
          </p>
          <p className="text-foreground">
            O foco é resultado. O método é direto. A aplicação é imediata.
          </p>
        </div>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section id="oferta" className="border-t border-border/60 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Garanta sua vaga na turma 2026
          </h2>
          <p className="mt-4 text-muted-foreground">
            Acesso completo ao treinamento, bônus exclusivos e comunidade de alunos.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_80px_-40px_rgba(20,20,20,0.25)]">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="border-b border-border p-8 md:border-b-0 md:border-r">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                O que está incluso
              </h3>
              <ul className="mt-6 space-y-3">
                {offerIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between p-8">
              <div>
                <div className="text-sm text-muted-foreground line-through">De R$ 997</div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-sm font-medium text-muted-foreground">12x de</span>
                  <span className="text-5xl font-semibold tracking-tight">R$ 29,70</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  ou R$ 297 à vista no Pix
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="#"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-sm transition hover:bg-accent/90"
                >
                  Garantir minha vaga
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-4 w-4" />
                  7 dias de garantia incondicional
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Perguntas frequentes
        </h2>
        <p className="mt-4 text-muted-foreground">
          Tire suas dúvidas antes de garantir sua vaga.
        </p>
        <Accordion type="single" collapsible className="mt-10 w-full">
          {faqs.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="py-5 text-left text-base font-medium">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background">
              <span className="text-sm font-bold">M</span>
            </span>
            <span>Mestre do Digital</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Formação prática em marketing digital para quem busca resultado real no mercado.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
          <a href="#beneficios" className="hover:text-foreground">Benefícios</a>
          <a href="#conteudo" className="hover:text-foreground">Conteúdo</a>
          <a href="#oferta" className="hover:text-foreground">Investimento</a>
          <a href="#" className="hover:text-foreground">Termos de Uso</a>
          <a href="#" className="hover:text-foreground">Política de Privacidade</a>
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-border px-6 pt-6 text-xs text-muted-foreground">
        © {year} Mestre do Digital. Todos os direitos reservados.
      </div>
    </footer>
  );
}
