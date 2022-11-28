import react  from 'react'
import { FunctionComponent, LazyExoticComponent ,lazy } from 'react';

const Main = lazy(()=>import('../pages/Main'))
const ExpadingCard = lazy(() => import('../pages/Main/ExpandingCard'))
const ProgressSteps = lazy(() => import('../pages/Main/ProgressSteps'))
const SoundBoard = lazy(() => import('../pages/Main/SoundBoard'))
const RandomChoice = lazy(() => import('../pages/Main/RandomChoice'))
const BackgroundSlider = lazy(() => import('../pages/Main/BackgroundSlider'))
const DragAndDrop = lazy(() => import('../pages/Main/DragAndDrop'))
const DrawingPad = lazy(() => import('../pages/Main/DrawingPad'))
const DoubleClickHeart = lazy(() => import('../pages/Main/DoubleClickHeart'))
const PasswordGeneratore = lazy(() => import('../pages/Main/PasswordGenerator'))
const HoverBoard = lazy(() => import('../pages/Main/HoverBoard'))
const VerifyAccount = lazy(() => import('../pages/Main/VerifyAccount'))
const FeebackDesign = lazy(() => import('../pages/Main/FeebackDesign'))
const CustomSlider = lazy(() => import('../pages/Main/CustomSlider'))
const NetFlixNavigation = lazy(() => import('../pages/Main/NetFlixNavigation'))
const MyModel = lazy(() => import('../pages/Main/MyModel/MyModel'))
const MyTable = lazy(()=>import("../pages/Main/MyTable/MyTable")) 
const LazyImg = lazy(()=>import("../pages/Main/LazyImg"))

export interface RouteTypes {
  key: string | number;
  path?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  element: LazyExoticComponent<FunctionComponent<{}>> | FunctionComponent<{}>;
  // eslint-disable-next-line @typescript-eslint/ban-types
  children?: Array<RouteTypes> | undefined | LazyExoticComponent<FunctionComponent<{}>> | FunctionComponent<{}>;
}

export const routes: RouteTypes[] = [
    {
        key : "1",
        path : '/main',
        element : Main,
        children:[
            {
                key : "1-0",
                path : 'expanding-card',
                element : ExpadingCard
            },
            {
                key : "1-1",
                path : 'progress-steps',
                element : ProgressSteps
            },
            {
                key : "1-2",
                path : 'sound-board',
                element : SoundBoard
            },
            {
                key : "1-3",
                path : 'random-choice',
                element : RandomChoice
            },
            {
                key : "1-4",
                path : 'background-slider',
                element : BackgroundSlider
            },
            {
                key : "1-5",
                path : 'drag-and-drop',
                element : DragAndDrop
            },
            {
                key : "1-6",
                path : 'drawing-pad',
                element : DrawingPad
            },
            {
                key : "1-7",
                path : 'double-click-heart',
                element : DoubleClickHeart
            },
            {
                key : "1-8",
                path : 'password-generator',
                element : PasswordGeneratore
            },
            {
                key : "1-9",
                path : 'hover-board',
                element : HoverBoard
            },
            {
                key : "1-10",
                path : 'verify-account',
                element : VerifyAccount
            },
            {
                key : "1-11",
                path : 'feeback-design',
                element : FeebackDesign
            },
            {
                key : "1-12",
                path : 'custom-slider',
                element : CustomSlider
            },
            {
                key : "1-13",
                path : 'netflix-navigation',
                element : NetFlixNavigation
            },
            {
                key : "1-14",
                path : 'my-model',
                element : MyModel
            },
            {
                key : "1-15",
                path : 'my-table',
                element : MyTable
            },
            {
                key : "1-16",
                path : 'lazy-img',
                element : LazyImg
            }

        ]
    }
]



