# Evolua – Mentoria psicológica para concursos

Site institucional da mentoria psicológica "Evolua – Mentoria psicológica para concursos" - Preparação mental para concursos públicos.

## 📋 Sobre o Projeto

Landing page moderna e responsiva desenvolvida para apresentar a mentoria psicológica do Alexandre Vieira Ferreira, psicanalista e hipnoterapeuta especializado em preparação mental para concursos públicos.

### 🎯 Características

- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Performance**: Carregamento rápido com otimizações de imagem WebP
- **SEO Otimizado**: Meta tags, structured data e sitemap incluídos
- **Acessibilidade**: Componentes com ARIA labels e navegação por teclado
- **Animações**: Transições suaves com Framer Motion

### 🛠️ Tecnologias

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** + **shadcn/ui** (design system)
- **Framer Motion** (animações)
- **React Router DOM** + **React Scroll** (navegação)

## 🚀 Deploy

### Opção 1: Netlify (Recomendado)
1. Faça upload da pasta `dist/` para o Netlify
2. Configure o domínio personalizado se necessário
3. O site estará funcionando imediatamente

### Opção 2: Vercel
1. Conecte o repositório ao Vercel
2. Configure build command: `npm run build`
3. Output directory: `dist`

### Opção 3: GitHub Pages
1. Ative GitHub Pages nas configurações do repositório
2. Selecione branch `main` e pasta `/ (root)`
3. URL: `https://seuusuario.github.io/nome-do-repo`

## 📁 Estrutura do Projeto

```
├── public/
│   ├── images/           # Imagens otimizadas
│   ├── favicon.ico       # Ícone do site
│   ├── robots.txt        # SEO
│   └── sitemap.xml       # SEO
├── src/
│   ├── components/       # Componentes React
│   ├── pages/           # Páginas principais
│   ├── hooks/           # Custom hooks
│   └── lib/             # Utilitários
└── dist/                # Build de produção
```

## 🎨 Personalização

### Cores
As cores principais estão definidas no `tailwind.config.ts`:
- Primary: Azul principal
- Accent: Verde de destaque
- Background: Fundo da página

### Imagens
Substitua as imagens em `public/images/`:
- `logo.webp` - Logo da marca
- `mentor-photo.webp` - Foto do mentor
- `problem-bg.webp` - Imagem de fundo das seções

### Textos
Todos os textos estão nos componentes em `src/components/` e podem ser editados diretamente.

## 📱 Responsividade

O site foi desenvolvido com abordagem mobile-first:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ⚡ Performance

- Imagens otimizadas em formato WebP
- CSS e JS minificados
- Lazy loading de imagens
- Fonts otimizadas com preconnect

## 🔧 Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Lint
npm run lint
```

## 📞 Suporte

Para dúvidas sobre o projeto ou personalizações, entre em contato com o desenvolvedor.

---

**Desenvolvido com ❤️ para Evolua – Mentoria psicológica para concursos**