/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';

const TestHook = ({ callback }) => {
  callback();
  return null;
};

const testHook = (callback) => {
  render(<TestHook callback={callback} />);
};

export default testHook;
