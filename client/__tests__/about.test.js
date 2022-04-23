import { render } from '@testing-library/react';
import About from '../pages/about';

describe('Landing page', () => {
    it('should render', () => {
        const container = render(<About />);
        expect(container).toMatchSnapshot();
    });
});
