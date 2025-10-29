# 🚀 Guia de Deploy - Site Evolua

## 📋 Visão Geral
Este guia explica como colocar o site da **Evolua – Mentoria psicológica para concursos** no ar usando GitHub + Netlify, incluindo configuração de domínio personalizado.

---

## 🎯 Opções de Deploy

### Opção 1: GitHub Pages (Gratuito)
- ✅ **Custo**: Gratuito
- ✅ **Facilidade**: Muito fácil
- ❌ **Domínio**: Apenas `usuario.github.io/nome-do-repo`
- ❌ **HTTPS**: Limitado

### Opção 2: Netlify (Recomendado)
- ✅ **Custo**: Gratuito (com limitações)
- ✅ **Facilidade**: Fácil
- ✅ **Domínio**: Personalizado
- ✅ **HTTPS**: Automático
- ✅ **Performance**: Excelente

---

## 🛠️ Passo a Passo Completo

### 📁 PARTE 1: Preparar o Projeto

#### 1.1 Verificar se está tudo funcionando
```bash
# No terminal, dentro da pasta do projeto:
npm run build
```

**✅ Deve aparecer:**
```
✓ built in X.XXs
dist/index.html
dist/assets/index-XXXXX.css
dist/assets/index-XXXXX.js
```

#### 1.2 Verificar a pasta `dist/`
- Deve conter: `index.html`, `assets/`, `images/`, etc.
- Se não existir, rode `npm run build` novamente

---

### 🐙 PARTE 2: GitHub

#### 2.1 Criar repositório no GitHub
1. Acesse [github.com](https://github.com)
2. Clique em **"New repository"** (botão verde)
3. **Nome**: `evolua-site` (ou o nome que preferir)
4. **Descrição**: "Site da mentoria Evolua – Mentoria psicológica para concursos"
5. ✅ Marque **"Public"**
6. ❌ **NÃO** marque "Add README" (já temos arquivos)
7. Clique **"Create repository"**

#### 2.2 Enviar arquivos para o GitHub
```bash
# No terminal, dentro da pasta do projeto:
git init
git add .
git commit -m "Site Evolua - Mentoria psicológica para concursos"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/evolua-site.git
git push -u origin main
```

**⚠️ IMPORTANTE:** Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub.

#### 2.3 Verificar se foi enviado
- Acesse seu repositório no GitHub
- Deve ver todos os arquivos do projeto
- Deve ter a pasta `dist/` com os arquivos de build

---

### 🌐 PARTE 3: Netlify (Recomendado)

#### 3.1 Criar conta no Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Clique em **"Sign up"**
3. Escolha **"GitHub"** para fazer login
4. Autorize o Netlify a acessar seus repositórios

#### 3.2 Conectar o repositório
1. No dashboard do Netlify, clique **"New site from Git"**
2. Escolha **"GitHub"**
3. Selecione o repositório `evolua-site`
4. **Branch**: `main`
5. **Build command**: `npm run build`
6. **Publish directory**: `dist`
7. Clique **"Deploy site"**

#### 3.3 Aguardar o deploy
- O Netlify vai instalar dependências e fazer o build
- ⏱️ **Tempo**: 2-5 minutos
- ✅ Quando terminar, você terá uma URL como: `https://amazing-name-123456.netlify.app`

#### 3.4 Testar o site
- Clique na URL gerada
- Verifique se o site está funcionando
- Teste todos os links e botões

---

### 🏷️ PARTE 4: Configurar Domínio Personalizado

#### 4.1 Preparar o domínio
- Você precisa ter um domínio registrado (ex: `evolua.com.br`)
- O domínio deve estar apontando para o Netlify

#### 4.2 Configurar no Netlify
1. No dashboard do Netlify, vá em **"Site settings"**
2. Clique em **"Domain management"**
3. Clique **"Add custom domain"**
4. Digite seu domínio: `evolua.com.br`
5. Clique **"Verify"**

#### 4.3 Configurar DNS
O Netlify vai mostrar as configurações DNS necessárias:

**Para domínio principal (evolua.com.br):**
```
Tipo: A
Nome: @
Valor: 75.2.60.5
```

**Para www (www.evolua.com.br):**
```
Tipo: CNAME
Nome: www
Valor: amazing-name-123456.netlify.app
```

#### 4.4 Configurar no provedor do domínio
1. Acesse o painel do seu provedor de domínio (Registro.br, GoDaddy, etc.)
2. Vá em **"DNS"** ou **"Zona DNS"**
3. Adicione os registros mostrados pelo Netlify
4. Aguarde a propagação (pode levar até 24h)

#### 4.5 Verificar SSL
- O Netlify configura HTTPS automaticamente
- Aguarde alguns minutos após configurar o DNS
- Acesse `https://evolua.com.br` para testar

---

## 🔧 Comandos Úteis

### Para atualizar o site:
```bash
# 1. Fazer alterações no código
# 2. Gerar novo build
npm run build

# 3. Enviar para GitHub
git add .
git commit -m "Atualização do site"
git push origin main

# 4. O Netlify atualiza automaticamente!
```

### Para testar localmente:
```bash
npm run dev
# Acesse: http://localhost:3000
```

---

## 🚨 Solução de Problemas

### ❌ Build falha
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

### ❌ Site não carrega
1. Verifique se o build foi feito: `npm run build`
2. Verifique se a pasta `dist/` existe
3. Verifique se os arquivos estão no GitHub

### ❌ Domínio não funciona
1. Aguarde até 24h para propagação DNS
2. Verifique se os registros DNS estão corretos
3. Use ferramentas como [whatsmydns.net](https://whatsmydns.net) para verificar

### ❌ HTTPS não funciona
1. Aguarde alguns minutos após configurar DNS
2. Verifique se o certificado SSL foi emitido no Netlify
3. Force HTTPS nas configurações do site

---

## 📞 Suporte

### Links Úteis:
- [Documentação Netlify](https://docs.netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Teste de DNS](https://whatsmydns.net/)

### Contatos:
- **WhatsApp**: +55 87 98129-4783
- **Instagram**: [@evoluabc](https://www.instagram.com/evoluabc/)

---

## ✅ Checklist Final

- [ ] Projeto buildado com sucesso (`npm run build`)
- [ ] Arquivos enviados para GitHub
- [ ] Site conectado no Netlify
- [ ] Site funcionando na URL do Netlify
- [ ] Domínio personalizado configurado
- [ ] DNS configurado no provedor
- [ ] HTTPS funcionando
- [ ] Site acessível pelo domínio personalizado

**🎉 Parabéns! Seu site está no ar!**

---

*Este guia foi criado especificamente para o projeto Evolua – Mentoria psicológica para concursos.*
