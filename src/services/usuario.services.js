import usuarioRepository from "../repository/usuario.repository.js"


async function realizarLogin(usuario){
    const retorno = await usuarioRepository.realizarLogin(usuario)
    return retorno
}

async function procurarEndereco(rua,numero){
    const retorno = await usuarioRepository.procurarEndereco(rua,numero)
    return retorno
}

async function procurarUsuario(id){
    const retorno = await usuarioRepository.procurarUsuario(id)
    return retorno
}

async function listaCompra(){
    const retorno = await usuarioRepository.listaCompra()
    return retorno
}

async function excluirCompra(id){
    const retorno = await usuarioRepository.excluirCompra(id)
    return retorno
}

export default{
    realizarLogin,
    procurarEndereco,
    procurarUsuario,
    listaCompra,
    excluirCompra
}