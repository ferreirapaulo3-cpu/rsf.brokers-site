import Link from "next/link";
import { PageHeader, Breadcrumbs } from "@/components/site/layout";
import { CTASection } from "@/components/site/cta-section";
import { LegalContentsNav } from "@/components/site/legal-contents-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Cookie } from "lucide-react";
import { site } from "@/lib/site-data";

export const metadata = {
  title: "Política de cookies",
  description:
    "Como o website da RSF | Brokers utiliza cookies: tipos, finalidades, durações e formas de gerir ou desativar cookies no seu navegador.",
  alternates: { canonical: "/politica-cookies" },
};

const cookieTable = [
  { nome: "_ga, _ga_*", tipo: "Analítico", finalidade: "Estatísticas de utilização (Google Analytics 4)", duracao: "2 anos", fornecedor: "Google LLC" },
  { nome: "_gid", tipo: "Analítico", finalidade: "Distinguir utilizadores", duracao: "24 horas", fornecedor: "Google LLC" },
  { nome: "cookie_consent", tipo: "Funcional", finalidade: "Registar o consentimento de cookies", duracao: "12 meses", fornecedor: "RSF | Brokers" },
  { nome: "session_id", tipo: "Necessário", finalidade: "Manter a sessão de navegação", duracao: "Sessão", fornecedor: "RSF | Brokers" },
  { nome: "MapEmbed", tipo: "Funcional", finalidade: "Memorizar preferências do mapa de contacto", duracao: "Sessão", fornecedor: "RSF | Brokers" },
];

const legalSections = [
  { id: "cookies-definicao", label: "1. O que são cookies" },
  { id: "cookies-utilizados", label: "2. Cookies utilizados" },
  { id: "cookies-gestao", label: "3. Como gerir cookies" },
  { id: "cookies-terceiros", label: "4. Cookies de terceiros" },
  { id: "cookies-atualizacoes", label: "5. Atualizações" },
  { id: "cookies-contacto", label: "6. Contacto" },
];

export default function PoliticaCookiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Política de cookies"
        description="Como o website da RSF | Brokers utiliza cookies."
      />
      <Breadcrumbs items={[{ label: "Política de cookies" }]} />

      <section className="py-16">
        <div className="container-rsf">
          <div className="mb-8 max-w-4xl">
            <Card className="bg-secondary/40 border-primary/15">
              <CardContent className="p-6 flex flex-col md:flex-row md:items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/15 text-accent-ink grid place-items-center flex-shrink-0">
                  <Cookie className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[0.8125rem] uppercase tracking-widest font-semibold text-accent-ink mb-1">
                    Documento complementar
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Esta política complementa a{" "}
                    <Link href="/politica-privacidade" className="text-primary underline">
                      Política de privacidade
                    </Link>{" "}
                    e aplica-se especificamente à utilização de cookies e tecnologias
                    equivalentes no website da RSF | Brokers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10">
            <LegalContentsNav items={legalSections} />
            <div className="min-w-0 max-w-4xl space-y-2">
            <h2 id="cookies-definicao" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              1. O que são cookies
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Cookies são pequenos ficheiros de texto que o website que visita guarda no
              navegador do utilizador. Permitem ao site reconhecer o utilizador entre páginas e
              visitas, manter sessões ativas, recordar preferências e recolher indicadores
              estatísticos de utilização. Os cookies não contêm, em si, dados pessoais do
              utilizador, mas podem ser associados a dados pessoais tratados pelo website.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A utilização de cookies está sujeita ao regime do RGPD e da Lei n.º 58/2019, de
              8 de agosto, bem como à Lei n.º 46/2012, de 29 de agosto (que transpôs a
              diretiva das comunicações eletrónicas). Em particular, os cookies que não sejam
              estritamente necessários ao funcionamento do site carecem de consentimento prévio
              do utilizador, exceto nos casos expressamente previstos na lei.
            </p>

            <h2 id="cookies-utilizados" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              2. Cookies utilizados
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              O website da RSF | Brokers utiliza as seguintes categorias de cookies:{" "}
              <strong>Necessários/Técnicos</strong>, indispensáveis ao funcionamento básico do
              site — sessão de navegação, segurança e formulários; <strong>Analíticos</strong>,
              que permitem recolher estatísticas de utilização agregadas e anónimas, com
              recurso ao Google Analytics 4, com IP anonimizado e sujeitos a consentimento;{" "}
              <strong>Funcionais</strong>, que memorizam preferências do utilizador, como a
              escolha do banner de consentimento; e <strong>Marketing</strong>, não utilizados
              por defeito, em linha com a opção por não ceder dados a terceiros para campanhas
              comerciais.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Em particular, o Google Analytics 4 utilizado por este website recolhe a
              informação de utilização com IP anonimizado, ou seja, o endereço IP do utilizador
              é truncado antes de ser guardado, de modo a não permitir a identificação direta
              do titular. A recolha deste tipo de cookies só é ativada após consentimento
              expresso do utilizador no banner de consentimento.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A tabela seguinte resume os cookies atualmente em utilização neste website. Esta
              lista pode ser atualizada sempre que haja alteração nos serviços prestados por
              terceiros.
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
                    <tr key={i} className={i % 2 === 1 ? "bg-secondary/30" : ""}>
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

            <h2 id="cookies-gestao" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              3. Como gerir cookies
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              O utilizador pode gerir ou desativar os cookies nas configurações do navegador
              que utiliza. A maioria dos navegadores modernos oferece opções detalhadas para
              aceitar, recusar ou eliminar cookies, individualmente ou em bloco. Em particular,
              pode configurar o navegador para recusar cookies de terceiros, manter apenas os
              cookies de sessão ou apagar todos os cookies ao fechar o navegador.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A desativação de cookies estritamente necessários ao funcionamento do site pode
              prejudicar a experiência do utilizador — em particular, a submissão de formulários
              e a navegação segura entre páginas. A desativação de cookies analíticos não afeta
              o funcionamento básico do site, apenas a possibilidade de o site recolher
              indicadores de utilização.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A RSF | Brokers tem planeado disponibilizar um banner de consentimento que
              permita ao utilizador aceitar ou recusar cookies não essenciais no momento do
              primeiro acesso ao site. Até à entrada em vigor desse banner, em linha com o
              princípio da minimização, os cookies analíticos são mantidos desativados por
              defeito, sendo ativados apenas após consentimento expresso do utilizador.
            </p>

            <h2 id="cookies-terceiros" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              4. Cookies de terceiros
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              O website da RSF | Brokers recorre a cookies de terceiros em duas situações
              específicas: para recolha de estatísticas de utilização, através do Google
              Analytics 4, conforme indicado no ponto anterior; e para a apresentação do mapa
              de localização na página de contacto, através do embed do Google Maps. Ambos os
              serviços são prestados pela Google LLC, enquanto responsável autónomo pelo
              tratamento dos dados recolhidos através das suas tecnologias.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              O embed do Google Maps permite visualizar a morada da RSF | Brokers diretamente
              no website, sem obrigar o utilizador a abrir uma nova janela. Para esta
              funcionalidade, a Google pode recolher dados técnicos como o endereço IP e
              parâmetros do navegador, tratados em conformidade com a sua própria política de
              privacidade. O utilizador pode optar por não visualizar o mapa, abrindo
              diretamente o Google Maps no endereço indicado na página de contacto.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A RSF | Brokers não controla diretamente os cookies de terceiros nem o tratamento
              que estes efetuam dos dados recolhidos. Para mais informação, deve consultar as
              políticas de privacidade dos respetivos prestadores, em particular a política de
              privacidade da Google.
            </p>

            <h2 id="cookies-atualizacoes" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              5. Atualizações
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A presente Política de Cookies pode ser atualizada pela RSF | Brokers sempre que
              se verifique alteração relevante nos cookies utilizados, nas finalidades do
              tratamento, nos prestadores terceiros ou na legislação aplicável. As alterações
              entram em vigor a partir da respetiva publicação neste website. Recomendamos a
              consulta periódica deste documento.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Sempre que a alteração implique necessidade de novo consentimento, a RSF | Brokers
              assegurará os procedimentos adequados junto dos utilizadores, em conformidade
              com a lei. Em particular, a entrada em funcionamento do banner de consentimento
              referido no ponto 3 dará origem a uma nova versão deste documento.
            </p>

            <h2 id="cookies-contacto" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              6. Contacto
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Para qualquer questão relacionada com a utilização de cookies no website da
              RSF | Brokers, pode contactar-nos através dos seguintes meios:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 leading-relaxed mb-4 space-y-1">
              <li><strong>Morada:</strong> Rua Garcia de Orta, n.º 30, Loja A, 2720-252 Damaia, Amadora, Portugal.</li>
              <li><strong>Email:</strong> <a href={`mailto:${site.email}`} className="text-primary underline">{site.email}</a></li>
              <li><strong>Telefone fixo:</strong> <a href={`tel:${site.phones.fixedHref}`} className="text-primary underline">{site.phones.fixed}</a></li>
            </ul>
            <p className="text-sm text-muted-foreground mt-8 border-t border-border pt-4">
              Última revisão: outubro de 2025.
            </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Tem dúvidas sobre cookies?"
        description="Esclarecemos qualquer questão relacionada com a utilização de cookies neste website."
        primaryLabel="Contactar a RSF | Brokers"
        primaryHref="/contacto"
        variant="default"
      />
    </>
  );
}
