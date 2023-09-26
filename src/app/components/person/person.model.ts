export interface Person {
    id?: number
    nome: string
    email: string
    senha: string
    idade: number | null
}

export interface PersonsDto { pessoas:Person[]}