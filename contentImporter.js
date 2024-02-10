const chalk = require('chalk');

const { getPagina } = require('./directus/pagina');

console.log('');
console.log(chalk.green('Starting importing data from Directus...'));
console.log('');
console.log(chalk.green('[ TEXTO IMAGEM -  ]'));

getPagina();
