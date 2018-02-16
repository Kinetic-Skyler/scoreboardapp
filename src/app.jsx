var PLAYERS = [
    {
        name: "Skyler Reeves",
        score: 33,
        id: 1,
    },
    {
        name: "Steve Ingersoll",
            score: 34,
            id: 2,
    },
    {
        name: "Mason Lusk",
        score: 39,
        id: 3,
    }
]

function Header(props){
    return (
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    );
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired,
};

/* Adding dynamic features to our components */
var Counter = React.createClass({
    propTypes: {},

    getInitialState: function () {
        return {
            score: 0,
        }
    },

    incrementScore: function(e) {

    },

    render: function () {
        return(
            <div className="counter">
                <button className="counter-action decrement"> - </button>

                {/* We now replace props with state to get our score */}
                {/*<div className="counter-score"> {this.props.score} </div>*/}
                <div className="counter-score"> {this.state.score} </div>

                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        );
    }
});

/* This FSC gets removed and added to the render method of var Counter */
/*function Counter(props){
    return(
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <div className="counter-score"> {props.score} </div>
            <button className="counter-action increment"> + </button>
        </div>
    );
}*/

/* This gets removed and added as a property of the Counter class */
/*Counter.propTypes = {
    score: React.PropTypes.number.isRequired,
}*/


function Player(props){
    return(
        <div className="player">
            <div className="player-name">
                {props.name}
            </div>
            <div className="player-score">
                <Counter />
            </div>
        </div>
    );
}

Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired
}

function Application(props) {
    return (
        <div className="scoreboard">
            <Header title={props.title}/>

            <div className="players">
                {props.players.map(function(player){
                    return <Player name={player.name} score={player.score} key={player.id} />
                })}
            </div>
        </div>
    );
}

Application.propTypes = {
    title: React.PropTypes.string.isRequired,
    players: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        score: React.PropTypes.number.isRequired,
        id: React.PropTypes.number.isRequired,
    })).isRequired,
};

Application.defaultProps = {
    title: "Scoreboard",
};

ReactDOM.render(<Application players={PLAYERS} />, document.getElementById('container'));