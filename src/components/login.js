import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: {}
  };
  render() {
    const onChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
    const onSubmit = event => {
      event.preventDefault();

      const user = {
        username: this.state.username,
        password: this.state.password
      };
      console.log(user);
    };
    return (
      <div className="login">
        <div className="container h-100 ">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">เข้าสู่ระบบ</h1>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="อีเมล"
                    name="email"
                    value={this.state.username}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="พาสเวิร์ด"
                    name="password"
                    value={this.state.password}
                    onChange={onChange}
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-success btn-block btn-lg"
                  value="เข้าสู่ระบบ"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
