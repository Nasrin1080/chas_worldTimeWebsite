import { Outlet } from "react-router-dom";
import {Link} from "react-router-dom"
import Clock from "./Clock";


export default function Root() {
    return (
        <div>
            {" "}
          <nav className="flex justify-between p-8 bg-blue-400 items-center">
            <h1 className="text-4xl font-extrabold text-white">
              <Link to={"/"}>World Time</Link>
              </h1>
    
            <ul className="flex space-x-4">
              {/*<li><div className="cursor-pointer"
              onClick={()=>{
                window.location.href = "https://www.google.com";
                return null;
              }}>
                Google</div>
            </li>*/}
                <li>
                  {" "}
                  <a href="https://www.google.com">Google</a>
                </li>
              <li><Link to={"/contact"}>Contact</Link></li>
              <li><Link to={"/about"}>About</Link></li>
            </ul>
          </nav>

          <main className="p-8">
            <Outlet/>
          </main>
          
        </div>
       
      ); 
}