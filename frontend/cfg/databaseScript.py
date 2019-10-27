import mysql.connector as mariadb
import random
import datetime
from random import uniform
import random
from datetime import datetime, timedelta
mariadb_connection = mariadb.connect(user='aah4', password='ari', database='cfg')
cursor = mariadb_connection.cursor()


# Creating tables with predefined schema
# Might want to re-thing some of the attribute sizes ...
cursor.execute("CREATE TABLE users(id INT PRIMARY KEY, age INT, gender VARCHAR(20), lat DECIMAL(10, 8) NOT NULL, lng DECIMAL(11, 8) NOT NULL, user_result INT)")
mariadb_connection.commit()

cursor.execute("CREATE TABLE quizes(id INT PRIMARY KEY, user_id INT, FOREIGN KEY (user_id) REFERENCES users(id))")
mariadb_connection.commit()

cursor.execute("CREATE TABLE quiz_results(time DATETIME NOT NULL, quiz_id INT NOT NULL, user_id INT NOT NULL, user_result INT,PRIMARY KEY (quiz_id, user_id, time), FOREIGN KEY (quiz_id) REFERENCES quizes(id), FOREIGN KEY (user_id) REFERENCES users(id))")
mariadb_connection.commit()

NUMBER_OF_ENTRIES = 300

## generate random SQL entries

#
#
# def user_entries_generator():
#     for i in range(NUMBER_OF_ENTRIES):
#         age = random.randint(0,99)
#         gender = random.choice(["male","female","other"])
#         activity = random.randint(0,10)
#         SQL_STMT = ("INSERT INTO users (age, gender, lat, lng, user_result)"
#                     " VALUES (%s, %s, %s, %s, %s)"
#                     )
#         data = (age, gender, -19, 73, activity)
#         cursor.execute(SQL_STMT, data)
#         mariadb_connection.commit()
#
# def quiz_entries_generator():
#     for i in range(NUMBER_OF_ENTRIES):
#         user_id = random.randint(1,300)
#
#
#
#
#         SQL_STMT = ("INSERT INTO quizes (user_id)"
#                     " VALUES (%s)"
#                     )
#         print(SQL_STMT);
#
#
#
#         cursor.execute(SQL_STMT, (random.randint(1,300),))
#         mariadb_connection.commit()
#
#
# def quiz_result_generator():
#     for i in range(NUMBER_OF_ENTRIES):
#         date = random_date().strftime("%Y-%m-%d %H:%M:%S")
#         quiz_id = random.randint(1,300)
#         user_id = random.randint(1,300)
#         user_result = random.choice(["apple","banana","orange", "lemon","grape"])
#         activity = random.randint(0,10)
#
#         SQL_STMT = ("INSERT INTO quiz_results (time, quiz_id, user_id, user_result)"
#                     "VALUES (%s,%s,%s,%s)"
#                     )
#         data = (date, quiz_id, user_id, activity)
#         cursor.execute(SQL_STMT, data)
#         mariadb_connection.commit()
#
# def random_date():
#     start = datetime.now()
#     end = start + timedelta(days=10)
#     random_date = start + (end - start) * random.random()
#     return random_date;
#
# def main():
#     user_entries_generator()
#     quiz_entries_generator()
#     quiz_result_generator()
#
#
# if __name__ == '__main__':
#     main()
#
