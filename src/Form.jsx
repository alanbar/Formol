//  *******Standard React form*****************/
//
//import React, { Component } from "react";
//class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { firstName: "", lastName: "", email: "", password: "" };
//     this.handleInputChange = this.handleInputChange.bind(this);
//   }
//   handleInputChange(event) {
//     this.setState({ [event.target.name]: event.target.value });
//   }
//   render() {
//     const { firstName, lastName, email, password } = this.state;
//     return (
//       <form>
//         <input
//           value={firstName}
//           onChange={this.handleInputChange}
//           placeholder="First name"
//           type="text"
//           name="firstName"
//           required
//         />
//         <input
//           value={lastName}
//           onChange={this.handleInputChange}
//           placeholder="Last name"
//           type="text"
//           name="lastName"
//           required
//         />
//         <input
//           value={email}
//           onChange={this.handleInputChange}
//           placeholder="Email address"
//           type="email"
//           name="email"
//           required
//         />
//         <input
//           value={password}
//           onChange={this.handleInputChange}
//           placeholder="Password"
//           type="password"
//           name="password"
//           required
//         />
//         <button type="submit">Submit</button>{" "}
//       </form>
//     );
//   }
// }
// export default Form;
/*

**********Hooks React form *****************

import React, { useState } from "react";
import "./styles.css";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <input
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      <input
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
      <button type="submit">Submit</button>{" "}
    </form>
  );
}
export default Form;
*/
// ********** Formol React form *************
import React from "react";
import ReactDOM from "react-dom";
import "formol/lib/default.css";
import Formol, { Field } from "formol";

const onSubmit = ({ fullName, eMail, telephone, message }) =>
  console.log(fullName, eMail, telephone, message);

function App() {
  return (
    <div className="App">
      <h1>Example Contact Form</h1>
      <h2>Using Formol</h2>
      <Formol onSubmit={onSubmit}>
        <Field autoFocus required title="Your full name">
          Full Name
        </Field>
        <Field required type="email">
          E-mail
        </Field>
        <Field type="tel">Telephone</Field>
        <Field required type="text">
          Message
        </Field>
      </Formol>
    </div>
  );
}
export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
