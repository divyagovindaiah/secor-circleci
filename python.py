# This script intentionally contains a vulnerability for testing purposes
# Do not use this code in production

import os

def vulnerable_function(user_input):
    # This function is vulnerable to command injection
    os.system(f"echo {user_input}")

if __name__ == "__main__":
    user_input = input("Enter something: ")
    vulnerable_function(user_input)
