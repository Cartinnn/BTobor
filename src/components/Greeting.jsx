import Button from "./Button";

function Greeting() {
    const user = { name: "Jan", role: "Developer" };
    const isAdmin = false;

    return (
        <div>
            <h1>{user.name}</h1>
            <p>Rola: {user.role.toUpperCase()}</p>
            {/*isAdmin ? <AdminPanel /> : UserPanel />*/}
            <p>Dziś jest {new Date().toLocaleDateString()}</p>
            <Button />
        </div>
    )
}

export default Greeting;