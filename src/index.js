import React from 'react';
import ReactDOM from 'react-dom';

let Header = () => <header>Header<Navigation /></header>;
let Navigation = () => <nav>Navigation</nav>;
let Content = () => <p>Content</p>;
let Aside = () => <aside>Aside</aside>;
let Footer = () => <footer>Footer</footer>;

let App = () => {
    return (
        <>
            <Header />
            <Content />
            <Aside />
            <Footer />
        </>

    )
}

ReactDOM.render(
    <App />,
    document.getElementById('div1')
);