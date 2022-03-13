
import React from 'react';
import { render } from '@testing-library/react-native'; // json rendering
import SearchDishType from './SearchDishType.component';


describe('SearchDishType ', () => {
  it("should match snapshot", () => {
    const snapSearchDishType = render(<SearchDishType />).toJSON(); // render this file to JSON
    expect(snapSearchDishType).toMatchSnapshot(); // this snapshot should match the previous snapshot

  });
  it('displays the passed-in dishType', () => {
    const { queryByText } = render(
      <SearchDishType dishType="Main course" />
    );
    expect(queryByText('Main course')).not.toBeNull();
  });


});
