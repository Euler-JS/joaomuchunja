# João Muchunja - Portfólio

Portfólio profissional desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com SSG
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilização moderna
- **React Icons** - Ícones
- **Framer Motion** - Animações

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start
```

## 🎨 Características

- ✅ Design moderno e minimalista
- ✅ Totalmente responsivo
- ✅ Dark mode
- ✅ Animações suaves
- ✅ SEO otimizado
- ✅ 16+ projetos documentados
- ✅ Slider de projetos recentes com auto-play
- ✅ Seções: Sobre, Projetos Recentes, Projetos, Habilidades, Experiência, Contato

## 📂 Estrutura

```
src/
├── app/
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página inicial
│   └── globals.css      # Estilos globais
├── components/
│   ├── Header.tsx       # Navegação
│   ├── Footer.tsx       # Rodapé
│   ├── ProjectCard.tsx  # Card de projeto
│   ├── ProjectSlider.tsx # Slider de projetos recentes
│   └── SkillBar.tsx     # Barra de habilidade
└── data/
    ├── projects.ts      # Dados dos projetos
    └── skills.ts        # Dados das habilidades

public/images/projects/
├── *.svg                # Imagens card (1200x630px)
└── hero/
    └── *.svg            # Imagens slider (1024x500px)
```

## 🎯 Personalização

### Atualizar informações pessoais

Edite os arquivos em `src/data/`:
- `projects.ts` - Adicione/edite seus projetos
- `skills.ts` - Atualize suas habilidades

### Adicionar imagens dos projetos

As imagens dos projetos estão em `public/images/projects/`. Atualmente há imagens SVG placeholder. Para adicionar imagens reais:

**Imagens para Cards (1200x630px):**
1. Prepare screenshots/mockups dos seus projetos
2. Salve como PNG ou JPG na pasta `public/images/projects/`
3. Use o nome do projeto (ex: `passebem.png`, `chatmaza.png`)
4. Atualize o caminho em `src/data/projects.ts` propriedade `image`

**Imagens para Slider Hero (1024x500px):**
1. Crie imagens mais panorâmicas dos projetos principais
2. Salve na pasta `public/images/projects/hero/`
3. Use o mesmo nome do projeto
4. Atualize em `src/data/projects.ts` propriedade `heroImage`

Veja os READMEs nas pastas de imagens para mais dicas sobre como criar boas imagens.

### Alterar cores

Modifique o `tailwind.config.ts` para personalizar o tema.

### Adicionar/remover seções

Edite `src/app/page.tsx` para modificar as seções.

## 📄 Licença

MIT

## 👤 Autor

**João Muchunja**
- GitHub: [@joaomuchunja](https://github.com/joaomuchunja)
- LinkedIn: [joaomuchunja](https://linkedin.com/in/joaomuchunja)
