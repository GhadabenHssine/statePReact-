import React from "react"
import img from "../src/img/122159705_101587405082512_3157829689756229921_n.jpg"
import "./App.css"

import NavP from "../src/NavP/NavP";

export default class App extends React.Component {

  state = {
    Person: {
      fullName: "ghada ben hssine",
      bio: `Détient actuellement un Licence Fondamentale en Science Informatique obtenu
     à Institut supérieur d'informatique de Mahdia (ISIMa) 2020 actuellement intéressé
      par le développement web et j'ai
     une bonne maîtrise de MERN Stack. Je suis ponctuel, motivé et capable de travailler en groupe.`,

      profession: "Développeuse full-stack js",
      imgSrc: img,


    },
    show: false
  };

  // componentDidMount() {

  //   let person = this.state.Person;
  //   setInterval(() => {
  //     console.log(person)
  //   }, 1000);
  // };


  render() {
    return (

      <div className="section">

        <NavP />
        {this.state.show ?
          <div className="blocI">
            <div  >
              <p>{this.state.Person.fullName}</p>
              <p>{this.state.Person.bio}</p>
              <p>{this.state.Person.profession}</p>

            </div>
            <div>
              <img src={this.state.Person.imgSrc} />

            </div>

          </div> : null

        }





        <div class="center">
          <button onClick={() => { this.setState({ show: !(this.state.show) }) }}>click here</button>
          {console.log((this.state.show))}
        </div>



      </div>
    );
  }
}