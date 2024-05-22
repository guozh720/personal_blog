import Mock from 'mockjs'
 import {getListData} from "./data";

Mock.mock('/article/listAll','get',getListData)