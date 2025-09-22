# 🚀 EduChat AI Platform

Dashboard profissional para professores de inglês gerenciarem chatbots educacionais.

## 🏗️ Arquitetura

- **Frontend**: Next.js (Static Export) + Nginx
- **Backend**: Node.js + Express
- **Deploy**: Docker + Coolify
- **Servidor**: Hetzner

## 🚀 Deploy no Coolify

### Passo a Passo

1. **Fazer push para repositório Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin [URL_DO_SEU_REPO]
   git push -u origin main
   ```

2. **Configurar no Coolify**
   - Conectar repositório Git
   - Selecionar `docker-compose.yml`
   - Deploy automático

3. **Configurar DNS**
   - Apontar domínio para IP do Hetzner
   - Configurar SSL automático

## 📋 Status Atual

- ✅ Frontend Next.js funcionando
- ✅ API Express com endpoints mock
- ✅ Docker multi-stage build otimizado
- ✅ Health checks configurados
- ✅ Ready para Coolify

## 🔗 Endpoints da API

### Health Check
- `GET /health` - Status da API

### Dashboard
- `GET /api/dashboard/stats` - Estatísticas gerais

### Estudantes
- `GET /api/students` - Lista de estudantes

## 🛠️ Desenvolvimento Local

### Com Docker (Recomendado)
```bash
docker-compose up
```

### Sem Docker
```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend (em outro terminal)
cd api  
npm install
npm start
```

## 📊 URLs de Desenvolvimento

- **Frontend**: http://localhost:3000
- **API**: http://localhost:3001
- **Health Check**: http://localhost:3001/health

## 🎯 Próximos Passos

### Fase 1 - MVP ✅
- [x] Frontend básico funcionando
- [x] API com endpoints mock
- [x] Docker setup completo
- [x] Ready para deploy

### Fase 2 - Database 🔄
- [ ] Conectar PostgreSQL
- [ ] Models e migrations
- [ ] Dados reais vs mock

### Fase 3 - Auth 🔄
- [ ] Sistema de autenticação
- [ ] JWT tokens
- [ ] Protected routes

### Fase 4 - Features 🔄
- [ ] CRUD de estudantes
- [ ] Dashboard com dados reais
- [ ] Relatórios de uso
- [ ] Sistema de assinatura

### Fase 5 - Chatbot 🔄
- [ ] Integração OpenAI/Claude
- [ ] Interface de chat
- [ ] Histórico de conversas
- [ ] Analytics de uso

## 🔧 Comandos Úteis

### Docker
```bash
# Rebuild containers
docker-compose up --build

# Ver logs
docker-compose logs -f

# Parar tudo
docker-compose down

# Limpar volumes
docker-compose down -v
```

### Git
```bash
# Status do projeto
git status

# Commit mudanças
git add .
git commit -m "Descrição das mudanças"
git push

# Ver histórico
git log --oneline
```

## 📈 Monitoramento

### Health Checks
- Frontend: Nginx status
- API: `/health` endpoint
- Auto-restart configurado

### Logs
- Docker logs automáticos
- Health check monitoring
- Error handling

## 🔒 Segurança

### Implementado
- Helmet.js para headers de segurança
- CORS configurado
- Rate limiting
- Container non-root user

### TODO
- [ ] Environment variables seguras
- [ ] SSL/TLS certificados
- [ ] Input validation
- [ ] SQL injection protection

## 🌐 Deploy em Produção

### URLs Esperadas
- **Frontend**: https://educhat.seudominio.com
- **API**: https://api.educhat.seudominio.com

### Configuração DNS
```
A     @        IP_DO_HETZNER
A     api      IP_DO_HETZNER  
A     www      IP_DO_HETZNER
```

### SSL
- Automático via Coolify
- Let's Encrypt integration

## 💡 Dicas de Desenvolvimento

### Performance
- Next.js static export para velocidade
- Nginx gzip compression
- Cache headers otimizados

### Debugging
```bash
# Ver logs da API
docker logs educhat-api

# Debug frontend
npm run dev
# Acesse http://localhost:3000
```

### Estrutura de Arquivos
```
educhat-platform/
├── frontend/              # Next.js app
│   ├── pages/            # Páginas React
│   ├── public/           # Assets estáticos
│   ├── Dockerfile        # Container config
│   └── nginx.conf        # Web server config
├── api/                  # Express API
│   ├── server.js         # Main server file
│   ├── package.json      # Dependencies
│   └── Dockerfile        # Container config
├── docker-compose.yml    # Services orchestration
├── README.md            # Esta documentação
└── .gitignore           # Git ignore rules
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-feature`
3. Commit: `git commit -m 'Add nova feature'`
4. Push: `git push origin feature/nova-feature`
5. Pull Request

## 📄 Licença

MIT License - veja [LICENSE](LICENSE) para detalhes.

---

**🚀 Deployed with Coolify on Hetzner**

*Desenvolvido para revolucionar o ensino de inglês com IA* ⚡