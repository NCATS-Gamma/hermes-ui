import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, fireEvent } from '@testing-library/react';

import App from '../App';

describe('<ServicesSelector />', () => {
  beforeEach(() => {

  });
  afterEach(() => {

  });
  it('renders without crashing', () => {
    const { getByText, queryByText } = render(<App />);
    expect(queryByText(/no services found/i)).toBeTruthy();
    const addButton = getByText(/add service/i);
    act(() => {
      fireEvent.click(addButton);
    });
    expect(queryByText(/no services found/i)).toBeTruthy();
    // expect(queryByText(//i))
    // expect()
  });
});
