import Header from '../Atom/Header';
import ProductList from '../Molecule/ProductList';

function Cart() {
  return (
    <div className="p-10 border-6 rounded-3xl border-gray-700 min-w-110 ">
      <Header></Header>
      <ProductList></ProductList>
    </div>
  );
}

export default Cart;
