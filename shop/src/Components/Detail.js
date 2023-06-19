import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

let Btn = styled.button`
    background: ${props => props.bg};
    color: ${props => props.bg == 'blue' ? 'white' : 'black'};
    padding: 10px;
    border: none;
`
let RoundBtn = styled(Btn)`
    border-radius: 30%;
`
let Textarea = styled.textarea`
    color: red;
`
let YellowBox = styled.div`
    background: yellow;
    width: 100px;
    height: 100px;
`

function DetailPage(props) {
    let { itemId } = useParams();
    let item = props.items.find((item) => item.id == itemId);

    let [isBosHidden, setIsBoxHidden] = useState(false);
    let [count, setCount] = useState("");
    let [isAlertHidden, setIsAlertHidden] = useState(true);
    let [radioValue, setRadioValue] = useState(1);

    const radios = [
        { name: '상세 정보', value: '1' },
        { name: '리뷰', value: '2' },
        { name: '기타 정보 고시', value: '3' },
    ];

    useEffect(() => {
        let timer = setTimeout(() => setIsBoxHidden(true), 2000);
        isNaN(count) ? setIsAlertHidden(false) : setIsAlertHidden(true)
        return () => {
            clearTimeout(timer);
        }
    }, [count]);

    return (
        <div className="container">
            {!isBosHidden && <div className="alert alert-warning">2초 이내 구매시 할인!</div>}
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes" + (item.id + 1) + ".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{item.title}</h4>
                    <p>{item.content}</p>
                    <p>{item.price}</p>
                    {!isAlertHidden && <div className="alert alert-danger">숫자만 입력해주세요!</div>}
                    <input onChange={(obj) => { setCount(obj.target.value) }} type="text" className="form-control" />
                    <br />
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
            <div>
                <ButtonGroup>
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant='light'
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => {
                                setRadioValue(e.target.value)

                            }}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>

                {/* <Tab radio={radioValue}></Tab> */}
                {
                    radioValue == 1 ? <Alert variant='secondary' className="mt-2">상세정보를 표시한다입니다.</Alert> : null
                }
                {
                    radioValue == 2 ? <Alert variant='secondary' className="mt-2">리뷰리뷰리뷰 표시한다입니다.</Alert> : null
                }
                {
                    radioValue == 3 ? <Alert variant='secondary' className="mt-2">안녕하세요, 저는 양정연입니다. 기타 정보 고시를 클릭한 당신. 표시한다입니다.</Alert> : null
                }

            </div>
        </div>
    )
}

function Tab(props) {
    console.log(props.radio)
    switch (props.radio) {
        case 1:
            console.log("안녕1")
            return <Alert variant='secondary' className="mt-2">상세정보를 표시한다입니다.</Alert>
        case 2:
            console.log("안녕2")
            return <Alert variant='secondary' className="mt-2">리뷰리뷰리뷰 표시한다입니다.</Alert>
        case 3:
            console.log("안녕3")
            return <Alert variant='secondary' className="mt-2">안녕하세요, 저는 양정연입니다. 기타 정보 고시를 클릭한 당신. 표시한다입니다.</Alert>
        default:
            return
    }
}

export default DetailPage;