/*eslint-disable */

import { className } from 'postcss-selector-parser';
import React, {useState} from 'react';
import styled from 'styled-components';

const Globaldiv = styled.div`


.blackbox{
    background-color: black;
    color: white;
    width: 100%;
    display: flex;
    padding: 20px;
    font-weight: 600;
    font-size: 20px;
    box-sizing: border-box;
}

h4{
    font-size: 30px;
    text-align: center;
}

.text-box{
    margin-left: 20px;
    text-align: left;

    p{
        font-weight: bolder;
        font-size: 25px;
    }

    span{
        
    }

    .clikpoint{
        cursor: pointer;
    }
}

.btn{
    display: inline-block;
    text-align: center;
    border: 0;
    border-radius: 5px;
    padding: 10px;
    background-color: lightblue;
    cursor: pointer;
}

.btn:hover{
    background-color: #A8CDFF;
}

.hook{
    width: 30px;
    margin-right: 10px;
    margin-top: 15px;
}

.rotate{
    transform: rotate(180deg);
}
    
`;


function Useapp() {
    const post = '고기맛집';
    const post2 = '강남 고기맛집';

    const imga = require('../img/hook.png').default;

    let [hooka, setHooka] = useState(false);
    let [a, setA] = useState(['남자 코트 추천', '강남우동맛집']);
    let [b, setB] = useState(0);

    const plus = () => {
        setB(b + 1);
        console.log("변경되었습니다");
    }

    const changeCoat = () => {
        let c = [...a];
        c[0] = ['여자 코트 추천'];
        setA(c);
        console.log('변경')
    }


    return (
        <Globaldiv>
            <div className="blackbox">
                <div>개발 Blog</div>
            </div>
            <div>
                <img src={imga} className={`hook ${hooka ? 'rotate' : ''}`} onClick={() => setHooka(!hooka)} />
            </div>
            <h4>{post}</h4>
            <div className="text-box">
                <p> {a[0]} <span className="clikpoint" onClick={plus}>👌</span> {b} </p>
                <span>2월 30일</span>
            </div>
            <hr/>
            {hooka || 
            <div>
                <div className="text-box">
                    <p>{a[0]}</p>
                    <span>2월 30일</span>
                </div>
                <hr/>
                <div className="text-box">
                    <p>{post2}</p>
                    <span>2월 30일</span>
                </div>
                <br/>
                <div>
                    <button onClick={changeCoat} className="btn"> 버어어어튼 </button>
                </div>
            </div>
             }
        </Globaldiv>
    );
}


export default Useapp;
