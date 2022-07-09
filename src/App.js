import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <form class='border border-dark container form-body rounded text-center p-0'>
      <div class="border-bottom border-dark py-3 bg-out">
        <h3 class="mb-0" style={{color: '#FFEDD4'}}>Please enter the secondary password.</h3>
      </div>
      <div class="form-group px-2 pt-5 bd-body">
        <input type="text" name="name" id="name" class="form-control w-100"/>
        <div class="mt-2 pb-5 btn-item">
          <button class="btn btn-secondary">8</button>
          <button class="btn btn-secondary">9</button>
          <button class="btn btn-secondary">4</button>
          <button class="btn btn-secondary">0</button>
          <button class="btn btn-secondary">5</button>
          <button class="btn btn-secondary">left</button>
          <button class="btn btn-secondary">3</button>
          <button class="btn btn-secondary">1</button>
          <button class="btn btn-secondary">2</button>
          <button class="btn btn-secondary">7</button>
          <button class="btn btn-secondary">6</button>
          <button class="btn btn-secondary">C</button>
        </div>
      </div>
      <div class="border-top border-dark bg-out">
        <h5 class="py-3" style={{color: '#D05D48'}}>* 2nd passwords must be at least 6 characters long.</h5>
        <div class="row justify-content-around px-2 pb-3">
          <button class="btn btn-secondary col-5">Confirm</button>
          <button class="btn btn-secondary col-5">Cancel</button>
        </div>
      </div>
    </form>
  );
}

export default App;
