<?php
require_once "db.php";

$query = "select * from tasks order by task_date asc, task_time asc";

$result = mysqli_query($sql, $query);

$tasks = [];

while ($row = mysqli_fetch_assoc($result)) {
    $tasks[] = $row;
}

echo json_encode($tasks);

mysqli_close($sql);