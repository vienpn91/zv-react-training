import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, Layout, Button,List, Checkbox , Input, Icon } from "antd";
const { Header, Footer, Sider, Content } = Layout;


export default class Todo extends Component {
  state = {
    noteData:''
  }
  handleChange = (e) => {
    this.setState({
      noteData: e.target.value,
    })
  }

  handleStatus = (e) => {
    console.log(`checked = ${e.target.checked}`);
  }

  render() {
    const { noteData } = this.state;
    const { insertTodo, todoList , deleteTodo, completedTodo } = this.props;
    return (
      <Layout>
         <Header style={{background: '#f9f9f9'}}>
          <Row>
            <Col span={21}>
              <Input
                required
                value={noteData} onChange={this.handleChange}
                style={{marginRight: '15px'}}
                placeholder="What needs to be done ?"
                prefix={<Icon type="tags" style={{ color: "rgba(0,0,0,.25)" }} />}
              />
            </Col>
            <Col style={{textAlign: 'right'}}  span={3}>
              <Button
                type="primary" 
                onClick={()=> {
                  insertTodo({noted:noteData,status:false});
                  this.setState({ noteData: ''})
                }}
                >
                Add Note
              </Button>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Row>
            <Col span={24}>
              <Content style={{background: '#f9f9f9',padding: '0 50px'}}>
                <List
                  className="hihi"
                  itemLayout="horizontal"
                  dataSource={todoList}
                  renderItem={(item, index) => (
                    <List.Item key={index} style={{display:'flex',alignItems:'end'}}>
                      <Checkbox style={{marginRight: '5px'}} 
                        onChange={() => completedTodo(index)} 
                        checked={item.status}
                      />
                      <List.Item.Meta                        
                        title={item.noted}
                        style={{fontWeight: 'bold',fontSize: '16px'}}
                      />
                      <span onClick={()=> { deleteTodo(index)}}>                        
                        <Icon type="delete" />
                      </span>
                    </List.Item>                  
                  )}
                />
              </Content>
            </Col>
          </Row>
        </Layout>
      </Layout>
    );
  }
}
