import SearchCar from "../home-page/component/SearchCar";
import ProductCard from "./component/ProductCard";
import '../../../assets/css/styles.css';

const ResultPage = () => {
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
                    <SearchCar search={true}/>
                </div>
                <div style={{background: "#F1F3FF", height: 266}}/>
            </div>
            <div className="global-margin" style={{marginTop: 111}}>
                <ProductCard/>
            </div>
        </>
    )
}

export default ResultPage