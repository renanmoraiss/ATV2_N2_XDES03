import FilmeForm from "@/componentes/FilmeForm/FilmeForm";
import { getFilme, getFilmes } from "@/services/filme.services";

interface Props {
  params: Promise<{
    id: string;
  }>;
}
export default async function EditarFilmePage({
  params,
}: Props) {
  const { id } = await params;
  const filme = await getFilme(id);
  return (
    <>
      <FilmeForm filme={filme} />
    </>
  );
}