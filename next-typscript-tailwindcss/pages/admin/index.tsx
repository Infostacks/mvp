import Sidebar from '../../components/AdminPanel/Sidebar'
import ComponentEditor from '../../components/AdminPanel/ComponentEditor';


const index = () => {
    return (
        <div className="flex flex-row justify-between m-0 p-0 h-screen w-screen">
            <Sidebar/>
            <ComponentEditor/>
        </div>
    );
}

export 

default index;