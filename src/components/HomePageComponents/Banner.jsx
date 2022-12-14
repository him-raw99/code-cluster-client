import React from 'react'

function Banner() {
    return (
        <>
            <div className="main-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="top-text header-text">
                                <h6>Over 36,500+ Active Coders</h6>
                                <h2>Find Fellow Coders  &amp; Their Codes</h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <form id="search-form" name="gs" method="submit" role="search" action="#">
                                <div className="row">
                                    <div className="col-lg-4 align-self-center">
                                        <fieldset>
                                            <select name="area" className="form-select" aria-label="Area" id="chooseCategory" onChange="this.form.click()">
                                                <option selected>All Languages</option>
                                                <option value="New Village">C++</option>
                                                <option value="Old Town">Python</option>
                                                <option value="Modern City">Java Script</option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-4 align-self-center">
                                        <fieldset>
                                            <input type="address" name="address" className="searchText" placeholder="Username of Person" autoComplete="on" required />
                                        </fieldset>
                                    </div>
                                    {/* <div className="col-lg-4 align-self-center">
                                        <fieldset>
                                            <select name="price" className="form-select" aria-label="Default select example" id="chooseCategory" onChange="this.form.click()">
                                                <option selected>Price Range</option>
                                                <option value="$100 - $250">$100 - $250</option>
                                                <option value="$250 - $500">$250 - $500</option>
                                                <option value="$500 - $1000">$500 - $1,000</option>
                                                <option value="$1000+">$1,000 or more</option>
                                            </select>
                                        </fieldset>
                                    </div> */}
                                    <div className="col-lg-4">
                                        <fieldset>
                                            <button className="main-button"><i className="fa fa-search"></i> Search Now</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-10 offset-lg-1">
                            <ul className="categories">
                                <li><a href="#languages"><span className="icon"><img src="src/assets/images/search-icon-01.png" alt="Home" /></span> C++</a></li>
                                <li><a href="#languages"><span className="icon"><img src="src/assets/images/search-icon-02.png" alt="Food" /></span> Python</a></li>
                                <li><a href="#languages"><span className="icon"><img src="src/assets/images/search-icon-03.png" alt="Vehicle" /></span> JavaScript</a></li>
                                <li><a href="#languages"><span className="icon"><img src="src/assets/images/search-icon-04.png" alt="Shopping" /></span>C</a></li>
                                <li><a href="#languages"><span className="icon"><img src="src/assets/images/search-icon-05.png" alt="Travel" /></span>Java</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner