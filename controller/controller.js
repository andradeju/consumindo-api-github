const axios = require("axios"); //p/ chamar o axios e consumir a api

module.exports = {
  async procuraPerfilGitHub(request, response) {
    const { name } = request.params; //chamar nome e pegar por parametro, //usando função assincrona
    var nome, bio, imagem, local;
    await axios
      .get("https://api.github.com/users/" + name)
      .then(function (resposta) {
        //promessa de resposta

        console.log(resposta.data);
        nome = resposta.data.name;
        bio = resposta.data.bio;
        imagem = resposta.data.avatar_url;
        local = resposta.data.location;

        const perfilHtml = `
        <html>
        <head>
            <style>
            body {
                text-align: center;
                font-family: Arial, roboto;
                background-color: #010409;
            }
            h1 {
                font-size: 36px;
                margin-top: 50px;
                color:#C9D1D9;
            }
            img {
                width: 210px;
                height: 210px;
                border-radius: 50%;
                margin-top: 20px;
            }
            h2 {
                font-size: 24px;
                margin-top: 20px;
                color:#C9D1D9;
            }
            </style>
        </head>
        <body>
            <h1>${nome}</h1>
            <img src="${imagem}" alt="${nome}'s profile picture"/>
            <h2>${bio}</h2>
            <h2>${local}</h2>
          </body>
        </html>
      `;

        return response.send(perfilHtml)

    })
    .catch((err) => {
        response.json({ msg: "Perfil não encontrado" + err });
    });
},
};
