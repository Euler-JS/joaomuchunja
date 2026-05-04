# Imagens Hero dos Projetos (Slider)

## 📐 Especificações

- **Dimensão:** 1024x500px (proporção 2.048:1)
- **Formato:** PNG, JPG ou SVG
- **Tamanho recomendado:** < 300KB
- **Uso:** Slider de projetos recentes na página inicial

## 📋 Imagens Hero Atuais

- [x] passebem.svg
- [x] chatmaza.svg
- [x] fams.svg
- [x] juris.svg
- [x] ecoarbeira.svg
- [x] oraculo.svg

## 🎨 Como criar imagens hero profissionais:

### 1. Screenshots de Aplicações Web
- Capture a tela principal do aplicativo em desktop
- Use ferramentas como [Screely](https://screely.com/) para adicionar moldura
- Crop para 1024x500px centralizando o conteúdo importante

### 2. Mockups de Apps Mobile
- Use [Mockuphone](https://mockuphone.com/) ou [Shots.so](https://shots.so/)
- Combine múltiplas telas lado a lado
- Adicione fundo gradiente ou sólido
- Exporte em 1024x500px

### 3. Design Customizado (Canva/Figma)
1. Crie um canvas 1024x500px
2. Adicione:
   - Fundo com gradiente (use cores do seu brand)
   - Nome do projeto (fonte grande e bold)
   - Descrição curta
   - 2-3 screenshots do projeto
   - Ícones das tecnologias principais
3. Exporte como PNG otimizado

### 4. Ferramentas de Captura
- **macOS:** Cmd+Shift+4 (screenshot selecionado)
- **Windows:** Windows+Shift+S (Snipping Tool)
- **Linux:** Flameshot, Shutter

### 5. Otimização
- Use [TinyPNG](https://tinypng.com/) para comprimir
- Ou [Squoosh](https://squoosh.app/) para controle total
- Meta: < 300KB sem perda visível de qualidade

## 💡 Dicas de Design

- **Contraste:** Use overlay escuro (gradient to black) para garantir legibilidade do texto
- **Foco:** Destaque a funcionalidade principal do projeto
- **Consistência:** Mantenha estilo visual similar entre os projetos
- **Texto:** Evite muito texto, deixe que a imagem fale
- **Call-to-action:** Mostre algo que faça o usuário querer clicar

## 🔧 Como adicionar:

1. Salve a imagem otimizada nesta pasta
2. Nomeie como `nome-do-projeto.png` ou `.jpg`
3. Atualize em `src/data/projects.ts`:
   ```typescript
   heroImage: '/images/projects/hero/nome-do-projeto.png',
   ```
