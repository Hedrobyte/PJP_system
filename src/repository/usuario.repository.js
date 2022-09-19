import usuarios from "../model/usuarios.model.js"
import enderecos from "../model/enderecos.model.js"
import produtos from "../model/produtos.model.js"
import compras from "../model/compras.model.js"

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


export default{
    realizarLogin,
    procurarEndereco,
    procurarUsuario,
    listaCompra,
    excluirCompra
}