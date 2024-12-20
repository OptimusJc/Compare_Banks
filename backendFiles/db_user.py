import mysql.connector
from mysql.connector import Error


class DatabaseConnection:
    def __init__(self, host, user, password, database):
        """
        Initializes the connection parameters.
        """
        self.host = host
        self.user = user
        self.password = password
        self.database = database
        self.connection = None

    def connect(self):
        """
        Establishes a connection to the database.
        """
        try:
            self.connection = mysql.connector.connect(
                host=self.host,
                user=self.user,
                password=self.password,
                database=self.database
            )
            if self.connection.is_connected():
                print("Connected to the database")
        except Error as e:
            print(f"Error: {e}")
            self.connection = None

    def execute_query(self, query, params=None):
        """
        Executes a query (INSERT, UPDATE, DELETE).
        """
        if not self.connection:
            print("No database connection.")
            return None

        try:
            cursor = self.connection.cursor()
            cursor.execute(query, params)
            self.connection.commit()
            print("Query executed successfully.")
        except Error as e:
            print(f"Error executing query: {e}")

    def fetch_data(self, query, params=None):
        """
        Executes a SELECT query and fetches data.
        """
        if not self.connection:
            print("No database connection.")
            return None

        try:
            cursor = self.connection.cursor(dictionary=True)
            cursor.execute(query, params)
            return cursor.fetchall()
        except Error as e:
            print(f"Error fetching data: {e}")
            return None

    def close_connection(self):
        """
        Closes the database connection.
        """
        if self.connection and self.connection.is_connected():
            self.connection.close()
            print("Database connection closed.")


if __name__ == "__main__":
    # Replace the below values with your database credentials
    db = DatabaseConnection(
        host="localhost",
        user="your_username",
        password="your_password",
        database="BankDatabase"
    )

    # Connect to the database
    db.connect()

    # Example: Fetch all banks
    query = "SELECT * FROM Banks"
    results = db.fetch_data(query)
    if results:
        for row in results:
            print(row)

    # Close the connection
    db.close_connection()
