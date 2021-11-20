
// Responsible for viewing data
import React, { useState, useEffect } from "react";
import ViewDatabaseData from "./viewdatabasedata";

// CreateSaving Component
function ViewSavings  ()  
{

    // Return student form
    return (
            <div class="user-veiw-form container mt-3">
                <h2>Your Savings</h2>
                            
                <table class="table">
                    <tbody>
                    <ViewDatabaseData></ViewDatabaseData>
                    </tbody>
                </table>
            </div>
        )
}

export default ViewSavings;