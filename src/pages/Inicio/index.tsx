import Menu from 'components/Menu';
import styles from './Inicio.module.scss';
import { itens } from "pages/Cardapio/Itens";

export default function Inicio() {
    let pratosRecomendados = [...itens];
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
    return (
        <section>
            <Menu />
            <h3 className={styles.titulo}>
                Recomendações da cozinha
            </h3>
            <div className={styles.recomendados}>
                {pratosRecomendados.map(item => (
                    <div className={styles.recomendado} key={item.id}>
                        <div className={styles.recomendado__imagem}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button className={styles.recomendado__botao}>
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}