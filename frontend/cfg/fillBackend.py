import random
import datetime
import mysql.connector as mariadb
mariadb_connection = mariadb.connect(user='aah4', password='ari', database='cfg')
cursor = mariadb_connection.cursor()
NUMBER_OF_ENTRIES = 300

def user_entries_generator():
    for i in range(NUMBER_OF_ENTRIES):
        age = random.randint(0,99)
        gender = random.choice(["male","female","other"])
        location = random.choice(["glasgow_south","glasgow_north", "glasgow_west", "glasgow_east","edinburgh_south","edinburgh_north", "edinburgh_west", "edinburgh_east"])
        city = random.choice(["edinburgh","glasgow"])
        activity = random.randint(0,10)
        cursor.execute("INSERT IGNORE INTO users(age, gender, location, city, activity) VALUES (%d, %d, %s, %s, %s, %d)", (idx, age, gender, location, city, activity))
        mariadb_connection.commit()

def quiz_entries_generator():
    for i in range(NUMBER_OF_ENTRIES):
        user_id = random.randint(1,300)
        cursor.execute("INSERT IGNORE INTO quiz(user_id) VALUES (%d)", (user_id))
        mariadb_connection.commit()

def quiz_result():
    for i in range(NUMBER_OF_ENTRIES):
        date = random_date(datetime.MINYEAR, datetime.MaxYEAR).strftime("%m/%d/%Y, %H:%M:%S")
        quiz_id = random.randint(1,300)
        user_id = random.randint(1,300)
        user_result = random.choice(["apple","banana","orange", "lemon","grape"])
        activity = random.randint(0,10)
    cursor.execute("INSERT IGNORE INTO quiz_result(date, quiz_id, user_id, user_result, activity) VALUES (%s,%d,%d,%s,%d)", (date, quiz_id, user_id, user_result, activity))

def random_date(start, end):
    """Generate a random datetime between `start` and `end`"""
    return start + datetime.timedelta(
        # Get a random amount of seconds between `start` and `end`
        seconds=random.randint(0, int((end - start).total_seconds())),
    )
