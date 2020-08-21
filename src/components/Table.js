import React, { Fragment } from 'react'
import { Button,Row, Col,Table, Radio, Divider } from "antd";
import { connect } from 'react-redux';
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
    },
    {
      title: 'Country',
      dataIndex: 'country',
    },
  ];
const CustomTable=({data})=> {
    let contacts=[]
    data.map((contact=>{
        let temp={}
            temp.name=contact.first_name || "no name";
            temp.phone=contact.phone_number;
            temp.country=contact.country.iso;
            contacts.push(temp)
    }))
    return (
        <Fragment>
            <Table
                   columns={columns}
                   dataSource={contacts}
                  />
        </Fragment>
    )
}
export default CustomTable;