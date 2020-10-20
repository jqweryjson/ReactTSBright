import React, { useState } from 'react';

import './App.css';
import { BryntumScheduler } from 'bryntum-react-shared';
import { Modal, Button, Input } from 'antd';
import { Iresource } from './types';
import { Header } from './components/Header/Header';

function App() {
  const [resources, addResource] = useState<Iresource[]>([{id: 'a', name: 'Kirill', role: 'Developer'}]);
  const [isShowModal, toggleModal] = useState(false);
  const [name, setName] = useState('');

  const setPersonName = (name: string) => {
    setName(name)
  };

  const addPerson = () => {
    addResource([...resources, {id: (new Date()).toString(), name: name, role: 'Developer'}])
    toggleModal(!isShowModal)
  }

  return (
    <div className="App">
      <Header title="Job change plan for the next two weeks" />

      <BryntumScheduler
        autoHeight={true}
        events={[
          {
            id: 1,
            resourceId: 'a',
            name: 'Test work for bright-group',
            desc: 'Test work for bright-group',
            startDate: '2020-10-19 11:00',
            endDate: '2020-10-21 14:00',
            eventType: 'Job',
            eventColor: 'blue',
            iconCls: 'b-fa b-fa-calendar'
          },
          {
            id: 2,
            resourceId: 'a',
            name: 'Main tasks at current Job',
            desc: 'Main tasks at current Job',
            startDate: '2020-10-21 11:00',
            endDate: '2020-10-22 14:00',
            eventType: 'Job',
            eventColor: 'blue',
            iconCls: 'b-fa b-fa-calendar'
          },
          {
            id: 3,
            resourceId: 'a',
            name: 'going to the tax office',
            desc: 'going to the tax office',
            startDate: '2020-10-22 08:00',
            endDate: '2020-10-22 20:00',
            eventType: 'Job',
            eventColor: 'blue',
            iconCls: 'b-fa b-fa-calendar'
          },
          {
            id: 4,
            resourceId: 'a',
            name: 'Some interview',
            desc: 'Some interview',
            startDate: '2020-10-26 11:00',
            endDate: '2020-10-28 14:00',
            eventType: 'Job',
            eventColor: 'red',
            iconCls: 'b-fa b-fa-calendar'
          },
          {
            id: 5,
            resourceId: 'a',
            name: 'Some interview',
            desc: 'Some interview',
            startDate: '2020-10-25 11:00',
            endDate: '2020-10-26 14:00',
            eventType: 'Job',
            eventColor: 'red',
            iconCls: 'b-fa b-fa-calendar'
          },
        ]}
        resources={resources}
        columns={[
          { text : 'Person', field : 'name', width: 100 },
        ]}
        startDate={new Date(2020, 9, 19)}
        endDate={new Date(2020, 9, 30)}
        viewPreset='dayAndWeek'
      />

      <Button onClick={() => toggleModal(!isShowModal)} type="primary">
        Add person
      </Button>

      <Modal
        title="Add new Person"
        visible={isShowModal}
        onOk={addPerson}
        onCancel={() => toggleModal(!isShowModal)}
      >
        <Input placeholder="Enter name" onChange={({ target: { value } }) => setPersonName(value)} />
      </Modal>
    </div>
  );
}

export default App;
