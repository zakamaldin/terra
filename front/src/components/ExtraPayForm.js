import React, {Component} from "react";
import { Form, Radio } from 'antd';

const ExtraPayForm = Form.create({ name: 'form_in_modal' })(
  class extends Component {
    render() {
      const { form } = this.props;
      const { getFieldDecorator } = form;
      return (
          <Form layout="vertical">
            <Form.Item label="Выберите способ доплаты">
                {getFieldDecorator('extra_payment_type', {
                    initialValue: 'cash'
                })(
                    <Radio.Group>
                        <Radio value="cash">Наличными</Radio>
                        <Radio value="card">Картой</Radio>
                    </Radio.Group>,
                )}
            </Form.Item>
          </Form>
      );
    }
  },
);
export default ExtraPayForm;
