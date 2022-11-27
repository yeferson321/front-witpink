import styles from './Notification.module.css';

function Notification() {
    return (
        <div className={`${styles.container}`}>

            <div class="card-group">
                <div class={`${styles.card} ${"card rounded-4 "}`}>
                    <div class="card-body">
                        <p class="fw-semibold text-white mb-0"><i class="bi bi-chat"></i> Bienvenido</p>
                        <p class="fw-semibold text-white-50 m-0"><small>Bienvenido a WitPink, recuerda completar tu perfil</small></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Notification