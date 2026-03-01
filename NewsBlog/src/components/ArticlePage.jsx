import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const articlesData = [
  {
    id: 1,
    title: 'O Futuro da Inteligência Artificial em 2026',
    category: 'Tecnologia',
    excerpt: 'Descubra como a IA está transformando o mundo e o que esperar nos próximos anos.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '28 de Fevereiro, 2026',
    readTime: '5 min de leitura',
    author: 'Dr. Carlos Silva',
    content: `
A Inteligência Artificial não é mais apenas um conceito futurista - é uma realidade que está redefinindo todos os aspectos de nossas vidas. Em 2026, vemos transformações profundas em como as máquinas aprendem e interagem conosco.

## O Cenário Atual

A IA generativa tem evoluído rapidamente, com modelos cada vez mais sofisticados e especializados. As empresas estão investindo bilhões em pesquisa e desenvolvimento, criando soluções que antes eram apenas ficção científica.

## Aplicações Revolucionárias

Desde a medicina diagnóstica até a educação personalizada, a IA está criando oportunidades que antes eram impossíveis. Médicos usam IA para detectar doenças com precisão superior à humana, enquanto educadores utilizam sistemas inteligentes para personalizar o aprendizado.

## Desafios Éticos

No entanto, essa revolução não vem sem desafios. Questões sobre privacidade, viés algorítmico e o impacto no mercado de trabalho são debates cruciais que a sociedade deve enfrentar agora.

## O Futuro

Podemos esperar uma IA ainda mais integrada ao nosso dia a dia, mas também uma regulação mais forte para garantir que seja usada responsavelmente. O equilíbrio entre inovação e ética será a chave para um futuro sustentável.

O que você acha sobre o futuro da IA? Compartilhe sua opinião nos comentários!
    `,
  },
  {
    id: 2,
    title: 'Tendências de Tecnologia que Vão Dominar 2026',
    category: 'Tecnologia',
    excerpt: 'De blockchain a quantum computing, conheça as inovações que moldarão o nosso futuro.',
    image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '27 de Fevereiro, 2026',
    readTime: '7 min de leitura',
    author: 'Ing. Marina Santos',
    content: `
2026 é um ano pivô para a tecnologia. Com a convergência de múltiplas inovações, estamos prestes a ver transformações que mudará fundamentalmente como vivemos e trabalhamos.

## Computação Quântica

Os primeiros computadores quânticos práticos estão começando a resolver problemas reais. Por enquanto, ainda estamos nos primeiros dias, mas a promessa é imensa - criptografia, otimização e simulação de materiais nunca foram tão próximas.

## Web3 e Descentralização

A web descentralizada não é mais uma utopia. Com protocolos mais eficientes e interfaces mais acessíveis, mais pessoas estão explorando as possibilidades da blockchain.

## Realidade Aumentada

A RA deixou os smartphones. Óculos inteligentes agora são acessíveis e práticos, abrindo possibilidades para educação, medicina e entretenimento.

## Sustentabilidade Digital

As empresas Tecnologia finalmente estão levando a sério sua pegada de carbono. Centros de dados green e computação eficiente em energia são agora a norma, não exceção.

## Segurança Descentralizada

Com mais dados sendo armazenados e processados, a segurança nunca foi tão importante. Novas abordagens de criptografia e autenticação estão emergindo.

O futuro é emocionante, diverso e cheio de possibilidades!
    `,
  },
  {
    id: 3,
    title: 'Como Equilibrar a Vida Digital e Real',
    category: 'Lifestyle',
    excerpt: 'Dicas práticas para manter um equilíbrio saudável entre sua presença online e offline.',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '26 de Fevereiro, 2026',
    readTime: '4 min de leitura',
    author: 'Profa. Ana Costa',
    content: `
Vivemos em um mundo onde a conectividade é constante. Nossos telefones são extensões de nós mesmos, mas será que estamos sendo saudáveis nessa relação?

## O Problema do Excesso Digital

Estudos mostram que a exposição excessiva a telas está afetando nossa saúde mental, sono e relações sociais. O "scroll infinito" pode ser viciante e prejudicial.

## Dicas Práticas para Equilíbrio

### 1. Estabeleça Horários Digital-Free
Reserve pelo menos 1-2 horas por dia sem qualquer dispositivo. Use este tempo para atividades que trazem alegria - leitura, exercício, conversa face a face.

### 2. Crie Limites
Desative notificações após um certo horário. Coloque seu telefone em uma sala diferente durante refeições e antes de dormir.

### 3. Revise Suas Redes Sociais
Siga apenas contas que te inspiram e agregam valor. Considere desinstalar apps que você sente que consomem muito seu tempo.

### 4. Pratique Mindfulness
Tire um tempo para meditação ou yoga. Estar presente no momento é tão importante quanto ser produtivo.

### 5. Cultive Hobbies Offline
Leia livros físicos, caminhe na natureza, tenha conversas significativas. A vida real ainda tem muita beleza a oferecer.

## A Jornada é Pessoal

Não se trata de abandonar a tecnologia, mas de usá-la de forma intencional e mindful. Cada pessoa encontrará seu próprio equilíbrio.

Qual é o seu equilíbrio ideal entre mundo digital e real?
    `,
  },
  {
    id: 4,
    title: 'Startups Que Estão Mudando o Mercado',
    category: 'Negócios',
    excerpt: 'Conheça as startups mais promissoras que estão atraindo investimentos bilionários.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '25 de Fevereiro, 2026',
    readTime: '6 min de leitura',
    author: 'Esp. Ricardo Oliveira',
    content: `
O ecossistema de startups nunca foi tão vibrante. Com investimentos em recorde e uma onda de empreendedores apaixonados, 2026 promete ser um ano transformador.

## Startups de Energia Limpa

Uma série de empresas estão revolucionando como geramos e armazenamos energia. Baterias de próxima geração e painéis solares mais eficientes estão saindo de laboratórios para o mercado.

## BioTecnologia Inovadora

A biotecnologia está resolvendo problemas que pareciam insuperáveis. Terapias gênicas, medicamentos personalizados e cultivo de carne em laboratório estão mudando a medicina e a alimentação.

## FinTecnologias Disruptivas

Novos modelos bancários descentralizados estão democratizando o acesso a produtos financeiros. Remessas internacionais, investimentos e seguros agora são mais acessíveis.

## EdTecnologia Para Todos

Startups de educação estão tornando aprendizado personalizado acessível globalmente. Cursos adaptativos e mentorias por IA estão transformando como aprendemos.

## SpaceTecnologia

Não apenas empresas existentes, mas startups estão explorando o espaço. Satélites mais baratos, turismo espacial comercial e mineração por asteroides deixaram de ser ficção.

## O Padrão Comum

O que todos esses empreendimentos têm em comum? Uma visão de resolver problemas reais com tecnologia inovadora e uma equipe apaixonada.

Qual startup você acha que vai ser o próximo unicórnio?
    `,
  },
  {
    id: 5,
    title: 'Web3: A Internet do Futuro',
    category: 'Tecnologia',
    excerpt: 'Entenda o que é Web3 e como ela vai revolucionar a forma como usamos a internet.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '24 de Fevereiro, 2026',
    readTime: '8 min de leitura',
    author: 'Dev. Lucas Mendes',
    content: `
Web3 não é apenas um buzzword - é uma reimaginação fundamental da internet. Diferente da Web2, onde dados são centralizados, Web3 propõe um retorno ao controle individual.

## Entendendo a Evolução

### Web 1.0 (1990s)
Ler apenas. Páginas estáticas, sem interação.

### Web 2.0 (2000s-2020s)
Ler e escrever. Redes sociais, UGC, mas dados centralizados.

### Web3 (Agora em diante)
Ler, escrever e possuir. Dados descentralizados, controle individual do usuário.

## Características Principais

**Descentralização**: Sem servidores centrais. Dados distribuídos em rede.

**Propriedade**: Usuários controlam seus próprios dados e ativos digitais (NFTs, criptomoedas).

**Transparência**: Blockchains públicas permitem auditoria completa.

**Segurança**: Criptografia end-to-end por padrão.

## Aplicações Reais

### Social Media Descentralizada
Plataformas como Mastodon e Bluesky oferem alternativas sem censura centralizada.

### DeFi (Finanças Descentralizadas)
Bancos sem intermediários financeiros. Você é seu próprio banco.

### DAOs (Organizações Autônomas Descentralizadas)
Empresas sem CEOs, governadas por smart contracts.

### Metaversos Descentralizados
Mundos virtuais onde você possui seus bens digitais.

## Desafios

Escalabilidade ainda é um desafio. Velocidade de transações em blockchains não é comparável a bancos centralizados... ainda.

Adoção em massa requer interfaces mais amigáveis. Programadores avançados entendem, mas ainda há uma barreira para usuários comuns.

## O Futuro

Esperamos ver uma hibridização - Web2 e Web3 coexistindo, cada uma servindo seu propósito. A internet do futuro provavelmente combinará o melhor de ambos.

Você está pronto para Web3?
    `,
  },
  {
    id: 6,
    title: 'Sustentabilidade no Setor Tecnologia',
    category: 'Sustentabilidade',
    excerpt: 'Como as grandes empresas de tecnologia estão se comprometendo com um futuro mais verde.',
    image: 'https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '23 de Fevereiro, 2026',
    readTime: '5 min de leitura',
    author: 'Ambientalista Fátima Green',
    content: `
A indústria de tecnologia consome muita energia. Data centers, manufatura de chips e transportes representam uma pegada de carbono significativa. Mas as coisas estão mudando.

## O Despertar

Grandes Tecnologia companies finalmente reconheceram sua responsabilidade. Microsoft, Google e Apple anunciaram ambiciosos objetivos de carbon neutrality.

## Inovações Green

### Energia Renovável
Dados centers agora funcionam com 100% energia solar e eólica em muitos casos.

### Reciclagem Circular
Programas de reciclagem permitem que componentes antigos sejam reutilizados, reduzindo desperdício.

### Chips Eficientes
Processadores novos usam até 40% menos energia do que gerações anteriores.

### Design Minimal
Produtos mais finos e leves significam menos material utilizado.

## Empresas Líderes

**Apple**: Removeu carregadores das caixas, reduzindo peso e impacto ambiental.

**Google**: 100% de energia renovável em operações.

**Microsoft**: Iniciativa de captura de carbono do ar.

## Desafio Contínuo

Apesar do progresso, ainda há muito trabalho. A manufatura de eletrônicos em países em desenvolvimento frequentemente ignora padrões ambientais.

## Como Você Pode Ajudar

- Escolha empresas que genuinamente se importam com sustentabilidade
- Recicle eletrônicos antigos
- Mantenha dispositivos por mais tempo
- Use energias limpas quando possível

O futuro da tecnologia deve ser verde. Ponto.

Qual empresa você acha que está fazendo mais pela sustentabilidade?
    `,
  },
]

export const ArticlePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showShare, setShowShare] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    setIsFavorited(favorites.includes(parseInt(id)))
  }, [id])

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    const articleId = parseInt(id)

    if (isFavorited) {
      const updated = favorites.filter((fav) => fav !== articleId)
      localStorage.setItem('favorites', JSON.stringify(updated))
    } else {
      if (!favorites.includes(articleId)) {
        favorites.push(articleId)
        localStorage.setItem('favorites', JSON.stringify(favorites))
      }
    }
    setIsFavorited(!isFavorited)
  }
  const article = articlesData.find((a) => a.id === parseInt(id))

  if (!article) {
    return (
      <div className="article-page">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Voltar
        </button>
        <div className="article-container">
          <div className="article-not-found">
            <h1>Artigo não encontrado</h1>
            <p>Desculpe, o artigo que você procura não existe.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="article-page">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Voltar
      </button>

      <article className="article-container">
        <div className="article-header">
          <img src={article.image} alt={article.title} className="article-image" />
          <div className="article-header-content">
            <span className="article-category">{article.category}</span>
            <h1 className="article-title">{article.title}</h1>
            <div className="article-meta">
                <span className="article-date">{article.date}</span>
              <span className="article-readtime">{article.readTime}</span>
            </div>
          </div>
        </div>

        <div className="article-body">
          <p className="article-excerpt">{article.excerpt}</p>
          <div className="article-content">
            {article.content.split('\n').map((paragraph, index) => {
              const trimmed = paragraph.trim()

              const format = (text) => {
                // convert **bold** to strong tags
                const html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                return { __html: html }
              }

              if (trimmed.startsWith('##')) {
                return (
                  <h2 key={index} className="article-subheading">
                    {trimmed.replace('##', '').trim()}
                  </h2>
                )
              }
              if (trimmed.startsWith('###')) {
                return (
                  <h3 key={index} className="article-sub-subheading">
                    {trimmed.replace('###', '').trim()}
                  </h3>
                )
              }
              if (trimmed.startsWith('-')) {
                return (
                  <li key={index} className="article-list-item" dangerouslySetInnerHTML={format(trimmed.replace('-', '').trim())} />
                )
              }
              if (trimmed) {
                return (
                  <p key={index} className="article-paragraph" dangerouslySetInnerHTML={format(trimmed)} />
                )
              }
              return null
            })}
          </div>
        </div>

        <div className="article-footer">
          <div className="article-tags">
            <span className="tag">{article.category}</span>
            <span className="tag">2026</span>
          </div>
          <div className="article-actions">
            <button
              className={`action-button ${isFavorited ? 'favorited' : ''}`}
              onClick={toggleFavorite}
            >
              <i className={`bi ${isFavorited ? 'bi-heart-fill' : 'bi-heart'}`}></i>
              {isFavorited ? ' Favoritado' : ' Favoritar'}
            </button>
            <div className="share-container">
              <button
                className="action-button share-toggle"
                onClick={() => setShowShare((prev) => !prev)}
              >
                <i className="bi bi-share"></i> Compartilhar
              </button>
              {showShare && (
                <div className="share-menu">
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Compartilhar via WhatsApp"
                  >
                    <i className="bi bi-whatsapp"></i>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Compartilhar no Facebook"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Compartilhar no LinkedIn"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      <div className="related-articles">
        <h2>Artigos Relacionados</h2>
        <div className="related-grid">
          {articlesData
            .filter((a) => a.id !== article.id && a.category === article.category)
            .slice(0, 3)
            .map((relatedArticle) => (
              <div
                key={relatedArticle.id}
                className="related-card"
                onClick={() => navigate(`/article/${relatedArticle.id}`)}
              >
                <img src={relatedArticle.image} alt={relatedArticle.title} />
                <h3>{relatedArticle.title}</h3>
                <p>{relatedArticle.date}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
