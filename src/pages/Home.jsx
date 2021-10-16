import { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/header';
import Footer from '../components/footer';

const pizzas = [
    {
        id: 1,
        img: "https://cdn.pixabay.com/photo/2019/03/31/07/48/food-4092617__340.jpg",
        alt: "Quatro queijos",
        nome: "Quatro queijos",
        preco: "R$26,99",
        tipo: "Principal",
    },
    {
        id: 2,
        img: "https://cdn.pixabay.com/photo/2019/09/24/08/53/pizza-4500786_960_720.jpg",
        alt: "Vegetariana",
        nome: "Vegetariana",
        preco: "R$26,99",
        tipo: "Principal",
    },
    {
        id: 3,
        img: "https://cdn.pixabay.com/photo/2015/11/11/21/03/pizza-1039262__340.jpg",
        alt: "Frango com catupiri e borda vulcão de catupiri",
        nome: "Frango com catupiri e borda vulcão de catupiri",
        preco: "R$26,99",
        tipo: "Principal",
    },
    {
        id: 4,
        img: "https://cdn.pixabay.com/photo/2018/03/06/13/36/pizza-3203417_960_720.jpg",
        alt: "Calabresa com queijo",
        nome: "Calabresa com queijo",
        preco: "R$26,99",
        tipo: "Principal",
    }
];

const acompanhamentos = [
    {
        id: 5,
        img: "https://cdn.pixabay.com/photo/2013/06/07/18/09/salad-122722__340.jpg",
        alt: "Salada primavera",
        nome: "Salada primavera",
        preco: "R$16,99",
        tipo: "Acompanhamento",
    },
    {
        id: 6,
        img: "https://cdn.pixabay.com/photo/2018/08/18/09/26/salad-3614428__340.jpg",
        alt: "Salada verão",
        nome: "Salada verão",
        preco: "R$16,99",
        tipo: "Acompanhamento",
    },
    {
        id: 7,
        img: "https://cdn.pixabay.com/photo/2017/01/10/22/07/zucchini-1970375__340.jpg",
        alt: "Macarrão da abobrinha",
        nome: "Macarrão da abobrinha",
        preco: "R$16,99",
        tipo: "Acompanhamento",
    },
    {
        id: 8,
        img: "https://cdn.pixabay.com/photo/2017/05/07/17/34/zoodles-2293047__340.jpg",
        alt: "Delícia de verão",
        nome: "Delícia de verão",
        preco: "R$16,99",
        tipo: "Acompanhamento",
    },
    {
        id: 9,
        img: "https://cdn.pixabay.com/photo/2017/06/02/18/15/tomato-mozzarella-2367016__340.jpg",
        alt: "Espetinho maravilha",
        nome: "Espetinho maravilha",
        preco: "R$16,99",
        tipo: "Acompanhamento",
    }
]

export default function Home() {
    const [cartItems, setCartItems] = useState([])
    function toBuy(id, img, alt, nome, preco, tipo) {
        const checkId = cartItems.filter(item => item.id === id);
        if (checkId == 0) {
            add(id, img, alt, nome, preco, tipo);
        } else {
            remover(id);
        }
        function add(id, img, alt, nome, preco, tipo) {
            const checkTipo = cartItems.filter(item => item.tipo === tipo);
            const data = [...cartItems, {
                id: id,
                img: img,
                alt: alt,
                nome: nome,
                preco: preco,
                tipo: tipo
            }]
            console.log({ checkTipo });
            if (checkTipo != 0) {
                if (tipo === "Principal") {
                    return;
                } else {
                    setCartItems(data);
                }
            } else {
                setCartItems(data);
            }
        }
        function remover(id) {
            const checkId = cartItems.filter(item => item.id !== id);
            setCartItems(checkId);
        }
    }
    console.log({ cartItems },);

    return (
        <>
            <Header />


            <section>
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={6} xxl={4}>
                            <h1>Pizzas</h1>
                            <div className="pizzas">
                                {pizzas.map(pizza => (
                                    <div className="pizza"
                                        key={pizza.id}
                                        onClick={() => toBuy(
                                            pizza.id,
                                            pizza.img,
                                            pizza.alt,
                                            pizza.nome,
                                            pizza.preco,
                                            pizza.tipo
                                        )}>
                                        <img src={pizza.img}
                                            alt={pizza.alt}
                                        />
                                        <h2>{pizza.nome}</h2>
                                        <h4>{pizza.preco}</h4>
                                        <strong>{pizza.tipo}</strong>
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={{ span: 12, offset: 0 }} xl={{ span: 6, offset: 0 }} xxl={{ span: 4, offset: 0 }}>
                            <h1>Acompanhamentos</h1>
                            <div className="pizzas">
                                {acompanhamentos.map(acompanhamento => (
                                    <div className="pizza"
                                        key={acompanhamento.id}
                                        onClick={() => toBuy(
                                            acompanhamento.id,
                                            acompanhamento.img,
                                            acompanhamento.alt,
                                            acompanhamento.nome,
                                            acompanhamento.preco,
                                            acompanhamento.tipo
                                        )}>
                                        <img src={acompanhamento.img}
                                            alt={acompanhamento.alt}
                                        />
                                        <h2>{acompanhamento.nome}</h2>
                                        <h4>{acompanhamento.preco}</h4>
                                        <strong>{acompanhamento.tipo}</strong>
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={12} xl={12} xxl={4}>
                            <h1>Selecionados</h1>
                            <div className="pizzas">
                                {cartItems.map(item => (
                                    <div className="pizza"
                                        key={item.id}
                                        onClick={() => toBuy(item.id)}>
                                        <img src={item.img}
                                            alt={item.alt}
                                        />
                                        <h2>{item.nome}</h2>
                                        <h4>{item.preco}</h4>
                                        <strong>{item.tipo}</strong>
                                    </div>
                                ))}
                            </div>
                            <form>
                                <select name="select">
                                    <option value="1">Forma de pagamento 1</option>
                                    <option value="2">Forma de pagamento 2</option>
                                    <option value="3">Forma de pagamento 3</option>
                                </select>
                                <input type="text" placeholder="Nome" />
                                <input type="text" placeholder="Email" />
                                <input type="text" placeholder="Telefone" />
                                <textarea rows="10" placeholder="Seu comentário"></textarea>
                                <p>Total: R$40,00</p>
                                <button type="submit">Concluir pedido</button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
}
