import React, { Component } from 'react';
import './CSS/Produk.css';
import { Container, Col,Button } from 'reactstrap';

class Produk extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: this.props.stock,
            sub:"Beli",
            status:"Tersedia",
            disabled : false

        }
    }

    buttonBeli = () => {
        this.setState ({
            stock: this.state.stock  -1
        })
        if(this.state.stock==1){
            this.setState ({
                status : "SOLD OUT!",
                disabled : true
            })
        }
    }
    
    render() {
        return (
            
            <div className="box-stock">
                <Container>
                <h3>{this.props.nama}</h3>
                <br/>
                <img  src="https://ae01.alicdn.com/kf/H04ae19b4ea1b47068cff2cfebf4c999al.jpg" className="rounded float-center" alt="Card image cap" />
                <p> <b>Rp. {this.props.Harga}</b> </p>
                <p>{this.state.stock}</p>
                <Button className="btn-click" onClick={this.buttonBeli} disabled={this.state.disabled}>Beli</Button>
                <p>{this.state.status}</p>
                </Container>
                
            </div>
        )
    }

}
export default Produk;