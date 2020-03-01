//configurando o servidor
const express = require("express")
const server = express()

//configurar para apresentar arquivos estaticos
server.use(express.static('public'))

//habilitar body form
server.use(express.urlencoded({extended:true}))

//configurar a conexao com o bd
const Pool = require('pg').Pool
const db = new Pool({
    user: 'postgres',
    password: 'carlos2512',
    host: 'localhost',
    port: 5432,
    database: 'doe'
})

//configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true
})

//configurar a apresentacao da pagina
server.get("/", function(req, res){
    db.query("select * from donors", function(err, result){
        if (err) return res.send("Erro de DB.")

        const donors = result.rows
        return res.render("index.html", {donors})
    })     
})

server.post("/", function(req, res){
    //pegar dados do form
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    if(name == "" || email == "" || blood == ""){
        return res.send("Todos os campos sao obrigatorios")
    }

    //coloco valores dentro do bd
    const query = 
        `insert into donors ("name", "email", "blood") 
        values ($1, $2, $3)`

    const values = [name, email, blood]
    
    db.query(query, values, function(err){
        //fluxo de erro
        if(err) return res.send("erro no banco de dados.")

        //fluxo ideal
        return res.redirect("/")
    })
    
})

//ligar servidor e permitir acesso na porta 3000
server.listen(3000, function(){
    console.log("iniciei o servidor.")
})