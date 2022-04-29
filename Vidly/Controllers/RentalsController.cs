using DataTables.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Vidly.Models;
using Vidly.ViewModels;

namespace Vidly.Controllers
{
    public class RentalsController : Controller
    {

        public ApplicationDbContext _context;

        public RentalsController()
        {
            _context = new ApplicationDbContext();
        }

        public ActionResult New()
        {
            return View();
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Edit(int id)
        {
            var rental1 = _context.RentHeaders.Include(r => r.Customer).Include(r => r.RentDetail).SingleOrDefault(r => r.RentId == id);
            //var rental2 = _context.RentalDetails.Include(d => d.Movie).Where(d => d.RentalId == rental1.RentId);
            var rental = _context.RentHeaders.Include(r => r.Customer).SingleOrDefault(r => r.RentId == id);
            var rentDetail = _context.RentDetails.Include(r => r.Movie).ToList().Where(r => r.RentId == id);

            if (rental == null)
                return HttpNotFound();

            //var viewModel = new RentalFormViewModel
            //{
            //    Id = rental.RentId,
            //    CustomerName = rental.Customer.Name,
            //    RentDetail = rental.RentDetail
            //};
            var viewModel = rentDetail.Select(rentalD => new RentalFormViewModel
            {

                CustomerName = rentalD.RentHeader.Customer.Name,
                MovieId = rentalD.Movie.Id,
                MovieName = rentalD.Movie.Name,
                Id = rentalD.Id,
                DateReturned = rentalD.DateReturned
            }).ToList();

            //var viewModel = rentDetail.Select(rentalD => new RentalDetailsFormViewModel
            //{

            //    RentalDetails = 
            //}).ToList();

            return View("RentalForm", viewModel);
        }

       [HttpPost]
       [ValidateAntiForgeryToken]
        public ActionResult Save(List<RentalFormViewModel> rentalDetail)
        {
            //var rentalDetail = JsonConvert.DeserializeObject<List<RentalFormViewModel>>(model);
            if (rentalDetail == null)
                return HttpNotFound();

            foreach(var item in rentalDetail)
            {
                var movieInDB = _context.RentDetails.SingleOrDefault(m => m.Id == item.Id);

                if (movieInDB == null)
                    return HttpNotFound();

                movieInDB.DateReturned = item.DateReturned;
                _context.SaveChanges();
            }


            return View("Index");
        }

        public ActionResult Get([ModelBinder(typeof(DataTablesBinder))] IDataTablesRequest requestModel)
        {
            var rentalQuery = _context.Rentals
                .Include(r => r.Customer)
                .Include(r => r.Movie);

            var totalCount = rentalQuery.Count();

            // Apply filters for searching
            if (requestModel.Search.Value != string.Empty)
            {
                var value = requestModel.Search.Value.Trim();
                rentalQuery = rentalQuery.Where(r => r.Customer.Name.Contains(value));
            }

            var filteredCount = rentalQuery.Count();

            rentalQuery = rentalQuery.OrderBy(r => r.Customer.Name);

            // Paging
            rentalQuery = rentalQuery.Skip(requestModel.Start).Take(requestModel.Length);

            var data = rentalQuery.Select(rental => new
            {
                Customer_Id = rental.Customer.Name,
                Movie_Id = rental.Movie.Name,
                Id = rental.Id
            }).ToList();

            return Json(new DataTablesResponse
            (requestModel.Draw, data, filteredCount, totalCount),
                        JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetDetails([ModelBinder(typeof(DataTablesBinder))] IDataTablesRequest requestModel)
        {
            var rentalQuery = _context.RentHeaders
                .Include(r => r.Customer);

            var totalCount = rentalQuery.Count();

            // Apply filters for searching
            if (requestModel.Search.Value != string.Empty)
            {
                var value = requestModel.Search.Value.Trim();
                rentalQuery = rentalQuery.Where(r => r.Customer.Name.Contains(value) || r.RentId.ToString().Contains(value));
            }

            var filteredCount = rentalQuery.Count();

            rentalQuery = rentalQuery.OrderBy(r => r.RentId);

            // Paging
            rentalQuery = rentalQuery.Skip(requestModel.Start).Take(requestModel.Length);

            var data = rentalQuery.Select(rental => new
            {
                RentId = rental.RentId,
                CustomerName = rental.Customer.Name,
                DateRented = rental.DateRented
            }).ToList();

            return Json(new DataTablesResponse
            (requestModel.Draw, data, filteredCount, totalCount),
                        JsonRequestBehavior.AllowGet);
        }
    }
}