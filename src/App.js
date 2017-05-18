import React, { Component } from 'react';
import './App.css';


import Nav from './components/Nav';
import Header from './components/Header';
import Form from './components/Form';
import Menu from './components/Menu';

// ----------------------------------------
// Nav
// ----------------------------------------
const title = 'React Restaurants';
const links = [
  { title: 'Menu', href: '#menu' },
  { title: 'Reservations', href: '#reservations' }
];


// ----------------------------------------
// Header
// ----------------------------------------
const tagline = 'Yummy stuff right here!';
const headerImageUrl = 'http://placekitten.com/g/256/256';


// ----------------------------------------
// Reservation Form
// ----------------------------------------
const formGroups = [
  {
    label: { title: 'Date' },
    input: {
      id: 'reservation_date',
      name: 'reservation[date]'
    }
  },
  {
    label: { title: 'Time' },
    input: {
      id: 'reservation_time',
      name: 'reservation[time]'
    }
  },
  {
    label: { title: 'Number of Guests' },
    input: {
      type: 'number',
      id: 'reservation_num_guests',
      name: 'reservation[num_guests]'
    }
  }
];


// ----------------------------------------
// Menu
// ----------------------------------------
const menuItems = [
  {
    title: 'Grey Poupon',
    description: 'It is so much good!',
    price: '1,000'
  },
  {
    title: 'Pizza',
    description: 'Yummy circle shaped thing with stuff on it.',
    price: '1,000'
  },
  {
    title: 'Fries With That',
    description: 'What ever you get, get fries with it! Awesome!',
    price: '1,000'
  }
];


class App extends Component {
  render() {
    return (
      <main id="App">
        <Nav title={ title } links={ links } />
        <Header
          title={ title }
          tagline={ tagline }
          imageUrl={ headerImageUrl } />

        <div className="container">
          <h2 id="reservations">Reservations</h2>
          <Form name="reservations" formGroups={ formGroups } />

          <h2 id="menu">Menu</h2>
          <Menu menuItems={ menuItems } />
        </div>

        <footer className="text-center">
          { title } &copy; 2017
        </footer>
      </main>
    );
  }
}

export default App;

















