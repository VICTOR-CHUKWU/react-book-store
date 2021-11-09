import { Route, Switch } from 'react-router-dom';
import BookList from './component/books/BookList';
import Categories from './component/categories/Categories';
import Header from './component/Header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={BookList} />
        <Route exact path="/category" component={Categories} />
      </Switch>
    </>
  );
}

export default App;
