import SearchCar from "./component/SearchCar";
import Home from "./component/Home";

const LandingPage = () => {

    return (
        <>
            <div
                style={{
                    position: "relative"
                }}
            >
                <Home/>
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        marginTop: -80,
                    }}
                >
                    <SearchCar/>
                </div>
            </div>

        </>
    )
}

export default LandingPage