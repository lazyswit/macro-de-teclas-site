# Site do Macro de Teclas

Landing page estática independente do aplicativo. Não contém o executável nem dependências externas.

## Visualizar localmente

Abra `index.html` no navegador. Para servir por HTTP durante a revisão, na pasta `website` execute:

```powershell
py -3.14 -m http.server 8000
```

Depois acesse `http://localhost:8000`. Pressione Ctrl+C no terminal para encerrar o servidor.

## Conectar o botão a uma GitHub Release

O botão não aponta para um arquivo ou repositório inventado. Depois de publicar uma Release real:

1. Abra a página da Release do repositório correto.
2. No asset `MacroDeTeclas.exe`, copie o endereço direto do arquivo (não use a página de uma Release diferente).
3. Em `script.js`, substitua o valor vazio de `RELEASE_ASSET_URL` pela URL copiada, mantendo as aspas. Exemplo de formato: `const RELEASE_ASSET_URL = "https://github.com/USUARIO/REPOSITORIO/releases/download/TAG/MacroDeTeclas.exe";` — os valores do exemplo são marcadores, não um link real.
4. Teste o botão superior e o inferior: ambos devem abrir o `.exe` publicado.

Sem URL configurada, os botões informam que o download será disponibilizado após a publicação.

## Publicar gratuitamente com GitHub Pages

1. Crie ou escolha um repositório GitHub público autorizado para o site. Para manter o site como projeto separado, prefira um repositório só para ele. O GitHub Pages está disponível gratuitamente em repositórios públicos com GitHub Free ([planos do GitHub](https://docs.github.com/en/get-started/learning-about-github/githubs-plans)).
2. Na raiz desse repositório, adicione `index.html`, `styles.css`, `script.js` e este README (copie o conteúdo desta pasta, sem incluir o `.exe`). Faça commit e envie os arquivos para a branch `main`.
3. Publique uma GitHub Release no repositório autorizado que hospedará o executável. Copie o link direto do asset `MacroDeTeclas.exe`, configure `RELEASE_ASSET_URL` em `script.js` e teste os dois botões.
4. No repositório do site, abra **Settings → Pages**. Em **Build and deployment**, escolha **Deploy from a branch**, selecione `main` e a pasta `/(root)`, e salve. Consulte o [quickstart oficial do GitHub Pages](https://docs.github.com/en/pages/quickstart).
5. Aguarde o endereço do Pages aparecer em Settings → Pages. Verifique o site publicado em computador e celular.

O GitHub Pages é gratuito para repositórios públicos. A publicação do repositório, da Release e do site requer autorização explícita da criadora; nenhum conteúdo foi enviado pelo trabalho local.
