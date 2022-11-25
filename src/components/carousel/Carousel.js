function Carousel() {
    return (
        <div className='m-5'>

            <p className="text-center fs-6 fw-semibold text-secondary">Used technology</p>

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner text-center">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <h2 className="text-secondary fw-bolder fst-italic">Vercel</h2>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <h2 className="text-secondary fw-bolder fst-italic">Google Identity</h2>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <h2 className="text-secondary fw-bolder fst-italic">Firebase</h2>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <h2 className="text-secondary fw-bolder fst-italic">Bootstrap</h2>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <h2 className="text-secondary fw-bolder fst-italic">React.js</h2>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <h2 className="text-secondary fw-bolder fst-italic">Mongodb</h2>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <h2 className="text-secondary fw-bolder fst-italic">Node.js</h2>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <h2 className="text-secondary fw-bolder fst-italic">Jwt</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Carousel