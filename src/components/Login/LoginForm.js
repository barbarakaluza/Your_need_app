import React from "react";

class LoginForm extends ReactcComponents {
    state = {
        name: '',
        password: ''
    }

    render() {
        <form className="form">
            <label htmlFor="username" className="form-input"></label>
          <Input name="username" placeholder="USERNAME" value="username"></Input>

          <label htmlFor="password" className="form-input">Age</label>
          <Input name="password" placeholder="PASSWORD" value="password"></Input>

        </form>
    }
}

export default LoginForm;