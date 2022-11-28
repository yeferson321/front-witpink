import styles from './Notification.module.css';

function Notification() {
    return (
        <div className={`${styles.container}`}>

            <div className="card-group">
                <div className={`${styles.card} ${"card rounded-4 "}`}>
                    <div className="card-body">
                        <p className="fw-semibold text-white mb-0"><i className="bi bi-chat"></i> Bienvenido</p>
                        <p className="fw-semibold text-white-50 m-0"><small>Bienvenido a WitPink, recuerda completar tu perfil</small></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Notification