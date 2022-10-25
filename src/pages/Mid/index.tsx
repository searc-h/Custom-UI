import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from "react";

import Loading from '../../component/Loading';

// 路由懒加载
const Main = lazy(() => import('../Main'))
const Start = lazy(() => import('../Start'))
const ExpadingCard = lazy(() => import('../Main/ExpandingCard'))
const ProgressSteps = lazy(() => import('../Main/ProgressSteps'))
const SoundBoard = lazy(() => import('../Main/SoundBoard'))
const RandomChoice = lazy(() => import('../Main/RandomChoice'))
const BackgroundSlider = lazy(() => import('../Main/BackgroundSlider'))
const DragAndDrop = lazy(() => import('../Main/DragAndDrop'))
const DrawingPad = lazy(() => import('../Main/DrawingPad'))
const DoubleClickHeart = lazy(() => import('../Main/DoubleClickHeart'))
const PasswordGeneratore = lazy(() => import('../Main/PasswordGenerator'))
const HoverBoard = lazy(() => import('../Main/HoverBoard'))
const VerifyAccount = lazy(() => import('../Main/VerifyAccount'))
const FeebackDesign = lazy(() => import('../Main/FeebackDesign'))
const CustomSlider = lazy(() => import('../Main/CustomSlider'))
const NetFlixNavigation = lazy(() => import('../Main/NetFlixNavigation'))
const MyModel = lazy(() => import('../Main/MyModel/MyModel'))

export default function Mid() {
  return (
    <>
      <Suspense fallback={<Loading />}>

        <Routes>
          <Route index element={<Start />}></Route>
          <Route path='/main' element={<Main />}>
            <Route path='expanding-card' element={<ExpadingCard />}></Route>

            <Route path='progress-steps' element={<ProgressSteps />}></Route>

            <Route path='sound-board' element={<SoundBoard />}></Route>

            <Route path='random-choice' element={<RandomChoice />}></Route>

            <Route path='background-slider' element={<BackgroundSlider />}></Route>

            <Route path='drag-and-drop' element={<DragAndDrop />}></Route>

            <Route path='drawing-pad' element={<DrawingPad />}></Route>

            <Route path='double-click-heart' element={<DoubleClickHeart />}></Route>

            <Route path='password-generator' element={<PasswordGeneratore />}></Route>

            <Route path='hover-board' element={<HoverBoard />}></Route>

            <Route path='verify-account' element={<VerifyAccount />}></Route>

            <Route path='feeback-design' element={<FeebackDesign />}></Route>

            <Route path='custom-slider' element={<CustomSlider />}></Route>

            <Route path='netflix-navigation' element={<NetFlixNavigation />}></Route>
            <Route path='my-model' element={<MyModel />}></Route>
          </Route>
        </Routes>

      </Suspense>
    </>
  )
}
