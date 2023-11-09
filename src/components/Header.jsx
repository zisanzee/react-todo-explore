import Button from "./button"
const Header = ({title, showForm, showAdd})=>{
 
  return (
    <header>
      <h1>{title}</h1>
      <Button color={showAdd? 'darkRed': 'darkGreen'} onClick={showForm} text={showAdd? 'Close': 'Add'} />
    </header>
  )
}

export default Header