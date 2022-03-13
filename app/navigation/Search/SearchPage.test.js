
import React from 'react';
//import {render} from 'react-native-testing-library';
import {render} from '@testing-library/react-native'; // json rendering
import SearchPage from './SearchPage';

describe('<SearchPage />', () => {
  it("search page should match snapshot", () => {
    const snapSearchPage = render(<SearchPage />).toJSON(); // render this file to JSON
    expect(snapSearchPage).toMatchSnapshot(); // this snapshot should match the previous snapshot

  });
});
