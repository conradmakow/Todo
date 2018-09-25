import React from 'react';
import { ListItem } from '../ListItem/ListItem';
import './List.css';

export const List = (props) => (
  <ul>
    {props.items.map(item => (
      <ListItem item={item} />
    ))}
  </ul>
)