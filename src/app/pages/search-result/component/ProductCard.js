import {Row, Col, Card, Typography, Space, Button, Spin} from 'antd';
import {Calendar, User, Setting} from '../../../../assets/media'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllCar} from "../../../../setup/redux/action/CarAction";
import SubmitButton from "../../component/ButtonSubmit";

const {Text} = Typography;

const ProductCard = () => {
    const dispatch = useDispatch()
    const {isLoading, data, carSpecs} = useSelector((state) => state.car);

    useEffect(() => {
        dispatch(getAllCar())
    }, [dispatch]);

    return (
        <>
            {isLoading ? <Spin className="d-flex justify-content-center align-items-center"/> : ""}
            <Row gutter={[24, 24]}>
                {data?.map((item) => {
                    return (
                        <Col classame="gutter-row" span={8}>
                            <Card bordered={false}
                                  style={{
                                      width: "100%",
                                      boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                                      borderRadius: 8,
                                  }}>
                                <div className="text-center mt-4 mb-5">
                                    <img src={item.image} alt="" style={{objectFit: "cover", width: 270, height: 160}}/>
                                </div>
                                <Space direction="vertical" size={16} style={{display: 'flex'}}>
                                    <Space direction="vertical" size={8} style={{display: 'flex'}}>
                                        <Text>{item.name}</Text>
                                        <Text className="fw-bold fs-6">{item.price.toLocaleString('id-ID', {
                                            style: 'currency',
                                            currency: 'IDR',
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0,
                                        })} / hari</Text>
                                        <Text className="fw-light">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. </Text>
                                    </Space>
                                    <Space size={8} style={{display: 'flex'}}>
                                        <img src={User} alt=""/>
                                        <Text>{carSpecs.capacity} Orang</Text>
                                    </Space>
                                    <Space size={8} style={{display: 'flex'}}>
                                        <img src={Setting} alt=""/>
                                        <Text>{carSpecs.transmission}</Text>
                                    </Space>
                                    <Space size={8} style={{display: 'flex'}}>
                                        <img src={Calendar} alt=""/>
                                        <Text>{carSpecs.productionYear}</Text>
                                    </Space>
                                </Space>
                                <SubmitButton text="Pilih Mobil" linkTo={`/detail/${item.id}`}/>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default ProductCard