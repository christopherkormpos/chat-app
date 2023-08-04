import Add from "../images/addAvatar.png"

export default function Register() {
    return (
      <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Chat</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder="Display Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input style={{display:"none"}} type="file" id="file"/>
                <label htmlFor="file" id="file">
                    <img src={Add} alt="" />
                    <span>Add an Avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>You already have an account? Log In</p>
        </div>
      </div>
    );
  }