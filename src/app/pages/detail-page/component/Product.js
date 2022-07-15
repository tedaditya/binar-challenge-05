import {Card, Space, Spin, Typography} from "antd";
import {Calendar, Product_Car, Setting, User} from "../../../../assets/media";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCarById} from "../../../../setup/redux/action/CarAction";
import SubmitButton from "../../component/ButtonSubmit";

const {Text} = Typography;

const Product = () => {
    let {id} = useParams();
    const dispatch = useDispatch()
    const { isLoading, dataSelection, carSpecs} = useSelector((state) => state.car);

    useEffect(() => {
        dispatch(getCarById(id))
    }, []);

    return (
        <>
            {isLoading ? <Spin className="d-flex justify-content-center align-items-center"/> :
            <Card bordered={false}
                  style={{
                      width: "100%",
                      boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                      borderRadius: 8
                  }}>
                <div className="text-center mt-4 mb-5">
                    <img src={Product_Car} alt=""/>
                </div>
                <Space direction="vertical" size={48} style={{display: 'flex'}}>
                    <Space direction="vertical" size={9} style={{display: 'flex'}}>
                        <Space direction="vertical" size={8} style={{display: 'flex'}}>
                            <Text className="fw-bold">{dataSelection.name}</Text>
                        </Space>
                        <Space size={16} style={{display: 'flex'}}>
                            <Space size={8} style={{display: 'flex'}}>
                                <img style={{width: 12}} src={User} alt=""/>
                                <Text type="secondary" className="product-category">{carSpecs.capacity} Orang</Text>
                            </Space>
                            <Space size={8} style={{display: 'flex'}}>
                                <img style={{width: 12}} src={Setting} alt=""/>
                                <Text type="secondary" className="product-category">{carSpecs.transmission}</Text>
                            </Space>
                            <Space size={8} style={{display: 'flex'}}>
                                <img style={{width: 12}} src={Calendar} alt=""/>
                                <Text type="secondary" className="product-category">{carSpecs.productionYear}</Text>
                            </Space>
                        </Space>
                    </Space>
                    <div>
                        <div className="d-inline"><Text>Total</Text></div>
                        <div className="d-inline" style={{float: "right"}}><Text className="fw-bold">
                            {dataSelection.price?.toLocaleString('id-ID', {
                                style: 'currency',
                                currency: 'IDR',
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                            })}
                        </Text>
                        </div>
                    </div>
                </Space>
                <SubmitButton text="Lanjutkan Pembayaran" onClick={true}/>
            </Card>
            }
        </>
    )
}

export default Product