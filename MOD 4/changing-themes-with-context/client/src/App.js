import React from "react"
import { ThemeContextConsumer } from "./themeContext"

function App() {
    return (

        <ThemeContextConsumer>
            {({ theme, changeTheme }) => (

                <div>
                    <navbar className={`${theme}-style`}>navbar</navbar>
                    <br />
                    <br />

                    <main style={{ textAlign: "center" }} className={theme + "-style"}>Press the Button to Change the background!
                <br />
                        <br />
                        <br />

                        <button onClick={changeTheme}>Press Now!</button>
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