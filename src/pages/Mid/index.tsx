import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from "react";
import { routes, RouteTypes } from '../../router/routes';

import Loading from '../../component/Loading';

const Start = lazy(() => import('../Start'))

export default function Mid() {
  return (
    <>
      <Suspense fallback={<Loading />}>

        <Routes>
          <Route index element={<Start />}></Route>

          {
            routes.map(item=>{
              return (
                <Route path={item.path} element={<item.element/>} key={item.key}>
                  {
                    item.children? 
                    (item.children as RouteTypes[]).map((sedItem)=>
                      <Route path={sedItem.path} element={<sedItem.element/>} key={sedItem.key}/>
                    )
                    :null
                  }
                </Route>
              )
            })
          }
        </Routes>

      </Suspense>
    </>
  )
}
