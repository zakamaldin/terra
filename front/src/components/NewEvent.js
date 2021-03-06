import React, {Component} from 'react'
import { Modal, Button } from 'antd';
const { confirm } = Modal;

class NewEvent extends Component {

  state = { visible: false };

  members(count){
    if (count){
        let str = count.toString()
        let lastSymbol = str[str.length-1];
        let addWord = 'участников';
        switch(lastSymbol){
            case '1':
                addWord = 'участник';
                break;
            case '2':
            case '3':
            case '4':
                addWord = 'участника';
                break;
            default:
                break;
        }
        return count + ' ' + addWord;
    }
  }
  showModal = () => {
    confirm({
        title: 'Вы действительно хотите завершить текущую игротеку?',
        content: `В текущей игротеке ${this.members(this.props.count)}`,
        onOk() {
          return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000);
          }).catch(() => {this.error()});
        },
        onCancel() {},
    });
  };

  error () {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
}

  render() {
    return (
      <div>
        <Button type="danger" onClick={this.showModal}>
          Начать новую игротеку
        </Button>
      </div>
    );
  }
}

export default NewEvent;
