import './App.css';
import { Switch, useHistory } from "react-router-dom";
import { UserLoginTemplate } from './templates/HomeTemplate/UserLoginTemplate';
import Login from './pages/Login/Login'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Loading from './components/GlobalSetting/Loading/Loading';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addHistory } from './redux/actions/HistoryActions';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import CreateProject from './pages/CreateProject/CreateProject';
import Board from './pages/Home/Board';
import ProjectManagement from './pages/ProjectManagement/ProjectManagement';
import DrawerHOC from './HOC/Drawer/DrawerHOC';



function App() {

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(addHistory(history))
  }, [])


  return (
    <>
      <Loading/>
      <DrawerHOC/>
      <Switch>
        <UserLoginTemplate exact path="/login" Component={Login}/>
        <HomeTemplate exact path="/board/:projectID" Component={Board} />
        <HomeTemplate exact path="/createproject" Component={CreateProject} />
        <HomeTemplate exact path="/projectmanagement" Component={ProjectManagement} />
        <HomeTemplate exact path="/" Component={ProjectManagement} />
      </Switch>
    </>
  );
}

export default App;
