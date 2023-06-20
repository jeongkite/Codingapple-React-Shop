import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Alert from 'react-bootstrap/Alert';
import { Nav } from "react-bootstrap";

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
    let [radioValue, setRadioValue] = useState(0);
    let [fade, setFade] = useState('');

    const radios = [
        { name: '상세정보', value: '1' },
        { name: '리뷰', value: '2' },
        { name: '반품/교환정보', value: '3' },
    ];

    useEffect(() => {
        let timer = setTimeout(() => setIsBoxHidden(true), 2000);
        let fadeTimer = setTimeout(() => setFade('end'), 100);
        return () => {
            setFade('');
            clearTimeout(fadeTimer);
            clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        isNaN(count) ? setIsAlertHidden(false) : setIsAlertHidden(true)
    }, [count]);

    return (
        <div className={"container start " + fade}>
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
                <Nav variant="tabs" defaultActiveKey="link-0">
                    {radios.map((radio, idx) => (
                        <Nav.Item>
                            <Nav.Link
                                tabIndex={idx}
                                eventKey={`link-${idx}`}
                                onClick={(e) => {
                                    setRadioValue(e.target.tabIndex);
                                }}
                            >
                                {radio.name}
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>

                <TabContent radio={radioValue}></TabContent>

            </div>
        </div>
    )
}

function TabContent({ radio }) {
    let [fade, setFade] = useState('');

    useEffect(() => {
        let timer = setTimeout(()=>{ setFade('end') }, 100)
        return () => {
            setFade('')
            clearTimeout(timer);
        }
    }, [radio])

    return (
        <div className={'start ' + fade }>{[
            <Alert variant='light' className="mt-2">상세정보를 표시한다입니다.</Alert>,
            <Alert variant='light' className="mt-2">리뷰리뷰리뷰 표시한다입니다.</Alert>,
            <Alert variant='light' className="mt-2">안녕하세요, 저는 양정연입니다. 기타 정보 고시를 클릭한 당신. 표시한다입니다.</Alert>
        ][radio]}
        </div>
    )
}

export default DetailPage;