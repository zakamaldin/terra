import { Form, Radio, Input, Checkbox, Select } from "antd";
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

                <Form.Item label="Сумма">
                    {getFieldDecorator('pay', {
                        initialValue: 400
                    })(
                      <Select style={{ width: 100 }}>
                          <Option value={300}>300</Option>
                          <Option value={400}>400</Option>
                      </Select>
                    )}
                </Form.Item>

                <Form.Item label="Доплата">
                    {getFieldDecorator('extra_pay', {
                        valuePropName: 'checked',
                        initialValue: true
                    })(<Checkbox/>)}
                </Form.Item>

                <Form.Item label="Способ оплаты">
                    {getFieldDecorator('payment_type', {
                        initialValue: 'card'
                    })(
                        <Radio.Group>
                            <Radio value="cash">Наличными</Radio>
                            <Radio value="card">Картой</Radio>
                        </Radio.Group>,
                    )}
                </Form.Item>
            </Form>
        )
    }
}

const WrappedNewMemberForm = Form.create({ name: 'registerNewMember' })(NewMemberForm);
export default  WrappedNewMemberForm;
