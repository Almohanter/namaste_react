const parent = React.createElement("div",{
id: "parent"
},React.createElement("div",{
    id: "child"
    },[React.createElement("h1",{
        id: "d1", className : "d2"
        },"this is child"),React.createElement("h2",{
            id: "d22", className : "d2"
            },"this is child 2")]));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);