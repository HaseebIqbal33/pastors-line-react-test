import React, { Component } from "react";
import { Button, Row, Col, Table, Radio, Divider } from "antd";
import Model, { InfoModel } from "../components/Model";
import { connect } from "react-redux";
import { getContacts } from "../redux/actions/contacts";
import { Scrollbars } from "react-custom-scrollbars";
import CustomTable from "../components/Table";
import { withRouter } from "react-router-dom";
import { Axios } from "../utils/axios";
import { getEven } from "../utils/filter";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modelA: false,
      modelB: false,
      modelC: false,
      dataModelC: null,
      cId: null,
      onCheck: false,
      search: null,
      serchValue: [],
    };
  }
  handleOk = (e) => {
    const { id } = e.currentTarget;
    if (id == 2) {
      this.props.history.push("model2");
      this.setState({ modelA: false, modelB: true, cId: 2 });
    } else {
      this.props.history.push("model1");
      this.setState({ modelA: true, modelB: false, cId: 1 });
    }
  };
  handleCancel = (e) => {
    const id = this.state.cId;
    if (id == 1 && this.state.modelB) {
      this.setState({ modelA: false, cId: 2 });
    } else if (id == 2 && this.state.modelB) {
      this.setState({ modelB: false, cId: 1 });
    } else if (id == 1 && !this.state.modelB) {
      this.setState({ modelA: false, cId: null });
    } else if (id == 2 && !this.state.modelA) {
      this.setState({ modelB: false, cId: null });
    }
  };
  showModal = (e) => {
    const { id } = e.currentTarget;
    if (id == 1) {
      this.props.history.push("model1");
      this.setState({ modelA: true, cId: 1 });
    } else {
      this.props.history.push("model2");
      this.setState({ modelB: true, cId: 2 });
    }
  };
  componentDidMount() {
    this.props.getContacts();
  }
  clickOnRow = (row, index) => {
    this.setState({ modelC: true, dataModelC: row });
  };
  handleOkClickOnRow = (e) => {
    this.setState({ modelC: false });
  };
  onCheck = () => {
    console.log("Click is called")
    if (this.state.onCheck) {
      this.setState({ onCheck: false });
    } else {
      this.setState({ onCheck: true });
    }
  };
  onSearch = (e) => {
    Axios.get(`contacts.json?companyId=171&query=${this.state.search}`)
      .then((res) => {
        let temp = [];
        for (const key in res.data.contacts) {
          temp.push(res.data.contacts[key]);
        }
        this.setState({ serchValue: temp });
      })
      .catch((err) => {
        throw err;
      });
  };
  onChangeSearch = (e) => {
    getEven(this.props.data.contacts);
    this.setState({ search: e.target.value, serchValue: [] });
  };
  render() {
    const { onCheck } = this.state;
    console.log(this.state.serchValue.length);
    return (
      <Row justify="space-around" align="middle">
        <Col span={12} offset={11}>
          <Model
            visible={this.state.modelA}
            handleOk={this.handleOk}
            handleCancel={this.handleCancel}
            onCheck={this.onCheck}
            id="1"
            color="#46139f"
            onSearch={this.onSearch}
            onChangeSearch={this.onChangeSearch}
            serchValue={this.state.search}
          >
            <Scrollbars style={{ height: 550 }}>
              <CustomTable
                data={
                  this.state.serchValue.length > 0 ?
                  onCheck== true?
                  getEven(this.state.serchValue):
                  this.state.serchValue:
                  onCheck== true?
                  getEven(this.props.data.contacts):
                  this.props.data.contacts
                 
                }
                clickOnRow={this.clickOnRow}
              />
            </Scrollbars>
          </Model>
          <Model
            visible={this.state.modelB}
            handleOk={this.handleOk}
            handleCancel={this.handleCancel}
            onCheck={this.onCheck}
            color="#ff7f50"
            id="2"
            onSearch={this.onSearch}
            onChangeSearch={this.onChangeSearch}
            serchValue={this.state.search}
          >
            <Scrollbars style={{ height: 550 }}>
              <CustomTable
                data={
                  this.state.serchValue.length > 0 ?
                  onCheck== true?
                  getEven(this.state.serchValue):
                  this.state.serchValue:
                  onCheck== true?
                  getEven(this.props.data.usContacts):
                  this.props.data.usContacts
                }
                clickOnRow={this.clickOnRow}
              />
            </Scrollbars>
          </Model>
          <InfoModel
            visible={this.state.modelC}
            handleOk={this.handleOkClickOnRow}
            handleCancel={null}
            id="3"
          >
            {this.state.dataModelC ? (
              <div>
                <span>{this.state.dataModelC.key}</span>
                <span>{this.state.dataModelC.name}</span>
              </div>
            ) : null}
          </InfoModel>
        </Col>
        <Row justify="space-around" align="middle">
          <Col span={4}>
            <Button
              style={{ backgroundColor: " #46139f" }}
              type="primary"
              id="1"
              onClick={this.showModal}
            >
              Modal A
            </Button>
            <Button
              type="primary"
              id="2"
              style={{ backgroundColor: " #ff7f50" }}
              onClick={this.showModal}
            >
              Modal B
            </Button>
          </Col>
        </Row>
      </Row>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.contacts,
});
export default connect(mapStateToProps, { getContacts })(withRouter(Home));
