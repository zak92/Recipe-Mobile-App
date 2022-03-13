import React from 'react';
import { render } from '@testing-library/react-native'; // json rendering
import Ingredients from './Ingredients.component';


describe('Ingredients', () => {
  it("should match snapshot", () => {
    const snapIngredients = render(<Ingredients />).toJSON(); // render this file to JSON
    expect(snapIngredients).toMatchSnapshot(); // this snapshot should match the previous snapshot

  });
  it('displays the passed-in ingredient', () => {
    const { queryByText } = render(
      <Ingredients ingredients="2 heaps of chocolate ice-cream" />
    );
    expect(queryByText('2 heaps of chocolate ice-cream')).not.toBeNull();
  });

});