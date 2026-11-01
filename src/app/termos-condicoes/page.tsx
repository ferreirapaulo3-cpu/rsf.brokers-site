import Link from "next/link";
import { PageHeader, Breadcrumbs } from "@/components/site/layout";
import { CTASection } from "@/components/site/cta-section";
import { LegalContentsNav } from "@/components/site/legal-contents-nav";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { site } from "@/lib/site-data";

export const metadata = {
  title: "Termos e condições",
  description:
    "Condições de utilização do website da RSF | Brokers: natureza do serviço, pedidos de orçamento, precisão da informação, responsabilidade, propriedade intelectual e lei aplicável.",
  alternates: { canonical: "/termos-condicoes" },
};

const legalSections = [
  { id: "termos-aceitacao", label: "1. Aceitação dos termos" },
  { id: "termos-definicoes", label: "2. Definições" },
  { id: "termos-servico", label: "3. Natureza do serviço" },
  { id: "termos-orcamentos", label: "4. Pedidos de orçamento e simulações" },
  { id: "termos-precisao", label: "5. Precisão da informação" },
  { id: "termos-responsabilidade", label: "6. Limitação de responsabilidade" },
  { id: "termos-propriedade", label: "7. Propriedade intelectual" },
  { id: "termos-links", label: "8. Links externos" },
  { id: "termos-lei", label: "9. Lei aplicável e foro" },
  { id: "termos-alteracoes", label: "10. Alterações aos termos" },
  { id: "termos-contacto", label: "11. Contacto" },
];

export default function TermosCondicoesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Termos e condições"
        description="Condições de utilização do website da RSF | Brokers."
      />
      <Breadcrumbs items={[{ label: "Termos e condições" }]} />

      <section className="py-16">
        <div className="container-rsf">
          <div className="mb-8 max-w-4xl">
            <Card className="bg-secondary/40 border-primary/15">
              <CardContent className="p-6 flex flex-col md:flex-row md:items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/15 text-accent-ink grid place-items-center flex-shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[0.8125rem] uppercase tracking-widest font-semibold text-accent-ink mb-1">
                    Leitura recomendada
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Estes termos regulam a utilização do website da RSF | Brokers e a relação
                    entre o utilizador e a empresa no que respeita aos pedidos de orçamento,
                    simulações e contactos efetuados por este canal.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10">
            <LegalContentsNav items={legalSections} />
            <div className="min-w-0 max-w-4xl space-y-2">
            <h2 id="termos-aceitacao" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              1. Aceitação dos termos
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ao aceder e utilizar o website da RSF | Brokers, o utilizador declara ter lido,
              compreendido e aceite integralmente os presentes Termos e Condições. Caso não
              concorde com qualquer disposição, deve abster-se de utilizar o website e dos
              serviços nele disponibilizados.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A utilização do website é livre e gratuita para o utilizador. O envio de pedidos
              de orçamento, simulações ou mensagens de contacto não está sujeito a pagamento
              prévio e não constitui, por si só, celebração de qualquer contrato de seguro.
              A celebração do contrato de seguro fica sempre dependente das condições específicas
              indicadas nos pontos seguintes.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Os presentes Termos e Condições podem ser complementados por condições particulares
              aplicáveis a serviços específicos do website, que serão comunicadas ao utilizador
              no momento da utilização. Em caso de conflito, prevalecem as condições particulares
              sobre os termos gerais.
            </p>

            <h2 id="termos-definicoes" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              2. Definições
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Para efeitos dos presentes Termos e Condições, entende-se por: <strong>Website</strong>
              {" "}o conjunto de páginas e funcionalidades disponibilizadas pela RSF | Brokers no
              domínio rsf-brokers.pt, incluindo formulários, conteúdo informativo e meios de
              contacto; <strong>Utilizador</strong> a pessoa singular ou coletiva que acede e
              navega no Website, quer seja ou não cliente da RSF | Brokers; <strong>Mediador</strong>
              {" "}a RSF | Brokers, enquanto intermediário de seguros devidamente registado,
              que atua no mercado entre o cliente e as seguradoras; <strong>Seguradora</strong>
              {" "}a entidade que aceita e celebra o contrato de seguro, a quem cabe o pagamento
              da indemnização em caso de sinistro.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A distinção entre Mediador e Seguradora é essencial à compreensão destes Termos.
              A RSF | Brokers atua como Mediador multimarca, não como Seguradora: celebra o
              contrato com o cliente por conta e em nome da Seguradora, mas não assume o risco
              segurado nem o pagamento da indemnização. Esta responsabilidade cabe sempre à
              Seguradora escolhida.
            </p>

            <h2 id="termos-servico" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              3. Natureza do serviço
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A RSF | Brokers atua como Mediador de seguros. Esta condição é essencial à
              compreensão dos presentes Termos: a RSF | Brokers não é uma Seguradora. Os
              contratos de seguro que celebrados através da RSF | Brokers são-no entre o cliente
              e a Seguradora escolhida, sendo esta última a única responsável pelo pagamento
              de indemnizações em caso de sinistro e pela aceitação do risco.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              O Mediador atua como intermediário independente que auxilia o cliente na análise
              das necessidades, na comparação entre propostas de várias Seguradoras, na
              recomendação fundamentada e no acompanhamento do contrato ao longo do seu ciclo
              de vida. O Mediador não assume a responsabilidade pelas decisões da Seguradora,
              em particular no que respeita à aceitação do risco, à fixação do prémio e à
              liquidação de sinistros.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              As Seguradoras com que a RSF | Brokers tem ou teve relação comercial incluem
              Allianz Portugal, Generali Tranquilidade, Caravela Seguros,
              Lusitânia Seguros, Ageas Seguros, Una Seguros, April Seguros, Prévoir Seguros,
              Saúde Prime, ARAG, Médis, Advance Care e Victoria Seguros. A disponibilidade atual de cada seguradora para cada ramo
              deve ser confirmada caso a caso, antes da publicação de qualquer proposta.
            </p>

            <h2 id="termos-orcamentos" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              4. Pedidos de orçamento e simulações
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Os pedidos de orçamento ou de simulação enviados através do Website são sempre
              analisados pela RSF | Brokers sem compromisso quer do lado do cliente, quer do
              lado do Mediador. A apresentação de uma simulação não constitui proposta contratual
              vinculativa, nem garantia de aceitação por qualquer Seguradora, nem fixação
              definitiva do prémio.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              As simulações são calculadas com base nas informações fornecidas pelo cliente e
              estão dependentes da validação final pela Seguradora escolhida. Esta validação
              pode dar origem a ajustamentos do prémio, das coberturas, das franquias ou dos
              excluídos. Em caso de divergência entre os valores simulados e os valores finais
              da apólice, prevalecem estes últimos.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A análise do pedido é gratuita. O cliente não fica obrigado a avançar com a
              contratação por ter enviado um pedido, e a RSF | Brokers não fica obrigada a
              apresentar uma proposta em todos os casos. Sempre que o pedido não possa ser
              atendido, o Mediador comunicá-lo-á ao cliente com a respetiva justificação.
            </p>

            <h2 id="termos-precisao" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              5. Precisão da informação
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              O cliente é o responsável pela veracidade, exatidão e completude das declarações
              prestadas no âmbito do pedido de orçamento, da simulação e, em particular, da
              contratação do contrato de seguro. As declarações inexatas ou omissões relevantes
              podem determinar, ao abrigo da lei aplicável ao contrato de seguro, a nulidade,
              a anulação ou a redução da indemnização em caso de sinistro.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A RSF | Brokers envida os seus melhores esforços para auxiliar o cliente na correta
              caracterização do risco, através de perguntas adequadas e de confirmações junto
              das Seguradoras quando necessário. Esta colaboração não transfere para o Mediador
              a responsabilidade pela exatidão das declarações, que continua a caber
              exclusivamente ao cliente.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              O conteúdo informativo publicado no Website tem natureza geral e não substitui a
              leitura das condições particulares e especiais da apólice celebrada. Em caso de
              divergência entre o conteúdo do Website e o conteúdo da apólice, prevalece sempre
              a apólice. Recomendamos a leitura cuidadosa de todos os documentos contratuais.
            </p>

            <h2 id="termos-responsabilidade" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              6. Limitação de responsabilidade
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A RSF | Brokers não responde pelas decisões da Seguradora, em particular no que
              respeita à aceitação ou recusa de coberturas, à fixação do prémio, à aplicação
              de agravamentos ou bonificações, à interpretação de cláusulas contratuais e à
              liquidação de sinistros. Estas decisões cabem exclusivamente à Seguradora,
              sendo o Mediador mero intermediário do processo.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Sempre que exista discordância do cliente relativamente a uma decisão da Seguradora,
              a RSF | Brokers apoia o cliente na argumentação e na defesa dos seus interesses,
              sem contudo substituir-se à Seguradora na decisão final. Em caso de litígio, o
              cliente pode recorrer aos mecanismos de resolução alternativa de litígios
              disponíveis no mercado segurador português, designadamente o Centro de Arbitragem
              de Seguros.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A RSF | Brokers não responde por interrupções, atrasos ou erros na disponibilização
              do Website decorrentes de causas fora do seu controlo razoável, incluindo avarias
              técnicas, falhas de comunicação, ataques informáticos ou eventos de força maior.
              Em caso de incidente desta natureza, o Mediador envida os melhores esforços para
              retomar o serviço no menor prazo possível.
            </p>

            <h2 id="termos-propriedade" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              7. Propriedade intelectual
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Todos os elementos do Website — textos, imagens, design, logótipo, infográficos,
              formulários e estrutura de navegação — são da titularidade da RSF | Brokers ou
              estão licenciados para utilização por esta, sendo protegidos pela legislação
              aplicável sobre direito de autor e propriedade intelectual.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              É proibida a reprodução, total ou parcial, do conteúdo do Website sem autorização
              prévia e por escrito da RSF | Brokers, salvo utilização para fins pessoais e não
              comerciais pelo utilizador, ou nos casos expressamente previstos na lei. A
              utilização do logótipo, marca ou designação "RSF | Brokers" carece sempre de
              autorização prévia.
            </p>

            <h2 id="termos-links" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              8. Links externos
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              O Website pode conter links externos para sites de Seguradoras parceiras, para o
              Google Maps (no contexto da página de contacto) e para outros recursos considerados
              úteis ao utilizador. Esses links externos são disponibilizados a título informativo
              e a RSF | Brokers não controla nem se responsabiliza pelo conteúdo, pela
              disponibilidade ou pelas práticas de privacidade dos mesmos.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              O utilizador deve consultar as condições de utilização e as políticas de privacidade
              dos sites externos que visite a partir do Website da RSF | Brokers. A RSF | Brokers
              não é responsável pela recolha, tratamento ou utilização de dados efetuada por
              terceiros fora do seu Website.
            </p>

            <h2 id="termos-lei" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              9. Lei aplicável e foro
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Os presentes Termos e Condições são regulados pela lei portuguesa. Para a resolução
              de qualquer litídio emergente da sua interpretação ou execução, bem como dos
              serviços prestados pelo Mediador através do Website, é competente o tribunal da
              comarca de Lisboa, com expressa renúncia a qualquer outro foro.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Sem prejuízo do recurso aos tribunais, o cliente pode recorrer aos mecanismos de
              resolução alternativa de litígios disponíveis no mercado segurador português,
              em particular ao Centro de Arbitragem de Seguros, com sede em Lisboa, que funciona
              como entidade de resolução alternativa de litígios no setor segurador.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Os contratos de seguro celebrados através da RSF | Brokers são ainda regulados
              pelas respetivas condições gerais, particulares e especiais, e pela legislação
              específica aplicável a cada ramo, em particular o Decreto-Lei n.º 41/2016, de
              29 de julho (regime aplicável à distribuição de seguros).
            </p>

            <h2 id="termos-alteracoes" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              10. Alterações aos termos
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A RSF | Brokers pode atualizar os presentes Termos e Condições sempre que se
              justifique, em particular por alteração legislativa, por modificação dos serviços
              prestados ou por adequação técnica do Website. As alterações entram em vigor a
              partir da respetiva publicação neste Website, devendo o utilizador consultar
              periodicamente este documento.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A utilização continuada do Website após a entrada em vigor das alterações
              equivale à aceitação tácita dos novos termos. Sempre que a alteração implique
              necessidade de consentimento expresso do cliente, a RSF | Brokers assegurará os
              procedimentos adequados junto dos titulares afetados.
            </p>

            <h2 id="termos-contacto" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              11. Contacto
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Para qualquer questão relacionada com os presentes Termos e Condições, pode
              contactar a RSF | Brokers através dos seguintes meios:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 leading-relaxed mb-4 space-y-1">
              <li><strong>Morada:</strong> Rua Garcia de Orta, n.º 30, Loja A, 2720-252 Damaia, Amadora, Portugal.</li>
              <li><strong>Email:</strong> <a href={`mailto:${site.email}`} className="text-primary underline">{site.email}</a></li>
              <li><strong>Telefone fixo:</strong> <a href={`tel:${site.phones.fixedHref}`} className="text-primary underline">{site.phones.fixed}</a></li>
              <li><strong>Telefone móvel:</strong> <a href={`tel:${site.phones.mobileHref}`} className="text-primary underline">{site.phones.mobile}</a></li>
            </ul>
            <p className="text-sm text-muted-foreground mt-8 border-t border-border pt-4">
              Última revisão: outubro de 2025.
            </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Tem dúvidas sobre estes termos?"
        description="Esclarecemos qualquer questão relacionada com a utilização do website ou com a nossa atividade de mediação de seguros."
        primaryLabel="Contactar a RSF | Brokers"
        primaryHref="/contacto"
        variant="default"
      />
    </>
  );
}
