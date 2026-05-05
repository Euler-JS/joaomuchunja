# Como Adicionar Links aos Projetos

## 📱 Tipos de Links Suportados

Cada projeto pode ter até 4 tipos de links diferentes:

### 1. **Website/Web App** (`link`)
- Para aplicações web, sites ou demos online
- Exemplo: `link: 'https://meuapp.com'` ou `link: 'meuapp.com'`

### 2. **GitHub** (`github`)
- Link para o repositório no GitHub
- Exemplo: `github: 'https://github.com/usuario/projeto'`

### 3. **App Store** (`appStore`) 
- Link para download na App Store (iOS)
- Exemplo: `appStore: 'https://apps.apple.com/app/meuapp/id123456789'`

### 4. **Play Store** (`playStore`)
- Link para download na Play Store (Android)
- Exemplo: `playStore: 'https://play.google.com/store/apps/details?id=com.meuapp'`

## 🎯 Como Adicionar

Edite o arquivo `src/data/projects.ts` e adicione os links ao projeto:

```typescript
{
  id: 'meu-projeto',
  title: 'Meu Projeto',
  description: 'Descrição do projeto...',
  category: 'Categoria',
  technologies: ['Tech1', 'Tech2'],
  features: ['Feature 1', 'Feature 2'],
  
  // Adicione os links aqui:
  link: 'https://meuapp.com',                    // Website
  github: 'https://github.com/usuario/projeto',  // GitHub
  appStore: 'https://apps.apple.com/...',        // iOS
  playStore: 'https://play.google.com/...',      // Android
  
  image: '/images/projects/projeto.svg',
  heroImage: '/images/projects/hero/projeto.svg',
}
```

## 📋 Onde os Links Aparecem

Os links são exibidos em **dois lugares**:

### 1. Cards de Projetos
- Ícones no canto superior direito do card
- 🌐 = Website
- 📱 GitHub
- 🍎 Apple (App Store)
- 🤖 Google Play (Play Store)

### 2. Slider de Projetos Recentes
- Botões com ícones e texto na parte inferior
- "Ver Website" | "GitHub" | "App Store" | "Play Store"

## 💡 Dicas

- **Todos os links são opcionais** - adicione apenas os que existem
- Para projetos mobile, adicione `playStore` e/ou `appStore`
- Para projetos web, adicione `link` e opcionalmente `github`
- Os links abrem em nova aba automaticamente
- Todos têm tooltip (título) ao passar o mouse

## 🔗 Obtendo os Links Corretos

### Play Store:
1. Acesse a página do seu app na Play Store
2. Copie a URL completa
3. Formato: `https://play.google.com/store/apps/details?id=com.seuapp`

### App Store:
1. Acesse a página do seu app na App Store
2. Copie a URL completa
3. Formato: `https://apps.apple.com/app/nome-do-app/id123456789`

### GitHub:
1. Acesse o repositório no GitHub
2. Copie a URL completa
3. Formato: `https://github.com/usuario/repositorio`

## ✨ Exemplo Completo

```typescript
{
  id: 'chatmaza',
  title: 'chatMAZA',
  description: 'Assistente de estudo com IA...',
  category: 'IA/Educação',
  technologies: ['Next.js', 'Claude AI'],
  features: ['IA conversacional', 'RAG'],
  
  link: 'https://chatmaza.com',
  github: 'https://github.com/usuario/chatmaza',
  
  image: '/images/projects/chatmaza.png',
  heroImage: '/images/projects/hero/chatmaza.png',
}
```

```typescript
{
  id: 'meu-app',
  title: 'Meu App Mobile',
  description: 'App incrível...',
  category: 'Mobile',
  technologies: ['Flutter', 'Firebase'],
  features: ['Offline', 'Push'],
  
  playStore: 'https://play.google.com/store/apps/details?id=com.meuapp',
  appStore: 'https://apps.apple.com/app/meu-app/id987654321',
  github: 'https://github.com/usuario/meu-app',
  
  image: '/images/projects/meu-app.png',
  heroImage: '/images/projects/hero/meu-app.png',
}
```
