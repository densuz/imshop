import React from 'react';
import axios from 'axios';
import '../Fungsional/CSS/contact.css';
import { Container,Alert } from 'reactstrap';

class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nama_contact: '',
      email_contact: '',
      pesan: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:1997/send",
      data: this.state
    })
    .then(json => {
      if (json.data.status === 200) {
          console.log(json.data.status);
          // alert("pesan terkirim");
          this.setState({
              response: json.data.values,
              display: 'block'
          })
      }
      else {
          // alert('pesan gagal terkirim');
          debugger;
          this.props.history.push('/')
      }
    })
  }

  resetForm() {

    this.setState({ nama_contact: '', email_contact: '', pesan: '' })
  }

  render() {
    return (
      <Container>
        <div className="center">
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
              <label htmlFor="nama_contact">Name</label>
              <input type="text" className="form-control" id="nama_contact" value={this.state.nama_contact} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor=" email_contact">Email address</label>
              <input type=" email_contact" className="form-control" id=" email_contact" aria-describedby="email_contact" value={this.state.email_contact} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="pesan">Message</label>
              <textarea className="form-control" rows="5" id="pesan" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary">Kirim</button>
          </form>
         
        </div>
      </Container>
    );
  }

  onNameChange(event) {
    this.setState({ nama_contact: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email_contact: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ pesan: event.target.value })
  }
}

export default ContactForm;