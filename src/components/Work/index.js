const Work = () => {
    return (
        <div>
            {/* Work Section*/}
            <section id="work">
                <div className="section-title">
                    {/*Side Header*/}
                    <h2>Work</h2>
                </div>
                {/*Large tile for most recent work*/}
                <div className="section-content box-column">
                    <a href="https://github.com/AZBDaniel/mernlin-pizza" className="tile large-tile box-row">
                        {/*Image Info Tag*/}
                        <div className="tile-tag">
                            <p className="tile-title">MERNlin's Pizza</p>
                            <p className="tile-info">HTML/CSS/JS/MERN Stack/GraphQL</p>
                        </div>
                    </a>
                    {/*Small tiles sections below*/}
                    <div className="box-row">
                        <a href="https://github.com/AZBDaniel/mustache_cars" className="tile small-tile t1 box-row">
                            {/*Image Info Tag*/}
                            <div className="tile-tag">
                                <p className="tile-title">Mustache-Cars</p>
                                <p className="tile-info">Javascript, My SQL, Node.js, npm i, css</p>
                            </div>
                        </a>
                        <a href="https://azbdaniel.github.io/hot-spot/" className="tile small-tile t2 box-row">
                            <div className="tile-tag">
                                {/*Image Info Tag*/}
                                <p className="tile-title">Hot-Spot</p>
                                <p className="tile-info">HTML, JS, CSS, Bulma, Google API</p>
                            </div>
                        </a>
                    </div>
                    <div className="box-row">
                        <a href="https://github.com/AZBDaniel" className="tile small-tile t3 box-row">
                            {/*Image Info Tag*/}
                            <div className="tile-tag">
                                <p className="tile-title">Project 4</p>
                                <p className="tile-info">Langauges</p>
                            </div>
                        </a>
                        <a href="https://github.com/AZBDaniel" className="tile small-tile t4 box-row">
                            {/*Image Info Tag*/}
                            <div className="tile-tag">
                                <p className="tile-title">Project 5</p>
                                <p className="tile-info">Langauges</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            {/*End of Work Section*/}
        </div>
    )
}


export default Work