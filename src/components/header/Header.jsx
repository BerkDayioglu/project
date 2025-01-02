import HeaderStyle from "./Header.module.scss"


const Header = ({categories, title}) => {
  // console.log(categories,title);
  return (
    <div className={HeaderStyle.header}>
      <h1>{title}</h1>
      <div className={HeaderStyle.btn}>
        {
          categories.map((items,index)=>(
            <button key={index}>{items}</button>
          ))
        }
      </div>
    </div>
  )
}

export default Header