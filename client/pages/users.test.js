import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Users from './users';

describe('Landing page', () => {
	it('should render', () => {
		const container = render(<Users />);
		expect(container).toMatchSnapshot();
	});
});
