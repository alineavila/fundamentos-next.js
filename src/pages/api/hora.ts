import { NextApiRequest, NextApiResponse } from "next";
/* Esse conteúdo só será atualizado quando houver uma nova 
requisição, pq não tem nenhum js pra atualizar de tempos em tempos. */
/*
Dentro da pasta public, fica visível a partir da url,
mas dentro da pasta api a url é /api/nome_do_arquivo 
pois o mesmo está dentro de pages, ou seja tudo dentro
de page e publico pode ser acessado via url
 */
export default function handler (
    req: NextApiRequest,   
    res: NextApiResponse 
) {
   //status de sucesso
    res.status(200).send(` 
    <html>
      <head>
        <style>
         html{
            font-size: 5rem;
            background-color: #333;
            color: #eee;
         }
         </style>
      </head>
      <body>
        <b>Hora certa:</b>
        ${new Date().toLocaleTimeString('pt-BR')}
      </body>
    </html>

    `)
}