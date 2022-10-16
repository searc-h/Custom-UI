import './App.css'
import {unstable_HistoryRouter as HistoryRouter, Route, Routes} from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import { history } from './utils/history';
import { lazy,Suspense } from "react";
import MyFooter from "./component/MyFooter";
import MyHeader from "./component/MyHeader";
import Loading from './component/Loading';
// 路由懒加载
const Main = lazy(()=>import('./pages/Main'))
const Start = lazy(()=>import('./pages/Start'))
const ExpadingCard = lazy(()=>import('./pages/Main/ExpandingCard'))
const ProgressSteps = lazy(()=>import('./pages/Main/ProgressSteps'))
const SoundBoard = lazy(()=>import('./pages/Main/SoundBoard'))
const RandomChoice = lazy(()=>import('./pages/Main/RandomChoice'))
const BackgroundSlider = lazy(()=>import('./pages/Main/BackgroundSlider'))
const DragAndDrop = lazy(()=>import('./pages/Main/DragAndDrop'))
const DrawingPad = lazy(()=>import('./pages/Main/DrawingPad'))
const DoubleClickHeart = lazy(()=>import('./pages/Main/DoubleClickHeart'))
const PasswordGeneratore = lazy(()=>import('./pages/Main/PasswordGenerator'))
const HoverBoard = lazy(()=>import('./pages/Main/HoverBoard'))
const VerifyAccount = lazy(()=>import('./pages/Main/VerifyAccount'))
const FeebackDesign = lazy(()=>import('./pages/Main/FeebackDesign'))
const CustomSlider = lazy(()=>import('./pages/Main/CustomSlider'))
const NetFlixNavigation = lazy(()=>import('./pages/Main/NetFlixNavigation'))
function App() {
  
  return (
      <HistoryRouter history={history}>
        <div className="App">
          <MyHeader></MyHeader>
          <div className="mark">
          </div>
          <div className="mid">
            <Suspense fallback={<Loading/>}>

            <Routes>
              <Route index element={<Start/>}></Route>
              <Route path='/main' element={<Main/>}>
                <Route path='expanding-card' element={<ExpadingCard/>}></Route>
                
                <Route path='progress-steps' element={<ProgressSteps/>}></Route>
                
                <Route path='sound-board' element={<SoundBoard/>}></Route>
                 
                <Route path='random-choice' element={<RandomChoice/>}></Route>

                <Route path='background-slider' element={<BackgroundSlider/>}></Route>

                <Route path='drag-and-drop' element={<DragAndDrop/>}></Route>
                
                <Route path='drawing-pad' element={<DrawingPad/>}></Route>
               
                <Route path='double-click-heart' element={<DoubleClickHeart/>}></Route>
                
                <Route path='password-generator' element={<PasswordGeneratore/>}></Route>
                
                <Route path='hover-board' element={<HoverBoard/>}></Route>
                
                <Route path='verify-account' element={<VerifyAccount/>}></Route>
                
                <Route path='feeback-design' element={<FeebackDesign/>}></Route>
                
                <Route path='custom-slider' element={<CustomSlider/>}></Route>
                
                <Route path='netflix-navigation' element={<NetFlixNavigation/>}></Route>

              </Route>
            </Routes>

            </Suspense>
          </div>

          <MyFooter></MyFooter>
        </div>
      </HistoryRouter>
  );
}

export default observer(App);
