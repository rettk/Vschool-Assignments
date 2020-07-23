import React from "react"
import { ThemeContextConsumer } from "./themeContext"

function App() {
    return (

        <ThemeContextConsumer>
            {({ theme, changeTheme }) => (

                <div>
                    <navbar id="navbar" className={`navbar-${theme}-style`}>
                        <div>Home</div>
                        <div>Menu</div>
                        <div>Help</div>


                    </navbar>
                    <br />
                    <br />

                    <main style={{ textAlign: "center" }} className={theme + "-style"}>
                <br />
                        <h3>Press the Button to Change the background!</h3>
                        <br />
                        <br />

                        <button className={`button-${theme}-style`} onClick={changeTheme}>Press Now!</button>
                        <br />
                    </main>
                    <br />
                    <br />
                    <br />

                    <footer className={`${theme}-style`}>Here is the footer of your dreams.</footer>

                </div>


            )}
        </ThemeContextConsumer>
    )

}

export default App