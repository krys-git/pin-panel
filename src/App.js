import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import {shuffle} from './utils/NumberUtils.ts'

function App() {
  let values = shuffle([...Array(10).keys()]);
  console.log(values);

  return (
    <form className='border border-dark container form-body rounded text-center p-0'>
      <div className="border-bottom border-dark py-3 bg-out">
        <h3 className="mb-0" style={{color: '#FFEDD4'}}>Please enter the secondary password.</h3>
      </div>
      <div className="form-group px-2 pt-5 bd-body">
        <input type="password" name="name" id="name" className="form-control w-100"/>
        <div className=" num-grp" >
          <div className="mt-2 pb-5 btn-item col-10">
            {
              values.map(element => { return (
                <button className="btn btn-secondary" key={element}>{element}</button>
              )})
            }
          </div>
          <div className="mt-2 pb-5 btn-item col-2">
            <button className="btn btn-secondary">left</button>
            <button className="btn btn-secondary">C</button>
          </div>
        </div>
      </div>
      <div className="border-top border-dark bg-out">
        <h5 className="py-3" style={{color: '#D05D48'}}>* 2nd passwords must be at least 6 characters long.</h5>
        <div className="row justify-content-around px-2 pb-3">
          <button className="btn btn-secondary col-5">Confirm</button>
          <button className="btn btn-secondary col-5">Cancel</button>
        </div>
      </div>
    </form>
  );
}

export default App;
