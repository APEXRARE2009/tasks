<?php
require_once "db.php";

if (isset($_POST["task"]) && !empty($_POST["task"]) && isset($_POST["task_date"]) && !empty($_POST["task_date"]) && isset($_POST["task_time"]) && !empty($_POST["task_time"]) && isset($_POST["priority"]) && !empty($_POST["priority"])) {
    $task = mysqli_real_escape_string($sql, $_POST["task"]);
    $task_date = mysqli_real_escape_string($sql, $_POST["task_date"]);
    $task_time = mysqli_real_escape_string($sql, $_POST["task_time"]);
    $priority = mysqli_real_escape_string($sql, $_POST["priority"]);

    $query = "insert into tasks(task, task_date, task_time, priority) values (\"$task\", \"$task_date\", \"$task_time\", \"$priority\")";

    $result = mysqli_query($sql, $query);

    if ($result) {
        header("location: index.html");
    } else {
        echo "error";
    }
}

mysqli_close($sql);