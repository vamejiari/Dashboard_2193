import {Sequelize} from 'sequelize';

const db =new Sequelize('dashboard_2193','root','',{
    host: 'localhost',
    dialect:'mysql'
});

export default db;
