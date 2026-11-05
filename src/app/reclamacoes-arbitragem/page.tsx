import { PageHeader, Breadcrumbs } from "@/components/site/layout";
import { CTASection } from "@/components/site/cta-section";
import { LegalContentsNav } from "@/components/site/legal-contents-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Scale } from "lucide-react";
import { site } from "@/lib/site-data";

export const metadata = {
  title: "Reclamações e arbitragem",
  description:
    "Como apresentar uma reclamação à RSF | Brokers, acesso ao Livro de Reclamações Eletrónico e informação sobre resolução alternativa de litígios de consumo (RAL).",
  alternates: { canonical: "/reclamacoes-arbitragem" },
};

const legalSections = [
  { id: "rec-ambito", label: "1. Âmbito" },
  { id: "rec-como", label: "2. Como apresentar uma reclamação" },
  { id: "rec-elementos", label: "3. Elementos a incluir" },
  { id: "rec-tratamento", label: "4. Tratamento da reclamação" },
  { id: "rec-livro", label: "5. Livro de Reclamações Eletrónico" },
  { id: "rec-ral", label: "6. Resolução alternativa de litígios" },
  { id: "rec-outras", label: "7. Outras vias disponíveis" },
  { id: "rec-contacto", label: "8. Contacto" },
];

export default function ReclamacoesArbitragemPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Reclamações e arbitragem"
        description="Como apresentar uma reclamação, acesso ao Livro de Reclamações Eletrónico e informação sobre resolução alternativa de litígios de consumo."
      />
      <Breadcrumbs items={[{ label: "Reclamações e arbitragem" }]} />

      <section className="py-16">
        <div className="container-rsf">
          <div className="mb-8 max-w-4xl">
            <Card className="bg-secondary/40 border-primary/15">
              <CardContent className="p-6 flex flex-col md:flex-row md:items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/15 text-accent-ink grid place-items-center flex-shrink-0">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[0.8125rem] uppercase tracking-widest font-semibold text-accent-ink mb-1">
                    Documento vivo
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Esta página descreve as vias atualmente disponíveis para apresentar uma
                    reclamação relativa à atividade de mediação da RSF | Brokers. Sempre que
                    houver alteração relevante, atualizamos este documento e a data de revisão
                    passa a constar no final do texto.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10">
            <LegalContentsNav items={legalSections} />
            <div className="min-w-0 max-w-4xl space-y-2">
            <h2 id="rec-ambito" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              1. Âmbito
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A presente página aplica-se às reclamações relativas à atividade de mediação de
              seguros exercida pela RSF | Brokers, com sede na Rua Garcia de Orta, n.º 30,
              Loja A, 2720-252 Damaia, Amadora, Portugal. Abrange, designadamente, o
              atendimento prestado, a informação transmitida nas fases de análise e proposta,
              o apoio na contratação e o acompanhamento de alterações, renovações e sinistros.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              As reclamações relativas a decisões da seguradora — aceitação ou recusa de
              coberturas, fixação do prémio, interpretação de cláusulas contratuais e
              regularização de sinistros — são dirigidas à própria seguradora, por ser ela a
              entidade que toma essas decisões. A RSF | Brokers apoia o cliente no
              encaminhamento e na sustentação da sua posição, mas não se substitui à
              seguradora na decisão final.
            </p>

            <h2 id="rec-como" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              2. Como apresentar uma reclamação
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Pode apresentar uma reclamação à RSF | Brokers por qualquer dos meios abaixo, sem
              custos e sem necessidade de formulário próprio. A reclamação pode ser apresentada
              pelo próprio cliente ou por representante devidamente identificado.
            </p>
            <ul className="list-disc pl-6 text-foreground/80 leading-relaxed mb-4 space-y-1">
              <li>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${site.email}`} className="text-primary underline">
                  {site.email}
                </a>
              </li>
              <li>
                <strong>Telefone fixo:</strong>{" "}
                <a href={`tel:${site.phones.fixedHref}`} className="text-primary underline">
                  {site.phones.fixed}
                </a>
              </li>
              <li>
                <strong>Telefone móvel:</strong>{" "}
                <a href={`tel:${site.phones.mobileHref}`} className="text-primary underline">
                  {site.phones.mobile}
                </a>
              </li>
              <li>
                <strong>Por escrito ou presencialmente:</strong> {site.address.line1},{" "}
                {site.address.postalCode} {site.address.city}, {site.address.country}.
              </li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Existe ainda a via do Livro de Reclamações Eletrónico, descrita no ponto 5, que é
              independente do contacto direto com a RSF | Brokers e pode ser utilizada em
              qualquer momento.
            </p>

            <h2 id="rec-elementos" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              3. Elementos a incluir
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Para que a reclamação possa ser analisada com rigor e sem pedidos de informação
              adicionais, recomendamos que inclua:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 leading-relaxed mb-4 space-y-1">
              <li>Identificação do reclamante e dados de contacto para resposta.</li>
              <li>Identificação do contrato, da apólice ou do pedido de orçamento em causa, quando aplicável.</li>
              <li>Descrição dos factos, com indicação de datas e dos intervenientes conhecidos.</li>
              <li>Pretensão concreta do reclamante.</li>
              <li>Documentos de suporte relevantes, caso existam.</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Os dados pessoais incluídos na reclamação são tratados exclusivamente para a sua
              análise e resposta, nos termos descritos na Política de Privacidade deste website.
            </p>

            <h2 id="rec-tratamento" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              4. Tratamento da reclamação
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A RSF | Brokers regista cada reclamação recebida, confirma a sua receção ao
              reclamante e analisa os factos apresentados. Quando a matéria reclamada depende de
              informação ou decisão da seguradora, a RSF | Brokers encaminha o assunto para a
              companhia em causa e informa o reclamante desse encaminhamento.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A resposta é comunicada por escrito, pelo meio de contacto indicado pelo
              reclamante, no mais curto prazo possível e dentro dos prazos legalmente
              aplicáveis. Caso a análise exija a intervenção de terceiros, o reclamante é
              informado do estado do processo e do motivo da demora.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A apresentação de uma reclamação não implica custos para o reclamante nem prejudica
              o recurso às vias referidas nos pontos 5, 6 e 7.
            </p>

            <h2 id="rec-livro" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              5. Livro de Reclamações Eletrónico
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Além dos contactos diretos indicados no ponto 2, pode apresentar a sua reclamação
              através do Livro de Reclamações Eletrónico, plataforma pública disponibilizada pelo
              Estado português para registo de reclamações sobre prestadores de serviços.
            </p>
            <ul className="list-disc pl-6 text-foreground/80 leading-relaxed mb-4 space-y-1">
              <li>
                <strong>Livro de Reclamações Eletrónico:</strong>{" "}
                <a
                  href="https://www.livroreclamacoes.pt/inicio"
                  target="_blank"
                  rel="noopener"
                  className="text-primary underline"
                >
                  www.livroreclamacoes.pt/inicio
                </a>
              </li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A reclamação submetida nessa plataforma é encaminhada para a RSF | Brokers e para a
              entidade reguladora competente, sendo tratada nos termos previstos na legislação
              aplicável ao Livro de Reclamações. O formato eletrónico dispensa a deslocação ao
              estabelecimento.
            </p>

            <h2 id="rec-ral" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              6. Resolução alternativa de litígios
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A resolução alternativa de litígios de consumo (RAL) permite resolver conflitos
              entre consumidores e prestadores de serviços fora dos tribunais, através de
              entidades independentes que recorrem a mecanismos de mediação, conciliação e
              arbitragem. Em Portugal, o enquadramento geral consta da Lei n.º 144/2015, de 8 de
              setembro, que estabelece os princípios e as regras aplicáveis a estas entidades.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Em regra, o recurso a uma entidade RAL é gratuito ou de custo reduzido para o
              consumidor, assenta num processo simplificado e mais rápido do que a via judicial e
              não exige, na generalidade dos casos, representação por advogado. O recurso à RAL
              não impede o consumidor de dirigir-se posteriormente aos tribunais, nos termos
              previstos na lei e no regulamento de cada entidade.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              No setor dos seguros, existe o CIMPAS — Centro de Informação, Mediação e
              Arbitragem de Seguros, entidade especializada com âmbito nacional, que trata
              litígios relacionados com a formação, execução e/ou cessação de contratos de
              seguros suscetíveis de arbitragem voluntária.
            </p>
            <ul className="list-disc pl-6 text-foreground/80 leading-relaxed mb-4 space-y-1">
              <li>
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.cimpas.pt"
                  target="_blank"
                  rel="noopener"
                  className="text-primary underline"
                >
                  www.cimpas.pt
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:geral@cimpas.pt" className="text-primary underline">
                  geral@cimpas.pt
                </a>
              </li>
              <li>
                <strong>Telefone:</strong>{" "}
                <a href="tel:+351213827700" className="text-primary underline">
                  213 827 700
                </a>
              </li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A utilização deste mecanismo depende das regras aplicáveis e, quando exigido, da
              adesão da entidade em causa. A RSF | Brokers está a confirmar junto do CIMPAS a sua
              situação de adesão e os dados atualizados aplicáveis, incluindo o eventual número de
              registo junto da ASF; esta página será atualizada assim que essa confirmação
              documental estiver disponível. Até lá, esta página não afirma nem pressupõe que a
              RSF | Brokers tenha aderido ao CIMPAS, nem apresenta esse recurso como obrigatório
              para o consumidor.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Se pretender recorrer de imediato a uma entidade RAL ou confirmar a situação de
              adesão da RSF | Brokers, pode solicitar-nos essa informação através de qualquer dos
              contactos indicados no ponto 8.
            </p>

            <h2 id="rec-outras" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              7. Outras vias disponíveis
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              O recurso às vias descritas nesta página não prejudica o direito de o reclamante
              apresentar a questão à ASF — Autoridade de Supervisão de Seguros e Fundos de
              Pensões, entidade com competência de supervisão sobre a atividade de distribuição
              de seguros em Portugal (
              <a
                href="https://www.asf.com.pt"
                target="_blank"
                rel="noopener"
                className="text-primary underline"
              >
                www.asf.com.pt
              </a>
              ), nem o direito de recorrer aos tribunais competentes.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A reclamação apresentada à ASF, no exercício da sua função de supervisão, é distinta
              da arbitragem de consumo tratada pelo CIMPAS, referida no ponto 6. A ASF não funciona
              como entidade de arbitragem de litígios individuais entre o consumidor e o mediador
              ou a seguradora.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Tratando-se de questão relativa ao tratamento de dados pessoais, o titular dos
              dados pode apresentar reclamação junto da Comissão Nacional de Proteção de Dados
              (CNPD), autoridade de controlo competente em Portugal, conforme indicado na
              Política de Privacidade deste website.
            </p>

            <h2 id="rec-contacto" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              8. Contacto
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Para apresentar uma reclamação, acompanhar um processo em curso ou pedir
              informação sobre as vias descritas nesta página, pode contactar a RSF | Brokers
              através dos seguintes meios:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 leading-relaxed mb-4 space-y-1">
              <li><strong>Morada:</strong> Rua Garcia de Orta, n.º 30, Loja A, 2720-252 Damaia, Amadora, Portugal.</li>
              <li><strong>Email:</strong> <a href={`mailto:${site.email}`} className="text-primary underline">{site.email}</a></li>
              <li><strong>Telefone fixo:</strong> <a href={`tel:${site.phones.fixedHref}`} className="text-primary underline">{site.phones.fixed}</a></li>
              <li><strong>Telefone móvel:</strong> <a href={`tel:${site.phones.mobileHref}`} className="text-primary underline">{site.phones.mobile}</a></li>
            </ul>
            <p className="text-sm text-muted-foreground mt-8 border-t border-border pt-4">
              Última revisão: novembro de 2026.
            </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Precisa de apresentar uma reclamação?"
        description="Analisamos cada reclamação e respondemos por escrito. Pode também usar o Livro de Reclamações Eletrónico."
        primaryLabel="Contactar a RSF | Brokers"
        primaryHref="/contacto"
        variant="default"
      />
    </>
  );
}
