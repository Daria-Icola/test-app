import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

//components
import { CollectionPageContainer, FormPageContainer } from './components/redux/containers';
import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/NotFoundPage';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';



const { Header, Content, Footer } = Layout;

export default class App extends React.Component {

  render () {
    return (
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
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
              <Route exact path='/form' render={ () =>
                    <FormPageContainer />
                } />
              <Route exact path='/collection' render={ () =>
                    <CollectionPageContainer />
                } />
              <Route component={NotFoundPage} />
            </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}></Footer>
      </Layout>
    )
  }
}



