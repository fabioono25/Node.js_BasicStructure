const http = require('http')

const server = 
    http.createServer((req, res) => {

        const categoria = req.url

        if (categoria === '/tecnologia')
            res.end(`
            <html>
                <body>
                    Noticias de Tecnologia
                </body>
            </html>`)
        else if (categoria === '/moda')
            res.end(`
            <html>
                <body>
                    Noticias de Moda
                </body>
            </html>`)
        else
            res.end(`
            <html>
                <body>
                    Pagina Principal
                </body>
            </html>`)        

})
    
server.listen(3000)