import React from "react";

export const SearchBox = ({placeholder, handleChange}) => (
  <input
  className='search'
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

<Container>
<Header searchBar rounded>
  <Item>
    <Icon name="ios-search" />
    <Input placeholder="Search" />
    <Icon name="ios-people" />
  </Item>
  <Button transparent>
    <Text>Search</Text>
  </Button>
</Header>
</Container>