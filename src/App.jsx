import React, { Component } from 'react';
import './App.css';

const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "src/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "src/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "src/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "src/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "src/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "src/img/5.jpg"
  }];

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className="icon-switch" onClick={onSwitch}>
      <i className="material-icons">{icon}</i>
    </div>
  );
};

const CardsView = ({ cards }) => {
  return (
    <div className="cards-view">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <p className='name-item'>{card.name}</p>
          <p className='color-item'>{card.color}</p>
          <img src={card.img} alt={card.name} />
          <div className='container'>
            <p className='price-item'>${card.price}</p>
            <button className='button'>add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const ListView = ({ items }) => {
  return (
    <div className="list-view">
      {items.map((item, index) => (
        <div className="list-item" key={index}>
          <img src={item.img} alt={item.name} />
          <p className='name-item'>{item.name}</p>
          <p className='color-item'>{item.color}</p>
          <p className='price-item'>${item.price}</p>
          <button className='button'>add to cart</button>
        </div>
      ))}
    </div>
  );
};

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'cards'
    };
  }

  handleSwitchView = () => {
    this.setState((prevState) => ({
      viewType: prevState.viewType === 'cards' ? 'list' : 'cards'
    }));
  };

  render() {
    const { viewType } = this.state;
    const viewIcon = viewType === 'cards' ? 'view_list' : 'view_module';

    const viewComponent = viewType === 'cards' ? (
      <CardsView cards={products} />
    ) : (
      <ListView items={products} />
    );

    return (
      <div className="store">
        <IconSwitch icon={viewIcon} onSwitch={this.handleSwitchView} />
        {viewComponent}
      </div>
    );
  }
}


const App = () => {
  return (
    <div className="app">
      <Store />
    </div>
  );
};

export default App;
