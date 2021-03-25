import './App.css';
import { Route, Switch, useHistory } from "react-router-dom";
import { UserLoginTemplate } from './templates/HomeTemplate/UserLoginTemplate';
import Login from './pages/Login/Login'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Loading from './components/GlobalSetting/Loading/Loading';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addHistory } from './redux/actions/HistoryActions';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home'



function App() {

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(addHistory(history))
  }, [])


  return (
    <>
      <Loading/>
      <Switch>
        <UserLoginTemplate exact path="/login" Component={Login}/>
        <HomeTemplate exact path="/home" Component={Home} />
      </Switch>
    </>
  );
}

export default App;
