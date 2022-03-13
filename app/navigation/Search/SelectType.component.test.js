
import React from 'react';
import { render } from '@testing-library/react-native'; // json rendering
import SelectType from './SelectType.component';


describe('SelectType', () => {
  it("should match snapshot", () => {
    const snapSelectType = render(<SelectType />).toJSON(); // render this file to JSON
    expect(snapSelectType).toMatchSnapshot(); // this snapshot should match the previous snapshot

  });
  it('displays the passed-in dishType', () => {
    const { queryByText } = render(
      <SelectType type="french" />
    );
    expect(queryByText('french')).not.toBeNull();
  });


});