import React from "react";
import { Modal, Button ,Checkbox,Input} from "antd";
const { Search } = Input;
const Model = ({children, id, visible, handleOk, handleCancel, onCheck ,onSearch,onChangeSearch,serch}) => {
  return (
    <Modal
      title={
        <p className="text-center">
          <Button style={{backgroundColor:" #46139f"}} id='1' onClick={handleOk} >All Contacts</Button>
          <Button id='2' style={{backgroundColor:"#ff7f50"}} onClick={handleOk} >US Contacts</Button>
          <Button id='3'style={{borderColor:'#46139f',}} onClick={handleCancel}>Close</Button>
          <br/>
          <br/>
          <Search
      placeholder="Enter name or phone "
      onSearch={onSearch}
      onChange={onChangeSearch}
      value={serch}
      style={{ width: 200 }}
    />
        </p>
      }
      visible={visible}
      id={id}
      footer={<Checkbox onChange={onCheck} className="ml-5" >Only Even</Checkbox>}
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