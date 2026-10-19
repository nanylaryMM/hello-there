import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowDown, ArrowRight, Check, ChevronDown, Heart, MessageCircle,
  ShieldCheck, Sparkles, Target, TrendingUp, Video, X
} from "lucide-react";

const CHECKOUT_URL = "";
const VSL_URL = "";
const SUPPORT_URL = "";
const PRIVACY_URL = "";
const TERMS_URL = "";

const steps = [
  { n: "01", title: "Recupere sua base emocional", text: "Reconheça o que está sentindo, evite decisões impulsivas e volte a colocar você no centro da própria vida.", icon: Heart },
  { n: "02", title: "Entenda o que aconteceu", text: "Reflita sobre os fatores que contribuíram para o término e identifique padrões que podem ser trabalhados.", icon: Target },
  { n: "03", title: "Melhore sua comunicação", text: "Aprenda princípios para se expressar com clareza, ouvir com atenção e conversar sem pressionar.", icon: MessageCircle },
  { n: "04", title: "Avalie os próximos passos", text: "Observe se existe abertura para o diálogo, respeite limites e decida como seguir com maturidade.", icon: TrendingUp },
];

const bonuses = [
  { label: "BÔNUS 01", title: "Guia de Comunicação e Mensagens", text: "Orientações e exemplos editáveis de mensagens respeitosas para diferentes situações." },
  { label: "BÔNUS 02", title: "Desafio de 7 Dias de Autoconfiança", text: "Exercícios de reflexão e pequenas ações para fortalecer sua autoestima e autonomia." },
  { label: "BÔNUS 03", title: "Checklist de Reconexão Saudável", text: "Uma lista prática para avaliar a abertura para conversar e reconhecer limites." },
  { label: "BÔNUS 04", title: "Plano de Conversa sem Pressão", text: "Um roteiro para preparar conversas honestas, ouvir e lidar com diferentes respostas." },
];

const faqs = [
  { q: "O produto é físico?", a: "Não. O produto é digital e os materiais devem ser disponibilizados pela plataforma de entrega configurada após a confirmação da compra." },
  { q: "Como funciona o método de 30 dias?", a: "O conteúdo é organizado em etapas para orientar a reflexão, a comunicação e a tomada de decisões ao longo desse período. Os resultados variam conforme cada situação." },
  { q: "O método garante que meu ex vai voltar?", a: "Não. Nenhum método pode garantir a reconciliação, pois ela depende dos sentimentos, das escolhas e da vontade das duas pessoas." },
  { q: "O que está incluído no pacote?", a: "O guia principal e os quatro bônus apresentados nesta página, conforme os materiais efetivamente disponibilizados pelo vendedor." },
  { q: "Como receberei o acesso?", a: "O acesso deve ser enviado conforme as instruções da plataforma de pagamento e entrega configurada pelo vendedor." },
  { q: "E se a compra não der certo?", a: "Consulte o suporte e as condições de compra e reembolso informadas no checkout." },
];

function CheckoutButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [notice, setNotice] = useState(false);
  return (
    <div className="checkout-wrap">
      {CHECKOUT_URL ? (
        <a className={"button button-primary " + className} href={CHECKOUT_URL}>{children}<ArrowRight size={18} /></a>
      ) : (
        <button className={"button button-primary " + className} onClick={() => setNotice(true)}>{children}<ArrowRight size={18} /></button>
      )}
      {notice && <div className="config-notice" role="status"><span>O checkout ainda precisa ser configurado pelo vendedor.</span><button aria-label="Fechar aviso" onClick={() => setNotice(false)}><X size={15} /></button></div>}
    </div>
  );
}

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <main className="landing">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Reconquiste em 30 Dias — início">
          <span className="brand-mark"><Heart size={17} fill="currentColor" /></span>
          <span>RECONQUISTE <b>30</b></span>
        </a>
        <a className="header-link" href="#metodo">Conheça o método <ArrowRight size={15} /></a>
      </header>

      <section className="hero section-shell" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> GUIA DIGITAL • PLANO DE 30 DIAS</div>
          <h1>AINDA EXISTE UMA CHANCE DE <em>RECONQUISTAR</em> QUEM VOCÊ AMA?</h1>
          <p className="hero-subtitle">Descubra como agir com mais segurança emocional, reconstruir a conexão e criar novas possibilidades de aproximação com seu ex — com um plano prático de 30 dias para orientar seus próximos passos.</p>
          <div className="hero-note"><span className="note-icon"><Sparkles size={17} /></span><span>30 dias para mudar sua postura, recuperar sua confiança e entender os próximos passos.</span></div>
          <a className="button button-primary hero-cta" href="#oferta">QUERO CONHECER O MÉTODO <ArrowRight size={18} /></a>
          <p className="microcopy"><ShieldCheck size={14} /> Acesso digital <span>•</span> Conteúdo prático <span>•</span> Consulte as condições da oferta</p>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1100&q=85" alt="Casal adulto em um momento íntimo e reflexivo, representando conexão emocional" fetchPriority="high" />
            <div className="image-gradient" />
            <div className="image-caption"><span className="caption-line" /><span>UMA NOVA FORMA DE OLHAR PARA O AMOR</span></div>
          </div>
          <div className="visual-glow" />
          <div className="floating-stamp"><Heart size={17} /><span>COMECE<br />POR VOCÊ</span></div>
          <div className="hero-visual-index">01 <span>/ 04</span></div>
        </div>
      </section>

      <div className="trust-strip"><div><span className="strip-dot" /> UM CAMINHO COM MAIS CONSCIÊNCIA</div><span className="strip-separator" /><div>SEM PROMESSAS MÁGICAS. COM PASSOS PRÁTICOS.</div></div>

      <section className="section section-identification section-shell">
        <div className="section-kicker">01 — VOCÊ NÃO ESTÁ SOZINHO NISSO</div>
        <div className="section-heading split-heading"><h2>VOCÊ SENTE QUE AINDA FICOU <em>ALGO POR RESOLVER?</em></h2><p>O fim de uma relação pode deixar dúvidas, saudade e muitas perguntas. Antes de tomar qualquer atitude, vale entender o que você sente e o que realmente está ao seu alcance.</p></div>
        <div className="feelings-grid">
          {[
            "Você ainda pensa nessa pessoa, mesmo tentando seguir em frente.",
            "Não sabe se deve mandar uma mensagem ou dar espaço.",
            "Tem medo de insistir demais e acabar afastando ainda mais.",
            "Gostaria de entender o que pode fazer diferente desta vez.",
            "Quer recuperar sua autoestima e voltar a se sentir seguro emocionalmente.",
          ].map((item, i) => <article className="feeling-card" key={item}><span className="card-number">0{i + 1}</span><p>{item}</p><span className="card-corner"><ArrowRight size={15} /></span></article>)}
        </div>
        <div className="gentle-callout"><span className="callout-mark">“</span><p>Você não precisa agir por impulso. Pode começar entendendo suas emoções e escolhendo seus próximos passos com mais clareza.</p></div>
      </section>

      <section className="section method-section" id="metodo">
        <div className="section-shell">
          <div className="section-kicker">02 — O PLANO</div>
          <div className="section-heading centered-heading"><h2>UM PLANO PRÁTICO PARA OS <em>PRÓXIMOS 30 DIAS</em></h2><p>Um guia digital estruturado para ajudar você a refletir sobre o término, compreender padrões de comportamento, melhorar a comunicação e avaliar se existe espaço para uma reconexão saudável.</p></div>
          <div className="steps-grid">
            {steps.map((step) => { const Icon = step.icon; return <article className="step-card" key={step.n}><div className="step-top"><span className="step-number">{step.n}</span><Icon size={21} strokeWidth={1.6} /></div><h3>{step.title}</h3><p>{step.text}</p><div className="step-progress"><span /></div></article>; })}
          </div>
          <p className="method-footnote"><span /> Cada história é única. A reconciliação depende da vontade e das escolhas das duas pessoas.</p>
        </div>
      </section>

      <section className="section video-section section-shell" id="video">
        <div className="section-kicker">03 — ENTENDA A PROPOSTA</div>
        <div className="section-heading centered-heading"><h2>ASSISTA E DESCUBRA COMO FUNCIONA <em>O MÉTODO</em></h2><p>Entenda a proposta do programa e veja como o plano de 30 dias pode ajudar você a tomar decisões mais conscientes sobre seu relacionamento.</p></div>
        <div className="video-frame">
          {VSL_URL ? <iframe src={VSL_URL} title="Vídeo de apresentação do método Reconquiste em 30 Dias" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : <div className="video-placeholder"><img src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1400&q=80" alt="" loading="lazy" /><div className="video-overlay" /><div className="video-placeholder-content"><span className="play-button"><Video size={23} /></span><span className="video-label">APRESENTAÇÃO DO MÉTODO</span><p>Seu vídeo de vendas será exibido aqui</p><small>Insira a URL da VSL na configuração VSL_URL</small></div></div>}
        </div>
        <div className="video-cta"><p>Conheça o conteúdo completo e veja se este plano faz sentido para você.</p><a className="button button-outline" href="#oferta">QUERO ACESSAR O PACOTE COMPLETO <ArrowDown size={17} /></a></div>
      </section>

      <section className="section package-section">
        <div className="section-shell">
          <div className="section-kicker">04 — O QUE VOCÊ RECEBE</div>
          <div className="section-heading split-heading"><h2>SEU PACOTE COMPLETO DE <em>RECONQUISTA</em></h2><p>Materiais digitais para orientar sua reflexão, comunicação e próximos passos com mais intenção e maturidade.</p></div>
          <article className="main-product-card"><div className="product-cover"><div className="cover-glow" /><span className="cover-small">GUIA DIGITAL</span><Heart size={39} strokeWidth={1.2} /><span className="cover-title">RECONQUISTE<br /><b>EM 30 DIAS</b></span><span className="cover-bottom">UM PASSO DE CADA VEZ</span></div><div className="main-product-copy"><span className="product-tag">PRODUTO PRINCIPAL</span><h3>Guia Reconquiste em 30 Dias</h3><p>Orientações práticas para organizar seus próximos passos, refletir sobre o relacionamento, melhorar sua comunicação e recuperar sua confiança.</p><div className="product-includes"><Check size={16} /> Guia digital organizado por etapas</div><div className="product-includes"><Check size={16} /> Ações para reflexão e comunicação consciente</div></div></article>
          <div className="bonus-heading"><span className="section-kicker">MATERIAIS COMPLEMENTARES</span><span className="bonus-rule" /></div>
          <div className="bonuses-grid">{bonuses.map((bonus, i) => <article className="bonus-card" key={bonus.label}><span className="bonus-label">{bonus.label}</span><div className="bonus-icon">{["01", "02", "03", "04"][i]}</div><h3>{bonus.title}</h3><p>{bonus.text}</p></article>)}</div>
          <p className="content-disclaimer">Os materiais e bônus devem corresponder ao conteúdo efetivamente disponibilizado pelo vendedor.</p>
        </div>
      </section>

      <section className="section benefits-section section-shell">
        <div className="section-kicker">05 — O QUE VOCÊ PODE DESENVOLVER</div>
        <div className="section-heading centered-heading"><h2>MAIS CLAREZA PARA <em>SEGUIR EM FRENTE</em></h2><p>O método foi pensado para ajudar você a desenvolver habilidades que podem fazer diferença na forma de lidar com esse momento.</p></div>
        <div className="benefits-grid">
          {["Mais clareza para lidar com o término", "Mais consciência sobre padrões de comportamento", "Comunicação mais respeitosa e objetiva", "Menos decisões tomadas por impulso", "Mais confiança para lidar com diferentes respostas", "Um plano organizado para orientar os próximos passos"].map((benefit, i) => <div className="benefit-item" key={benefit}><span className="benefit-check"><Check size={16} /></span><p>{benefit}</p><span className="benefit-index">0{i + 1}</span></div>)}
        </div>
      </section>

      <section className="section offer-section" id="oferta">
        <div className="offer-glow" />
        <div className="section-shell offer-shell">
          <div className="section-kicker">06 — SEU PRÓXIMO PASSO</div>
          <div className="offer-card">
            <div className="offer-topline"><span className="offer-dot" /> PACOTE DIGITAL COMPLETO</div>
            <h2>DÊ O PRÓXIMO PASSO <em>COM MAIS CLAREZA</em></h2>
            <p className="offer-intro">Tenha acesso ao pacote completo e comece a trabalhar sua comunicação, sua confiança e seus próximos passos.</p>
            <div className="price"><span>R$</span> 79<small>,90</small></div>
            <p className="price-caption">Pagamento único • Pacote digital</p>
            <div className="offer-divider" />
            <ul className="offer-list">{["Guia Reconquiste em 30 Dias", "Guia de Comunicação e Mensagens", "Desafio de 7 Dias de Autoconfiança", "Checklist de Reconexão Saudável", "Plano de Conversa sem Pressão"].map(item => <li key={item}><Check size={16} />{item}</li>)}</ul>
            <CheckoutButton className="offer-button">QUERO MEU ACESSO AGORA</CheckoutButton>
            <p className="secure-note"><ShieldCheck size={15} /> Compra realizada por meio do checkout seguro configurado pelo vendedor.</p>
          </div>
          <p className="offer-note">A compra não garante reconciliação. Leia as condições da oferta antes de finalizar.</p>
        </div>
      </section>

      <section className="section faq-section section-shell" id="faq">
        <div className="section-kicker">07 — DÚVIDAS FREQUENTES</div>
        <div className="faq-layout"><div className="faq-intro"><h2>PERGUNTAS <em>FREQUENTES</em></h2><p>Quer entender melhor antes de decidir? Aqui estão algumas respostas importantes.</p><a href="#oferta" className="text-link">Ver o pacote completo <ArrowRight size={16} /></a></div><div className="faq-list">{faqs.map((faq, i) => <article className={"faq-item " + (openFaq === i ? "is-open" : "")} key={faq.q}><button className="faq-question" aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{faq.q}</span><ChevronDown size={19} /></button>{openFaq === i && <div className="faq-answer"><p>{faq.a}</p></div>}</article>)}</div></div>
      </section>

      <section className="final-cta section-shell">
        <div className="final-ornament"><Heart size={20} /></div>
        <div className="section-kicker">UM NOVO COMEÇO PODE COMEÇAR EM VOCÊ</div>
        <h2>VOCÊ NÃO CONTROLA A ESCOLHA DA OUTRA PESSOA. <em>MAS PODE ESCOLHER COMO SEGUIR.</em></h2>
        <p>Comece hoje a cuidar da sua postura emocional, melhorar sua comunicação e construir um caminho mais consciente para o futuro do seu relacionamento.</p>
        <CheckoutButton className="final-button">ACESSAR O PACOTE COMPLETO POR R$ 79,90</CheckoutButton>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark"><Heart size={15} fill="currentColor" /></span><span>RECONQUISTE <b>30</b></span></a>
        <p className="footer-disclaimer">Conteúdo educativo. Não há garantia de reconciliação; cada relação depende das escolhas e da vontade das pessoas envolvidas.</p>
        <nav className="footer-links" aria-label="Links legais">{PRIVACY_URL ? <a href={PRIVACY_URL}>Privacidade</a> : <span>Privacidade: configurar link</span>}{TERMS_URL ? <a href={TERMS_URL}>Termos de uso</a> : <span>Termos: configurar link</span>}{SUPPORT_URL ? <a href={SUPPORT_URL}>Suporte</a> : <span>Suporte: configurar link</span>}</nav>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Reconquiste em 30 Dias</span><span>Feito com intenção, não com promessas.</span></div>
      </footer>
      <a className="mobile-buy" href="#oferta">VER PACOTE • R$ 79,90 <ArrowRight size={17} /></a>
    </main>
  );
}
