import Link from "next/link";
import { ArrowRight, ShieldCheck, HeartHandshake, Scale, Users, Quote, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader, Breadcrumbs, SectionTitle } from "@/components/site/layout";
import { CTASection } from "@/components/site/cta-section";
import { site, partners, testimonials } from "@/lib/site-data";

const values = [
  { icon: ShieldCheck, title: "Qualidade", description: "Recomendamos só o que serve o cliente. Se uma proposta não é justa, não a apresentamos como solução." },
  { icon: HeartHandshake, title: "Honestidade", description: "Clareza total em prémios, franquias, exclusões e comissões. Sem letras pequenas, sem promessas impossíveis." },
  { icon: Scale, title: "Seriedade", description: "Cumprimos o que dizemos. Devolvemos chamadas, cumprimos prazos e tratamos do seu processo como se fosse nosso." },
];

const timeline = [
  { year: "2009", title: "Início de atividade", description: "A RSF | Brokers nasce em junho de 2009 na Damaia, Amadora. Desde o primeiro dia como mediador multimarca." },
  { year: "2010s", title: "Crescimento por confiança", description: "Sem campanhas agressivas. A carteira cresceu sobretudo por indicação de clientes satisfeitos." },
  { year: "2019", title: "Testemunho de cliente", description: "A Maria Cruz sintetiza o método RSF: ouvir, analisar alternativas, recomendar o adequado preço/serviço." },
  { year: "Hoje", title: "Mesma missão", description: "Mesma loja na Rua Garcia de Orta, mesma metodologia, mais ramos disponíveis, mais seguradoras parceiras." },
];

export const metadata = {
  title: "Sobre — mediador multimarca em Amadora",
  description:
    "Conheça a RSF | Brokers, mediador de seguros multimarca em Amadora. Desde 2009 a analisar necessidades, comparar seguradoras e recomendar a solução mais adequada.",
  alternates: { canonical: "/sobre" },
};

export default async function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre"
        title="Mediador de seguros multimarca em Amadora, desde 2009."
        description="Conhecemos o mercado, conhecemos as seguradoras e conhecemos os clientes. Entre os dois lados, fazemos a ponte que falta."
      />
      <Breadcrumbs items={[{ label: "Sobre" }]} />

      {/* INTRO */}
      <section className="py-20">
        <div className="container-rsf grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
          <div>
            <SectionTitle eyebrow="Quem somos" title="Uma loja, uma pessoa, um método" />
            <div className="space-y-5 text-base text-foreground/90 leading-relaxed mt-6">
              <p>
                A RSF | Brokers é um gabinete de mediação de seguros sediado na Damaia, Amadora.
                Desde junho de 2009 que acompanhamos particulares e empresas na contratação e gestão
                dos seus seguros. Não somos uma plataforma online impessoal: somos um intermediador
                com morada, telefone e responsável identificável.
              </p>
              <p>
                Trabalhamos como <strong>mediadores multimarca</strong> — não representamos uma única
                companhia. Isso significa que, para cada risco, podemos solicitar propostas a várias
                seguradoras e apresentar ao cliente uma comparação real. O cliente decide; nós
                executamos e acompanhamos.
              </p>
              <p>
                O nosso método é simples: ouvir primeiro, analisar depois, recomendar por fim.
                Sem atalhos, sem promessas absolutas como "melhor preço garantido", sem empurrar
                produtos que não se justificam. Quando há melhor solução noutro lado, dizemo-lo.
              </p>
            </div>
          </div>
          <Card className="border-primary/15 bg-secondary/40">
            <CardContent className="p-7">
              <div className="text-[0.8125rem] uppercase tracking-widest text-accent-ink font-semibold mb-4">Responsável</div>
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground grid place-items-center font-serif text-2xl mb-4">SF</div>
              <div className="font-serif text-2xl text-primary mb-1">Sérgio Fernandes</div>
              <div className="text-sm text-muted-foreground mb-5">Mediador responsável · RSF | Brokers</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 mt-0.5 text-accent-ink flex-shrink-0" />
                  <span className="text-foreground/80">RSF | Brokers em atividade desde junho de 2009</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 mt-0.5 text-accent-ink flex-shrink-0" />
                  <span className="text-foreground/80">27 anos de experiência em mediação de seguros</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Users className="w-4 h-4 mt-0.5 text-accent-ink flex-shrink-0" />
                  <span className="text-foreground/80">Atendimento direto com o mediador</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 mt-0.5 text-accent-ink flex-shrink-0" />
                  <span className="text-foreground/80">Número de registo ISP: 309 302 840</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-20 bg-secondary/60 border-y border-border">
        <div className="container-rsf">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-[0.8125rem] uppercase tracking-widest font-semibold mb-3 text-accent-ink">Valores</div>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 text-balance">Qualidade, honestidade e seriedade</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Três palavras que orientam todas as recomendações. São as palavras que o cliente recorda
              quando descreve a RSF | Brokers a outra pessoa.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <Card key={v.title} className="bg-background">
                <CardContent className="p-7">
                  <div className="w-12 h-12 rounded-lg bg-accent/15 text-accent-ink grid place-items-center mb-5">
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl text-primary mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MODELO MULTIMARCA */}
      <section className="py-20">
        <div className="container-rsf grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4 bg-accent/15 text-accent-ink border-accent/30">Modelo multimarca</Badge>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-5 leading-tight">
              Não vendemos uma seguradora. Representamos o seu interesse.
            </h2>
            <div className="space-y-4 text-base text-foreground/90 leading-relaxed">
              <p>
                Um agente exclusivo trabalha para uma só companhia. Um mediador multimarca trabalha
                com várias. A diferença não é teórica: quando o mediador tem hipótese de comparar
                propostas de várias origens, o cliente vê as alternativas reais e decide com informação.
              </p>
              <p>
                Recolhemos os dados necessários, solicitamos simulações a várias seguradoras e
                apresentamos as condições lado a lado: prémio, coberturas, franquias, exclusões.
                A recomendação pesa preço e serviço em conjunto, não só o preço.
              </p>
              <p>
                No acompanhamento: tratamos de renovações, alterações, averbamentos, sinistros e
                contactos com a seguradora. Em qualquer momento, o cliente pode nomear a RSF | Brokers
                como mediadora de contratos já existentes, mantendo as mesmas coberturas e prémio.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-primary/10">
            <img
              src="/images/paginas/sobre.webp"
              alt="Mediador de seguros a analisar documentos com um cliente"
              width={1200}
              height={675}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "100% 50%" }}
            />
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-rsf">
          <div className="max-w-3xl mb-14">
            <div className="text-[0.8125rem] uppercase tracking-widest font-semibold mb-3 text-accent">Percurso</div>
            <h2 className="font-serif text-3xl md:text-4xl text-background mb-4">17 anos de RSF | Brokers</h2>
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              Da abertura em 2009 à carteira atual, um caminho construído sobretudo por indicação de clientes.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {timeline.map((t) => (
              <div key={t.year} className="border-l-2 border-accent pl-5 py-2">
                <div className="font-serif text-2xl text-accent mb-2">{t.year}</div>
                <div className="font-medium text-background mb-1.5">{t.title}</div>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTEMUNHO */}
      <section className="py-20">
        <div className="container-rsf max-w-4xl">
          <Card className="bg-secondary/40 border-accent/20">
            <CardContent className="p-8 md:p-12">
              <Quote className="w-10 h-10 text-accent-ink mb-5" />
              <blockquote className="font-serif text-xl md:text-2xl text-primary leading-snug mb-6">
                {testimonials[0].text}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground grid place-items-center font-serif text-lg">MC</div>
                <div>
                  <div className="font-semibold text-foreground">{testimonials[0].author}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[0].date} · {testimonials[0].source}</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-6 border-t border-border pt-4">
                Testemunho recolhido pelo mediador. Sem link pessoal nem dados adicionais do cliente, por privacidade.
                Espaço reservado para testemunhos adicionais mediante consentimento.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SEGURADORAS */}
      <section className="py-20 border-t border-border">
        <div className="container-rsf">
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif text-3xl text-primary mb-3">Seguradoras com que trabalhamos ou já trabalhámos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Lista não exaustiva. A disponibilidade atual de cada seguradora para cada ramo deve ser confirmada caso a caso,
              antes da publicação de qualquer proposta.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {partners.map((p) => (
              <div key={p} className="bg-secondary/50 border border-border rounded-md p-4 text-center text-sm font-medium text-foreground/80">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Queremos ser a sua mediadora."
        description="Se tem seguros ativos ou está a pensar contratar, peça uma comparação. Sem compromisso."
      />
    </>
  );
}
