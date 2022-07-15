import {Car} from '../../../../assets/media'

const Home = () => {
    return (
        <>
            <section id="home">
                <div className="hero-section">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div>
                                <p className="section-hero-title fw-bold">Sewa & Rental Mobil Terbaik di kawasan
                                    (Lokasimu)</p>
                                <p className="section-hero-desc font-14 me-4">Selamat datang di Binar Car Rental. Kami
                                    menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                                    kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                            </div>
                        </div>
                        <div className="col-md-7 mobile-display">
                            <img className="car-picture" src={Car}
                                 alt="car_image"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home