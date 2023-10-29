const React = require('react');
const Def = require('./default');

function error404 () {
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <img src="/images/404page.jpg" alt="sunset"></img> 
                <p>Oops, sorry, we can't find this page!</p>
                    <div>
                        Photo by <a href="https://unsplash.com/@jae462">Jay Antol</a> on <a href="https://unsplash.com/photos/body-of-water-during-sunset-Xbf_4e7YDII">Unsplash</a>
                    </div>
            </main>
        </Def>
    )
};

module.exports = error404