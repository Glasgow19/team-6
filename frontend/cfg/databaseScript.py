import mysql.connector as mariadb
mariadb_connection = mariadb.connect(user='aah4', password='ari', database='cfg')
cursor = mariadb_connection.cursor()


# Creating tables with predefined schema
# Might want to re-thing some of the attribute sizes ...
cursor.execute("CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY KEY, age INT, gender VARCHAR(20), location VARCHAR(100), city VARCHAR(20), user_result INT)")
mariadb_connection.commit()

cursor.execute("CREATE TABLE quizes(id INT AUTO_INCREMENT PRIMARY KEY, user_id INT, FOREIGN KEY (user_id) REFERENCES users(id))")
mariadb_connection.commit()

cursor.execute("CREATE TABLE quiz_result(time DATETIME NOT NULL, quiz_id INT NOT NULL, user_id INT NOT NULL, user_result INT,PRIMARY KEY (quiz_id, user_id, time), FOREIGN KEY (quiz_id) REFERENCES quizes(id), FOREIGN KEY (user_id) REFERENCES users(id))")
mariadb_connection.commit()

