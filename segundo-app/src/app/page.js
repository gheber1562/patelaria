import Pastel from './components/Pastel';
import styles from './css/style.module.css';

export default function Pastelaria() {
    const pasteis = [
        { sabor: 'Carne', preco: 'R$ 10,00', disponivel: true },
        { sabor: 'Queijo', preco: 'R$ 10,00', disponivel: false },
        { sabor: 'Frango', preco: 'R$ 10,00', disponivel: true },
        { sabor: 'Pizza', preco: 'R$ 10,00', disponivel: false },
        { sabor: 'Hambúrguer', preco: 'R$ 10,00', disponivel: true},
        { sabor: 'Calabresa', preco: 'R$ 10,00', disponivel: false },
        { sabor: 'Hot-Dog', preco: 'R$ 10,00', disponivel: true },
        { sabor: 'Chocolate', preco: 'R$ 10,00', disponivel: false },
    ];

    return (
        <main>
            <div className={styles.containerh1}>
                <div className={styles.containerh2}>
                    <h1>PASTELARIA DO SEU ZÉ
                    <img
                        src="/icon.png"
                        alt="Ícone da Pastelaria do Seu Zé"
                        width="60"
                        height="60"
                        margin-left="800x"
                    />
                    </h1>
                </div>
            </div>
            <div className={styles.containerMain}>
                <div className={styles.grid}>
                    {pasteis.map((pastel, index) => (
                        <Pastel key={index} disponivel={pastel.disponivel} sabor={pastel.sabor} preco={pastel.preco}>
                            <h2>{pastel.sabor}</h2>
                            <h2>{pastel.preco}</h2>
                        </Pastel>
                    ))}
                </div>
            </div>
        </main>
    );
}
