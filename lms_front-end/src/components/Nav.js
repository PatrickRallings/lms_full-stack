

function Nav() {
    return (
        <div id={"nav"}>
            <header className="header">
                <div className="header--logo">
                    <a href="https://www.carolinafintechhub.org/"><img
                        src="https://3chxux42u1m943cnnj18o850-wpengine.netdna-ssl.com/wp-content/themes/cfh/assets/img/logo.svg"
                        alt="Carolina Fintech Hub"/></a>
                </div>
                <nav className="header--nav">
                    <ul id="menu-primary-nav" className="header--primary-nav">
                        <li id="menu-item-397"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-397 page-talent">
                            <a href="https://www.carolinafintechhub.org/talent/"><span>Talent</span></a></li>
                        <li id="menu-item-401"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-401 page-innovation">
                            <a href="https://www.carolinafintechhub.org/innovation/"><span>Innovation</span></a></li>
                        <li id="menu-item-400"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-400 page-outreach">
                            <a href="https://www.carolinafintechhub.org/outreach/"><span>Outreach</span></a></li>
                    </ul>
                    <ul className="header--secondary-nav">
                        <li id="menu-item-1152"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1152 page-about">
                            <a href="https://www.carolinafintechhub.org/about/">About</a></li>
                        <li id="menu-item-526"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-526"><a
                            href="https://www.carolinafintechhub.org/events/">Events</a></li>
                        <li id="menu-item-1153"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1153 page-insights">
                            <a href="https://www.carolinafintechhub.org/insights/">Insights</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Nav;