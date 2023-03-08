const axios = require('axios'); //p/ chamar o axios e consumir a api

module.exports = {
    async procuraPerfilGitHub(request, response){
        const { name } = request.params; //chamar nome e pegar por parametro, //usando função assincrona
        var nome, bio, imagem;
        await axios.get('https://api.github.com/users/' + name).then(function(resposta){ //promessa de resposta
        console.log(resposta.data);
        nome = resposta.data.name;
        bio = resposta.data.bio;
        imagem = resposta.data.avatar_url;

        return response.send('<html> <head> </head> <body> <h1>' + nome +' </h1> <img src=" '+ imagem + '"/> <h2> '+bio+'</h2> </body> </html>')

        }).catch((err) => {
            response.json({ msg:"Perfil não encontrado" + err })
        })                    
    }
}