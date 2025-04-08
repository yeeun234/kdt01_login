import React, { use } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import sarea from '../db/sarea.json'
import scode from '../db/scode.json'
import TailSelect from '../ui/TailSelect'
import { useRef } from 'react'  
export default function Subway() {
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
        const response = await fetch(url);
        let data = await response.json();
        data = data.response.body.items.item[0]
        // setSubwayData(data);
        console.log(data);  
    };
    useEffect(() => {
        
        fetchSubwayData("203011");
    }
    , []);

    useEffect(()=>{
        if(subwayData)
            return;

    },[subwayData]);
    const handleChange =()=>{
        console.log(selectRef.current.value);
        fetchSubwayData(selectRef.current.value);
    };
    
  return (
    <div>
      <select id='sel1' ref={selectRef} onChange={handleChange} className="mb-2 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                 {ops} 
            </select>

        <div className='w-full h-20 flex justify-center items-center'>  
            {subwayData}
        </div>
    </div>
  )
}
