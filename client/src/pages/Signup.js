 
  import React from "react";
  import * as Components from './Components';
  import { useState } from 'react'
// import { useHistory } from 'react-router-dom'
 
 function App() {
    //  const [signIn, toggle] = React.useState(true);
    // const history = useHistory()

	const [username, setName] = useState('')
	const [businessName, setBusiness] = useState('')
    const [password, setPassword] = useState('')
	

    // const history = useHistory()
    async function registerUser(event){
        event.preventDefault()

		const response = await fetch('http://localhost:8000/api/Signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
                businessName,
                password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
	         alert("user created")
		}
    }
      return(
          <Components.Container>
              <Components.SignUpContainer>
                  <Components.Form onSubmit={registerUser}>
                      <Components.Title>Create Account</Components.Title>
                      <Components.Input type='text' placeholder='Name' value={username} onChange={(e) => setName(e.target.value)}/>
                      <Components.Input type='text' placeholder='BusinessName' value={businessName} onChange={(e) => setBusiness(e.target.value)}/>
                      
                      <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                      <Components.Button type="submit" value="Signup" >Sign Up</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.OverlayContainer >
                  <Components.Overlay>

                  <Components.LeftOverlayPanel>
                      <Components.Title>Hello, Friend!</Components.Title>
                      <Components.Paragraph>
                      Enter Your personal details and start journey with us
                      </Components.Paragraph>
                      <Components.GhostButton >
                          Sign Up
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
           
      )
 }


 export default App; 