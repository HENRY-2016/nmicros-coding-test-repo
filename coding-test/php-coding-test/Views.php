<?php
// import Controllers
include "Controller.php";
$request_url = $_SERVER['REQUEST_URI'];

// echo $request_url;
$create_saving = "/php-coding-test/Views.php/RegisterSavingsController";
$view_saving = "/php-coding-test/Views.php/ViewSavingsController";
$update_name_saving = "/php-coding-test/Views.php/UpdateSavingsControllerName";
$update_amount_saving = "/php-coding-test/Views.php/UpdateSavingsControllerAmount";
$update_month_saving = "/php-coding-test/Views.php/UpdateSavingsControllerMonth";
$delete_saving = "/php-coding-test/Views.php/DeleteViewSavingsController";


if ($request_url === $create_saving){RegisterSavingsController  ($request_url);}
elseif ($request_url === $view_saving){ViewSavingsController ($request_url);}
elseif ($request_url === $update_name_saving){UpdateSavingsControllerName ($request_url);}
elseif ($request_url === $update_amount_saving){UpdateSavingsControllerAmount ($request_url);}
elseif ($request_url === $update_month_saving){UpdateSavingsControllerMonth ($request_url);}
elseif ($request_url === $delete_saving){DeleteViewSavingsController ($request_url);}
else {echo "Invalid url specified ...";}


?>