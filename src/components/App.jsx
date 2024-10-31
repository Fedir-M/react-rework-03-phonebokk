import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/';
import ContactsList from './ContactsList';
import s from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    contacts && this.setState({ contacts });
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    const id = nanoid();
    const name = e.target.elements.name.value.trim();
    const number = e.target.elements.number.value.trim();

    if (this.state.contacts.find(el => el.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        ...prevState,
        contacts: prevState.contacts.concat({ id, name, number }),
      }));
    }

    e.target.reset();
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFilter = () => {
    const filteredList = this.state.contacts.filter(el =>
      el.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
    return filteredList;
  };

  render() {
    return (
      <div className={s.app}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <ContactsList
          onChange={this.handleChange}
          contactsArr={this.handleFilter()}
          onClick={this.handleDelete}
        />
      </div>
    );
  }
}

/*
[
      { id: 'id-1', name: 'David Beckham', number: '111-111-1111' },
      { id: 'id-2', name: 'Luis Suárez', number: '222-222-2222' },
      { id: 'id-3', name: 'Mohamed Salah', number: '333-333-3333' },
      { id: 'id-4', name: 'Virgil van Dijk', number: '444-444-4444' },
      { id: 'id-5', name: 'Jurgen Klopp', number: '555-555-5555' },
      { id: 'id-6', name: 'Jamie Carragher', number: '666-666-2323' },
      { id: 'id-7', name: 'James Milner', number: '777-777-7777' },
      { id: 'id-8', name: 'Steven Gerrard', number: '888-888-8888' },
      { id: 'id-9', name: 'Frank Lampard', number: '999-999-9999' },
      { id: 'id-10', name: 'Xabi Alonso', number: '111-999-9999' },
    ]
*/
