import React, { Component } from 'react'
import { Modal, Button, Icon } from 'antd';
import NewMemberForm from './NewMemberForm'

class NewMember extends Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({ visible:true });
  };

  closeModal = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.props.addMember(values);
      this.setState({ visible: false });
    });
  };
  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          <Icon type="user-add" />
          Добавить участника
        </Button>
        <Modal
          title="Анкета участника"
          centered
          visible={this.state.visible}
          onOk={this.handleCreate}
          onCancel={this.closeModal}
        >
          <NewMemberForm
              wrappedComponentRef={this.saveFormRef}
          />
        </Modal>
      </div>
    );
  }
}
export default NewMember;
