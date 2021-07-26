import { expect } from 'chai';

import Feat from './index';

describe('Test', () => {
  it('outputs Hello World', () => {
    expect(Feat('World')).equal('Hello World');
  });
});
