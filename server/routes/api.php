<?php
require_once '../config/Database.php';
require_once '../controllers/TaskController.php';

header("Content-Type: application/json");
$db = (new Database())->connect();
$controller = new TaskController($db);

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $controller->index();
        break;
    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        $controller->store($data);
        break;
    case 'PUT':
        $data = json_decode(file_get_contents("php://input"), true);
        $controller->update($data);
        break;
    case 'DELETE':
        parse_str(file_get_contents("php://input"), $data);
        $controller->destroy($data['id']);
        break;
    default:
        echo json_encode(['error' => 'Method not allowed']);
}
