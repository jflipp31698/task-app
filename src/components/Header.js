import Button from "./Button";

const Header = ({ title, showForm, onAdd }) => {
    return (
        <div className="header">
            <h1>{title}</h1>
            <Button text={showForm ? 'Close' : 'Add'} color={showForm ? 'red' : 'blue'} onClick={onAdd}/>
        </div>
    )
}

export default Header
