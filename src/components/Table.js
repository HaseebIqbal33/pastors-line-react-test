import React, { Fragment } from 'react'
import {Table, } from "antd";

const columns = [
  {
    title: 'id',
    dataIndex: 'key',
  },
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

const CustomTable=({data,clickOnRow})=> {
    let contacts=[]
    data.map((contact=>{
        let temp={}
            temp.key=contact.id;
            temp.name=contact.first_name || "no name";
            temp.phone=contact.phone_number;
            temp.country=contact.country.iso;
            contacts.push(temp)
    }))
    return (
        <Fragment>
            <Table
            pagination={{ pageSize: data.length }}         
            pagination={false}
             onRow={(record, rowIndex) => {
              return {
                onClick:() =>clickOnRow(record,rowIndex)
              };
            }}
                   columns={columns}
                   dataSource={contacts}
                  />
        </Fragment>
    )
}
export default CustomTable;