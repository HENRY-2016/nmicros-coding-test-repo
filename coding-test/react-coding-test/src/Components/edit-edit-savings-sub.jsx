// https://www.tutorialspoint.com/reactjs/reactjs_jsx.htm
// uses jsx
// https://www.tutorialspoint.com/reactjs/reactjs_jsx.htm
//https://react-bootstrap.github.io/components/accordion/
import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import ViewDatabaseData from './viewdatabasedata';
// import Table from './tabledata';

class ViewEditSaving extends React.Component 
{
    // Componets calling ...
    render ()
        {
            return (
                <div>
                    <View />, 
                    <Edit />,
                </div>
            );
        }
}

class View extends React.Component
{
    render ()
        {
            return (
                    <div class=" user-veiw-form container mt-3">
                    <h2>Your Savings</h2>
                                
                    <table class="table">
                        <tbody>
                        <ViewDatabaseData></ViewDatabaseData>
                        </tbody>
                    </table>
                </div>
                );
        }
}

class Edit extends React.Component
{
    render ()
        {
            return (
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><label className='update-title-label'>Update Name</label></Accordion.Header>
                            <Accordion.Body>
                            <div class="user-input-form container mt-3">
                            <form action="http://localhost/php-coding-test/Views.php/UpdateSavingsControllerName" method="post">
                            <br />
                                <div class="mb-3 mt-3">
                                    <label for="email" className="form-inputs-label">Id</label>
                                    <input type="text" class="form-control"  required autoComplete="off"  id="email" placeholder="Eg 2004-3548" name="id" />
                                </div>

                                <div class="mb-3 mt-3">
                                    <label for="email" className="form-inputs-label">Name</label>
                                    <input type="text" class="form-control" required autoComplete="off"  id="email" placeholder="Enter New Name" name="name" />
                                </div>
                                <div class="d-grid">
                                    <button type="submit" class="btn btn-primary btn-block">Update</button>
                                </div>
                            </form><br /><br />
                            </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><label className='update-title-label'>Update Amount</label></Accordion.Header>
                            <Accordion.Body>
                            <div class="user-input-form container mt-3">
                            <form action="http://localhost/php-coding-test/Views.php/UpdateSavingsControllerAmount" method="post">
                            <br />
                                <div class="mb-3 mt-3">
                                    <label for="email" className="form-inputs-label">Id</label>
                                    <input type="text" class="form-control" required autoComplete="off"  id="email" placeholder="Eg 2004-3548" name="id" />
                                </div>

                                <div class="mb-3 mt-3">
                                    <label for="email" className="form-inputs-label">Amount</label>
                                    <input type="text" class="form-control" required autoComplete="off"  id="email" placeholder="Enter New Amount" name="amount" />
                                </div>
                                <div class="d-grid">
                                    <button type="submit" class="btn btn-primary btn-block">Update</button>
                                </div>
                            </form><br /><br />
                            </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><label className='update-title-label'>Update Month</label></Accordion.Header>
                            <Accordion.Body>
                            <div class="user-input-form container mt-3">
                            <form action="http://localhost/php-coding-test/Views.php/UpdateSavingsControllerMonth" method="post">
                            <br />
                                <div class="mb-3 mt-3">
                                    <label for="email" className="form-inputs-label">Id</label>
                                    <input type="text" class="form-control" required autoComplete="off"  id="email" placeholder="Eg 2004-3548" name="id" />
                                </div>

                                <div class="mb-3">
                                    <label for="pwd" className="form-inputs-label" >Month</label>
                                    <select class="form-select"  name="month">
                                    <option ></option>
                                        <option value="January">January</option>
                                        <option value=" February">February</option>
                                        <option value="March">March</option>
                                        <option value="April">April</option>
                                        <option value="May">May</option>
                                        <option value="June">June</option>
                                        <option value="July">July</option>
                                        <option value="August">August</option>
                                        <option value="September">September</option>
                                        <option value="October">October</option>
                                        <option value="November">November</option>
                                        <option value="December">December</option>
                                    </select>
                                </div>
                                <div class="d-grid">
                                    <button type="submit" class="btn btn-primary btn-block">Update</button>
                                </div>
                            </form><br /><br />
                            </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        
                    </Accordion>
                );
        }
}


export default ViewEditSaving;

