import React, { Component } from 'react';
import MembersList from '../components/MembersList'
import MemberCard from "../components/MemberCard";
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
                payment_type: 'cash',
                extra_pay: false,
                extra_payment_type: '',
            },
            {
                id: '2',
                name: 'Илья',
                created: this.randomDate(new Date(2019, 0, 1), new Date()),
                pay: 300,
                payment_type: 'card',
                extra_pay: true,
                extra_payment_type: 'card',
            },
            {
                id: '3',
                name: 'Колян',
                created: this.randomDate(new Date(2019, 0, 1), new Date()),
                pay: 300,
                payment_type: '123',
                extra_pay: false,
                extra_payment_type: '',
            },
            {
                id: '4',
                name: 'Коля',
                created: this.randomDate(new Date(2019, 0, 1), new Date()),
                pay: 300,
                payment_type: 'card',
                extra_pay: false,
                extra_payment_type: '',
            },
            {
                id: '10000',
                name: 'Николай',
                created: this.randomDate(new Date(2019, 0, 1), new Date()),
                pay: 300,
                payment_type: 'cash',
                extra_pay: false,
                extra_payment_type: '',
            },
            {
                id: '10001',
                name: 'Закамалдин Андрей',
                created: this.randomDate(new Date(2019, 0, 1), new Date()),
                pay: 300,
                payment_type: 'cash',
                extra_pay: false,
                extra_payment_type: '',
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

    addExtraPay = (id, values) => {
      let newMembers = this.state.members;
      let indexMemberById = newMembers
          .findIndex(x => {
              return x.id === id;});
      newMembers[indexMemberById].extra_pay = true;
      newMembers[indexMemberById].extra_payment_type = values.extra_payment_type;
      this.setState({members: newMembers});
    };

    addMember = values => {
      let newMembers = this.state.members;
      newMembers.push({id:newMembers.length  + 1, ...values});
      this.setState({members: newMembers});
    };

    updateMember = (id, values) => {
      let newMembers = this.state.members;
      let indexMemberById = newMembers
          .findIndex(x => {
              return x.id === id;});

      newMembers[indexMemberById] = {...values, id: id};
      this.setState({members: newMembers});
    };

    newEvent = () => {
      this.setState({members: []});
    };

    render(){
        return (
            <div>
                <div className={'event-buttons'}>
                    <MemberCard addMember={this.addMember} type={'add'}/>
                    <NewEvent count={this.state.members.length} newEvent={this.newEvent}/>
                </div>
                <MembersList members={this.state.members}
                             deleteMember={this.deleteMember}
                             addExtraPay={this.addExtraPay}
                             updateMember={this.updateMember}
                             addMember={this.addMember}/>
            </div>

        )
    }
}

export default Event;
