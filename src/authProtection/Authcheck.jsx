import { redirect } from 'react-router-dom';
import { useUser } from '../context/UserContextProvider';

const Authcheck = (WrappedComponent) => {
  return function AuthenticatedComponent(props) {
    const { current: user } = useUser();

    if (!user) {
      // Redirect to a login page or another route if not authenticated
      return redirect("/userauth");
    }

    return <WrappedComponent {...props} />;
  };
};

export default Authcheck;
