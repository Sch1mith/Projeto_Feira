<?php
// Include the database connection class
require_once 'DBConnection.php';

// Check if the form is submitted
if (isset($_GET['search'])) {
    // Get the search query from the form
    $searchQuery = $_GET['search'];

    // Create a prepared statement
    $conn = DBConnection::getConnection();
    $sql = "SELECT * FROM lixo WHERE nome LIKE :searchQuery";
    $stmt = $conn->prepare($sql);
    $stmt->bindValue(':searchQuery', '%' . $searchQuery . '%'); // Wildcards for partial matching

    // Execute the query
    $stmt->execute();

    // Fetch the results
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Check if any results were found
    if ($results) {
        echo "<h2>Search Results</h2>";
        echo "<table border='1'>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                </tr>";

        // Loop through the results and display them in a table
        foreach ($results as $row) {
            echo "<tr>
                    <td>" . htmlspecialchars($row['id']) . "</td>
                    <td>" . htmlspecialchars($row['nome']) . "</td>
                  </tr>";
        }

        echo "</table>";
    } else {
        echo "<p>No results found for <strong>" . htmlspecialchars($searchQuery) . "</strong>.</p>";
    }
}