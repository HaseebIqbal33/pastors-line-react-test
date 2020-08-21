import React from "react";
import { Modal, Button } from "antd";
import { Checkbox } from "antd";
import { Input } from 'antd';
const { Search } = Input;
const Model = ({children, id, visible, handleOk, handleCancel, onCheck ,color}) => {
  return (
    <Modal
      title={
        <p className="text-center">
          <Button style={{backgroundColor:' #46139f'}} id='1' onClick={handleOk} >All Contacts</Button>
          <Button id='2' style={{backgroundColor:' #ff7f50'}} onClick={handleOk} >US Contacts</Button>
          <Button id='3' onClick={handleCancel}>Close</Button>
          <br/>
          <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
        </p>
      }
      visible={visible}
      id={id}
      footer={<Checkbox className="ml-5" onChange={onCheck}>Checkbox</Checkbox>}
    >
     {children}
    </Modal>
  );
};
export default Model;