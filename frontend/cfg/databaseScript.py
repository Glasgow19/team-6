import random
import datetime
import mysql.connector as mariadb
import random
import datetime
import random
from datetime import datetime, timedelta
mariadb_connection = mariadb.connect(user='aah4', password='ari', database='cfg')
cursor = mariadb_connection.cursor()


# Creating tables with predefined schema
# Might want to re-thing some of the attribute sizes ...
cursor.execute("CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY KEY, age INT, gender VARCHAR(20), location VARCHAR(100), city VARCHAR(20), activity INT)")
mariadb_connection.commit()

cursor.execute("CREATE TABLE quizes(id INT AUTO_INCREMENT PRIMARY KEY, user_id INT, FOREIGN KEY (user_id) REFERENCES users(id))")
mariadb_connection.commit()

<<<<<<< HEAD
cursor.execute("CREATE TABLE quiz_results(time DATETIME NOT NULL, quiz_id INT NOT NULL, user_id INT NOT NULL, user_result INT,PRIMARY KEY (quiz_id, user_id, time), FOREIGN KEY (quiz_id) REFERENCES quizes(id), FOREIGN KEY (user_id) REFERENCES users(id))")
mariadb_connection.commit()

NUMBER_OF_ENTRIES = 300

## generate random SQL entries


=======
cursor.execute("CREATE TABLE quiz_results(time DATETIME NOT NULL, quiz_id INT NOT NULL, user_id INT NOT NULL, user_result VARCHAR(50), activity INT, PRIMARY KEY (quiz_id, user_id, time), FOREIGN KEY (quiz_id) REFERENCES quizes(id), FOREIGN KEY (user_id) REFERENCES users(id))")
mariadb_connection.commit()


NUMBER_OF_ENTRIES = 300

## generate random SQL entries
import random
import datetime

NUMBER_OF_ENTRIES = 300
>>>>>>> 433c2e051aa6caf0851c2f5808604a6cc8ad19b3

def user_entries_generator():
    for i in range(NUMBER_OF_ENTRIES):
        age = random.randint(0,99)
        gender = random.choice(["male","female","other"])
        location = random.choice(["glasgow_south","glasgow_north", "glasgow_west", "glasgow_east","edinburgh_south","edinburgh_north", "edinburgh_west", "edinburgh_east"])
        city = random.choice(["edinburgh","glasgow"])
        activity = random.randint(0,10)
<<<<<<< HEAD
        SQL_STMT = ("INSERT INTO users (age, gender, location, city, user_result)"
=======
        SQL_STMT = ("INSERT INTO users (age, gender, location, city, activity)"
>>>>>>> 433c2e051aa6caf0851c2f5808604a6cc8ad19b3
                    " VALUES (%s, %s, %s, %s, %s)"
                    )
        data = (age, gender, location, city, activity)
        cursor.execute(SQL_STMT, data)
        mariadb_connection.commit()

def quiz_entries_generator():
    for i in range(NUMBER_OF_ENTRIES):
        user_id = random.randint(1,300)




        SQL_STMT = ("INSERT INTO quizes (user_id)"
                    " VALUES (%s)"
                    )
        print(SQL_STMT);



        cursor.execute(SQL_STMT, (random.randint(1,300),))
        mariadb_connection.commit()


def quiz_result_generator():
    for i in range(NUMBER_OF_ENTRIES):
<<<<<<< HEAD
        date = random_date().strftime("%Y-%m-%d %H:%M:%S")
=======
        date = random_date(datetime.MINYEAR, datetime.MaxYEAR).strftime("%m/%d/%Y, %H:%M:%S")
>>>>>>> 433c2e051aa6caf0851c2f5808604a6cc8ad19b3
        quiz_id = random.randint(1,300)
        user_id = random.randint(1,300)
        user_result = random.choice(["apple","banana","orange", "lemon","grape"])
        activity = random.randint(0,10)

<<<<<<< HEAD
        SQL_STMT = ("INSERT INTO quiz_results (time, quiz_id, user_id, user_result)"
                    "VALUES (%s,%s,%s,%s)"
                    )
        data = (date, quiz_id, user_id, activity)
        cursor.execute(SQL_STMT, data)
        mariadb_connection.commit()

def random_date():
    start = datetime.now()
    end = start + timedelta(days=10)
    random_date = start + (end - start) * random.random()
    return random_date;
=======
        SQL_STMT = ("INSERT INTO quiz_results (date, quiz_id, user_id, user_result, activity)"
                    "VALUES (%s,%s,%s,%s,%s)"
                    )
    data = (date, quiz_id, user_id, user_result, activity)
    cursor.execute(SQL_STMT, data)
    mariadb_connection.commit()

def random_date(start, end):
    """Generate a random datetime between `start` and `end`"""
    return start + datetime.timedelta(
        # Get a random amount of seconds between `start` and `end`
        seconds=random.randint(0, int((end - start).total_seconds())),
    )
>>>>>>> 433c2e051aa6caf0851c2f5808604a6cc8ad19b3

def main():
    user_entries_generator()
    quiz_entries_generator()
    quiz_result_generator()


if __name__ == '__main__':
    main()

<<<<<<< HEAD
=======


def main():
    user_entries_generator()
    quiz_entries_generator()
    quiz_result_generator()


if __name__ == '__main__':
    main()
>>>>>>> 433c2e051aa6caf0851c2f5808604a6cc8ad19b3
