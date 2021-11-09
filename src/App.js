import { Route, Switch } from 'react-router-dom';
import Books from './component/books/Books';
import Categories from './component/categories/Categories';
import Header from './component/Header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/category" component={Categories} />
      </Switch>
    </>
  );
}

export default App;
