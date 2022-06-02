import { render } from '../settings/test-utils';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../pages/indddex.js';

test('renders a message', () => {
  const { container, getByText } = render(<Home />);
  const linkElement = getByText(
    /welcomeMessage/
  );
  expect(linkElement).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
