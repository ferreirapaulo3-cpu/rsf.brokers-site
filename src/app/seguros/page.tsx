import Link from "next/link";
import { ArrowRight, Car, Home as HomeIcon, HeartPulse, Building2, Plane, Shield, Briefcase, Users, Baby, PawPrint, PiggyBank } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader, Breadcrumbs, SectionTitle } from "@/components/site/layout";
import { CTASection } from "@/components/site/cta-section";
import { insurances, type Insurance } from "@/lib/site-data";

const categories: {
  id: Insurance["category"];
  icon: any;
  description: string;
}[] = [
  { id: "Particulares", icon: Users, description: "Seguros para o seu dia-a-dia, casa, carro, família e poupança." },
  { id: "Empresas", icon: Briefcase, description: "Coberturas adaptadas à atividade, dimensão e riscos do negócio." },
  { id: "Saúde e proteção", icon: HeartPulse, description: "Planos de saúde, dentário, acidentes pessoais e animais." },
  { id: "Veículos e lazer", icon: Plane, description: "Viagens, embarcações, caça e motas." },
];

export const metadata = {
  title: "Seguros — particulares, empresas, saúde, veículos e lazer",
  description:
    "Catálogo de ramos da RSF | Brokers: automóvel, habitação, saúde, vida, empresas, acidentes de trabalho, responsabilidade civil, viagem e muito mais.",
  alternates: { canonical: "/seguros" },
};

const iconFor = (slug: string): any => {
  const map: Record<string, any> = {
    automovel: Car,
    motas: Car,
    "multirriscos-habitacao": HomeIcon,
    "multirriscos-condominio": Building2,
    "acidentes-trabalho-part": Shield,
    "acidentes-trabalho-domestica": Users,
    "protecao-crianca": Baby,
    "rc-familiar": Shield,
    "rc-animais": PawPrint,
    safepet: PawPrint,
    "acidentes-pessoais": Shield,
    "planos-saude": HeartPulse,
    "saude-dentario": HeartPulse,
    "vida-risco": Shield,
    "vida-credito-habitacao": HomeIcon,
    "vida-misto": Shield,
    ppr: PiggyBank,
    viagem: Plane,
    caca: Shield,
    "embarcacoes-recreio": Plane,
    "automovel-empresa": Car,
    "acidentes-trabalho-emp": Shield,
    "rc-empresa": Shield,
    "multirriscos-empresarial": Briefcase,
  };
  return map[slug] || Shield;
};

export default function SegurosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Seguros"
        title="Proteção para particulares e empresas, à medida."
        description="A RSF | Brokers trabalha como mediador multimarca — solicitamos propostas a várias seguradoras e recomendamos a solução mais adequada. Veja abaixo os ramos disponíveis por categoria."
      />
      <Breadcrumbs items={[{ label: "Seguros" }]} />

      {categories.map((cat, idx) => {
        const items = insurances.filter(i => i.category === cat.id);
        const bgClass = idx % 2 === 1 ? "bg-secondary/50 border-y border-border" : "";
        return (
          <section key={cat.id} className={`py-16 md:py-20 ${bgClass}`}>
            <div className="container-rsf">
              <div className="flex items-start gap-4 mb-10 max-w-3xl">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary grid place-items-center flex-shrink-0">
                  <cat.icon className="w-6 h-6" />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2 bg-accent/15 text-accent-ink border-accent/30">Categoria {idx + 1}</Badge>
                  <h2 className="font-serif text-2xl md:text-3xl text-primary mb-2">{cat.id}</h2>
                  <p className="text-muted-foreground leading-relaxed">{cat.description}</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((item) => {
                  const Icon = iconFor(item.slug);
                  return (
                    <Card key={item.slug} className="group hover:shadow-md transition-all border-border/60 hover:border-primary/30 h-full flex flex-col">
                      <CardContent className="p-5 flex flex-col h-full">
                        <div className="w-10 h-10 rounded-md bg-primary/10 text-primary grid place-items-center mb-3 group-hover:bg-accent/15 group-hover:text-accent-ink transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-serif text-lg text-primary mb-1.5 leading-snug">{item.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{item.description}</p>
                        <Link href={item.href} className="inline-flex items-center gap-1 text-sm font-semibold text-accent-ink hover:gap-1.5 transition-all mt-auto">
                          {item.hasDetailPage ? "Ver detalhes" : "Pedir orçamento"}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* Serviços complementares */}
      <section className="py-20">
        <div className="container-rsf">
          <SectionTitle
            eyebrow="Outros serviços"
            title="Mais do que seguros — soluções do dia-a-dia"
            description="A RSF | Brokers disponibiliza ainda um conjunto de serviços complementares, em parceria. Disponibilidade atual sujeita a confirmação."
          />
          <div className="grid mt-12 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            {[
              "Gestão de condomínios",
              "Serviços de limpeza",
              "Oficina de reparação automóvel parceira",
              "Serviço de contabilidade com empresa certificada",
              "Documentação automóvel",
              "Renovação de carta de condução",
              "Certificados energéticos",
              "Contratos de telecomunicações",
              "Contratos de eletricidade",
              "Cartões de crédito",
            ].map((s) => (
              <div key={s} className="bg-secondary/40 border border-border rounded-md p-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-foreground/90">{s}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            Lista de serviços complementares sujeita a confirmação de disponibilidade atual antes da publicação.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
