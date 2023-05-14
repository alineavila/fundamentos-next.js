import { NextApiRequest, NextApiResponse } from "next";

// http://localhost:3000/api/tabela?colunas=6&linhas=4
/* tabela?colunas=6&linhas=4 
    essa é a query  string, por isso no objeto req pegamos req.query */

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    const colunas = +(req.query.colunas || 10)
    const linhas = +(req.query.colunas || 10)
    /*
    Usei a requisição para receber parâmetros da url, ou seja será um conteúdo dinâmico
     */

    /* abaixo enviando a resposta como um html, geralmente só enviamos dados
    mas fica uma resposta a titulo de exemplo */

    res.status(200).send(`
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            html {
                background-color: #333;
                color: #eee;
            }

            table {
                border-collapse: collapse;
                width: 100%;
                font-size: 2rem;
            }
        </style>
    </head>
    <body>
        <table border="1">
            ${linhasEColunas(colunas, linhas)}
        </table>
    </body>
</html>
    `)


    /* Declarando a função linhasEColunas chamada no html */

    function linhasEColunas (colunas: number, linhas: number) {
        let html = ''
        for (let l = 0; l<linhas; l++) {
            html +- '<tr>'
            for (let c=0; c < colunas; c++) {
                html += `<td>${l+1}x${c+1}</td>`
            }
            html += '</tr>'
        }
        return html
    }

}