import React from 'react';
import { Route, Switch, BrowserRouter, NavLink } from 'react-router-dom';

//components
import FormPage from './components/FormPage';
import { CollectionPage } from './components/CollectionPage';
import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/NotFoundPage';

import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';



const { Header, Content, Footer } = Layout;

export default class App extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            allContacts: []
        }
        this.addContact = this.addContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
  
    }

     addContact(newContact) {
        this.setState((prevState) => {
            return {
                allContacts: [
                ...prevState.allContacts,
                newContact
                ]
            }
        });
    }

    deleteContact(id){
        this.setState(({allContacts}) => {
            const index = allContacts.findIndex(elem => elem.id === id);
            allContacts.splice(index, 1);
            return {
                allContacts : allContacts
            }
        })
    }
  
  render () {
    return (
      <BrowserRouter>
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1"><NavLink  to="/">Главная</NavLink></Menu.Item>
            <Menu.Item key="2"><NavLink to="/form">Форма</NavLink></Menu.Item>
            <Menu.Item key="3"><NavLink to="/collection">Коллекция</NavLink></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>

          </Breadcrumb>
          <Switch>
              <Route exact path='/'
                  render={ () => <HomePage />  }/>
              <Route exact path='/form' render={(props) => (
                    <FormPage
                    {...props}
                    newContact={this.addContact}/>
                )} />
              <Route exact path='/collection' render={(props) => (
                    <CollectionPage
                        {...props}
                        contacts={this.state.allContacts}
                        onDelete={this.deleteContact}
                    />
                )} />
              <Route component={NotFoundPage} />
            </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}></Footer>
      </Layout>
    </BrowserRouter>
    )
  }
}



