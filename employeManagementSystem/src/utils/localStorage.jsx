localStorage.clear()
const admin = [
  {
    "id": 1,
    "first_name": "Admin",
    "email": "admin@example.com",
    "password": "123"
  }
];

const employees = [
  {
    "id": 2,
    "first_name": "John",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Prepare Report",
        "task_description": "Compile data for the monthly financial report.",
        "task_date": "2025-03-10",
        "category": "Finance",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Update Client Records",
        "task_description": "Ensure all client information is up to date.",
        "task_date": "2025-03-08",
        "category": "Admin",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ],
    "task_summary": {
      "active": 1,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "first_name": "Emma",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Fix UI Bug",
        "task_description": "Resolve alignment issues on the landing page.",
        "task_date": "2025-03-12",
        "category": "Development",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Code Review",
        "task_description": "Review pull requests for the new feature update.",
        "task_date": "2025-03-09",
        "category": "Development",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ],
    "task_summary": {
      "active": 1,
      "new_task": 0,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "first_name": "Liam",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Customer Support",
        "task_description": "Respond to customer emails regarding product issues.",
        "task_date": "2025-03-11",
        "category": "Support",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ],
    "task_summary": {
      "active": 1,
      "new_task": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 5,
    "first_name": "Sophia",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Social Media Post",
        "task_description": "Create and schedule posts for the company’s LinkedIn page.",
        "task_date": "2025-03-07",
        "category": "Marketing",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "task_title": "SEO Optimization",
        "task_description": "Update meta descriptions and keywords for better ranking.",
        "task_date": "2025-03-14",
        "category": "Marketing",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ],
    "task_summary": {
      "active": 1,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 6,
    "first_name": "Noah",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Database Backup",
        "task_description": "Perform a full backup of the company database.",
        "task_date": "2025-03-13",
        "category": "IT",
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true
      },
      {
        "task_title": "System Security Audit",
        "task_description": "Review security logs and identify potential vulnerabilities.",
        "task_date": "2025-03-15",
        "category": "IT",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ],
    "task_summary": {
      "active": 1,
      "new_task": 1,
      "completed": 0,
      "failed": 1
    }
  }
];

  
  export const setLocalStorage = ()=>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
  }
  export const getLocalStorage = ()=>{
     const data = localStorage.getItem("employees",employees)
      return {employees,admin}
  }