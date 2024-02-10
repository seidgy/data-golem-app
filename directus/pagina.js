const fs = require("fs");
var rimraf = require("rimraf");
const common = require ("./common");

const objectContructor = async (dir, fs) => {
  let content = await common.getDirectusData("Pagina")
  let textoLivre = await common.getDirectusData("texto_livre")
  let textoImagem = await common.getDirectusData("texto_imagem")
  textoImagem.data.forEach(async (item, num) => {
    let i = { ...item };
    i.imagem = item.imagem ? await common.getImage(item.imagem.id) : '';
    textoImagem.data[num] = i;
  })
  
  content.data.forEach(async (item, num) => {
    let i = { ...item };
    i.slug = common.slugify(item.nome);
    i.capa = item.capa ? await common.getImage(item.capa.id) : '';
    i.conteudo.forEach((item, num) => {
      if(item.collection === "texto_livre"){
        i.conteudo[num] = textoLivre.data.find((texto) => texto.id == item.item)
      }
      if(item.collection === "texto_imagem"){
        i.conteudo[num] = textoImagem.data.find((texto) => texto.id == item.item)
      }
    });

    fs.writeFile(
      `${dir}/${i.slug}.json`,
      JSON.stringify(i),
      function (err) {
        if (err) console.log("error", err);
      }
    );
    console.log("CRIANDO CONTEÚDO: ", i.slug + ".json");
  });
}

const textoLivreContructor = async (id) => {
  let textoLivre = await common.getDirectusData("texto_livre", id)
  return textoLivre.data
}

const getPagina = async () => {
  
  const dir = "./content/pagina";
  if (fs.existsSync(dir)) {
    rimraf(dir, async () => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      fs.access(dir, fs.constants.R_OK | fs.constants.W_OK, async (err) => {
        if (err) {
          console.log(err);
        } else {
          objectContructor(dir, fs);
        }
      });
    });
  } else {
    if (!fs.existsSync("./content")) {
      fs.mkdirSync("./content");
    }
    fs.mkdirSync(dir);
    fs.access(dir, fs.constants.R_OK | fs.constants.W_OK, async (err) => {
      if (err) {
        console.log(err);
      } else {
        objectContructor(dir, fs);
      }
    });
  }
}

module.exports = {
  getPagina
}