import { Navbar } from '../../component';
import { useAuth } from '../../context/AuthContext';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import './LoginPage.css';

const LoginPage = () => {
    useDocumentTitle("LoginPage");
    const { loginInfo, setLoginInfo, loginHandler } = useAuth();
    const { email, password } = loginInfo;

    return (
        <>
            <Navbar />
            <div className='login-signup-page height-100'>
                <form className='input-form login'>
                    <h1 className='login-bottom-margin text-center'>
                        Login
                    </h1>
                    <label htmlFor="email-input" className='label-font-size'>
                        Email Address *
                    </label>
                    <input 
                        type="email"
                        placeholder='user@email.com'
                        className='input-box'
                        value={loginInfo.email}
                        onChange={(e) => setLoginInfo((prev) => ({
                                ...prev,
                                email: e.target.value
                            }))
                        } 
                    />
                    <label htmlFor="password" className='label-font-size'>
                        Password *
                    </label>
                    <input 
                        type="password"
                        minLength='8'
                        className='input-box'
                        id='password'
                        value={loginInfo.password}
                        onChange={(e) => setLoginInfo((prev) => ({
                            ...prev,
                            password: e.target.value
                        }))}
                    />
                    <div className='forget-psswrd'>
                        <label>
                            <input
                                type="checkbox"
                                name='checkbox'
                                className='checkbox-size'
                            />
                            Remember Me
                        </label>
                        <p className='red-color forget-psswrd-margin'>
                            Forget Password?                        
                        </p>
                    </div>
                    <button
                        className='button login-button'
                        onClick={(e) => loginHandler(e, email, password)}
                    >
                        Guest Login
                    </button>
                </form>
            </div>
        </>
    )
}

export { LoginPage }