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
    public class NewRentalsController : ApiController
    {
        private ApplicationDbContext _context;

        public NewRentalsController()
        {
            _context = new ApplicationDbContext();
        }

        //[HttpPost]
        //public IHttpActionResult CreateNewRentals(RentalDto newRental)
        //{

        //    var customer = _context.Customers.Single(c => c.Id == newRental.CustomerId);

        //    var movies = _context.Movies.Where(
        //        m => newRental.MovieIds.Contains(m.Id)).ToList();

        //    foreach (var movie in movies)
        //    {
        //        if (movie.NumberAvailable == 0)
        //            return BadRequest("Movie is not available");

        //        movie.NumberAvailable--;

        //        var rental = new Rental
        //        {
        //            Customer = customer,
        //            Movie = movie,
        //            DateRented = DateTime.Now
        //        };

        //        _context.Rentals.Add(rental);
        //    }

        //    _context.SaveChanges();

        //    return Ok();
        //}
        [HttpGet]
        public IHttpActionResult GetRentals(int page, int start, int limit)
        {

            var rentalsQuery = _context.RentHeaders
                .Include(r => r.Customer)
                .Include(r => r.RentDetail);

            rentalsQuery.Include("RentDetail.Movie");

            var totalCount = rentalsQuery.Count();

            rentalsQuery = rentalsQuery.OrderBy("RentId desc");

            rentalsQuery = rentalsQuery.Skip((page - 1) * limit).Take(limit);

            var rent = rentalsQuery
                .ToList()
                .Select(Mapper.Map<RentHeader, RentalHeaderDto>);

            /*var rent = rentalsQuery.Select(rental => new
            {
                RentId = rental.RentId,
                Customer = rental.Customer,
                CustomerId = rental.CustomerId,
                CustomerName = rental.Customer.Name,
                DateRented = rental.DateRented,
                RentDetails = rental.RentDetail
            }).ToList();*/

            var item = new
            {
                rent,
                totalCount
            };

            return Ok(item);
            //return Ok();
        }

        //[HttpGet]
        //public IHttpActionResult GetRentals(int page, int start, int limit)
        //{

        //    var rentalsQuery = _context.RentDetails
        //        .Include(r => r.RentHeader)
        //        .Include(r => r.Movie);

        //    var totalCount = rentalsQuery.Count();

        //    rentalsQuery = rentalsQuery.OrderBy("RentId asc");

        //    rentalsQuery = rentalsQuery.Skip((page - 1) * limit).Take(limit);

        //    var rent = rentalsQuery
        //        .ToList()
        //        .Select(Mapper.Map<RentDetail, RentalDetailDto>);

        //    var item = new
        //    {
        //        rent,
        //        totalCount
        //    };

        //    return Ok(item);
        //    //return Ok();
        //}

        [HttpGet]
        public IHttpActionResult GetRentals(int page, int start, int limit, string filter)
        {

            var rentalsQuery = _context.RentHeaders
                .Include(c => c.Customer);

            var filterItem = Newtonsoft.Json.JsonConvert.DeserializeObject<List<FilterItem>>(filter);

            if (filterItem.First().value != string.Empty)
            {
                var value = filterItem.First().value.Trim();
                rentalsQuery = rentalsQuery.Where(c => c.Customer.Name.Contains(value));
            }

            var totalCount = rentalsQuery.Count();

            rentalsQuery = rentalsQuery.OrderBy("RentId desc");

            rentalsQuery = rentalsQuery.Skip((page - 1) * limit).Take(limit);

            var rent = rentalsQuery
                .ToList()
                .Select(Mapper.Map<RentHeader, RentalHeaderDto>);

            var item = new
            {
                rent,
                totalCount
            };

            return Ok(item);
        }

        [HttpPost]
        public IHttpActionResult CreateNewRentals(RentalHeaderDto newRental)
        {

            var customer = _context.Customers.Single(c => c.Id == newRental.CustomerId);

            //var movies = _context.Movies.Where(
            //    m => newRental.MovieIds.Contains(m.Id)).ToList();

            //var movies = _context.Movies.Where(
            //    m => newRental.RentDetail.Select(r => r.MovieId).Contains(m.Id)).ToList();
            //var movies = _context.Movies.Where(a => newRental.RentDetail.Select(i => i.MovieId).Contains(a.Id)).ToList();
            var movieids = newRental.RentDetail.Select(s => s.MovieId).ToList();
            var movies = _context.Movies.Where(
                m => movieids.Contains(m.Id)).ToList();

            var rental = new RentHeader();

            foreach (var movie in movies)
            {
                if (movie.NumberAvailable == 0)
                    return BadRequest("Movie is not available");

                movie.NumberAvailable--;

                rental.Customer = customer;
                rental.DateRented = DateTime.Now;
                rental.RentDetail.Add(
                new RentDetail
                {
                    Movie = movie
                });
            }

            _context.RentHeaders.Add(rental);
            _context.SaveChanges();

            return Ok();
        }

        [HttpPut]
        public IHttpActionResult UpdateNewRentals(int id, RentalDetailDto rentalDetailDto)
        {
            //if (!ModelState.IsValid)
            //    return BadRequest();

            var rentalInDB = _context.RentDetails.SingleOrDefault(c => c.Id == id);

            if (rentalInDB == null)
                return NotFound();

            rentalDetailDto.Movie = null;

            Mapper.Map(rentalDetailDto, rentalInDB);
            _context.SaveChanges();

            return Ok();
        }

    }
}
