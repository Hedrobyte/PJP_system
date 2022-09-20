import usuarios from "../model/usuarios.model.js"
import enderecos from "../model/enderecos.model.js"
import produtos from "../model/produtos.model.js"
import compras from "../model/compras.model.js"
import { createPool } from "mysql"

async function realizarLogin(usuario){
    try{
        const retorno = await usuarios.findOne({
            where: {'email': usuario.getEmail(),
                    'senha': usuario.getSenha()}
        })
        if(retorno == null){
            return null
        }
        else{
            return retorno
        }
    }catch(erro){
       console.log(erro)
    }
}

async function procurarEndereco(rua, numero){
    try{
        const retorno = await enderecos.findOne({
            where: {'rua': rua,
                    'numero': numero,
                    'idUsuario': id}
        })
        if(retorno == null){
            return null
        }
        else{
            return retorno
        }
    }catch(erro){
        console.log(erro)
    }

}

async function procurarUsuario(id){
    try{
        const retorno = await usuarios.findOne({
            where: {'id': id}
        })
        return retorno
    }catch(erro){
        console.log(erro)
    }
}

async function listaCompra(){
    try{
        const retorno = await compras.findAll({
            include: usuarios,
            include: enderecos,
            include: produtos
        })
        return retorno
    }catch(erro){
        console.log(erro)
    }
}

async function excluirCompra(id){
    try{
        await compras.destroy({
            where: {'id': id}
        })
        return true
    }catch(erro){
        console.log(erro)
        return false
    }
}

async function buscarInformacaoConta(id){
    try{
        const endereco = await enderecos.findAll({
            where: {'idUsuario':id}
        })
        const usuario = await usuarios.findOne({
            where: {'id':id}
        })
        const retorno = [usuario, endereco]
        //console.log(retorno[0].usuario.nome)
        return retorno
    }catch(erro){
        console.log(erro)
    }
}

async function realizarCadastroEndereco(endereco){
    try{
        await enderecos.create({
            rua: endereco.getRua(),
            numero: endereco.getNumero(),
            idUsuario: id
        })
        return true
    }catch(erro){
        console.log(erro)
        return false
    }
}

async function excluirEndereco(id_endereco){
    try{
        const compra = await compras.findOne({
            where: {'idEndereco': id_endereco}
        })

        if(compra == null){
            await enderecos.destroy({
                where: {'id': id_endereco}
            })
            return true
        }
        else{
            return false
        }
    }catch(erro){
        console.log(erro)
        return false
    }
}


export default{
    realizarLogin,
    procurarEndereco,
    procurarUsuario,
    listaCompra,
    excluirCompra,
    buscarInformacaoConta,
    realizarCadastroEndereco,
    excluirEndereco
}