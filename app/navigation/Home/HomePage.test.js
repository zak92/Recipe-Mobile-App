

import React from 'react';
import {render} from '@testing-library/react-native'; // json rendering
import { act } from 'react-dom/test-utils';
import HomePage from './HomePage';


describe('<HomePage />', () => {
 
  it("home page should match snapshot", () => {
    const snapHomePage = render(<HomePage />).toJSON(); // render this file to JSON
    expect(snapHomePage).toMatchSnapshot(); // this snapshot should match the previous snapshot

  });
});



