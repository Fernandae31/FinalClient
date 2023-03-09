import "./LoginPage.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";

export const loginPageAction = async ({ request }) => {
	const formData = await request.formData()
	const email = formData.get("email")
	const password = formData.get("password")

	try {
		const { data } = await authService.login({ email, password })
		return {
			authToken: data.authToken,
			error: null
		}
	} catch (error) {
		const {
			request: { response }
		} = error
		const { message } = JSON.parse(response)
		return { error: message, authToken: null }
	}
}



function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    authService
      .login(requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
    <div> <img src="images/logIn.png" alt="banner join-us" width="100%" height="190" /></div>
    <div className="LoginPage" style={{ position: "relative" }}>

      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handlePassword}/>

        <button type="submit">Log In</button>
        </form>
     

      {errorMessage && <p className="error-message">{errorMessage}</p>}

     
   
    
       </div>
    </>
  );
}

export default LoginPage;
