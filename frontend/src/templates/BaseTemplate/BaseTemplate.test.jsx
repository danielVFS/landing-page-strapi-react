import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { mockBase } from '../BaseTemplate/mock';
import { BaseTemplate } from '.';

describe('<BaseTemplate />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<BaseTemplate {...mockBase} />);

    expect(container).toMatchSnapshot();
  });
});
