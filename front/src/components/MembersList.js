import {Table, Button, Modal, Checkbox, Icon} from 'antd';
import Moment from 'react-moment';
import React, {Component} from "react";

const { confirm } = Modal;
const { Column } = Table;


class MembersList extends Component {

  addExtraPay (id){
      console.log('addExtraPay',id)
  }
  delete(id){
      console.log('delete', id)
  }

  paymenTypeMapper = {
    cash: 'Наличные',
    card: 'Карта'
  };

  showDeleteConfirm(id) {
      confirm({
        title: 'Вы действительно хотите удалить запись об участнике?',
        content: 'Если не уверены, то лучше оставьте комментарий в карточке участника',
        okText: 'Да',
        okType: 'danger',
        cancelText: 'Нет',
        icon: <Icon type="question-circle-o" style={{ color: 'red' }} />,
        onOk: () => this.delete(id),
      });
    }

  render() {
    return(
      <Table dataSource={this.props.data} pagination={false}  rowKey={record => record.id}>
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
            title="Доплата"
            dataIndex="extra_pay"
            id="extra_pay"
            width={100}
            render={(text, record) =>(
                <Checkbox className={'table-checkboxes'} checked={record.extra_pay}/>
            )}
        />
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
            title="Действия"
            id="action"
            width={250}
            render={(text, record) => (
                <span>
                    <Button className={'buttons'} type="primary" onClick={() => this.addExtraPay(record.key)}>
                        Доплатить
                    </Button>
                    <Button type="danger" onClick={() => this.showDeleteConfirm(record.key)}>
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
            // width={250}

        />
      </Table>
    )
  }
}
export default MembersList;
