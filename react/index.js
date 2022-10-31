
function MainContent() {
    return ( 
        <h1>1234</h1>
        )
}

ReactDOM.render( 
    <div>
        <MainContent/>
    </div>,
    document.getElementById("root")
)

let h1 = document.getElementById("h1")
h1.textContent = "abra kadabra"
h1.className = "header"
document.getElementById("root").append(h1)