const React = require('react');
const Def = require('../default');
function new_form() {
return (
    <Def>
        <main>
            <h1>Add a New Place</h1>
            <form method="POST" action="/places">
                <div>
                    <label htmlFor="name">Place Name</label>
                    <input className="form-control" id="name" name="name" required></input>
                </div>
                <div>
                    <label htmlFor="pic">Place Picture</label>
                    <input className="form-control" type="url" id="pic" name="pic"></input>
                </div>
                <div>'
                    <label htmlFor="city">City</label>
                    <input className="form-control" id="city" name="city"></input>
                </div>
                <div>
                    <label htmlFor="state">State</label>
                    <input className="form-control" id="state" name="state"></input>
                </div>
                <div>
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className="form-control" id="cuisines" name="cuisines" required></input>
                </div>
                <input className="btn btn-primary" type="submit" value="Add Place"></input>
            </form>
        </main>
    </Def>
)
}
module.exports = new_form