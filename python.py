import subprocess

def install_package(package_name):
    try:
        # Use subprocess to run pip install command
        subprocess.check_call(['pip', 'install', package_name])
        print(f"Successfully installed {package_name}")
    except subprocess.CalledProcessError:
        print(f"Failed to install {package_name}")

if __name__ == "__main__":
    package_name = input("Enter the name of the package to install: ")
    install_package(package_name)
