import './styles.css';


export default function Form({ number, setNumber, setResult, error, setError }) {
    function handleClickOrEnter() {
        setError(false);
        setResult(0)
        checkError();
        setResult(calculate())
    }

    function checkError() {
        if (number <= 0) {
            return setError(true)
        }
    }

    function calculate() {
        let count = 0;
        const chosenNumber = [];
        while (count < number) {
            if (count % 3 === 0 || count % 5 === 0) {
                chosenNumber.push(count);
            }
            count++;
        }
        const sum = chosenNumber.reduce((previous, current) => {
            return previous + current;
        })
        return sum
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleClickOrEnter();
    }

    return (
        <form
            className='form'
            onSubmit={handleSubmit}
        >
            <label className='form__label'>
                Insira um número inteiro positivo:
            </label>
            <div className='form__input-container'>
                <input
                    className='form__input'
                    type='number'
                    value={number}
                    onChange={(e) => { setNumber(e.target.value) }}
                />
            </div>

            <button
                className='form__button'
                type='button'
                onClick={handleClickOrEnter}
            >
                Calcular
            </button>
            {error && <span className='error-message'>O número deve ser maior que zero</span>}
        </form>
    )
}