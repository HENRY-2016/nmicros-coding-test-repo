
import React from 'react';
import ViewDatabaseData from './viewdatabasedata';
class ViewDeleteSaving extends React.Component 
{
    // Componets calling ...
    render ()
        {
            return (
                <div>
                    <View />, 
                    <Delete />,
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

class Delete extends React.Component
{
    render ()
        {
            return (
                <div class="user-input-form container mt-3">
                    <h2>Delete Savings Record</h2>
                    <form action="http://localhost/php-coding-test/Views.php/DeleteViewSavingsController" method="post">
                    <br />
                    <div class="mb-3 mt-3">
                        <label for="email" className="form-inputs-label">Id</label>
                        <input type="text" class="form-control" required autoComplete="off" id="email" placeholder="Eg 2004-3548" name="id" />
                    </div>

                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary btn-block">Delete</button>
                    </div>
                    </form><br /><br />
                </div>
                );
        }
}


export default ViewDeleteSaving;

