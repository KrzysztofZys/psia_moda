import React from 'react';
import './ContactForm.scss'

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fullName: 'Imie i nazwisko',
        email: 'E-mail',
        phone: 'Phone number',
        topic: 'Temat',
        text: 'Treść wiadomości'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name =  target.name;

      this.setState({
        [name]: value
      });
    }
  
    handleSubmit(event) {
      window.location.href = "mailto:ilona5debicka@gmail.com?cc=" + this.state.email + "&subject=" + this.state.topic + "&body=" + this.state.text + " " + this.state.fullName + " " + this.state.phone;
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="form">
        <div className="row justify-content-center">
        <div className="col-lg">
          <label className="form__label w-100 form__input">
            <input 
              type="text"
              name="fullName"
              className="form__input p-3 w-100"
              placeholder={this.state.fullName}
              onChange={this.handleChange}/>
          </label>
          <label className="form__label w-100">
            <input 
              type="text"
              name="email"
              className="form__input p-3 w-100"
              placeholder={this.state.email}
              onChange={this.handleChange}/>
          </label>
        </div>
        <div className="col-lg">
          <label className="form__label w-100">
            <input 
              type="number"
              name="phone"
              className="form__input p-3 w-100"
              placeholder={this.state.phone}
              onChange={this.handleChange}/>
          </label>
          <label className="form__label w-100">
            <input 
              type="text"
              name="topic"
              className="form__input p-3 w-100"
              placeholder={this.state.topic}
              onChange={this.handleChange}/>
          </label>
        </div>
        </div>
          <label className="form__label w-100">
            <textarea 
              type="text"
              name="text"
              className="form__input form__input--text p-3 w-100"
              placeholder={this.state.text}
              onChange={this.handleChange}/>
          </label>
          <label className="form__label w-100 py-3">
            <input className="button-def button-def--dark button-def--animated w-100" type="submit" value="Wyślij" />
          </label>
        </form>
      );
    }
  }

  export default ContactForm;