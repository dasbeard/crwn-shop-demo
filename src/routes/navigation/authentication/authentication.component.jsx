import SignUpForm from "../../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../../components/sign-in-form/sign-in-form.component";

import './authentication.styles.scss';

const Authentication = () => {

  //  This is not used, but shows how to use the redirect method and retain the data
  // useEffect(() => {
  //   async function getRedirect(){
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //     if (response) {
  //       const userDocRef = await( createUserDocumentFromAuth(response.user));
  //     }

  //   }
  //    getRedirect();
  // }, []);


  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication;