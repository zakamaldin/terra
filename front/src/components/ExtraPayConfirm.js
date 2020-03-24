import React, {Component} from "react";
import {Button, Icon, Popconfirm } from "antd";
import ExtraPayForm from '../components/ExtraPayForm'

class ExtraPayConfirm extends Component {
    handleAddExtraPay = () => {
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }
          form.resetFields();
          this.props.addExtraPay(this.props.record.id, values);
        });
      };
    saveFormRef = formRef => {
        this.formRef = formRef;
    };
    render() {
        return(
            <span onClick={(e) => e.stopPropagation()}>
                <Popconfirm
                    title={ <ExtraPayForm wrappedComponentRef={this.saveFormRef}/>}
                    onConfirm={this.handleAddExtraPay}
                    okText="Доплатить"
                    cancelText="Отмена"
                    disabled={this.props.record.extra_pay}
                    icon={<Icon type="exclamation-circle" />}
                >
                    <Button className={'buttons'} disabled={this.props.record.extra_pay} type="primary">
                        <Icon type="percentage"/>
                        Доплатить
                    </Button>
                </Popconfirm>
            </span>
        )
    }
}
export default ExtraPayConfirm;
