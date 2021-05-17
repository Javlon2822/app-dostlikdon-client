import React from 'react';


const Navbar = () => {
    return (
        <nav>
            <nav className="container d-flex justify-content-between pt-3 pb-3">
                <nav className="d-flex w-50 my-auto">
                    <h4 className="text-success mr-5">
                        Dustlikdon.uz
                    </h4>

                    <nav className="input-group  sha ">
                        <nav className="input-group-prepend">
                            <button className="btn btn-outline-light" type="button">
                                <img src="./image/Frame.png"/>
                            </button>
                        </nav>

                        <input type="search" placeholder="Saytdan izlash" className="form-control border-0 pl-2 w1"/>
                    </nav>
                </nav>

                <nav className="d-flex">
                    <a href="#" className="nav-link text-muted mr-4">На русском</a>
                    <nav className="d-flex n1 p-1">
                        <img src="./image/Frame2.png" alt="" width="27px" height="28px" className="my-auto"/>
                        <a href="tel:+99872-335-41-16" className="mb-0  my-auto text-success nav-links">99872 335-41-16</a>
                    </nav>
                </nav>

            </nav>
            <nav className="bg-white p-2">
                <nav className="container navbar">
                    <ul className="nav">
                        <li className="nav-item">
                            <img src="./image/Frame3.png" alt="" className="navbar-brand bg-success p-1 rounded-lg"/>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link text-muted">
                                Jamiyat haiqa
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link text-muted">
                                Struktura
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link text-muted">
                                Yangiliklar
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link text-muted">
                                Elektron murojaatlar
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link text-muted">
                                Interaktiv xizmatlar
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link text-muted">
                                Aloqa
                            </a>
                        </li>
                    </ul>
                </nav>
            </nav>
        </nav>

    );
};

export default Navbar;