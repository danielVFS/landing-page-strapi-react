import { screen } from '@testing-library/react';

import Home from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

test('render Home', () => {
  const { debug } = renderTheme(<Home />);

  const headingContainer = screen.getByRole('heading', { name: 'Hello World' })
    .parentElement;

  expect(headingContainer).toHaveStyle({
    background: theme.colors.mainBg,
  });
  expect(headingContainer).toMatchSnapshot();
  expect(headingContainer).toHaveStyleRule('background', 'red');
});
