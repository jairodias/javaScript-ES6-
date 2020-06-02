const usuario = {
  nome: 'Jairo',
  idade: 20,
  endereco: {
    cidade: 'Vitoria',
    estado: 'SC',
  },
};

function mostrarNome({nome, idade}){
  console.log(nome, idade);
}

mostrarNome(usuario);
