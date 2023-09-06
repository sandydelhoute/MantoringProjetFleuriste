import renderer from 'react-test-renderer';
import ProductCard from './ProductCard';
import {BrowserRouter} from 'react-router-dom';
jest.mock('../../styles/App.css', () => '')
describe('Test render ProductCard', () => {
    it('Test render ProductCard', () => {
        const product = {
            id: 1,
            name: "Produit 1",
            description : 'Produit 1 ...',
            prix : 30.33,
            imageUrl: "test",
            cdate : ""
        }
    const component = renderer.create(<BrowserRouter>  
        <ProductCard product={product}/></BrowserRouter>  ,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    })
});