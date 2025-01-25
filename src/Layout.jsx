import logo from './logo.svg';

import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { useSelector, useDispatch } from 'react-redux';
import { selectCounter } from './redux/selectors';

import { decremented, incremented } from './redux/animalsSlice';
import { CounterDouble } from './components/CounterDouble';

export const Layout = () => {
    const value = useSelector(selectCounter);
    const dispatch = useDispatch();
    return (
        <>
        <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink 
                                to="/" 
                                end
                                className={({ isActive }) => (isActive ? 'active-link' : '')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/about" 
                                className={({ isActive }) => (isActive ? 'active-link' : '')}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/adopt" 
                                className={({ isActive }) => (isActive ? 'active-link' : '')}
                            >
                                Adopt
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <div>{value}</div>
        <button type="button" onClick={()=>dispatch(incremented())}>+</button>
        <button type="button" onClick={()=>dispatch(decremented())}>-</button>

        <div><CounterDouble/></div>
        </main>
        <footer></footer>
        </>
    );
};
