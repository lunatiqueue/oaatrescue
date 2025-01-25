import logo from '../logo.svg';

export const HomePage = () => {
    return (
        <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Welcome to the club, buddy! You are now a part of One at a Time Rescue.
                </p>
        </header>
    );
}