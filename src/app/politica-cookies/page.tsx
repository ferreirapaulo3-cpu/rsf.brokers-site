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
  { nome: "NID, 1P_JAR, outros", tipo: "Terceiros", finalidade: "Cookies definidos pela Google ao carregar o mapa incorporado na página de Contacto", duracao: "Variável (definida pela Google)", fornecedor: "Google LLC" },
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
              Cookies são pequenos ficheiros de texto que um website guarda no navegador do
              utilizador. Permitem a um site reconhecer o utilizador entre páginas e visitas,
              manter sessões ativas ou recordar preferências. Os cookies não contêm, em si,
              dados pessoais do utilizador, mas podem ser associados a dados pessoais tratados
              pelo website ou pelo terceiro que os define.
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
              O website da RSF | Brokers <strong>não utiliza cookies de analítica (como Google
              Analytics) nem cookies próprios</strong> de qualquer tipo — não existem cookies
              funcionais, de sessão ou de preferências definidos por este website. A única
              origem de cookies é o mapa do Google incorporado na página de Contacto, descrito
              no ponto 4.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A tabela seguinte resume os cookies atualmente associados a este website. Esta
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
              Como este website não define cookies próprios, a gestão feita no navegador diz
              respeito apenas ao cookie de terceiro associado ao mapa do Google, descrito no
              ponto seguinte. O utilizador pode bloquear cookies de terceiros no navegador sem
              afetar o funcionamento do resto do site.
            </p>

            <h2 id="cookies-terceiros" className="font-serif text-2xl text-primary mb-3 mt-10 scroll-mt-32">
              4. Cookies de terceiros
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              O website da RSF | Brokers recorre a cookies de terceiros apenas numa situação: a
              apresentação do mapa de localização na página de contacto, através do embed do
              Google Maps. Esse serviço é prestado pela Google LLC, enquanto responsável
              autónomo pelo tratamento dos dados recolhidos através da sua tecnologia.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Na página de Contacto, o mapa só é carregado depois de o utilizador clicar
              expressamente em &ldquo;Ver mapa&rdquo;, com aviso prévio de que a Google pode
              definir cookies nesse momento. Até esse clique, não é carregado qualquer conteúdo
              do Google Maps nem definido qualquer cookie. Depois do clique, a Google pode
              recolher dados técnicos como o endereço IP e parâmetros do navegador, tratados em
              conformidade com a sua própria política de privacidade. O utilizador pode optar
              por não carregar o mapa, abrindo diretamente o Google Maps no endereço indicado
              na página de contacto.
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
