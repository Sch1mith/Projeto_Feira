<?php
class DBConnection {
    private static $instance = null;
    private $conn;

    // Private constructor to prevent direct creation of objects
    private function __construct() {
        $host = 'localhost'; // Database host
        $dbname = 'projeto'; // Database name
        $username = 'root';  // Database username
        $password = '';      // Database password (change it for your environment)

        try {
            $this->conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    // Static method to get the database connection instance
    public static function getConnection() {
        if (self::$instance === null) {
            self::$instance = new DBConnection();
        }
        return self::$instance->conn;
    }

    // Prevent cloning the object
    private function __clone() {}

    // Prevent unserializing the object
    private function __wakeup() {}
}