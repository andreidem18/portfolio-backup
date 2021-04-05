const MySkylls = () => {


    return(
        <section className="my-skills">
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <div className="box">
                            <div className="percent">
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle cx="70" cy="70" r="70"></circle>
                                </svg>
                                <div className="number">
                                    <h2>80<span>%</span></h2>
                                </div>
                            </div>
                            <h2 class="skill">HTML & CSS</h2>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card">
                        <div className="box">
                            <div className="percent">
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle cx="70" cy="70" r="70"></circle>
                                </svg>
                                <div className="number">
                                    <h2>75<span>%</span></h2>
                                </div>
                            </div>
                            <h2 class="skill">JavaScript</h2>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card">
                        <div className="box">
                            <div className="percent">
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle cx="70" cy="70" r="70"></circle>
                                </svg>
                                <div className="number">
                                    <h2>70<span>%</span></h2>
                                </div>
                            </div>
                            <h2 className="skill">React JS</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MySkylls;