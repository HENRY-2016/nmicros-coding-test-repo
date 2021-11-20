import React from "react";


function  SavingForm () 
        {
            return (
                <div class="user-input-form container mt-3">
                    <h2>Record Savings</h2>
                    <form action="http://localhost/php-coding-test/Views.php/RegisterSavingsController" method="post">
                    <div class="mb-3 mt-3">
                        <label for="email" className="form-inputs-label">Name</label>
                        <input type="text" class="form-control" autoComplete="off" required placeholder="Enter Name" name="name" />
                    </div>

                    <div class="mb-3 mt-3">
                        <label for="amount" className="form-inputs-label">Amount</label>
                        <input type="text" class="form-control" autoComplete="off" required placeholder="Enter Amount" name="amount" />
                    </div>
                    <div class="mb-3">
                        <label className="form-inputs-label" >Month</label>
                        <select class="form-select" name="month">
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
                        <button type="submit" class="btn btn-primary btn-block">Record</button>
                    </div>
                    <br /><br />
                    </form>
                    
                </div>
            )       
        };

export default SavingForm;