import { Link,Outlet  } from 'react-router-dom';

export const MainPage = () => (
    <>
  <nav>
    <ul>
      <li>
        <Link to="/new">New page</Link>
      </li>
      <li>
        <Link to="/stock">Stock page</Link>
      </li>
      <li>
        <Link to="/goods">Goods in Stock page</Link>
      </li>
    </ul>  
  </nav>
   <hr/> 
 
  <Outlet/>
  </>

);