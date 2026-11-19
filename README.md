# Fabinho8_ — Portfólio

Portfolio pessoal de Fábio José, construído com React, TypeScript, Vite e Tailwind CSS.

## Rodar localmente

```bash
npm install
npm run dev
```

Para gerar a versão estática de publicação:

```bash
npm run build
npm run preview
```

## Publicar no GitHub Pages

O projeto já inclui um workflow em `.github/workflows/deploy.yml` que compila e publica o site sempre que houver um push para `main`.

1. Crie um repositório público no GitHub, por exemplo `fabinho8-portfolio`.
2. Envie **o conteúdo desta pasta** para a raiz do repositório, mantendo a pasta `.github`.
3. No GitHub, abra **Settings → Pages** e escolha **GitHub Actions** como fonte de publicação.
4. Envie um commit para `main`. Acompanhe a publicação na aba **Actions**; o endereço do site aparece no job concluído.

O workflow executa `npm ci`, `npm run build` e publica a pasta `dist`. Os caminhos relativos do Vite permitem hospedar o app na raiz do domínio ou em uma URL de projeto do GitHub Pages.

## Atualizar conteúdo

- Perfil, redes sociais, projetos, conhecimentos e conquistas: `src/data/profile.ts`.
- Tipos de conteúdo: `src/types.ts`.
- Retrato em pixel art: `public/assets/fabio-pixel-portrait.webp`.
- Sprite de corpo inteiro: `public/assets/fabio-pixel-sprite.webp`.

Para adicionar um projeto, inclua um objeto na coleção `projects`, seguindo o tipo `Project` em `src/types.ts`. Use `features`, `technologies`, `objective`, `role`, `image`, `github` e `demo` somente quando houver dados confirmados. Campos opcionais podem ficar vazios; a interface exibe “em atualização” ou “link não informado”.

Para habilitar LinkedIn, Instagram ou e-mail, preencha os valores `linkedin`, `instagram` e `email` em `contacts`. O endereço de e-mail é convertido para um link `mailto:`.

## Arte do personagem

O retrato e o sprite pixelados foram recortados da referência visual fornecida. O sprite tem animação idle e uma saudação ao clique; ambos os assets podem ser substituídos em `public/assets/` sem alterar os dados do perfil. O ponto de integração está no componente `App.tsx`.

## Conteúdo inicial

O período acadêmico é apresentado como 3º período, conforme os dados escritos fornecidos. A data de nascimento, certificados, métricas de resultados e URLs não confirmadas foram omitidos.
