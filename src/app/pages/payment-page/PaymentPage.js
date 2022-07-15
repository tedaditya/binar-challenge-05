import SearchCar from "../home-page/component/SearchCar";
import DetailSearch from "./component/DetailSearch";

const PaymentPage = () => {
    return (
        <>
            <div
                style={{
                    position: "relative"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        marginTop: 170,
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    <DetailSearch/>
                </div>
                <div style={{background: "#F1F3FF", height: 266}}/>
            </div>
        </>
    )
}

export default PaymentPage