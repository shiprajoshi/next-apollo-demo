import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import About from './about';

describe('Landing page', () => {
	it('should render', () => {
		const container = render(<About></About>);
		expect(container).toMatchSnapshot();
	});
});
