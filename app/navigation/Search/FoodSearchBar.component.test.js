
/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native'; // json rendering
import FoodSearchBar from './FoodSearchBar.component';



describe('<FoodSearchBar />', () => {
  it("search page should match snapshot", () => {
    const snapFoodSearchBar = render(<FoodSearchBar onChangeText='hello' value='hello'/>).toJSON(); // render this file to JSON
    expect(snapFoodSearchBar).toMatchSnapshot(); // this snapshot should match the previous snapshot

  });
});


