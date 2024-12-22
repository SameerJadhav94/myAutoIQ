import "./CustomerHeader.scss"

const CustomerHeader = ({name, email}) => {
  return (
    <header className="customer-header">
    <h1>{name}</h1>
    <div className="email">{email}</div>
  </header>
  )
}

export default CustomerHeader