
import {Route,Routes} from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard';
import Header from './components/header/header'
import PostUser from './components/post/postUser'
import UpdateUser from './components/update/updateUser';
import NoMatch from './components/noMatch/noMatch'

function App() {
  return (
    <>
   <Header/>
<Routes>
  <Route path='/' element={<Dashboard/>}></Route>
    <Route path='/header' element={<Header/>}></Route>
      <Route path='/user' element={<PostUser/>}></Route>
           <Route path='/user/:id' element={<UpdateUser/>}></Route>
        <Route path='*' element={<NoMatch/>}></Route>
</Routes>

    </>
  );
}

export default App;
