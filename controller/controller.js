const axios = require('axios'); //p/ chamar o axios e consumir a api
const fs = require('fs');

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

        fs.promises.readFile('./perfil.html', 'utf8')
          .then((html) => {
            html = html.replace('{nome}', nome);
            html = html.replace('{bio}', bio);
            html = html.replace('{imagem}', imagem);
            html = html.replace('{local}', local);
            html = html.replace('{css}', '<link rel="stylesheet" href="/style/perfil.css">');

            return response.send(html);
          })
          .catch((err) => {
            response.json({ msg: "Erro ao ler arquivos" + err });
          });
        

      })
      .catch((err) => {
        response.json({ msg: "Perfil não encontrado" + err });
      });
  },
};
