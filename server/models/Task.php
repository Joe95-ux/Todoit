<?php
class Task {
    private $conn;
    private $table = "tasks";

    public $id;
    public $title;
    public $completed;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function getAll() {
        $query = "SELECT * FROM {$this->table} ORDER BY created_at DESC";
        return $this->conn->query($query);
    }

    public function create() {
        $query = "INSERT INTO {$this->table} (title) VALUES (:title)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":title", $this->title);
        return $stmt->execute();
    }

    public function update() {
        $query = "UPDATE {$this->table} SET completed = :completed WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":completed", $this->completed, PDO::PARAM_BOOL);
        $stmt->bindParam(":id", $this->id);
        return $stmt->execute();
    }

    public function delete() {
        $query = "DELETE FROM {$this->table} WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $this->id);
        return $stmt->execute();
    }
}
