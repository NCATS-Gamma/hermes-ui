import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, fireEvent } from '@testing-library/react';

import App from '../App';

describe('<App />', () => {
  it('renders without crashing', () => {
    act(() => {
      render(<App />);
    });
  });
});
