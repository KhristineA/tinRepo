using AutoMapper;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Dynamic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Vidly.Dtos;
using Vidly.Models;

namespace Vidly.Controllers.Api
{
    public class CustomersController : ApiController
    {
        private ApplicationDbContext _context;
        public CustomersController()
        {
            _context = new ApplicationDbContext();
        }

        ////GET /api/customers
        //public IHttpActionResult GetCustomers(string query = null)
        //{
        //    var customersQuery = _context.Customers
        //        .Include(c => c.MembershipType);

        //    if (!String.IsNullOrWhiteSpace(query))
        //        customersQuery = customersQuery.Where(c => c.Name.Contains(query));

        //    var customerDtos = customersQuery
        //        .ToList()
        //        .Select(Mapper.Map<Customer, CustomerDto>);

        //    return Ok(customerDtos);
        //}

        [HttpGet]
        public IHttpActionResult GetCustomers(int page, int start, int limit)
        {

            var customersQuery = _context.Customers
                .Include(c => c.MembershipType);

            var totalCount = customersQuery.Count();

            customersQuery = customersQuery.OrderBy("Id asc");

            customersQuery = customersQuery.Skip((page - 1) * limit).Take(limit);

            var customer = customersQuery
                .ToList()
                .Select(Mapper.Map<Customer, CustomerDto>);

            var item = new
            {
                customer,
                totalCount
            };

            return Ok(item);
        }

        [HttpGet]
        public IHttpActionResult GetCustomers(int page, int start, int limit, string filter)
        {

            var customersQuery = _context.Customers
                .Include(c => c.MembershipType);

            var filterItem = Newtonsoft.Json.JsonConvert.DeserializeObject<List<FilterItem>>(filter);

            if (filterItem.First().value != string.Empty)
            {
                var value = filterItem.First().value.Trim();
                customersQuery = customersQuery.Where(c => c.Name.Contains(value));
            }

            var totalCount = customersQuery.Count();

            customersQuery = customersQuery.OrderBy("Id asc");

            customersQuery = customersQuery.Skip((page - 1) * limit).Take(limit);
            //customersQuery = customersQuery.Skip(start).Take(limit);

            var customer = customersQuery
                .ToList()
                .Select(Mapper.Map<Customer, CustomerDto>);

            //foreach(var items in customer)
            //{
            //    items.Birthdate = items.Birthdate.Value.GetDateTimeFormats().FirstOrDefault();
            //}

            var item = new
            {
                customer,
                totalCount
            };

            return Ok(item);
        }

        //GET /api/customers/1
        public IHttpActionResult GetCustomer(int id)
        {
            var customer = _context.Customers.SingleOrDefault(c => c.Id == id);
            if (customer == null)
                return NotFound();

            return Ok(Mapper.Map<Customer, CustomerDto>(customer));
        }

        //POST /api/customers
        [HttpPost]
        public IHttpActionResult CreateCustomer(CustomerDto customerDto)
        {
            //if (!ModelState.IsValid)
            //    return BadRequest();

            var customer = Mapper.Map<CustomerDto, Customer>(customerDto);
            _context.Customers.Add(customer);
            _context.SaveChanges();

            customerDto.Id = customer.Id;

            return Ok();
            //return Created(new Uri(Request.RequestUri + "/" + customer.Id), customerDto);
        }

        //PUT /api/customers/1
        [HttpPut]
        public IHttpActionResult UpdateCustomer(int id, CustomerDto customerDto)
        {
            //if (!ModelState.IsValid)
            //    return BadRequest();

            var customerInDB = _context.Customers.SingleOrDefault(c => c.Id == id);

            if (customerInDB == null)
                return NotFound();

            customerDto.MembershipType = null;

            Mapper.Map(customerDto, customerInDB);
            _context.SaveChanges();

            return Ok();
        }

        //DELETE /api/customers/1
        [HttpDelete]
        public IHttpActionResult DeleteCustomer(int id)
        {
            var customerInDb = _context.Customers.SingleOrDefault(c => c.Id == id);
            if (customerInDb == null)
                return NotFound();

            //var customerInRent = _context.RentDetails.Where(r => r.RentId == id && r.DateReturned == null);
            //if (customerInRent != null)
            //    return BadRequest("Cannot delete - Customer has a rental record.");

            _context.Customers.Remove(customerInDb);
            _context.SaveChanges();

            return Ok();
        }
    }
}
