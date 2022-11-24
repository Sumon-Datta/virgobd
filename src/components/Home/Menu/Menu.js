
import "./Menu.css"

const Menu = (props) => {

    const{menu} = props;

    const{text , Link} = menu;


    return (
        
        <div className="primarymenu">
            <div >
            <li>
            <a href="">{text}</a>

            {
                menu.dropdown.map(dropdownMenu =>
                     
                    <li key = {dropdownMenu.id} >
                        <a href=""> {dropdownMenu.text} </a>
                    </li>
                    )
            }

            </li>
            </div>
            
        </div>
        
    );
};

export default Menu;