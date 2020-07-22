import React, { useReducer } from 'react';
import { Container, Row, Col } from 'reactstrap'
import Rowproduct from './Rowproduct'
import { useContext } from 'react';
import { CartContext } from '../../CartContex';

const initialState = {
    jumlah: 1,
    hargasatuan: 1000,
    hargatotal: 0
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'tambah': return {
            ...state,
            jumlah: state.jumlah + 1,
            hargatotal: state.hargasatuan + (state.hargasatuan * state.jumlah)
        }
        case 'kurangi': return {
            ...state,
            jumlah: state.jumlah - 1,
            hargatotal: (state.hargasatuan * state.jumlah) - state.hargasatuan
        }
        default:
            return state

    }
}


function ProductComp(props) {
    const [count] = useReducer(reducer, initialState)
    const { value, setValue } = useContext(CartContext)
    return (
       <Container>
           <br/>
           <h3 className="text-justify">Product </h3>
           <Row>
               <Col><Rowproduct/></Col>
               <Col><Rowproduct/></Col>
               <Col><Rowproduct/></Col>
           </Row>
       </Container>
);
}


export default ProductComp;