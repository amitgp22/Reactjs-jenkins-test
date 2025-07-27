import {render,screen} from '@testing-library/react';
import App from './App'

test('rener learn react link',()=>{
render(<App />);
const linkele=screen.getByText(/Learn React/i);
expect(linkele).toBeInTheDocument();
});