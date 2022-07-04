import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Users from "./user/pages/Users";

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact>
        <Users />
      </Route>
      <Redirect to='/' />
    </BrowserRouter>
  );
};

export default App;
