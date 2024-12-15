
# Installation Guide for My Web App

## **Project Overview**

This project consists of a web application as part of an Academic Project in web developement module in SUPCOM built using Django for the backend and React for the frontend. The folder structure is as follows:

```
GamingVerse app/
   frontend/    # React frontend
   backend/     # Django backend
   README.md    # Setup instructions
   requirements.txt  # Backend dependencies
```

----------

## **Prerequisites**

Before starting, make sure you have the following installed:

1.  **Python** (version 3.12 or higher)
    
2.  **React** (version 18.3 or higher) 

3. **Node.js** (version 20.14 or higher) and npm (comes with Node.js)
    
4.  **Git** (optional, for version control)
    
5.  A code editor (e.g., Visual Studio Code)
    

----------

## **Step-by-Step Installation**

### **1. Clone or Unzip the Project**

1.  If you received the project as a zip file:
    
    -   Extract the contents of the zip file to your preferred location.
        
2.  If you are using Git:
    
    ```
    git clone https://github.com/MortadhaJabari/GamingVerseApp.git
    cd my_app
    ```
    

----------

### **2. Setting Up the Backend (Django)**

#### **a. Create a Virtual Environment**


Create a virtual environment:

```
python -m venv env
```

Activate the virtual environment:

-   On **Windows**:
    
    ```
    env\Scripts\activate
    ```
    
-   On **Linux/Mac**:
    
    ```
    source env/bin/activate
    ```
    

#### **b. Install Dependencies**



Install the required Python packages using `requirements.txt`:

```
pip install -r requirements.txt
```

#### **c. Set Up the Database**

If the project uses a SQLite database, migrations might already be configured. Run the following commands to ensure the database is set up correctly:

Navigate to the `backend` directory:

```
cd backend
```
```
python manage.py migrate
```

If any static files are used, collect them:

```
python manage.py collectstatic
```

#### **d. Run the Backend Server**

Start the Django development server:

```
python manage.py runserver
```

The backend should now be running at `http://127.0.0.1:8000/`.

----------

### **3. Setting Up the Frontend (React)**

#### **a. Navigate to the Frontend Directory**

From the root directory of the project, go to the `frontend` folder:

```
cd ../frontend
```

#### **b. Install Dependencies**

Install the required Node.js packages:

```
npm install
```

#### **c. Run the Frontend Development Server**

Start the React development server:

```
npm start
```

The frontend should now be running at `http://localhost:3000/`.



## **Additional Notes**

the   `backend/media` directory contains all the media that user can store in the app for example profile photos and Posts .



----------

## **Testing the App**

1.  Open your browser and visit the frontend at:
    
    ```
    http://localhost:3000/
    ```
    
2.  Test API calls or other interactions with the backend at:
    
    ```
    http://127.0.0.1:8000/
    ```
    

----------

This guide should help you set up and run the project successfully. If you encounter any issues, feel free to reach out for support!
