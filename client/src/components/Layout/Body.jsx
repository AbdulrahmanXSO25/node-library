import { Outlet } from 'react-router-dom'; // Import Outlet

function Body() {
    return (
        <main className="container mx-auto my-8 w-4/5">
            <section>
                <h2 className="text-2xl font-bold my-5 text-center border-b-2 pb-4">Welcome to Node Library</h2>
                <Outlet />
            </section>
        </main>
    );
}

export default Body;