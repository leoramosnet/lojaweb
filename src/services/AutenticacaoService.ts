import * as Promise from "bluebird";

/**
 * Classe de serviço para autenticação
 */
export class AutenticacaoService {

    constructor() {

    }

    /**
     * Serviço para realizar o login (mock)
     * @param usuario login do usuário
     * @param senha senha do usuário 
     * @returns Retorna uma Promise com boolean quen indica login encontrado ou não
     */
    public login(usuario: string, senha: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if(usuario=='admin' && senha=='12345678')
                return resolve(true);
            else
                return resolve(false);
        })
    }

}

    