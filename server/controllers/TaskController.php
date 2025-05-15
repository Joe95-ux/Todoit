<?php
require_once '../models/Task.php';

class TaskController {
    private $task;

    public function __construct($db) {
        $this->task = new Task($db);
    }

    public function index() {
        $stmt = $this->task->getAll();
        $tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($tasks);
    }

    public function store($data) {
        $this->task->title = $data['title'] ?? '';
        echo json_encode(['success' => $this->task->create()]);
    }

    public function update($data) {
        $this->task->id = $data['id'];
        $this->task->completed = $data['completed'];
        echo json_encode(['success' => $this->task->update()]);
    }

    public function destroy($id) {
        $this->task->id = $id;
        echo json_encode(['success' => $this->task->delete()]);
    }
}
