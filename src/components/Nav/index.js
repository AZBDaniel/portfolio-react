const Nav = ({pageRender}) => {

    const handleClickEvent = (event) => {
        pageRender(event.target.innerText)
    }

    return (
        <>
            {/*Navigation Bar*/}
            <div className="nav">
                <a href="#"onClick = {handleClickEvent}>About Me</a>
                <a href="#"onClick = {handleClickEvent}>Work</a>
                <a href="#"onClick = {handleClickEvent}>Contact Me</a>
            </div>
        </>
    )
}

export default Nav