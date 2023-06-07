// Importação do dontenv para usar variáveis de ambiente
import 'dotenv/config';

// Importações para uso do Cron
import './cron';

// Importações para uso do Express
import routes from './routes/routes';
import express from 'express';
const app = express();

app.use(express.json());
// Abre a porta especificada no .env para a API rodar
const port = 8080;
app.listen(port, () => {
  console.log(`-> A aplicação está rodando na porta: { ${port} } <-\n`);
});

// Chama o controlador de rotas principal para gerar as rotas da API
app.use(routes);
