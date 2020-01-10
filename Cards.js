import React from "react";
import { Image, Text } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Left,
  Body,
  Right
} from "native-base";

const planetImg = ['xHa5HkVmtg0', 'rTZW4f02zY8', '7YiZKj9A3DM', 'OVO8nK-7Rfs', 'Q1p7bh3SHj8', 'V4ZksNimxLk', '04RhrsalOmU', 'GVlcXhQejA8', 'fAd4u_HTGGY', 'hgThOxNqQq0'];

export const Cards = props => {

  if (props.personas) {
    return (
      <Container>
        <Content>
        {props.personas.map((person, i) => (
            <Card key={i}>
              <CardItem cardBody>
                <Image
                  source={{
                    uri: `https://robohash.org/${person.height}?set=set2&size=180x180`
                  }}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Text>Name: {person.name} </Text>
                </Left>
                <Body>
                  <Text> height: {person.height}</Text>
                </Body>
                <Right>
                  <Text>Birth Year: {person.birth_year}</Text>
                </Right>
              </CardItem>
              <CardItem active footer bordered>
                <Text>ID: {i}</Text>
            </CardItem>
            </Card>
            ))}
        </Content>
      </Container>
    );
  }else {
    return (
      <Container>
        <Content>
        {props.planets.map((planet, i) => (
            <Card key={i}>
              <CardItem cardBody>
                <Image
                  source={{
                    uri: `https://source.unsplash.com/${planetImg[i]}/800x600`
                  }}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Text>Name: {planet.name} </Text>
                </Left>
                <Body>
                  <Text> Climate: {planet.climate}</Text>
                </Body>
                <Right>
                  <Text>Terrain: {planet.terrain}</Text>
                </Right>
              </CardItem>
              <CardItem footer bordered>
                <Text>ID: {i}</Text>
            </CardItem>
            </Card>
            ))}
        </Content>
      </Container>
    );
  }
  
};
