import './styles.css'

export default function Board({ number, result }) {
    return (
        <div className='board'>
            <span className='board__text'>A soma do valores inteiros divisíveis por 3 ou 5 inferiores a <strong>{number}</strong> é:</span>
            <strong className='board__result'>{result}</strong>
        </div>
    )
}