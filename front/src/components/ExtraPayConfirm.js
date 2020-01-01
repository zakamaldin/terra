import React, {Component} from "react";
import {Button, Form, Icon, Popconfirm, Radio} from "antd";
import ExtraPayForm from '../components/ExtraPayForm'

class ExtraPayConfirm extends Component {
    handleAddExtraPay = () => {
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }

          console.log('Received values of form: ', values);
          console.log(this.props.record.id);
          form.resetFields();
          this.props.addExtraPay(this.props.record.id);
        });
      };
    saveFormRef = formRef => {
        this.formRef = formRef;
    };
    render() {
        return(
            <Popconfirm
                title={ <ExtraPayForm wrappedComponentRef={this.saveFormRef}/>}
                onConfirm={this.handleAddExtraPay}
                okText="Да"
                cancelText="Нет"
                disabled={this.props.record.extra_pay}
            >
                <Button className={'buttons'} disabled={this.props.record.extra_pay} type="primary">
                    <Icon type="percentage"/>
                    Доплатить
                </Button>
            </Popconfirm>
        )
    }
}
export default ExtraPayConfirm;
