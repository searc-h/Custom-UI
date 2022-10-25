import './App.less'
import {unstable_HistoryRouter as HistoryRouter,} from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import { history } from './utils/history';

import MyFooter from "./component/MyFooter";
import MyHeader from "./component/MyHeader";
import Mid from './pages/Mid';

function App() {
  
  return (
      <HistoryRouter history={history}>
        <div className="App">
          <div className="header">
            <MyHeader></MyHeader>
          </div>

          <div className="mark">
          </div>

          <div className="mid">
            <Mid></Mid>
          </div>
          
          <div className="footer">
            <MyFooter></MyFooter>
          </div>
        </div>
      </HistoryRouter>
  );
}

export default observer(App);
