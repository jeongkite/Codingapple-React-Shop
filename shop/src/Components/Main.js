import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';

import { pushNewItem, testItemAction, addItem } from "./../store";

function MainPage() {
    let dispatch = useDispatch();
    let items = useSelector((state) => { return state.items });
    console.log(JSON.parse(localStorage.getItem('recentItems')));

    return (
        <div>
            <div className='main-bg'></div>
            <br />
            <div className="container">
                <div className="row">
                    {
                        items.map(function (item, i) {
                            return (
                                <Card key={ i } item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <Button onClick={() => {
                axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then((result) => {
                        dispatch(pushNewItem(result.data));
                    })
                    .catch(() => {
                        console.log("🚨 네트워크 통신 실패!")
                    })
            }} variant="outline-secondary" className='my-5'>더 보기</Button>


        </div>
    )
}

function Card(props) {
    let navigate = useNavigate();
    // console.log(props.item)
    return (
        <div onClick={() => { navigate('/detail/' + props.item.id) }} className="col-md-4">
            <img src={'https://codingapple1.github.io/shop/shoes' + (props.item.id + 1) + '.jpg'} width="80%" />
            <h4>{props.item.title}</h4>
            <p>{props.item.content}</p>
            <p>{props.item.price} ₩</p>
        </div>
    )
}

export default MainPage;