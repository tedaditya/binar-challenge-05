import {Button, Card, Col, DatePicker, Row, Select, Space, TimePicker, Typography} from "antd";
import moment from "moment";

const {Text, Link} = Typography;
const {Option} = Select;

const DetailSearch = () => {
    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    function onChangeTime(time, timeString) {
        console.log(time, timeString);
    }

    return (
        <>
            <div style={{marginRight: 176, marginLeft: 176}}>
                <Card id="search" title={false} bordered={false} style={{
                    borderRadius: 8,
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
                    margin: 20,
                }}>
                    <Space direction="vertical" size={16} style={{display: 'flex'}}>
                        <Text className="label-text" style={{fontWeight: "bold", fontSize: 14}}>Detail Pesananmu</Text>
                        <Row gutter={16} justify="space-between" align="bottom">
                            <Col className="gutter-row" span={5}>
                                <Space direction="vertical" size={4} style={{display: 'flex'}}>
                                    <Text className="label-text">Tipe Driver</Text>
                                    <Select
                                        className="input-style"
                                        showSearch
                                        placeholder={<Text className="label-placeholder">Pilih Tipe Driver</Text>}
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onSearch={onSearch}
                                        bordered={false}
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="jack">Dengan Sopir</Option>
                                        <Option value="lucy">Tanpa Sopir (Lepas Kunci)</Option>
                                    </Select>
                                </Space>
                            </Col>
                            <Col className="gutter-row" span={5}>
                                <Space direction="vertical" size={4} style={{display: 'flex'}}>
                                    <Text className="label-text">Tanggal</Text>
                                    <DatePicker
                                        className="input-style label-placeholder"
                                        placeholder="Pilih Tanggal"
                                        onChange={onChange}
                                    />
                                </Space>
                            </Col>
                            <Col className="gutter-row" span={5}>
                                <Space direction="vertical" size={4} style={{display: 'flex'}}>
                                    <Text className="label-text">Waktu Jemput/Ambil</Text>
                                    <TimePicker
                                        className="input-style label-placeholder"
                                        placeholder="Pilih Waktu"
                                        defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
                                        format="HH:mm"
                                        onChange={onChangeTime}
                                    />
                                </Space>
                            </Col>
                            <Col className="gutter-row" span={5}>
                                <Space direction="vertical" size={4} style={{display: 'flex'}}>
                                    <Text className="label-text">Jumlah Penumpang (optional)</Text>
                                    <Select
                                        className="input-style"
                                        showSearch
                                        placeholder={<Text className="label-placeholder">Jumlah Penumpang</Text>}
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onSearch={onSearch}
                                        bordered={false}
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="1">1</Option>
                                        <Option value="2">2</Option>
                                        <Option value="3">3</Option>
                                        <Option value="4">4</Option>
                                    </Select>
                                </Space>
                            </Col>
                            <Col className="gutter-row" span={4}>
                                <Button
                                    style={{
                                        background: "#5CB85F",
                                        borderRadius: 2,
                                        color: "white",
                                        fontWeight: 700,
                                        width: "100%",
                                        height: 36
                                    }}
                                >
                                    Cari Mobil
                                </Button>
                            </Col>
                        </Row>
                    </Space>
                </Card>
            </div>
        </>
    )
}

export default DetailSearch