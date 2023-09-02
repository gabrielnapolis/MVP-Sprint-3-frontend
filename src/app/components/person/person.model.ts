export interface Person {
    id?: number
    nome: string
    email: string
    senha: number | null
    idade: number | null
}

export interface PersonsDto { pessoas:Person[]}