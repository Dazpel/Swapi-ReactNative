import React from "react";
import {Cards} from "./Cards";
import { Container, Header, Item, Input, Icon } from "native-base";
import { View, ActivityIndicator } from "react-native";

export default class Persona extends React.Component {
  constructor() {
    super();

    this.state = {
      personas: [],
      search: "",
      isLoading: true
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people")
      .then(response => response.json())
      .then(users =>
        this.setState({ isLoading: false, personas: users.results })
      );
  }

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { personas, search } = this.state;
    const filteredPersonas = personas.filter(persona =>
      persona.name.toLowerCase().includes(search.toLowerCase())
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
          <Cards personas={filteredPersonas} />
        </Container>
      );
    }
  }
}
