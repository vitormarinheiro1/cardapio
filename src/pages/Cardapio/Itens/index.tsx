import { useEffect, useState } from 'react';
import Item from './Item';
import styles from './Itens.module.scss';

export const itens = [
    {
        "title": "Macarrão mediterrâneo",
        "description": "Macarrão spaghetti com frutos-do-mar e especíarias, especialidade da cozinha. Atenção: Contém camarão e outros frutos-do-mar!",
        "photo": "/assets/pratos/macarrao_mediterraneo.png",
        "size": 400,
        "serving": 2,
        "price": 73.0,
        "id": 1,
        "category": {
            "id": 1,
            "label": "Massas"
        }
    },
    {
        "title": "Macarrão da casa",
        "description": "Macarrão com frutos-do-mar e especíarias, especialidade da cozinha. Atenção: Contém camarão e outros frutos-do-mar!",
        "photo": "/assets/pratos/macarrao_da_casa.png",
        "size": 400,
        "serving": 2,
        "price": 54.0,
        "id": 2,
        "category": {
            "id": 1,
            "label": "Massas"
        }
    },
    {
        "title": "Macarrão com chilli",
        "description": "Macarrão fetuccine com molho de chilli e especiárias.",
        "photo": "/assets/pratos/macarrao_com_chilli.png",
        "size": 350,
        "serving": 1,
        "price": 58.0,
        "id": 3,
        "category": {
            "id": 1,
            "label": "Massas"
        }
    },
    {
        "title": "Salada da casa com salmão grelhado",
        "description": "Salada da casa (alface, rúcula, cenoura) com salmão.",
        "photo": "/assets/pratos/salada_da_casa.png",
        "size": 450,
        "serving": 1,
        "price": 42.0,
        "id": 4,
        "category": {
            "id": 2,
            "label": "Carnes"
        }
    },
    {
        "title": "Bife com batatas",
        "description": "Bife de boi (150g) na chapa, com batatas fritas. Acompanha arroz e molhos.",
        "photo": "/assets/pratos/bife_com_batatas.png",
        "size": 550,
        "serving": 2,
        "price": 86.0,
        "id": 5,
        "category": {
            "id": 2,
            "label": "Carnes"
        }
    },
    {
        "title": "Picanha picada com legumes e massa",
        "description": "400g de picanha picada, com legumes grelhados e massa escolhida pelo cliente.",
        "photo": "/assets/pratos/picanha_picada.png",
        "size": 850,
        "serving": 3,
        "price": 123.0,
        "id": 6,
        "category": {
            "id": 3,
            "label": "Combos"
        }
    },
    {
        "title": "Lasagna vegana (carne de soja)",
        "description": "Lasagna 100% vegana feita com carne de soja e massa especial.",
        "photo": "/assets/pratos/lasagna_vegana.png",
        "size": 350,
        "serving": 1,
        "price": 45.0,
        "id": 7,
        "category": {
            "id": 4,
            "label": "Veganos"
        }
    },
    {
        "title": "Salada especial",
        "description": "Salada com abacate, manga, alface, grão de bico e muito mais.",
        "photo": "/assets/pratos/salada_especial.png",
        "size": 350,
        "serving": 1,
        "price": 37.0,
        "id": 8,
        "category": {
            "id": 4,
            "label": "Veganos"
        }
    },
    {
        "title": "Almôndegas",
        "description": "Porção de almôndegas com sour cream, cebola e tempêros. Acompanha arroz ou massa.",
        "photo": "/assets/pratos/almondegas.png",
        "size": 740,
        "serving": 3,
        "price": 120.0,
        "id": 9,
        "category": {
            "id": 3,
            "label": "Combos"
        }
    }
];

interface Props {
    busca: string;
    filtro: number | null;
    ordenador: string;
}

export default function Itens(props: Props) {
    const [lista, setLista] = useState(itens);
    const { busca, filtro, ordenador } = props;

    function testaBusca(title: string) {
        const regex = new RegExp(busca, 'i');
        return regex.test(title);
    }

    function testaFiltro(id: number) {
        if(filtro !== null) return filtro === id;
        return true;
    }

    function ordenar(novaLista: typeof itens) {
        switch(ordenador) {
            case 'porcao':
                return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
            case 'qtd_pessoas':
                return novaLista.sort((a, b) => a.serving > b.serving ? 1: -1);
            case 'preco':
                return novaLista.sort((a, b) => a.price > b.price ? 1 : -1);
            default:
                return novaLista;
        }
    }

    useEffect(() => {
        const novaLista = itens.filter(item => testaBusca(item.title) &&
        testaFiltro(item.category.id));
        setLista(ordenar(novaLista));
    }, [busca, filtro, ordenador]);

    return (
        <div className={styles.itens}>
            {lista.map(item => (
                <Item
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    );
}