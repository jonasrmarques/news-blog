import { BlogCard } from './BlogCard'

const articles = [
  {
    id: 1,
    title: 'O Futuro da Inteligência Artificial em 2026',
    category: 'Tecnologia',
    excerpt: 'Descubra como a IA está transformando o mundo e o que esperar nos próximos anos.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '28 de Fevereiro, 2026',
    readTime: '5 min de leitura'
  },
  {
    id: 2,
    title: 'Tendências de Tecnologia que Vão Dominar 2026',
    category: 'Tecnologia',
    excerpt: 'De blockchain a quantum computing, conheça as inovações que moldarão o nosso futuro.',
    image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '27 de Fevereiro, 2026',
    readTime: '7 min de leitura'
  },
  {
    id: 3,
    title: 'Como Equilibrar a Vida Digital e Real',
    category: 'Lifestyle',
    excerpt: 'Dicas práticas para manter um equilíbrio saudável entre sua presença online e offline.',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '26 de Fevereiro, 2026',
    readTime: '4 min de leitura'
  },
  {
    id: 4,
    title: 'Startups Que Estão Mudando o Mercado',
    category: 'Negócios',
    excerpt: 'Conheça as startups mais promissoras que estão atraindo investimentos bilionários.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '25 de Fevereiro, 2026',
    readTime: '6 min de leitura'
  },
  {
    id: 5,
    title: 'Web3: A Internet do Futuro',
    category: 'Tecnologia',
    excerpt: 'Entenda o que é Web3 e como ela vai revolucionar a forma como usamos a internet.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '24 de Fevereiro, 2026',
    readTime: '8 min de leitura'
  },
  {
    id: 6,
    title: 'Sustentabilidade no Setor Tecnologia',
    category: 'Sustentabilidade',
    excerpt: 'Como as grandes empresas de tecnologia estão se comprometendo com um futuro mais verde.',
    image: 'https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '23 de Fevereiro, 2026',
    readTime: '5 min de leitura'
  },
]

export const ArticleList = () => {
  return (
    <section className="articles" id="trending">
      <div className="articles-container">
        <h2 className="section-title">Artigos em Destaque</h2>
        <div className="articles-grid">
          {articles.map((article) => (
            <BlogCard
              key={article.id}
              id={article.id}
              title={article.title}
              category={article.category}
              excerpt={article.excerpt}
              image={article.image}
              date={article.date}
              readTime={article.readTime}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
