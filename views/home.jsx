const React = require('react');
const Def = require('./default');

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/parrot.jpg" alt="parrot"></img> 
                    <div>
                        Photo by <a href="https://unsplash.com/@miklevasilyev">Mikhail Vasilyev</a> on <a href="https://unsplash.com/photos/selective-focus-photography-of-blue-red-and-green-bird-gGC63oug3iY">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places</button>
                </a>
            </main>
        </Def>
    )
};

module.exports = home