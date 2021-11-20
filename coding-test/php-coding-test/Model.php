
<?php
$db_path = 'database/saving.db';
$db = new SQLite3($db_path);
if (!$db) {echo $db->lastErrorMsg();}
// else {echo "Opened Data Base Successfully\n";}

function CreateDataBaseTables ()
{
    global $db;

    $saving_table = "CREATE TABLE IF NOT EXISTS savings (ID TEXT PRIMARY KEY, SNAME TEXT, SAMOUNT  TEXT, SMONTH TEXT,SDATE TEXT)";
    
    $tables = array($saving_table);

    foreach ($tables as $table_name)
    {
        $table_name_length = strlen('$table_name');
        $created_table = substr($table_name, 26,$table_name_length);
        $create_table_cmd = $db->exec($table_name);
        if (!$create_table_cmd) {echo $db->lastErrorMsg();}
        else {echo $created_table."...Created Very Well\n";echo"";}
    }
    $db->close();

}


/** 
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 *              ================
 *              WRITTING TO DB
 *              ================
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 *  
*/
function RegisterSavings ($Id, $name,$amount,$month,$date)
{
    global $db;
    $insert_cmd = "INSERT INTO savings VALUES ('$Id','$name','$amount', '$month','$date')";
    $insert_excution = $db->exec($insert_cmd);
    if (!$insert_excution) {echo $db->lastErrorMsg();}
    else {echo "Success";}
    $db->close();
}

// $name = "Tom Henry".'<span class="td-spacing"></span>';
// RegisterSavings ("412","<=====>Tom Henry<=====>", "10,000<=====>","Jan<====>","19/11/2021");
// RegisterSavings ("Id","Name<=====>","Amount<=====>","Month<=====>","Date");

/** 
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 *              ================
 *              READING FROM DB
 *              ================
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 *  
*/
function ViewSavings ()
{
    global $db;
    $results = array();
    $select_cmd = "SELECT * FROM savings";
    $query_cmd = $db->query($select_cmd);
    while ($row = $query_cmd->fetchArray(SQLITE3_ASSOC))
        {
            // NAMES TEXT,DATES TEXT,AMOUNT TEXT, YEARS TEXT, MONTHS
            $SID = $row['ID']; 
            $SNAME = $row['SNAME']; 
            $SAMOUNT = $row['SAMOUNT'];
            $SMONTH = $row['SMONTH'];
            $SDATE = $row['SDATE'];

            // create an array(key:value) to results
            // 'SNAME' => $SNAME, 
            //                     'SAMOUNT' => $AMOUNT,
            //                     'SDATE' => $SDATE,
            //                     'SMONTH' => $SMONTH
            $results[] = array( 
                            $SID => $SID,
                            $SNAME => $SNAME, 
                            $SAMOUNT => $SAMOUNT,
                            $SMONTH => $SMONTH,
                            $SDATE => $SDATE,

                            );
        }

    $json_results = json_encode($results);
    echo $json_results;
}

// ViewSavings ();
/** 
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 *              ================
 *              DELETING FROM DB
 *              ================
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 *  
*/
function DeleteViewSavings ($Id)
{
    
    global $db;
    $delete_cmd = "DELETE FROM savings WHERE ID = '$Id'";
    $delete_excution = $db->exec($delete_cmd);
    if (!$delete_excution) {echo $db->lastErrorMsg();}
    else {echo "Success";}
    $db->close();
}

/** 
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 *              ================
 *              UPDATING DB
 *              ================
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 *  
*/

// function UpdateSavingsName ($Id, $name,$amount,$month,$date)
// {
//     global $db;
//     $update_cmd = "UPDATE savings SET SNAME = '$name',SMONTH = '$month',SDATE = '$date',SAMOUNT='$amount' WHERE ID = '$Id'";

//     $update_cmd_excution = $db->exec($update_cmd);
//     if (!$update_cmd_excution) {echo $db->lastErrorMsg();}
//     else {echo "Success";}
//     $db->close();
// }

function UpdateSavingsName ($Id, $name)
{
    global $db;
    $update_cmd = "UPDATE savings SET SNAME = '$name' WHERE ID = '$Id'";

    $update_cmd_excution = $db->exec($update_cmd);
    if (!$update_cmd_excution) {echo $db->lastErrorMsg();}
    else {echo "Success";}
    $db->close();
}

function UpdateSavingsAmount ($Id,$amount)
{
    global $db;
    $update_cmd = "UPDATE savings SET SAMOUNT='$amount' WHERE ID = '$Id'";

    $update_cmd_excution = $db->exec($update_cmd);
    if (!$update_cmd_excution) {echo $db->lastErrorMsg();}
    else {echo "Success";}
    $db->close();
}
function UpdateSavingsMonth ($Id, $month)
{
    global $db;
    $update_cmd = "UPDATE savings SET SMONTH = '$month' WHERE ID = '$Id'";

    $update_cmd_excution = $db->exec($update_cmd);
    if (!$update_cmd_excution) {echo $db->lastErrorMsg();}
    else {echo "Success";}
    $db->close();
}


// CreateDataBaseTables ();
?>