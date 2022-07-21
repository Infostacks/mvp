import Sidebar from '../../components/AdminPanel/Sidebar'
import ComponentEditor from '../../components/AdminPanel/ComponentEditor';


const index = () => {
    return (
      <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col m-0 p-0 h-screen w-screen">
        <div className="xl:h-screen lg:h-screen md:h-screen h-2/12 xl:w-2/12 lg:w-2/12 md:w-2/12 w-full">
          <Sidebar />
        </div>
        <div className="xl:h-screen lg:h-screen md:h-screen h-full xl:w-10/12 lg:w-10/12 md:w-10/12 w-full">
          <ComponentEditor />
        </div>
      </div>
    );
}

export 

default index;