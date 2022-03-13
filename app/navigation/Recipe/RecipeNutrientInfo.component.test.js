import React from 'react';
import { render } from '@testing-library/react-native'; // json rendering
import RecipeNutrientInfo from './RecipeNutrientInfo.component';


describe('RecipeNutrientInfo', () => {
  it("should match snapshot", () => {
    const snapRecipeNutrientInfo= render(<RecipeNutrientInfo />).toJSON(); // render this file to JSON
    expect(snapRecipeNutrientInfo).toMatchSnapshot(); // this snapshot should match the previous snapshot

  });

  it('displays the passed-in calories amount', () => {
    const { queryByText } = render(
      <RecipeNutrientInfo calories="1440" />
    );
    expect(queryByText('1440')).not.toBeNull();
  });

  it('displays the passed-in energy amount', () => {
    const { queryByText } = render(
      <RecipeNutrientInfo energy="1440" />
    );
    expect(queryByText('1440')).not.toBeNull();
  });

  it('displays the passed-in protein amount', () => {
    const { queryByText } = render(
      <RecipeNutrientInfo protein="2550" />
    );
    expect(queryByText('2550')).not.toBeNull();
  });

  it('displays the passed-in carbs amount', () => {
    const { queryByText } = render(
      <RecipeNutrientInfo carbs="5240" />
    );
    expect(queryByText('5240')).not.toBeNull();
  });

  it('displays the passed-in sodium amount', () => {
    const { queryByText } = render(
      <RecipeNutrientInfo sodium="224" />
    );
    expect(queryByText('224')).not.toBeNull();
  });

  it('displays the passed-in cholesterol amount', () => {
    const { queryByText } = render(
      <RecipeNutrientInfo cholesterol="0" />
    );
    expect(queryByText('0')).not.toBeNull();
  });

});