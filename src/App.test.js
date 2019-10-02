import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
 const div = document.createElement('div');
 ReactDOM.render(<App />, div);
 ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () =>{
    const tree = renderer
    .create(<App />)
    .toJSON();
        expect(tree).toMatchSnapshot()
});

it('the data is peanut butter', async () => {
   const something =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Cape Town,ZA&APPID=4a483a22618f634b50f15e527c11dd11&units=metric`);
  const result = await something.json() 
}
);






