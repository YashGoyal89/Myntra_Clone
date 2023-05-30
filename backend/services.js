const app = require('./app.js')
const connectdatabse = require('./database/Database.js')
const PORT = process.env.PORT || 3000   ;

process.on('uncaughtException', (err)=>{
    console.log(`Error: ${err.message}`)
    console.log(`shutting down server due to uncaught Exception`)
    process.exit(1)
})

const server = app.listen(PORT, ()=>{
    console.log(`Server on http://localhost:${PORT}`);
    console.log('Yes I am connected')
})

module.exports = connectdatabse();

process.on('unhandledRejection', (err)=>{
    console.log(`Error ${err.message}`);
    console.log(`shutting down server due  unhandle promise rejection`)

    server.close(()=>{
        process.exit(1);
    })
})

