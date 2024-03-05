import React, { Component, Fragment } from 'react';
import { Content, FetchedAt } from './style';
import Loader from './components/Loader';
import Header from './components/Header';
import GarageCard from './components/GarageCard';

export default class App extends Component {
  state = {
    data: [],
    fetchedAt: null,
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
    this.interval = setInterval(this.fetchData, 300000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchData = () => {
    const apiKey = "853bb69e-8dd9-4fcd-bc69-b1459db9b84a"; // Replace with your actual key

      fetch('https://psapi.fiu.edu/rest/mobile/v1/parking/garages', {
        headers: {
          'X-API-Key': apiKey,
        },
      })
      .then((res) => res.json())
      .then((data) => this.setState({ data, fetchedAt: data[0].asof }))
      .then(() => this.setState({ loading: false }))
      .catch((err) => console.log('Issue fetching data ', err.message));
  };

  renderParkings(data, fetchedAt) {
    return (
      <Fragment>
        <Header />
        <Content>
          {data.map((garage) => (
            <GarageCard {...garage} key={garage.GarageName} />
          ))}
        </Content>
        <FetchedAt>Fetched at: {fetchedAt}</FetchedAt>
      </Fragment>
    );
  }

  render() {
    const { loading, data, fetchedAt } = this.state;

    return loading ? <Loader /> : this.renderParkings(data, fetchedAt);
  }
}
