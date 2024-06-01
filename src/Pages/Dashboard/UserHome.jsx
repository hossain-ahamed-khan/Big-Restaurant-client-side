import useAuth from "../../hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();

    return (
        <div>
            <h1 className="text-3xl">welcome User</h1>
            {
                user?.displayName ? user.displayName : "welcome user"
            }
        </div>
    );
};

export default UserHome;