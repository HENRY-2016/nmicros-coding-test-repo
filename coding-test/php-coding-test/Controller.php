
<?php

include "Model.php";


function RegisterSavingsController ($requesturl)
{
    // format
    // RegisterSavings ($Id, ."<=====>".$name."<=====>",$amount."<=====>",$month."<=====>",$date);

    $name = "<=====>".trim($_POST['name'])."<=====>";
    $amount1 = trim($_POST['amount']);
    $month = trim($_POST['month'])."<=====>";

    $amount = number_format($amount1)."<=====>";
    $Id = date("dh-is");
    $date = date("d/m/Y");

    // insert function
    RegisterSavings ($Id, $name,$amount,$month,$date);
    // echo $month;
}

function UpdateSavingsControllerName  ($requesturl)
{
    $Id = trim($_POST['id']);
    $name = "<=====>".trim($_POST['name'])."<=====>";
    UpdateSavingsName ($Id, $name);
    // echo $Id.$name;
}

function UpdateSavingsControllerAmount  ($requesturl)
{
    $Id = trim($_POST['id']);
    $amount1 = trim($_POST['amount']);
    $amount = number_format($amount1)."<=====>";
    UpdateSavingsAmount ($Id, $amount);
    // echo $Id.$amount;
}

function UpdateSavingsControllerMonth  ($requesturl)
{
    $Id = trim($_POST['id']);
    $month = trim($_POST['month'])."<=====>";
    UpdateSavingsMonth ($Id, $month);
    // echo $Id.$month;
}

function DeleteViewSavingsController ($requesturl) {$Id = trim($_POST['id']); DeleteViewSavings ($Id);}

function ViewSavingsController ($requesturl) {ViewSavings();}

?>