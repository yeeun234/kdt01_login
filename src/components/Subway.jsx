import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import sarea from '../db/sarea.json'
import scode from '../db/scode.json'
import TailSelect from '../ui/TailSelect'
import { useRef } from 'react'  
import { useAtom } from "jotai";
import { IsLoginAtom } from "../atoms/IsLoginAtom";
import { Navigate } from "react-router-dom";

export default function Subway() {
    const [isLogin] = useAtom(IsLoginAtom);

   
    const selectRef = useRef();
    const ops = sarea.map((item) => {
        return <option value={item.코드} key={item.코드}>{item.측정소}</option>
    })

    

    
    const [subwayData, setSubwayData] = useState();
    const [tags,setTags] = useState();
    const fetchSubwayData = async (code) => {
        let url = `https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?`;
        url = `${url}serviceKey=${import.meta.env.VITE_APP_API_KEY}`;
        url = `${url}&pageNo=1&numOfRows=10&resultType=json`;
        url = `${url}&controlnumber=${new Date().toISOString().slice(0, 10).replaceAll('-','')}07`;
        url = `${url}&areaIndex=${code}`;
        console.log(url);
        const response = await fetch(url);
        let data = await response.json();
        
        data = data.response.body.items.item[0]; 
       
       setSubwayData(data);
       
    };
    const handleChange =()=>{
        console.log(selectRef.current.value);
        fetchSubwayData(selectRef.current.value);  
    };
    

    useEffect(()=>{
        if(!subwayData)
            return;
        let tm = Object.keys(scode);
        
        console.log(tm);
        tm = tm.map((item)=>{
            return(<div key={item}>
                <div >
                    {scode[item].name}
                </div>
                <div>
                    ({item})
                </div>
                <div>
                    {subwayData[item]} {subwayData[item] =="-" ? "" : scode[item]["unit"]}
                </div>
                
            </div>
            )
        });

        setTags(tm);
        // setSubwayData(tm);
    },[subwayData]);

    // useEffect(()=>{
    //     const tm = data.map((item)=>{
    //         <div></div>
    //     });
    // },[selectRef.current.value]);

    if (!isLogin) {
        return <Navigate to="/" replace />;
        }

    
  return (
    <div className='flex flex-col justify-start items-center'>
        <div>
        <select id='sel1' ref={selectRef} onChange={handleChange} className="mb-2 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                 {ops} 
        </select>
        </div>
        <div className="w-full grid grid-cols-9 gap-4 mt-10">  
            {tags}
        </div>
    </div>
  )
}
