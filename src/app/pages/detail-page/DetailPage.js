import SearchCar from "../home-page/component/SearchCar";
import {Row, Col} from "antd";
import Detail from "./component/Detail";
import Product from "./component/Product";
import '../../../assets/css/styles.css';

const DetailPage = () => {

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
                <Row gutter={32}>
                    <Col className="gutter-row" span={14}>
                        <Detail/>
                    </Col>
                    <Col className="gutter-row" span={10}>
                        <Product/>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default DetailPage