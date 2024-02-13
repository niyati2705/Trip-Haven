import "./list.css"
import Sidebar from "../../components/sidebar/SidebarComp"
import Navbar from "../../components/navbar/NavbarComp"
import Datatable from "../../components/datatable/DatatableComp"

const List = ({columns}) => {
return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable columns={columns}/>
      </div>
    </div>
  )
}

export default List
