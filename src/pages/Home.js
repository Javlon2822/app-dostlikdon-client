import React from 'react';
import {Link} from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
    return (
        <div>

            <Header/>

            <main className="container mt-5">
                <section className="d-flex justify-content-between">
                    <article>
                        <h2>Yangiliklar</h2>
                    </article>
                    <article className="d-flex">
                        <div className="bg-secondary rounded-lg p-2 pl-3 pr-3">
                            <img src="./image/Vector.png" alt=""/>
                        </div>
                        <div className="bg-secondary rounded-lg p-2 ml-2 pl-3 pr-3">
                            <img src="./image/Vector2.png" alt=""/>
                        </div>
                    </article>
                </section>

                <section className="mt-5">
                    <div className="d-flex">
                        <div className="col-4 bg-white mr-3 mb-3">
                            <div className="pl-5 pr-5 pt-2 border-bottom">
                                <img src="./image/image%2014.png" alt="" className="card-img-top" height="215.656px"
                                     width="90"/>
                            </div>
                            <div className="d-flex justify-content-between p-2">
                                <ul className="d-flex nav">
                                    <li>
                                        <img src="./image/Frame1.png" alt=""/>
                                    </li>
                                    <li className="text-muted ml-2">
                                        16:48/12.11.20
                                    </li>
                                </ul>
                                <ul className="d-flex nav">
                                    <li>
                                        <img src="./image/Frame12.png" alt=""/>
                                    </li>
                                    <li className="text-muted ml-2">
                                        321
                                    </li>
                                </ul>
                                <ul className="d-flex nav">
                                    <li>
                                        <img src="./image/Frame11.png" alt=""/>
                                    </li>
                                    <li className="text-muted ml-2">
                                        100
                                    </li>
                                </ul>
                            </div>
                            <h4 className="mt-3 mb-4">E'LON!!!</h4>
                            <p>"DO'STLIKDONMAXSULOTLARI" AJ ning aksiyadorlari diqqatiga! 2020-yil 27-mart kuni soati
                                9:00 dan...</p>
                            {/*<button className="btn  mt-3 btn-outline-success mb-3">Batafsil</button>*/}
                            <Link to="/page-2" className="btn  mt-3 btn-outline-success mb-3">Batafsil</Link>
                        </div>
                        <div className="col-4 bg-white mx-3 mb-3">

                            <div className="pl-5 pr-5 pt-2 border-bottom">
                                <img src="./image/image%209.png" alt="" className="card-img-top" height="215.656px"
                                     width="90"/>
                            </div>

                            <div className="d-flex justify-content-between p-2">
                                <ul className="d-flex nav">
                                    <li>
                                        <img src="./image/Frame1.png" alt=""/>
                                    </li>
                                    <li className="text-muted ml-2">
                                        16:48/12.11.20
                                    </li>
                                </ul>
                                <ul className="d-flex nav">
                                    <li>
                                        <img src="./image/Frame12.png" alt=""/>
                                    </li>
                                    <li className="text-muted ml-2">
                                        321
                                    </li>
                                </ul>
                                <ul className="d-flex nav">
                                    <li>
                                        <img src="./image/Frame11.png" alt=""/>
                                    </li>
                                    <li className="text-muted ml-2">
                                        100
                                    </li>
                                </ul>
                            </div>
                            <h4 className="mt-3 mb-4">E'LON!!!</h4>
                            <p>"DO'STLIKDONMAXSULOTLARI" AJ ning aksiyadorlari diqqatiga! 2020-yil 27-mart kuni soati
                                9:00 dan...</p>
                            <button className="btn  mt-3 btn-outline-success">Batafsil</button>
                        </div>
                        <div className="col-4 bg-white ml-3 mb-3 pt-2 ">
                            <div className=" pt-1 border-bottom">
                                <img src="./image/Rectangle%2018.png" alt="" className="card-img-top"/>
                            </div>
                            <div className="d-flex justify-content-between p-2">
                                <ul className="d-flex nav">
                                    <li>
                                        <img src="./image/Frame1.png" alt=""/>
                                    </li>
                                    <li className="text-muted ml-2">
                                        16:48/12.11.20
                                    </li>
                                </ul>
                                <ul className="d-flex nav">
                                    <li>
                                        <img src="./image/Frame12.png" alt=""/>
                                    </li>
                                    <li className="text-muted ml-2">
                                        321
                                    </li>
                                </ul>
                                <ul className="d-flex nav">
                                    <li>
                                        <img src="./image/Frame11.png" alt=""/>
                                    </li>
                                    <li className="text-muted ml-2">
                                        100
                                    </li>
                                </ul>
                            </div>
                            <h4 className="mt-3 mb-4">E'LON!!!</h4>
                            <p>"DO'STLIKDONMAXSULOTLARI" AJ ning aksiyadorlari diqqatiga! 2020-yil 27-mart kuni soati
                                9:00 dan...</p>
                            <button className="btn  mt-3 btn-outline-success">Batafsil</button>
                        </div>
                    </div>
                </section>

                <section className="d-flex justify-content-between">
                    <article>
                        <h2>Korxonamiz yangiliklari</h2>
                    </article>
                    <article className="d-flex">
                        <div className="bg-secondary rounded-lg p-2 pl-3 pr-3">
                            <img src="./image/Vector.png" alt=""/>
                        </div>
                        <div className="bg-secondary rounded-lg p-2 ml-2 pl-3 pr-3">
                            <img src="./image/Vector2.png" alt=""/>
                        </div>
                    </article>
                </section>

                <section className="mt-5">
                    <div className="d-flex">
                        <div className="col-4 bg-white mx-3 mb-3">
                            <div className="pl-5 pr-5 pt-2 border-bottom">
                                <img src="./image/image%2014.png" alt="" className="card-img-top" height="215.656px"
                                     width="90"/>
                            </div>
                            <div className="d-flex justify-content-between p-2">
                                <ul className="d-flex nav">
                                    <li>
                                        <img src="./image/Frame1.png" alt=""/>
                                    </li>
                                    <li className="text-muted ml-2">
                                        16:48/12.11.20
                                    </li>
                                </ul>
                                <ul className="d-flex nav">
                                    <li>
                                        <img src="./image/Frame12.png" alt=""/>
                                    </li>
                                    <li className="text-muted ml-2">
                                        321
                                    </li>
                                </ul>
                                <ul className="d-flex nav">
                                    <li>
                                        <img src="./image/Frame11.png" alt=""/>
                                    </li>
                                    <li className="text-muted ml-2">
                                        100
                                    </li>
                                </ul>
                            </div>
                            <h4 className="mt-3 mb-4">E'LON!!!</h4>
                            <p>"DO'STLIKDONMAXSULOTLARI" AJ ning aksiyadorlari diqqatiga! 2020-yil 27-mart kuni soati
                                9:00 dan...</p>
                            <button className="btn  mt-3 btn-outline-success mb-3">Batafsil</button>
                        </div>
                        <div className="col-4 bg-white mx-3 mb-3">

                            <div className="pl-5 pr-5 pt-2 border-bottom">
                                <img src="./image/image%209.png" alt="" className="card-img-top" height="215.656px"
                                     width="90"/>
                            </div>

                            <div className="d-flex justify-content-between p-2">
                                <ul className="d-flex nav">
                                    <li>
                                        <img src="./image/Frame1.png" alt=""/>
                                    </li>
                                    <li className="text-muted ml-2">
                                        16:48/12.11.20
                                    </li>
                                </ul>
                                <ul className="d-flex nav">
                                    <li>
                                        <img src="./image/Frame12.png" alt=""/>
                                    </li>
                                    <li className="text-muted ml-2">
                                        321
                                    </li>
                                </ul>
                                <ul className="d-flex nav">
                                    <li>
                                        <img src="./image/Frame11.png" alt=""/>
                                    </li>
                                    <li className="text-muted ml-2">
                                        100
                                    </li>
                                </ul>
                            </div>
                            <h4 className="mt-3 mb-4">E'LON!!!</h4>
                            <p>"DO'STLIKDONMAXSULOTLARI" AJ ning aksiyadorlari diqqatiga! 2020-yil 27-mart kuni soati
                                9:00 dan...</p>
                            <button className="btn  mt-3 btn-outline-success">Batafsil</button>
                        </div>
                        <div className="col-4 bg-white ml-3 mb-3 pt-2 ">
                            <div className=" pt-1 border-bottom">
                                <img src="./image/Rectangle%2018.png" alt="" className="card-img-top"/>
                            </div>
                            <div className="d-flex justify-content-between p-2">
                                <ul className="d-flex nav">
                                    <li>
                                        <img src="./image/Frame1.png" alt=""/>
                                    </li>
                                    <li className="text-muted ml-2">
                                        16:48/12.11.20
                                    </li>
                                </ul>
                                <ul className="d-flex nav">
                                    <li>
                                        <img src="./image/Frame12.png" alt=""/>
                                    </li>
                                    <li className="text-muted ml-2">
                                        321
                                    </li>
                                </ul>
                                <ul className="d-flex nav">
                                    <li>
                                        <img src="./image/Frame11.png" alt=""/>
                                    </li>
                                    <li className="text-muted ml-2">
                                        100
                                    </li>
                                </ul>
                            </div>
                            <h4 className="mt-3 mb-4">E'LON!!!</h4>
                            <p>"DO'STLIKDONMAXSULOTLARI" AJ ning aksiyadorlari diqqatiga! 2020-yil 27-mart kuni soati
                                9:00 dan...</p>
                            <button className="btn  mt-3 btn-outline-success">Batafsil</button>
                        </div>
                    </div>
                </section>

            </main>

            <main className="d-flex ">
                <div className=" pl-4">
                    <img src="./image/image%2018.png" alt=""/>
                </div>
                <div className="d-flex justify-content-center back px-6">
                    <div className="mx-5 my-auto">
                        <h2>Shikoyatlar mavjudmi?</h2>
                        <h2>Onlayn tarzda yuboring</h2>
                    </div>
                    <div className=" text-center my-auto ml-4">
                        <button className="btn btn-success px-3" type="button">Murojaat yuborish</button>
                    </div>
                </div>
                <div className="justify-content-end  ">
                    <img src="./image/image%2017.png" alt=""/>
                </div>
            </main>

            <main className="container my-5">
                <div className="">
                    <h2>Media</h2>
                </div>
                <div className="navbar">
                    <ul className="nav nav-pills p-2 shadow-sm">
                        <li className="nav-item ">
                            <a className="nav-link active" data-toggle="pill" href="#barchasi">Barchasi</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" data-toggle="pill" href="#foto-galeriya">Foto Galeriya</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="pill" href="#video-geleriya">Video Geleriya</a>
                        </li>
                    </ul>
                    <div className="tab-content mt-5">
                        <div className="tab-pane container  active" id="barchasi">
                            <div className="row">
                                <div className="col-4 ">
                                    <div className="col-4-h rounded-top rounded-lg">
                                        <div className="  ">
                                            <img src="./image/Rectangle%2018.png" alt="" className="card-img-top"/>
                                        </div>
                                        <div className="p-2">
                                            <h5 className="mt-1">"DOSTLIKDONMAXSULOT" AJ boshqaruv raisi</h5>
                                            <div className="d-flex justify-content-between p-2 mt-3">
                                                <ul className="d-flex nav">
                                                    <li>
                                                        <img src="./image/Frame1.png" alt=""/>
                                                    </li>
                                                    <li className="text-muted ml-2">
                                                        16:48/12.11.20
                                                    </li>
                                                </ul>
                                                <ul className="d-flex nav">
                                                    <li>
                                                        <img src="./image/Frame12.png" alt=""/>
                                                    </li>
                                                    <li className="text-muted ml-2">
                                                        321
                                                    </li>
                                                </ul>
                                                <ul className="d-flex nav">
                                                    <li>
                                                        <img src="./image/Frame11.png" alt=""/>
                                                    </li>
                                                    <li className="text-muted ml-2">
                                                        100
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="col-4 ">
                                    <div className="col-4-h">
                                        <div className=" border-bottom">
                                            <img src="./image/Rectangle%2018.png" alt="" className="card-img-top"/>
                                        </div>
                                        <div className="p-2">
                                            <h5 className="mt-1">"DOSTLIKDONMAXSULOT" AJ boshqaruv raisi</h5>
                                            <div className="d-flex justify-content-between p-2 mt-3">
                                                <ul className="d-flex nav">
                                                    <li>
                                                        <img src="./image/Frame1.png" alt=""/>
                                                    </li>
                                                    <li className="text-muted ml-2">
                                                        16:48/12.11.20
                                                    </li>
                                                </ul>
                                                <ul className="d-flex nav">
                                                    <li>
                                                        <img src="./image/Frame12.png" alt=""/>
                                                    </li>
                                                    <li className="text-muted ml-2">
                                                        321
                                                    </li>
                                                </ul>
                                                <ul className="d-flex nav">
                                                    <li>
                                                        <img src="./image/Frame11.png" alt=""/>
                                                    </li>
                                                    <li className="text-muted ml-2">
                                                        100
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="col-4 ">
                                    <div className="col-4-h">
                                        <div className="  border-bottom">
                                            <img src="./image/Rectangle%2018.png" alt="" className="card-img-top"/>
                                        </div>
                                        <div className="p-2">
                                            <h5 className="mt-1">"DOSTLIKDONMAXSULOT" AJ boshqaruv raisi</h5>
                                            <div className="d-flex justify-content-between p-2 mt-3">
                                                <ul className="d-flex nav">
                                                    <li>
                                                        <img src="./image/Frame1.png" alt=""/>
                                                    </li>
                                                    <li className="text-muted ml-2">
                                                        16:48/12.11.20
                                                    </li>
                                                </ul>
                                                <ul className="d-flex nav">
                                                    <li>
                                                        <img src="./image/Frame12.png" alt=""/>
                                                    </li>
                                                    <li className="text-muted ml-2">
                                                        321
                                                    </li>
                                                </ul>
                                                <ul className="d-flex nav">
                                                    <li>
                                                        <img src="./image/Frame11.png" alt=""/>
                                                    </li>
                                                    <li className="text-muted ml-2">
                                                        100
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>



                        </div>
                        <div className="tab-pane container fade" id="foto-galeriya">

                        </div>
                        <div className="tab-pane container fade" id="video-geleriya">

                        </div>
                    </div>
                </div>
            </main>

            <main className="bg-white my-5 ">
                <section className="container d-flex ">
                    <div className="col-2-4 text-center border-right py-4">
                        <img src="./image/image%2010.png" alt=""/>
                        <p className="mb-0">O'zbekiston Respublikasi</p>
                        <p className="mb-0">Prezidentining</p>
                        <p className="mb-0">rasmiy web sayti</p>
                        <div className="w-100 box">
                            <a href="#"
                               className="nav-link border-0 text-white box-text text-center ">data.gov.uz</a>
                        </div>
                    </div>
                    <div className="col-2-4 text-center border-right py-4">
                        <img src="./image/image%2011.png" alt=""/>
                        <p className="mb-0">Davlat interaktiv</p>
                        <p className="mb-0">xizmatlar yagona portali</p>
                        <div className="w-100 box">
                            <a href="#"
                               className="nav-link border-0 text-white box-text text-center ">data.gov.uz</a>
                        </div>
                    </div>
                    <div className="col-2-4 text-center border-right py-4">
                        <img src="./image/image%2012.png" alt=""/>
                        <p className="mb-0">Ozbekiston Respublikasi</p>
                        <p className="mb-0">Ochiq ma'lumotlari</p>
                        <p className="mb-0">portali</p>
                        <div className="w-100 box">
                            <a href="#"
                               className="nav-link border-0 text-white box-text text-center ">data.gov.uz</a>
                        </div>
                    </div>
                    <div className="col-2-4 text-center border-right py-4">
                        <img src="./image/image%2013.png" alt=""/>
                        <p className="mb-0">O'zbekiston Respublikasi</p>
                        <p className="mb-0">Maktabgacha ta'lim</p>
                        <p className="mb-0">Vazirligi</p>
                        <div className="w-100 box">
                            <a href="#"
                               className="nav-link border-0 text-white box-text text-center ">data.gov.uz</a>
                        </div>
                    </div>
                    <div className="col-2-4 text-center py-4">
                        <img src="./image/image%2014.png" alt=""/>
                        <p className="mb-0">"O'ZDONMAHSULOT"</p>
                        <p className="mb-0">aksiyadorlik</p>
                        <p className="mb-0">kompaniyasi</p>
                        <div className="w-100 box">
                            <a href="#"
                               className="nav-link border-0 text-white box-text text-center ">data.gov.uz</a>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    );
};

export default Home;