/** @jsx React.DOM */

var React = require('react')

var Login = module.exports = React.createClass({
  handleLogin: function (e) {
    e.preventDefault()
  },

  handleSignup: function (e) {
    e.preventDefault()
  }

, render: function () {
    return (
      <main>
        <h1>Welcome to Gojira</h1>
        <form onSubmit={this.handleLogin}>
          <table>
            <tbody>
              <tr>
                <td><label>User ID:</label></td>
                <td><input type="text" name="id" /></td>
              </tr>
              <tr>
                <td><label>Password:</label></td>
                <td><input type="password" name="password" /></td>
              </tr>
            </tbody>
            <tfoot>
              <td><button>Login</button></td>
            </tfoot>
          </table>
        </form>
        <br/>
        OR
        <br/>
        <br/>
        <form onSubmit={this.handleSignup}>
          <table>
            <tbody>
              <tr>
                <td><label>Email:</label></td>
                <td><input type="text" name="email" /></td>
              </tr>
              <tr>
                <td><label>User ID:</label></td>
                <td><input type="text" name="id" /></td>
              </tr>
              <tr>
                <td><label>Password:</label></td>
                <td><input type="password" name="password" /></td>
              </tr>
              <tr>
                <td><label>Re-type:</label></td>
                <td><input type="password" name="password" /></td>
              </tr>
            </tbody>
            <tfoot>
              <td><button>Login</button></td>
            </tfoot>
          </table>
        </form>
      </main>
    )
  }
})
