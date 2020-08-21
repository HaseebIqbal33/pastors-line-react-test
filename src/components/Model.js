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
          <Button style={{backgroundColor:color}} id='1' onClick={handleOk} >All Contacts</Button>
          <Button id='2' style={{backgroundColor:color}} onClick={handleOk} >US Contacts</Button>
          <Button id='3'style={{borderColor:'#46139f',}} onClick={handleCancel}>Close</Button>
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
      footer={<Checkbox checked={true} className="ml-5" >Checkbox</Checkbox>}
    >
     {children}
    </Modal>
  );
};
export default Model;

export const InfoModel=({visible,id,children,handleOk})=>{
  return (
    <Modal
     onOk={handleOk}
      visible={visible}
      id={id}
    >
     {children}
    </Modal>
  );
}