var parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"Hi i am"),
        React.createElement("h2",{},"hi i am h2")
    ]),
    React.createElement("div",{id:"child2"},[
       React.createElement("h1",{},"hi am h1"),
       React.createElement("h2",{},"hi i am h2")
    ])
]);


console.log(parent)
//var heading = React.createElement("h1",{id:"head"},"Namaste React");
var root = ReactDOM.createRoot(document.getElementById("demo"));
root.render(parent);