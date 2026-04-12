import { useNavigate } from "react-router-dom"
import DefaultButton from "../../components/Moduls/DefaultButton"
import OptionLanguage from "../../components/Moduls/optionLanguage"

function NavBar(){
    const navigate = useNavigate()
    return(
        <header>
            <nav className="bg-red-500 flex justify-between items-center pr-10 pl-7 py-4">
                <div>
                    <img src="/netflix_logo_icon.png" alt="netflix-log" 
                    width={105} height={45}/>
                </div>
                <div className="flex items-center gap-4 ">
                    <OptionLanguage/>
                    <DefaultButton
                        text = "Sign In"
                        onClick={()=> navigate("/login")}
                    />
                </div>
            </nav>
        </header>
    )
}

export default NavBar