var Sequelize = require ('sequelize');
var connection = new Sequelize ('BancodeDados', 'Usuario', '1234');

var conexao = connection.authenticate()
    .then(function(){
       console.log('Conexão com o MySQL foi estabelecida com sucesso');
    })
    .catch(function (err) {
      console.log('Não foi possível se conectar com o banco de dados MySql');
    })
    .done();
