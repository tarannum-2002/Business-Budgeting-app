import React from "react";
import * as Components from './Components';
import { useState } from 'react'
// import { useHistory } from 'react-router-dom'


function App() {
	const [username, setName] = useState('')
	
	const [password, setPassword] = useState('')
    // const history = useHistory()

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:8000/api/Login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				password,
			}),
		})

		const data = await response.json()

		if (data.status==='ok') {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			// window.location.href = '/dashboard'
		} else {
			alert('Please check your username and password')
		}
        // if (data.status === 'ok') {
		// 	history.push('/login')
		// }
	}

return(

<Components.Container>


              <Components.SignInContainer>
                   <Components.Form onSubmit={loginUser}>
                       <Components.Title>Sign in</Components.Title>
                       <Components.Input type='text' placeholder='username' value={username} onChange={(e) => setName(e.target.value)}/>
                       <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                       <Components.Button type="submit" value="Login">Sigin In</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer >
                  <Components.Overlay>

                  <Components.LeftOverlayPanel>
                      <Components.Title>Welcome Back!</Components.Title>
                      <Components.Paragraph>
                          To keep connected with us please login with your personal info
                      </Components.Paragraph>
                      <Components.GhostButton >
                          Sign In
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>

)
}

export default App