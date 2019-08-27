// import React, { Component } from "react";
import React, { useState } from "react";
import RCA from "rca";

function App() {
  let [clock, setClock] = useState({ clocks: "loading..." });
  // let mnnn = mnvvv;

  setInterval(() => {
    // Your custom logic here
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let date = new Date();
    // console.log("date = " + date);
    let dateDay = date.getDate();
    let month = months[date.getMonth()];
    // console.log("month = " + month);
    let year = date.getFullYear();
    let h = date.getHours();
    let m = date.getMinutes();
    var s = date.getSeconds();

    let finallyDate =
      dateDay + " " + month + " " + year + "  " + h + ":" + m + ":" + s;
    setClock({ clocks: finallyDate });
  }, 1000);
  // class App extends Component {
  //   render() {
  //     return (
  //       <div>
  //         <Mnv />
  //       </div>
  //     );
  //   }
  // }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{clock.clocks}</h1>
      <br />
      <RCA />
      <br />
      <a href="/rca.zip">Click here to download</a>
    </div>
  );
}

export default App;
