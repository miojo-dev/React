import { useState } from "react";

const [menu, setMenu] = useState<boolean>(false);

function onClick() {
    setMenu(true);
}

export default function Menu() {
    if (menu === true) {
        return (
            <header>
                <div className="menu">
                    <a className="link" href="#">
                        Home
                    </a>
                    <a className="link" href="#">
                        What's new
                    </a>
                    <a className="link" href="#">
                        About
                    </a>
                    <a className="sing" href="#">
                        Sing in / Sign up
                    </a>
                </div>
            </header>
        );
    } else {
        return (
            <div className="menu">
                <img src="assets/React.png" alt="Menu"/>
            </div>
        );
    }
    return null;
};