import { render } from '@testing-library/react';
import Page from '../pages/index';

describe('Landing page', () => {
    it('should render', () => {
        const container = render(<Page></Page>);
        expect(container).toMatchSnapshot();
    });
});
