using DataTables.Mvc;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Vidly.Models;

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

        public ActionResult Get([ModelBinder(typeof(DataTablesBinder))] IDataTablesRequest requestModel)
        {
            var rentalQuery = _context.Rentals
                .Include(r => r.Customer)
                .Include(r => r.Movie);

            var totalCount = rentalQuery.Count();

            #region Filtering
            // Apply filters for searching
            if (requestModel.Search.Value != string.Empty)
            {
                var value = requestModel.Search.Value.Trim();
                rentalQuery = rentalQuery.Where(r => r.Customer.Name.Contains(value));
            }

            var filteredCount = rentalQuery.Count();

            #endregion Filtering

            #region Sorting
            // Sorting
            //var sortedColumns = requestModel.Columns.GetSortedColumns();
            //var orderByString = String.Empty;

            //foreach (var column in sortedColumns)
            //{
            //    orderByString += orderByString != String.Empty ? "," : "";
            //    orderByString += (column.Data) +
            //      (column.SortDirection ==
            //      Column.OrderDirection.Ascendant ? " asc" : " desc");
            //}

            rentalQuery = rentalQuery.OrderBy(r => r.Customer.Name);

            #endregion Sorting

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
    }
}