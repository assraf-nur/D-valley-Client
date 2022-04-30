import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../Images/google.png'

const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || '/'



    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        navigate(from, {replace: true});
      }

    return (
        <div>
            <button onClick={() => signInWithGoogle()} className='d-flex mx-auto btn border rounded-xl shadow'>
                <img src={logo} alt="" />
                <h5 className='mt-2 ms-1 fw-bold'>Sign In with google</h5>
            </button>
            {
                error && error.message
            }
            {
                loading && <p>Loading.....</p>
            }
        </div>
    );
};

export default SocialLogin;