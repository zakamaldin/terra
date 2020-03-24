import {Table, Button, Modal, Checkbox, Icon, Empty } from 'antd';
import Moment from 'react-moment';
import React, {Component} from "react";
import ExtraPayConfirm from "./ExtraPayConfirm";
import MemberForm from "./MemberForm";
import MemberCard from "./MemberCard";

const { confirm } = Modal;
const { Column } = Table;


class MembersList extends Component {

  state = {
    memberCardVisible: false
  };

  paymenTypeMapper = {
    cash: 'Наличные',
    card: 'Карта'
  };

  showMemberCard = (record) => {
    let id = record.id;
    let initData = {...record};
    delete initData.id;
    this.setState({
        memberCardVisible:true,
        memberId: id,
        memberInitData: initData,
    });
  };

  closeMemberCard = () => {
    this.setState({
        memberCardVisible: false,
    });
  };

  handleUpdateMember = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      form.resetFields();
      this.props.updateMember(this.state.memberId, values);
      this.closeMemberCard();
      this.setState({
        memberId: null,
        memberInitData: null,
    });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  showDeleteConfirm = (e, id) =>{
      e.stopPropagation();
      confirm({
        title: 'Вы действительно хотите удалить запись об участнике?',
        content: 'Если не уверены, то лучше оставьте комментарий в карточке участника',
        okText: 'Да',
        okType: 'danger',
        cancelText: 'Нет',
        icon: <Icon type="question-circle-o" style={{ color: 'red' }} />,
        onOk: () => this.props.deleteMember(id),
      });
    };

  render() {
    return(
      <div>
          <Table
              locale={{
                  emptyText:
                      <Empty
                          description={<span>На игротеку еще никто не записался</span>}>
                             <MemberCard addMember={this.props.addMember} type={'add'}/>
                      </Empty>, }}
              dataSource={this.props.members}
              pagination={false}
              rowKey={record => record.id}
              onRow={(record, rowIndex) => {
                return {
                    onClick: () => {this.showMemberCard(record)}
                };
              }}>
            <Column title="ID" dataIndex="id" id="id" width={80}/>
            <Column title="Имя" dataIndex="name" id="name" width={200}/>
            <Column
                title="Время"
                dataIndex="created"
                id="created"
                width={80}
                render = {(text, record) => (
                    <Moment date={record.created} format={'HH:mm'}/>
                )}
            />
            <Column title="Сумма" dataIndex="pay" id="pay" width={80}/>
            <Column
                title="Способ оплаты"
                dataIndex="payment_type"
                id="payment_type"
                width={150}
                render={(text, record) => (
                    <span>
                        {this.paymenTypeMapper[record.payment_type] || 'Биткоины'}
                    </span>
                )}
            />
            <Column
                title="Доплата"
                dataIndex="extra_pay"
                id="extra_pay"
                width={100}
                render={(text, record) =>(
                    <Checkbox className={'table-checkboxes'} checked={record.extra_pay}/>
                )}
            />
            <Column
                title="Способ доплаты"
                dataIndex="extra_payment_type"
                id="extra_payment_type"
                width={150}
                render={(text, record) => (
                    <span>
                        {this.paymenTypeMapper[record.extra_payment_type] || ''}
                    </span>
                )}
            />

            <Column
                title="Действия"
                id="action"
                width={280}
                render={(text, record) => (
                    <span>
                        <ExtraPayConfirm record={record} addExtraPay={this.props.addExtraPay}/>
                        <Button type="danger" onClick={ (e) => this.showDeleteConfirm(e, record.id)}>
                            <Icon type="user-delete" />
                            Удалить
                        </Button>
                    </span>
                )}
            />
            <Column
                title="Комментарий"
                id="comment"
                dataIndex="comment"
                ellipsis={true}

            />
          </Table>
            <Modal
              title="Анкета участника"
              centered
              visible={this.state.memberCardVisible}
              onOk={this.handleUpdateMember}
              onCancel={this.closeMemberCard}
            >
              <MemberForm
                  wrappedComponentRef={this.saveFormRef}
                  memberInitData={this.state.memberInitData}
                  type={'edit'}
              />
          </Modal>
      </div>
    )
  }
}
export default MembersList;
