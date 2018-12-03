using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeWebService.Controllers
{
    public class EmployeesController : ApiController
    {
        private readonly EmployeeDBEntities employeeDBEntities;

        public EmployeesController()
        {
            this.employeeDBEntities = new EmployeeDBEntities();
        }

        public IEnumerable<Employee> GetEmployees()
        {
            return this.employeeDBEntities.Employees.ToList();
        }

        public Employee GetEmployees(int employeeId)
        {
            return this.employeeDBEntities.Employees.First(x => x.Id == employeeId);
        }
    }
}
