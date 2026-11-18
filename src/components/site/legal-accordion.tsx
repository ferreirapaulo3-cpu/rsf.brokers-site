import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { site } from "@/lib/site-data";

const cookieTable = [
  { nome: "NID, 1P_JAR, outros", tipo: "Terceiros", finalidade: "Cookies definidos pela Google ao carregar o mapa incorporado na secção de Contactos", duracao: "Variável (definida pela Google)", fornecedor: "Google LLC" },
];

const p = "text-foreground/80 leading-relaxed mb-4";
const h4 = "font-serif text-lg text-primary mb-2 mt-6";

export function LegalAccordion() {
  return (
    <Accordion type="single" collapsible className="max-w-4xl mx-auto">
      <AccordionItem value="privacidade">
        <AccordionTrigger className="font-serif text-xl text-primary hover:no-underline">
          Política de Privacidade
        </AccordionTrigger>
        <AccordionContent>
          <h4 className={h4}>Introdução e âmbito</h4>
          <p className={p}>
            A RSF | Brokers é uma empresa de mediação de seguros sediada na {site.address.line1},{" "}
            {site.address.postalCode} {site.address.city}, {site.address.country}. Como mediador de seguros, a
            RSF | Brokers atua como responsável pelo tratamento dos dados pessoais que recolhe junto dos seus
            clientes e contactos comerciais, no exercício da sua atividade quotidiana de análise, comparação,
            proposta e gestão de contratos de seguro.
          </p>
          <p className={p}>
            A presente Política de Privacidade aplica-se a todos os dados pessoais recolhidos através deste
            website, dos formulários de pedido de orçamento ou de contacto, das conversas telefónicas com a
            RSF | Brokers, das mensagens trocadas por email e dos documentos partilhados presencialmente na loja.
          </p>
          <p className={p}>
            O tratamento dos dados pessoais pela RSF | Brokers cumpre o Regulamento Geral de Proteção de Dados
            (RGPD — Regulamento (UE) 2016/679) e a Lei n.º 58/2019, de 8 de agosto, que assegura a sua execução
            em Portugal.
          </p>

          <h4 className={h4}>Dados que recolhemos</h4>
          <p className={p}>
            A RSF | Brokers recolhe os dados estritamente necessários ao desenvolvimento da sua atividade de
            mediação: nome completo, telefone, email, morada e os elementos de identificação do risco a segurar
            (matrícula, número fiscal de imóvel, idade e profissão, histórico de saúde relevante quando
            aplicável). Em caso de sinistro, recolhemos ainda os elementos fornecidos pelo segurado para registo
            e acompanhamento do processo.
          </p>
          <p className={p}>
            Não recolhemos categorias particulares de dados sensíveis a não ser que sejam estritamente
            necessários à análise de um risco específico, e sempre com o consentimento do titular ou no âmbito
            das obrigações legais associadas ao contrato de seguro.
          </p>

          <h4 className={h4}>Finalidades do tratamento</h4>
          <p className={p}>
            Os dados são tratados para: resposta a pedidos de orçamento e simulação; gestão de contratos de
            seguro (proposta, contratação, renovações, alterações, averbamentos); gestão de sinistros; e
            contactos comerciais sobre produtos, condições ou prazos de renovação. Não comercializamos bases de
            dados de clientes nem cedemos dados a terceiros para fins de marketing alheios à atividade
            seguradora.
          </p>

          <h4 className={h4}>Base legal e prazo de conservação</h4>
          <p className={p}>
            O tratamento assenta no consentimento do titular, na execução de um contrato ou em diligências
            pré-contratuais a seu pedido, e no interesse legítimo da RSF | Brokers na prossecução da sua
            atividade. Os dados associados a contratos de seguro são conservados durante a relação contratual e
            até 10 anos após o seu termo, por obrigações legais e fiscais. Pedidos que não avancem para
            contratação são conservados por um período razoável (em regra, 2 anos) e depois eliminados ou
            anonimizados.
          </p>

          <h4 className={h4}>Partilha de dados com terceiros</h4>
          <p className={p}>
            A RSF | Brokers partilha dados pessoais dos clientes com as seguradoras parceiras, para efeito de
            proposta, contratação e gestão de contratos de seguro — partilha essencial à finalidade do serviço.
            As seguradoras são, elas próprias, responsáveis pelo tratamento que efetuam dos dados que lhes são
            transmitidos. Recorremos ainda a subcontratantes técnicos (alojamento do website, serviço de email)
            obrigados contratualmente a garantir confidencialidade e segurança.
          </p>

          <h4 className={h4}>Direitos do titular dos dados</h4>
          <p className={p}>
            Ao abrigo do RGPD, tem direito de acesso, retificação, apagamento, portabilidade, oposição e
            limitação do tratamento dos seus dados. Pode exercer estes direitos através dos contactos indicados
            no ponto seguinte. Respondemos no prazo legal de um mês, prorrogável por mais dois em caso de
            complexidade. Pode também apresentar reclamação junto da Comissão Nacional de Proteção de Dados
            (CNPD).
          </p>

          <h4 className={h4}>Segurança e cookies</h4>
          <p className={p}>
            Aplicamos medidas técnicas e organizativas adequadas: o website é servido em HTTPS, os acessos
            internos são restritos e os formulários dispõem de mecanismos anti-spam. Para informação sobre
            cookies, consulte a secção &ldquo;Política de Cookies&rdquo; abaixo.
          </p>

          <h4 className={h4}>Contacto do responsável</h4>
          <p className={p}>Para qualquer questão sobre o tratamento dos seus dados pessoais:</p>
          <ul className="list-disc pl-6 text-foreground/80 leading-relaxed mb-4 space-y-1">
            <li><strong>Morada:</strong> {site.address.line1}, {site.address.postalCode} {site.address.city}, {site.address.country}.</li>
            <li><strong>Email:</strong> <a href={`mailto:${site.email}`} className="text-primary underline">{site.email}</a></li>
            <li><strong>Telefone fixo:</strong> <a href={`tel:${site.phones.fixedHref}`} className="text-primary underline">{site.phones.fixed}</a></li>
            <li><strong>Telefone móvel:</strong> <a href={`tel:${site.phones.mobileHref}`} className="text-primary underline">{site.phones.mobile}</a></li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">Última revisão: outubro de 2025.</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="cookies">
        <AccordionTrigger className="font-serif text-xl text-primary hover:no-underline">
          Política de Cookies
        </AccordionTrigger>
        <AccordionContent>
          <h4 className={h4}>O que são cookies</h4>
          <p className={p}>
            Cookies são pequenos ficheiros de texto que um website guarda no navegador do utilizador. A
            utilização de cookies está sujeita ao RGPD, à Lei n.º 58/2019 e à Lei n.º 46/2012. Cookies não
            estritamente necessários carecem de consentimento prévio do utilizador.
          </p>

          <h4 className={h4}>Cookies utilizados</h4>
          <p className={p}>
            O website da RSF | Brokers <strong>não utiliza cookies de analítica nem cookies próprios</strong> de
            qualquer tipo. A única origem de cookies é o mapa do Google incorporado na secção de Contactos.
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-border rounded-md overflow-hidden">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="text-left font-medium px-3 py-2.5">Nome</th>
                  <th className="text-left font-medium px-3 py-2.5">Tipo</th>
                  <th className="text-left font-medium px-3 py-2.5">Finalidade</th>
                  <th className="text-left font-medium px-3 py-2.5">Duração</th>
                  <th className="text-left font-medium px-3 py-2.5">Fornecedor</th>
                </tr>
              </thead>
              <tbody className="bg-background">
                {cookieTable.map((row, i) => (
                  <tr key={i}>
                    <td className="px-3 py-2.5 font-mono text-foreground/90">{row.nome}</td>
                    <td className="px-3 py-2.5 text-foreground/80">{row.tipo}</td>
                    <td className="px-3 py-2.5 text-foreground/80">{row.finalidade}</td>
                    <td className="px-3 py-2.5 text-foreground/80">{row.duracao}</td>
                    <td className="px-3 py-2.5 text-foreground/80">{row.fornecedor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4 className={h4}>Como gerir cookies</h4>
          <p className={p}>
            O utilizador pode gerir ou desativar cookies nas configurações do navegador. Como este website não
            define cookies próprios, essa gestão diz respeito apenas ao cookie de terceiro associado ao mapa do
            Google — pode ser bloqueado sem afetar o funcionamento do resto do site.
          </p>

          <h4 className={h4}>Cookies de terceiros</h4>
          <p className={p}>
            O mapa de localização, na secção de Contactos, só é carregado depois de o utilizador clicar
            expressamente em &ldquo;Ver mapa&rdquo;, com aviso prévio de que a Google pode definir cookies nesse
            momento. Até esse clique, não é carregado qualquer conteúdo do Google Maps nem definido qualquer
            cookie. A RSF | Brokers não controla os cookies de terceiros nem o tratamento que a Google efetua
            dos dados recolhidos pela sua tecnologia.
          </p>

          <h4 className={h4}>Contacto</h4>
          <ul className="list-disc pl-6 text-foreground/80 leading-relaxed mb-4 space-y-1">
            <li><strong>Morada:</strong> {site.address.line1}, {site.address.postalCode} {site.address.city}.</li>
            <li><strong>Email:</strong> <a href={`mailto:${site.email}`} className="text-primary underline">{site.email}</a></li>
            <li><strong>Telefone fixo:</strong> <a href={`tel:${site.phones.fixedHref}`} className="text-primary underline">{site.phones.fixed}</a></li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">Última revisão: outubro de 2025.</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="termos">
        <AccordionTrigger className="font-serif text-xl text-primary hover:no-underline">
          Termos e Condições
        </AccordionTrigger>
        <AccordionContent>
          <h4 className={h4}>Aceitação dos termos</h4>
          <p className={p}>
            Ao aceder e utilizar o website da RSF | Brokers, o utilizador declara ter lido, compreendido e
            aceite integralmente os presentes Termos e Condições. A utilização do website é livre e gratuita; o
            envio de pedidos de orçamento ou mensagens de contacto não constitui, por si só, celebração de
            qualquer contrato de seguro.
          </p>

          <h4 className={h4}>Natureza do serviço</h4>
          <p className={p}>
            A RSF | Brokers atua como Mediador de seguros, não como Seguradora. Os contratos de seguro
            celebrados através da RSF | Brokers são-no entre o cliente e a Seguradora escolhida, sendo esta
            última a única responsável pelo pagamento de indemnizações e pela aceitação do risco. O Mediador
            auxilia na análise das necessidades, na comparação entre propostas de várias Seguradoras e no
            acompanhamento do contrato.
          </p>

          <h4 className={h4}>Pedidos de orçamento e simulações</h4>
          <p className={p}>
            Os pedidos enviados através do website são sempre analisados sem compromisso. A apresentação de uma
            simulação não constitui proposta contratual vinculativa nem garantia de aceitação por qualquer
            Seguradora. As simulações estão dependentes da validação final pela Seguradora escolhida, que pode
            ajustar prémio, coberturas, franquias ou exclusões; em caso de divergência, prevalecem sempre os
            valores finais da apólice.
          </p>

          <h4 className={h4}>Precisão da informação e responsabilidade</h4>
          <p className={p}>
            O cliente é responsável pela veracidade, exatidão e completude das declarações prestadas. A
            RSF | Brokers não responde pelas decisões da Seguradora quanto à aceitação ou recusa de coberturas, à
            fixação do prémio ou à liquidação de sinistros — essas decisões cabem exclusivamente à Seguradora.
            Em caso de litígio, o cliente pode recorrer aos mecanismos de resolução alternativa de litígios
            disponíveis no mercado segurador português.
          </p>

          <h4 className={h4}>Propriedade intelectual e links externos</h4>
          <p className={p}>
            Todos os elementos do website são da titularidade da RSF | Brokers ou estão licenciados para a sua
            utilização, sendo protegidos pela legislação aplicável. O website pode conter links externos para
            sites de Seguradoras parceiras ou para o Google Maps; a RSF | Brokers não controla nem se
            responsabiliza pelo conteúdo ou práticas de privacidade desses sites.
          </p>

          <h4 className={h4}>Lei aplicável e foro</h4>
          <p className={p}>
            Os presentes Termos são regulados pela lei portuguesa. Para a resolução de litígios emergentes da
            sua interpretação ou execução é competente o tribunal da comarca de Lisboa, sem prejuízo do recurso
            aos mecanismos de resolução alternativa de litígios do setor segurador, nomeadamente o Centro de
            Arbitragem de Seguros.
          </p>

          <h4 className={h4}>Contacto</h4>
          <ul className="list-disc pl-6 text-foreground/80 leading-relaxed mb-4 space-y-1">
            <li><strong>Morada:</strong> {site.address.line1}, {site.address.postalCode} {site.address.city}.</li>
            <li><strong>Email:</strong> <a href={`mailto:${site.email}`} className="text-primary underline">{site.email}</a></li>
            <li><strong>Telefone fixo:</strong> <a href={`tel:${site.phones.fixedHref}`} className="text-primary underline">{site.phones.fixed}</a></li>
            <li><strong>Telefone móvel:</strong> <a href={`tel:${site.phones.mobileHref}`} className="text-primary underline">{site.phones.mobile}</a></li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">Última revisão: outubro de 2025.</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="mediador" className="border-b-0">
        <AccordionTrigger className="font-serif text-xl text-primary hover:no-underline">
          Informação do mediador
        </AccordionTrigger>
        <AccordionContent>
          <p className={p}>
            <strong>{site.name}</strong> — {site.tagline}. Mediador de seguros em atividade desde{" "}
            {site.founded}, com responsável identificável e atendimento direto, sem call center.
          </p>
          <ul className="list-disc pl-6 text-foreground/80 leading-relaxed mb-4 space-y-1">
            <li><strong>Mediador responsável:</strong> {site.responsible}</li>
            <li><strong>Registo ISP:</strong> 309 302 840</li>
            <li><strong>Morada:</strong> {site.address.line1}, {site.address.postalCode} {site.address.city}, {site.address.country}</li>
            <li><strong>Email:</strong> <a href={`mailto:${site.email}`} className="text-primary underline">{site.email}</a></li>
            <li><strong>Telefone fixo:</strong> <a href={`tel:${site.phones.fixedHref}`} className="text-primary underline">{site.phones.fixed}</a></li>
            <li><strong>Telefone móvel:</strong> <a href={`tel:${site.phones.mobileHref}`} className="text-primary underline">{site.phones.mobile}</a></li>
          </ul>
          <p className={p}>
            Para apresentar uma reclamação, pode contactar-nos diretamente pelos meios acima ou através do
            Livro de Reclamações Eletrónico, plataforma pública do Estado português:
          </p>
          <ul className="list-disc pl-6 text-foreground/80 leading-relaxed mb-4 space-y-1">
            <li>
              <strong>Livro de Reclamações Eletrónico:</strong>{" "}
              <Link href="https://www.livroreclamacoes.pt/inicio" target="_blank" rel="noopener" className="text-primary underline">
                www.livroreclamacoes.pt/inicio
              </Link>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
