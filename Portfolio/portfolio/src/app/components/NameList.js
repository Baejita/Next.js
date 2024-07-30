function NameList() {
    return (
        <div>
             <li key={item.id}>{item.fullName} and {item.number}</li> 
        </div>
    )
}

export default NameList
