import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/' exact>
            <Users />
          </Route>
          <Route path='/:userId/places' exact>
            <UserPlaces />
          </Route>
          <Route path='/places/new'>
            <NewPlace />
          </Route>
          <Route path='/places/:placeId' exact>
            <UpdatePlace />
          </Route>
          <Redirect to='/' />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
