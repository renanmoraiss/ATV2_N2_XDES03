import FilmeGrid from "@/componentes/FilmesGrid/FilmesGrid";
import { getFilmes } from "@/services/filme.services";
import Link from "next/link";
import styles from '@/app/page.module.css';

export default async function Home() {
  const filmes = await getFilmes();

  return (
    <main className={styles.home}>
      <header className={styles.homeHeader}>
          <div>
              <h1> 🎬 Filmes</h1>
              <p>Gerencie seus filmes</p>
          </div>
          <Link href="/filmes/criar" className={styles.btnAdd}>
            + Adicionar Filme
          </Link>
      </header>
      <FilmeGrid filmes={filmes} />
    </main>
  );
}