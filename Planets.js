import React from "react";
import {Cards} from "./Cards";
import { Container, Header, Item, Input, Icon } from "native-base";
import { View, ActivityIndicator } from "react-native";

export default class Planets extends React.Component {
  constructor() {
    super();

    this.state = {
      planets: [],
      search: "",
      isLoading: true
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/planets")
      .then(response => response.json())
      .then(users =>
        this.setState({ isLoading: false, planets: users.results })
      );
  }

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { planets, search } = this.state;
    const filteredPlanets = planets.filter(planet =>
      planet.name.toLowerCase().includes(search.toLowerCase())
    );

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <Container>
          <Header searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input
                placeholder="Search character..."
                onChangeText={this.updateSearch}
                value={search}
              />
            </Item>
          </Header>
          <Cards planets={filteredPlanets} />
        </Container>
      );
    }
  }
}
