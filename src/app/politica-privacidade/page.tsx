import Link from "next/link";
import { PageHeader, Breadcrumbs } from "@/components/site/layout";
import { CTASection } from "@/components/site/cta-section";
import { LegalContentsNav } from "@/components/site/legal-contents-nav";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import { site } from "@/lib/site-data";

export const metadata = {
  title: "Política de privacidade",
  description:
    "Como a RSF | Brokers recolhe, trata e protege os seus dados pessoais. Base legal, finalidades, prazos de conservação, partilha com terceiros e direitos do titular.",
  alternates: { canonical: "/politica-privacidade" },
};

const legalSections = [
  { id: "priv-introducao", label: "1. Introdução e âmbito" },
  { id: "priv-dados", label: "2. Dados que recolhemos" },
  { id: "priv-finalidades", label: "3. Finalidades do tratamento" },
  { id: "priv-base-legal", label: "4. Base legal do tratamento" },
  { id: "priv-conservacao", label: "5. Prazo de conservação" },
  { id: "priv-partilha", label: "6. Partilha de dados com terceiros" },
  { id: "priv-direitos", label: "7. Direitos do titular dos dados" },
  { id: "priv-seguranca", label: "8. Segurança" },
  { id: "priv-cookies", label: "9. Cookies" },
  { id: "priv-alteracoes", label: "10. Alterações à política" },
  { id: "priv-contacto", label: "11. Contacto do responsável" },
];

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Política de privacidade"
        description="Como a RSF | Brokers recolhe, trata e protege os seus dados pessoais."
      />
      <Breadcrumbs items={[{ label: "Política de privacidade" }]} />

      <section className="py-16">
        <div className="container-rsf">
          <div className="mb-8 max-w-4xl">
            <Card className="bg-secondary/40 border-primary/15">
              <CardContent className="p-6 flex flex-col md:flex-row md:items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/15 text-accent-ink grid place-items-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[0.8125rem] uppercase tracking-widest font-semibold text-accent-ink mb-1">
                    Documento vivo
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Esta política descreve o tratamento atual dos dados pessoais na RSF | Brokers.
                    Sempre que houver alteração relevante, atualizamos este documento e a data
                    de revisão passa a constar no final do texto.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10">
            <LegalContentsNav items={legalSections} />
            <div className="min-w-0 max-w-4xl space-y-2">
            <h2 id="priv-introducao" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              1. Introdução e âmbito
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A RSF | Brokers é uma empresa de mediação de seguros sediada na Rua Garcia de Orta,
              n.º 30, Loja A, 2720-252 Damaia, Amadora, Portugal. Como mediador de seguros, a
              RSF | Brokers atua como responsável pelo tratamento dos dados pessoais que recolhe
              junto dos seus clientes e contactos comerciais, no exercício da sua atividade
              quotidiana de análise, comparação, proposta e gestão de contratos de seguro.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A presente Política de Privacidade aplica-se a todos os dados pessoais recolhidos
              através deste website, dos formulários de pedido de orçamento ou de contacto, das
              conversas telefónicas com a RSF | Brokers, das mensagens trocadas por email e dos
              documentos partilhados presencialmente na loja. Aplica-se igualmente aos dados que
              nos chegam por indicação de outros clientes, sempre que esses contactos nos deem
              autorização para os tratar.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              O tratamento dos dados pessoais pela RSF | Brokers cumpre o Regulamento Geral de
              Proteção de Dados (RGPD — Regulamento (UE) 2016/679) e a Lei n.º 58/2019, de 8 de
              agosto, que assegura a sua execução em Portugal. Em caso de dúvida sobre a aplicação
              desta política à sua situação, pode contactar-nos através dos dados indicados no
              final do documento.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Esta política não abrange o tratamento de dados realizado pelas seguradoras parceiras,
              que são, elas próprias, responsáveis pelos tratamentos que efetuam no âmbito dos
              contratos de seguro celebrados. Para esses tratamentos, deve consultar as políticas
              de privacidade de cada seguradora, que lhe serão entregues em conjunto com a apólice.
            </p>

            <h2 id="priv-dados" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              2. Dados que recolhemos
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A RSF | Brokers recolhe os dados estritamente necessários ao desenvolvimento da sua
              atividade de mediação. Em regra, isso inclui o nome completo do segurado ou do
              potencial cliente, o número de telefone, o email, a morada e os elementos de
              identificação do risco a segurar — por exemplo, a matrícula do veículo, o número
              fiscal do imóvel, a idade e profissão no caso de seguros de vida, ou o histórico
              de saúde relevante nos seguros de saúde e de vida.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Em caso de sinistro, recolhemos ainda os elementos fornecidos pelo segurado para
              registo e acompanhamento do processo: descrição do acontecimento, fotografias,
              identificação dos intervenientes e testemunhas, facturas e documentos de despesa.
              Estes dados são tratados com a finalidade exclusiva de transmitir à seguradora a
              informação necessária à liquidação da indemnização.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Os dados são recolhidos pelos seguintes canais: (a) formulários presenciais na
              loja; (b) formulários online neste website, em particular nas páginas "Pedir
              Orçamento" e "Contacto"; (c) conversas telefónicas com a RSF | Brokers; (d)
              mensagens trocadas por email; (e) documentos partilhados por correio ou por
              meios eletrónicos. Não recolhemos dados de forma oculta nem por meios que não
              tenham sido postos à disposicão do titular.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Não recolhemos categorias particulares de dados sensíveis (dados de saúde, dados
              genéticos, dados biométricos, convicções religiosas ou políticas, etc.) a não ser
              que sejam estritamente necessários à análise de um risco específico — por exemplo,
              dados de saúde num seguro de saúde ou de vida — e sempre com o consentimento do
              titular ou no âmbito das obrigações legais associadas ao contrato de seguro.
            </p>

            <h2 id="priv-finalidades" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              3. Finalidades do tratamento
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Os dados pessoais recolhidos são tratados para as seguintes finalidades: resposta
              a pedidos de orçamento e simulação, com apresentação de propostas comparadas de
              várias seguradoras; gestão de contratos de seguro, incluindo a proposta, a
              contratação, as renovações, as alterações e os averbamentos; gestão de sinistros,
              desde o registo inicial ao acompanhamento da liquidação; e contactos comerciais
              para informação sobre novos produtos, condições ou prazos de renovação.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A RSF | Brokers não utiliza os dados para finalidades que não tenham sido comunicadas
              ao titular no momento da recolha. Em particular, não comercializamos bases de dados
              de clientes nem cedemos dados a terceiros para fins de marketing alheios à atividade
              seguradora. Os contactos comerciais que enviamos limitam-se a informação considerada
              útil ao cliente e podem ser interrompidos a qualquer momento, bastando para isso um
              pedido expresso por qualquer canal de contacto.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Os dados recolhidos num pedido de orçamento que não avance para contratação são
              conservados durante o período estritamente necessário à resposta, findo o qual
              podem ser eliminados ou anonimizados, salvo conservação para defesa de eventuais
              reclamações. Em caso de contratação efetiva, os dados passam a integrar o processo
              do cliente, com o prazo de conservação previsto no ponto 5.
            </p>

            <h2 id="priv-base-legal" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              4. Base legal do tratamento
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              O tratamento dos dados pessoais pela RSF | Brokers assenta nas seguintes bases
              legais: o consentimento expresso do titular, prestado no momento do preenchimento
              do formulário ou do primeiro contacto; a execução de um contrato em que o titular
              é parte ou para diligências pré-contratuais a pedido do titular; e o interesse
              legítimo da RSF | Brokers na prossecução da sua atividade, sempre que não sejam
              sobrepostos os direitos e liberdades do titular.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              O consentimento para tratamento de dados com finalidade de marketing comercial pode
              ser retirado a qualquer momento, sem que isso afete a licidade do tratamento
              anteriormente efetuado. A retirada do consentimento não impede a continuidade do
              contrato de seguro em vigor, mas pode limitar o contacto comercial futuro.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Para os dados de saúde ou outros dados sensíveis eventualmente necessários à análise
              de um risco, o tratamento assenta no consentimento expresso do titular e, quando
              aplicável, no cumprimento de obrigações legais do mediador e da seguradora no âmbito
              do contrato de seguro. Estes dados são tratados com especial confidencialidade e
              acesso restrito.
            </p>

            <h2 id="priv-conservacao" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              5. Prazo de conservação
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Os dados pessoais associados a contratos de seguro são conservados durante o período
              da relação contratual com o cliente e até 10 anos após o seu termo, em cumprimento
              das obrigações legais e fiscais aplicáveis ao mediador e à atividade seguradora.
              Este prazo visa permitir a defesa em eventuais processos judiciais ou reclamações
              posteriores ao encerramento do contrato.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Os dados de sinistro são conservados pelo período necessário à gestão do processo
              e, findo este, pelo mesmo prazo legal residual. Os dados de potenciais clientes
              que não cheguem a contratar são conservados por um período razoável — em regra, 2
              anos após o último contacto — findo o qual são eliminados ou anonimizados.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Os dados tratados para fins de marketing são conservados até à retirada do
              consentimento ou até ao pedido de oposição pelo titular. Em caso de retirada, os
              dados são eliminados dos ficheiros de marketing num prazo razoável, sem prejuízo da
              conservação legal residual para os dados que continuem a ser necessários ao
              cumprimento de obrigações fiscais ou contratuais.
            </p>

            <h2 id="priv-partilha" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              6. Partilha de dados com terceiros
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              No exercício da sua atividade, a RSF | Brokers partilha dados pessoais dos clientes
              com as seguradoras parceiras, para efeito de proposta, contratação e gestão de
              contratos de seguro. Esta partilha é essencial à finalidade do serviço: sem ela
              não é possível solicitar simulações nem apresentar propostas comparadas.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A lista de seguradoras com que a RSF | Brokers trabalha ou já trabalhou inclui
              Allianz Portugal, Generali Tranquilidade, Caravela Seguros,
              Lusitânia Seguros, Ageas Seguros, Una Seguros, April Seguros, Prévoir Seguros,
              Saúde Prime, ARAG, Médis, Advance Care e Victoria Seguros. A disponibilidade atual de cada seguradora para cada ramo é
              confirmada caso a caso. As seguradoras são, elas próprias, responsáveis pelo
              tratamento que efetuam dos dados que lhes são transmitidos.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A RSF | Brokers recorre ainda a subcontratantes técnicos que tratam dados por
              conta e sob instruções da RSF | Brokers: o serviço de alojamento do website, o
              serviço de email e, eventualmente, serviços de armazenamento de ficheiros. Estes
              subcontratantes estão obrigados contratualmente a garantir a confidencialidade e
              a segurança dos dados, e a tratá-los apenas para a finalidade contratualmente
              acordada.
            </p>

            <h2 id="priv-direitos" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              7. Direitos do titular dos dados
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ao abrigo do RGPD, o titular dos dados pessoais tem os seguintes direitos: direito
              de acesso aos dados que lhe dizem respeito; direito de retificação dos dados
              inexatos ou incompletos; direito de apagamento (direito a ser esquecido), nas
              condições previstas na lei; direito à portabilidade dos dados, em formato
              estruturado e de uso corrente; direito de oposição ao tratamento, em particular
              para efeitos de marketing; e direito à limitação do tratamento, em situações
              específicas previstas na lei.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              O titular pode exercer qualquer destes direitos através de pedido escrito dirigido
              à RSF | Brokers, pelos contactos indicados no final desta política. Respondemos
              aos pedidos no prazo legal de um mês a contar da receção, podendo este prazo ser
              prorrogado por mais dois meses em caso de complexidade ou número elevado de pedidos.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Em caso de entendimento de que o tratamento dos seus dados não respeita as
              obrigações legais, o titular tem o direito de apresentar reclamação junto da
              autoridade de controlo competente em Portugal — a Comissão Nacional de Proteção de
              Dados (CNPD), com sede em Lisboa — sem prejuízo de qualquer outro recurso
              administrativo ou jurisdicional.
            </p>

            <h2 id="priv-seguranca" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              8. Segurança
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A RSF | Brokers aplica medidas técnicas e organizativas adequadas a garantir a
              segurança dos dados pessoais, em conformidade com o estado da arte e a sensibilidade
              dos dados tratados. Em particular, o website é servido em HTTPS, com cifragem do
              tráfego entre o navegador do utilizador e o servidor; os acessos aos sistemas
              internos são restritos e individualizados; e os formulários online dispõem de
              mecanismos anti-spam para limitar tentativas de uso indevido.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A documentação física dos processos é mantida em arquivo com acesso controlado e
              os meios digitais seguem regras de higiene informática adequadas. Apesar das
              medidas adotadas, nenhum sistema está isento de risco: em caso de incidente de
              segurança que envolva dados pessoais, a RSF | Brokers atuará em conformidade com as
              obrigações de notificação à CNPD e, quando aplicável, aos titulares afetados.
            </p>

            <h2 id="priv-cookies" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              9. Cookies
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              O website da RSF | Brokers utiliza cookies para permitir o funcionamento técnico do
              site e, em determinadas condições, para recolha de estatísticas de utilização.
              A informação completa sobre os cookies utilizados, a respetiva finalidade e duração,
              bem como as instruções para gestão ou desativação, está disponível na{" "}
              <Link href="/politica-cookies" className="text-primary underline">Política de Cookies</Link>{" "}
              deste website.
            </p>

            <h2 id="priv-alteracoes" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              10. Alterações à política
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A presente Política de Privacidade pode ser atualizada pela RSF | Brokers sempre
              que se verifique alteração relevante nas finalidades do tratamento, nos destinatários
              dos dados, nas medidas de segurança ou na legislação aplicável. As alterações
              entram em vigor a partir da respetiva publicação neste website. Recomendamos a
              consulta periódica deste documento para se manter informado.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Sempre que a alteração implique necessidade de novo consentimento ou de
              comunicação prévia expressa, a RSF | Brokers assegurará os procedimentos adequados
              junto dos titulares afetados, em conformidade com a lei.
            </p>

            <h2 id="priv-contacto" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              11. Contacto do responsável
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Para qualquer questão relacionada com o tratamento dos seus dados pessoais, para
              exercício dos direitos previstos no ponto 7 ou para pedido de informação adicional,
              pode contactar a RSF | Brokers através dos seguintes meios:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 leading-relaxed mb-4 space-y-1">
              <li><strong>Morada:</strong> Rua Garcia de Orta, n.º 30, Loja A, 2720-252 Damaia, Amadora, Portugal.</li>
              <li><strong>Email:</strong> <a href={`mailto:${site.email}`} className="text-primary underline">{site.email}</a></li>
              <li><strong>Telefone fixo:</strong> <a href={`tel:${site.phones.fixedHref}`} className="text-primary underline">{site.phones.fixed}</a></li>
              <li><strong>Telefone móvel:</strong> <a href={`tel:${site.phones.mobileHref}`} className="text-primary underline">{site.phones.mobile}</a></li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-4">
              O responsável pelo tratamento é a RSF | Brokers, enquanto mediadora de seguros
              atuando em nome próprio no exercício da sua atividade. Em caso de dúvida ou
              reclamação, pode também recorrer à Comissão Nacional de Proteção de Dados (CNPD),
              autoridade competente em Portugal para a fiscalização do cumprimento do RGPD.
            </p>
            <p className="text-sm text-muted-foreground mt-8 border-t border-border pt-4">
              Última revisão: outubro de 2025.
            </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Tem dúvidas sobre os seus dados?"
        description="Esclarecemos qualquer questão de privacidade por email ou por telefone. Sem formulário complicado, sem call center."
        primaryLabel="Contactar a RSF | Brokers"
        primaryHref="/contacto"
        variant="default"
      />
    </>
  );
}
