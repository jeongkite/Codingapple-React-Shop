import { memo, useMemo } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { addStock, subStock, changeName, changeAge } from './../store';

function childWillRender() {
    console.log('안녕안녕')
}

let MemoExampleChild = memo(function() {
    console.log('재렌더링됨');
    return <div>자식임ㅇㅇ</div>
})

function Child() {
    let result = useMemo(() => { return childWillRender() }, [])
    
    console.log('차일드차차차');
    return <div>자식자식차차차</div>
}

function Cart() {
    let dispatch = useDispatch();
    let user = useSelector((state) => { return state.user })
    let carts = useSelector((state) => { return state.carts })

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carts && carts.map(function (cart, idx) {
                            return (
                                <tr key={idx}>
                                    <td>{cart.id}</td>
                                    <td>{cart.name}</td>
                                    <td>{cart.count}</td>
                                    <td>
                                        <Button onClick={() => {
                                            dispatch(addStock(cart.id))
                                        }} className='me-1' variant="outline-primary">+1</Button>
                                        <Button onClick={() => {
                                            dispatch(subStock(cart.id))
                                        }} variant="outline-danger">-1</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>

            <MemoExampleChild />
            <Child />
            <Button onClick={() => {
                dispatch(changeAge(1))
            }} variant="outline-dark">{`${user.name}님, ${user.age}세`}</Button>
        </div>
    )
}

export default Cart;