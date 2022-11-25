import styles from './Usercv.module.css';
import Return from '../return/Return.js';
import CarouselOne from './CarouselOne.js';
import CarouselTwo from './CarouselTwo.js';
import CarouselThree from './CarouselThree.js';
import { useForm } from './useForm';

function Usercv() {

    const send = document.getElementById('send');
    const { error, response, progress, handleClick, handleSubmit } = useForm(send);

    return (

        <div>
            <Return />

            <div className={`${styles.container}`}>

                <div className={`${styles.carousel} ${"text-center"}`}>
                    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <CarouselOne />
                            </div>
                            <div className="carousel-item">
                                <CarouselTwo />
                            </div>
                            <div className="carousel-item">
                                <CarouselThree />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.footer} ${"text-center"}`}>
                        <div className="text-center">
                            <button type="button" className="btn btn-light fw-semibold px-5 py-2 mb-4 rounded-4" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next" onClick={handleClick}>Siguiente <i className="bi bi-chevron-right ms-2"></i></button>
                        </div>

                        <div className={`${styles.send} ${"text-center"}`} id='send'>
                            <button type="button" className="btn btn-light fw-semibold px-5 py-2 mb-4 rounded-4" onClick={handleSubmit}>Enviar datos</button>
                        </div>

                        <div className="progress ms-5 me-5">
                            <div className={`${"w-" + progress} ${"progress-bar bg-info"}`} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Usercv