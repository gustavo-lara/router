import { Link } from "react-router-dom"

const navigation = [
    {component: "/", name:"Home"},
    {component: "/contact", name:"Contato"},
    {component: "/sobre", name:"Sobre"},
    {component: "/login", name:"Login"},
]

const Header = () => {
  return (
    <nav>
        {/* <Link to={"/"}>Home</Link>
        // <Link to={"/contact"}>Contato</Link> */} 
        {/* metodo de fazer 1 a 1 na mão */}
        {navigation.map((item)=> (
            <Link key={item.name} to={item.component}>{item.name}</Link>
        ))}
    </nav>
  )
}

export default Header