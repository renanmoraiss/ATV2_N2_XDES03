export interface Filme {
    id: number;
    nota: number;
    imagem: string;
    titulo: string;
}
export interface CreateFilmeDTO {
    nota: number;
    imagem: string;
    titulo: string;
}
export interface UpdateFilmeDTO {
    nota?: number;
    imagem?: string;
    titulo?: string;
}