function BioCard (props){
    const cardTitle = "It's monday"
    return ( <section>
        <h1> {cardTitle}   </h1>
        <h3> {props.personName} </h3>
            <p>  {props.personDOB}</p>
    </section>
    )
}

   
   function Greet(props) {
        {/* props is ONE big object that contains all your funciton arguments as properties of the object */}
        {/* props = { 
          personName: '',
          cityName: ''
        } */}
  
        return (<p className="cappucino" > My name is { props.personName } and I live in { props.cityName }</p>)
      }
  
      function AppTitle() {
        return <h1 className="app-title">Hello Ironhackers</h1>
      }
  
      const name1 = 'Marco'
      const name2 = 'Fede'
      function App() {
        return (
          <div className="main-app" id="myApp">
            <AppTitle />
            <BioCard personName={"Bjork"} personDOB={(new Date("1994/10/22")).toString() } /> 
            <Greet personName={name2} cityName="Sagrada Familia" />
            <Greet personName={name1} cityName="Poble Nou" />
          </div>
          )
      }

    // ReactDOM.render injects all of the React app code into the DOM
    ReactDOM.render(<App />, document.getElementById("root"));
  