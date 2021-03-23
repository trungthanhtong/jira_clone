import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserLoginTemplate } from './templates/HomeTemplate/UserLoginTemplate';
import Login from './pages/Login/Login'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {Button} from 'antd'



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <UserLoginTemplate exact path="/login" Component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
