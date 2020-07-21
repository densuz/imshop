import React, { Component, useReducer } from 'react';
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../CartContex';
import { Link } from 'react-router-dom'


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

function Rowproduct(props) {
    
    const [count] = useReducer(reducer, initialState)
    const { value, setValue } = useContext(CartContext)



    return (
        <Col>
            <Card>
                <CardImg top width="100%" src="https://placeimg.com/640/480/any" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.item}</CardTitle>
                    <CardSubtitle>Rp. {count.hargasatuan}</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button  color="danger">
                        <Link to={
                            {
                                pathname: '/detailproduct',
                            }
                        }>Detail</Link>
                    </Button>
                    <span> | </span>
                    <Button onClick={() => setValue(value + 1)} color="success">Tambahkan Keranjang</Button>
                </CardBody>
            </Card>
            <hr/>
            <CardImg top width="100%" src="https://placeimg.com/640/480/any" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.item}</CardTitle>
                    <CardSubtitle>Rp. {count.hargasatuan}</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button  color="danger">
                        <Link to={
                            {
                                pathname: '/detailproduct',
                            }
                        }>Detail</Link>
                    </Button>
                    <span> | </span>
                    <Button onClick={() => setValue(value + 1)} color="success">Tambahkan Keranjang</Button>
                </CardBody>
        </Col>
        

    );
}


export default Rowproduct;