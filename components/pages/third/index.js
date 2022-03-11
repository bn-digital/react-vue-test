import React, {useEffect, useState} from 'react';
import VueWrapper from "../../VueWrapper";
import {SideBar} from "../../side-bar";
const ThirdPageReact = () => {
  return (
    <>
      <div className={'page-wrapper'} style={{height: '100%'}}>
        <SideBar />
        <div className={'page-content'}>
          <VueWrapper componentProps={{msg: 'Third page'}} />
        </div>
      </div>
    </>
  )
}

export default ThirdPageReact