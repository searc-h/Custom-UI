import Button from "./Button/Button";

import SwitchCard from "./SwitchCards/SwitchCard";
import {panelItem} from './SwitchCards/SwitchCard'

import Progress from "./Progress/Progress";
import SoundBtn from "./SoundBoard/SoundBtn";
import Slider from "./Silder/Slider";
import Modal from "./Modal/Modal";
import Card from "./Card/Card";
import Description from "./Description/Description";
import Table from "./Table/Table";
import { ColumnsItem  } from "./Table/Table";
export {
    Button,
    SwitchCard,
    Progress,
    SoundBtn,
    Slider,
    Modal,
    Card,
    Description,
    Table
}
export type PanelItem = panelItem
export type ColumnsType<T> = ColumnsItem<T>[]

