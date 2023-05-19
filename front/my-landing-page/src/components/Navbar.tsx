import React from "react"

const Navbar: React.FC = () => {
    return (
        <header className="flex items-center justify-between py-5 px-8 bg-white">
            <div className="flex items-center">
                <img src="https://th.bing.com/th/id/R.3f7189662f19f8318fc75252deee723a?rik=Qa956Np1tp8Zcg&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f06%2fTwitter-Logo.png&ehk=6ekNd2ZmhpvFDGRZF19QcumP9fb8pZRkwrbFbK%2bpULA%3d&risl=&pid=ImgRaw&r=0" alt="Logo" className="h-8 mr-2" />
                <h1 className="text-2xl text-blue-500 font-bold">TransWeb</h1>
            </div>
            <nav className="space-x-4">
                <button className="text-blue-500 font-bold">Home</button>
                <button className="text-blue-500 font-bold">About</button>
                <button className="text-blue-500 font-bold">Services</button>
                <button className="text-blue-500 font-bold">Contact</button>
            </nav>
        </header>
    )
}

export default Navbar;
