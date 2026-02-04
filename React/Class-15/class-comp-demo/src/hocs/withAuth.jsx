import Login from "../components/Login";

const withAuth = (Component) => {
    const isAuthenticated = false;

    if (!isAuthenticated) {
        return function (props) {
            return <Login {...props} />
        }
    }

    return function (props) {
        return <Component {...props} />
    }
}

export default withAuth;