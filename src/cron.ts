import cron from 'node-cron';
import knex from './database/db';
import { exemploFuncao } from './modules/exemplo/exemploFuncao';

cron.schedule('*/30 * * * * *', async () => {
  console.log('Executando a tarefa a cada 30 segundos!');

  // Exemplo de uso do Cron
  const texto = 'Exemplo de Uso do Cron';
  console.log(texto);
  const exemploUsoCron = exemploFuncao(texto);
  console.log(exemploUsoCron);

  // Consoles para monitoramento de conexões após processamento
  console.log(
    `------------------------------------------------------------------------------------------
      Número de conexões não livres: ` +
      knex.client.pool.numUsed() +
      `
      Número de conexões livres: ` +
      knex.client.pool.numFree() +
      `
      Quantidade de ações em banco que estão na fila, aguardando processamento: ` +
      knex.client.pool.numPendingAcquires() +
      `
      Quantas chamadas de criação assíncronas estão em andamento: ` +
      knex.client.pool.numPendingCreates() +
      `\n------------------------------------------------------------------------------------------\n`,
  );
});

export default cron;
