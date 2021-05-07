import Summary from '../Summary/Summary'
import Example from '../Example/Example'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'

import { useGoogleLogin } from 'react-google-login'
import { useRouter } from 'next/router'

import { useFetch } from 'react-async'

const clientId = '240083179290-oahd0h3sj4hrd8o0p0i0mf2eqht2re7n.apps.googleusercontent.com'

export default function Landing() {
  const router = useRouter()

  const onSuccess = (res) => {
    const url = 'http://localhost:8000/v1/sign-in/'
    const googleId = 'my-gooogle-id'
    const idToken = 'my-id-token'

    signInUser(url, googleId, idToken).then(response=>{
      console.log(response)
      router.push('/home')

      console.log('Login Success: currentUser:', res.profileObj)
    })

  }

  const onFailure = (res) => {
    console.log('Login failed: res:', res)
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    acessType: 'offline',
  })

  return (
      <div className="container">
        <div className="row justify-content-center">
          <Logo />
        </div>
        <div className="row justify-content-center">
          <Example />
        </div>
        <div className="row justify-content-center">
          <Summary />
        </div>
        <div className="row justify-content-center p-2">
          <Button onClick={ signIn }/>
        </div>
      </div>
  )
}

async function signInUser(url, googleId, idToken) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      googleId: googleId,
      idToken: idToken
    })
  })
}