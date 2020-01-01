import React, { Component } from 'react';
import MembersList from '../components/MembersList'
import NewMember from "../components/NewMember";
import NewEvent from "../components/NewEvent";

class Event extends Component{

 randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toString();
}

    constructor(props){
      super(props);
      this.state ={members:
        [
            {
                id: '1',
                name: 'Андрей',
                created: this.randomDate(new Date(2019, 0, 1), new Date()),
                pay: 300,
                extra_pay: false,
                payment_type: 'cash',
            },
            {
                id: '2',
                name: 'Илья',
                created: this.randomDate(new Date(2019, 0, 1), new Date()),
                pay: 300,
                extra_pay: true,
                payment_type: 'card',
            },
            {
                id: '3',
                name: 'Колян',
                created: this.randomDate(new Date(2019, 0, 1), new Date()),
                pay: 300,
                extra_pay: false,
                payment_type: '123',
            },
            {
                id: '4',
                name: 'Коля',
                created: this.randomDate(new Date(2019, 0, 1), new Date()),
                pay: 300,
                extra_pay: false,
                payment_type: 'card',
            },
            {
                id: '10000',
                name: 'Николай',
                created: this.randomDate(new Date(2019, 0, 1), new Date()),
                pay: 300,
                extra_pay: false,
                payment_type: 'cash',
            },
            {
                id: '10001',
                name: 'Закамалдин Андрей',
                created: this.randomDate(new Date(2019, 0, 1), new Date()),
                pay: 300,
                extra_pay: false,
                payment_type: 'cash',
                comment:'С другой стороны сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Значимость этих проблем настолько очевидна, что консультация с широким активом в значительной степени обуславливает создание новых предложений. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание модели развития. Задача организации, в особенности же дальнейшее развитие различных форм деятельности требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что начало повседневной работы по формированию позиции в значительной степени обуславливает создание новых предложений.'
            },

        ]
      };
    }

    deleteMember = (id) =>{
      let newMembers = this.state.members
          .filter(x => {
              return x.id !== id;});
      this.setState({members: newMembers});
    };

    addExtraPay = id => {
      let newMembers = this.state.members;
      let indexMemberById = newMembers
          .findIndex(x => {
              return x.id === id;});
      newMembers[indexMemberById].extra_pay=true;
      this.setState({members: newMembers});
    };

    addMember = values => {
      let newMembers = this.state.members;
      newMembers.push({id:+newMembers[newMembers.length - 1].id + 1, ...values});
      this.setState({members: newMembers});
    };

    render(){
        return (
            <div>
                <div className={'event-buttons'}>
                    <NewMember addMember={this.addMember}/>
                    <NewEvent count={this.state.members.length}/>
                </div>
                <MembersList members={this.state.members}
                             deleteMember={this.deleteMember}
                             addExtraPay={this.addExtraPay} />
            </div>

        )
    }
}

export default Event;
