export default function Pastel(props) {
    return (
        <div style={{
            width: '200px',
            height: '230px',
            border: '1px solid #c1b8b8',
            borderRadius: '10px',
            backgroundColor: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '10px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        }}>
            <h2 style={{
                fontSize: '30px',
                color: props.disponivel ? '#333' : '#555',
                textDecoration: props.disponivel ? 'none' : 'line-through', // Linha no texto se indisponível
                marginBottom: '10px',
                fontFamily: '"DynaPuff", system-ui;',
            }}>
                {props.sabor}
            </h2>

            <img
                src={props.disponivel ? '/colorido.png' : '/cinza.png'}
                alt={`Pastel ${props.sabor}`}
                style={{
                    width: '100px',
                    height: '100px',
                    marginTop: '10px',
                }}
            />

            <h2 style={{
                fontSize: '30px',
                fontFamily: '"DynaPuff", system-ui;',
                color: props.disponivel ? '#333' : '#555',
                textDecoration: props.disponivel ? 'none' : 'line-through',
                marginTop: '10px'
            }}>
                {props.preco}
            </h2>
        </div>
    );
}