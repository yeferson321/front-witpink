import styles from './Acount.module.css';
import Return from '../return/Return.js';
import { useForm } from './useForm';

function Acount() {

    const { handleChange, handleSubmit } = useForm();

    return (
        <div>
            <Return />

            <div className={`${styles.container} ${"d-flex flex-column"}`}>

                <div className="m-auto px-5 text-center">

                    <h1 className="fw-bolder text-white">Algoritmos de selección automática</h1>
                    <p className="mx-auto fs-5 mb-4 fw-semibold text-secondary">Reducimos el tiempo de selección de candidatos, elige tu tipo de perfil</p>

                    <select className={`${styles.selected} ${"form-select border border-white text-white fw-semibold fs-6"}`} onChange={handleChange}>
                        <option defaultValue="">Tipo de perfil</option>
                        <option value="person">En busca de empleo</option>
                        <option value="business">En busca de talento</option>
                    </select>

                </div>

                <div className={`${styles.button} ${"text-center"}`}>
                    <button type="button" className="btn btn-light fw-semibold px-5 py-2 rounded-4" onClick={handleSubmit}>Siguiente <i className="bi bi-chevron-right fw-bold ms-2"></i></button>
                </div>

            </div>

        </div>
    )
}

export default Acount