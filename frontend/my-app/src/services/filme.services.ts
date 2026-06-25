import {Filme, CreateFilmeDTO, UpdateFilmeDTO} from "@/tipos/filme";

const URL_API = process.env.NEXT_PUBLIC_API_URL;

export async function getFilmes(cookieHeader?: string): Promise<Filme[]> 
{
    try {
        const res = await fetch(`${URL_API}/filmes`,{
            headers: {
                Cookie: cookieHeader ?? "",
            }
        });
        if (!res.ok) {
            throw new Error("Não autenticado");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Erro:", error);
        return []; 
    }
}

export async function getFilme(id: string): Promise<Filme> {
  const res = await fetch(`${URL_API}/filmes/${id}`);
  return res.json();
}
export async function createFilmes(filme: CreateFilmeDTO): Promise<void>
{
    const res = await fetch(`${URL_API}/filmes`,{
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(filme),
    });
    if (!res.ok) {
        const erro = await res.json();
        throw new Error(erro.message);
    }
}


export async function updateFilme(id: number, filme: UpdateFilmeDTO): Promise<void>
{
    const res = await fetch(`${URL_API}/filmes/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(filme),
    });
    if (!res.ok) {
        const erro = await res.json();
        throw new Error(erro.message);
    }
}

export async function deleteFilme(id: number): Promise<void>
{
    await fetch(`${URL_API}/filmes/${id}`,{
        method: "DELETE",
        credentials: "include",
    });
}