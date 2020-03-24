import { Form, Radio, Input, Checkbox, Select,  Row, Col } from "antd";
import React, {Component} from "react";

const { Option } = Select;


class MemberForm extends Component {
    state = {
        extraPay: false,
    };
    handleChange = e => {
        this.setState(
          {
            extraPay: e.target.checked,
          },
          () => {
            this.props.form.setFieldsValue({extra_payment_type: this.state.extraPay ? 'cash' : null});
          },
        );
    };
    render() {
        const { form } = this.props;
        const { getFieldDecorator } = form;
        return(
            <Form layout="vertical">
                <Form.Item label="Имя">
                    {getFieldDecorator(
                        'name',
                        {initialValue: this.props.memberInitData ? this.props.memberInitData.name : ''})
                    (<Input/>)}
                </Form.Item>
                <Row>
                    <Col span={12}>
                        <Form.Item label="Сумма">
                            {getFieldDecorator(
                                'pay',
                                {initialValue: this.props.memberInitData ? this.props.memberInitData.pay : 300})
                            (
                              <Select style={{ width: 100 }}>
                                  <Option value={300}>300</Option>
                                  <Option value={400}>400</Option>
                              </Select>
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Способ оплаты">
                            {getFieldDecorator(
                                'payment_type',
                                {initialValue: this.props.memberInitData ? this.props.memberInitData.payment_type : 'cash'})
                            (
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
                            {getFieldDecorator(
                                'extra_pay',
                                {
                                    valuePropName: 'checked',
                                    initialValue: this.props.memberInitData ? this.props.memberInitData.extra_pay : false})
                            (<Checkbox onChange={this.handleChange} />)}
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Способ Доплаты">
                            {getFieldDecorator(
                                'extra_payment_type',
                                {initialValue: this.props.memberInitData ? this.props.memberInitData.extra_payment_type :
                                        this.state.extraPay ? 'cash' : null})
                            (
                                <Radio.Group disabled={!this.state.extraPay}>
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

const WrappedMemberForm = Form.create({ name: 'registerNewMember' })(MemberForm);
export default  WrappedMemberForm;
