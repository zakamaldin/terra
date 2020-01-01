import { Form, Radio, Input, Checkbox, Select,  Row, Col } from "antd";
import React, {Component} from "react";

const { Option } = Select;


class NewMemberForm extends Component {

    render() {
        const { form } = this.props;
        const { getFieldDecorator } = form;
        return(
            <Form layout="vertical">
                <Form.Item label="Имя">
                    {getFieldDecorator('name')(<Input/>)}
                </Form.Item>
                <Row>
                    <Col span={12}>
                        <Form.Item label="Сумма">
                            {getFieldDecorator('pay', {
                                initialValue: 300
                            })(
                              <Select style={{ width: 100 }}>
                                  <Option value={300}>300</Option>
                                  <Option value={400}>400</Option>
                              </Select>
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Способ оплаты">
                            {getFieldDecorator('payment_type', {
                                initialValue: 'cash'
                            })(
                                <Radio.Group>
                                    <Radio value="cash">Наличными</Radio>
                                    <Radio value="card">Картой</Radio>
                                </Radio.Group>,
                            )}
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form.Item label="Доплата">
                            {getFieldDecorator('extra_pay', {
                                valuePropName: 'checked',
                                initialValue: false
                            })(<Checkbox/>)}
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Способ Доплаты">
                            {getFieldDecorator('extra_payment_type', {
                                initialValue: 'cash'
                            })(
                                <Radio.Group>
                                    <Radio value="cash">Наличными</Radio>
                                    <Radio value="card">Картой</Radio>
                                </Radio.Group>,
                            )}
                        </Form.Item>
                    </Col>
                </Row>

            </Form>
        )
    }
}

const WrappedNewMemberForm = Form.create({ name: 'registerNewMember' })(NewMemberForm);
export default  WrappedNewMemberForm;
