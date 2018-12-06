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
        private readonly EmployeeDB2Entities employeeDBEntities;

        public EmployeesController()
        {
            this.employeeDBEntities = new EmployeeDB2Entities();
        }

        public IEnumerable<Employee> Get()
        {
            return this.employeeDBEntities.Employees.ToList();
        }

        public Employee Get(string code)
        {
            return this.employeeDBEntities.Employees.FirstOrDefault(x => x.code == code);
        }
    }
}
