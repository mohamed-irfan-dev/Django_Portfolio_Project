
# Mohamed Irfan - Django Portfolio

## About the Project

This is my personal portfolio website developed using Python and Django. It showcases my profile, technical skills, education and projects.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Python
- Django
- SQLite3

## Features

- Personal Introduction
- About Me
- Technical Skills
- Projects Showcase
- Education Details
- Responsive Design
- Contact Form
- Contact Details Stored in Database
- Downloadable Resume

## Project Structure

```text
portfolio/
│
├── home/
├── portfolio/
├── static/
│   ├── css/
│   ├── img/
│   └── js/
├── templates/
├── .env.example
├── .gitignore
├── manage.py
├── requirements.txt
└── README.md
```

## Installation

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Move into the project folder

```bash
cd portfolio
```

### 3. Create virtual environment

```bash
python -m venv venv
```

### 4. Activate virtual environment

```bash
venv\Scripts\activate
```

### 5. Install dependencies

```bash
pip install -r requirements.txt
```

### 6. Create the .env file

Copy `.env.example` to a new file named `.env` and replace the `SECRET_KEY` value with your own random key.

```bash
copy .env.example .env
```

### 7. Run migrations

```bash
python manage.py migrate
```

### 8. Start the server

```bash
python manage.py runserver
```

Open http://127.0.0.1:8000/ in your browser.

## Author

**Mohamed Irfan**

Python Django Developer | Fresher
