using DataTables.Mvc;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;
using System.Linq.Dynamic;
using System.Web;
using System.Web.Mvc;
using Vidly.Models;
using Vidly.ViewModels;

namespace Vidly.Controllers
{
    public class MoviesController : Controller
    {
        private ApplicationDbContext _context;

        public MoviesController()
        {
            _context = new ApplicationDbContext();
        }
        protected override void Dispose(bool disposing)
        {
            _context.Dispose();    
        }
        public ViewResult Index()
        {
            if(User.IsInRole(RoleName.CanManageMovies))
                return View("List");

            return View("ReadOnlyList");
        }

        [Authorize(Roles = RoleName.CanManageMovies)]
        public ViewResult New()
        {
            var genres = _context.Genres.ToList();
            var viewModel = new MovieFormViewModel
            {
                Genres = genres
            };

            return View("MovieForm", viewModel);
        }

        [Authorize(Roles = RoleName.CanManageMovies)]
        public ActionResult Edit(int id)
        {
            var movie = _context.Movies.SingleOrDefault(m => m.Id == id);

            if (movie == null)
                return HttpNotFound();

            var viewModel = new MovieFormViewModel(movie)
            {
                Genres = _context.Genres.ToList()
            };

            return View("MovieForm", viewModel);
        }

        [Authorize(Roles = RoleName.CanManageMovies)]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Save(Movie movie)
        {
            if (!ModelState.IsValid)
            {
                var viewModel = new MovieFormViewModel(movie)
                {
                    Genres = _context.Genres.ToList()
                };
                return View("MovieForm", viewModel);
            }

            if (movie.Id == 0)
            {
                movie.DateAdded = DateTime.Now;
                movie.NumberAvailable = movie.NumberInStock;
                _context.Movies.Add(movie);
            }
            else
            {
                var movieInDb = _context.Movies.Single(m => m.Id == movie.Id);

                movieInDb.Name = movie.Name;
                movieInDb.ReleaseDate = movie.ReleaseDate;
                movieInDb.GenreId = movie.GenreId;
                movieInDb.NumberInStock = movie.NumberInStock;
            }

            _context.SaveChanges();

            return RedirectToAction("Index", "Movies");
        }

        public ActionResult Details(int id)
        {
            var movie = _context.Movies.Include(m => m.Genre).SingleOrDefault(m => m.Id == id);

            if (movie == null)
                return HttpNotFound();

            return View(movie);
        }

        public ActionResult Get([ModelBinder(typeof(DataTablesBinder))] IDataTablesRequest requestModel)
        {
            var moviesQuery = _context.Movies
                .Include(m => m.Genre);

            var totalCount = moviesQuery.Count();

            // Apply filters for searching
            if (requestModel.Search.Value != string.Empty)
            {
                var value = requestModel.Search.Value.Trim();
                moviesQuery = moviesQuery.Where(m => m.Name.Contains(value));
            }

            var filteredCount = moviesQuery.Count();

            // Sorting
            var sortedColumns = requestModel.Columns.GetSortedColumns();
            var orderByString = String.Empty;

            foreach (var column in sortedColumns)
            {
                orderByString += orderByString != String.Empty ? "," : "";
                orderByString += (column.Data) +
                  (column.SortDirection ==
                  Column.OrderDirection.Ascendant ? " asc" : " desc");
            }

            moviesQuery = moviesQuery.OrderBy(orderByString ==
                string.Empty ? "Name asc" : orderByString);

            // Paging
            moviesQuery = moviesQuery.Skip(requestModel.Start).Take(requestModel.Length);

            var data = moviesQuery.Select(movie => new
            {
                Name = movie.Name,
                GenreId = movie.Genre.Name,
                Id = movie.Id
            }).ToList();

            return Json(new DataTablesResponse
            (requestModel.Draw, data, filteredCount, totalCount),
                        JsonRequestBehavior.AllowGet);
        }

        #region "other"
        //private IEnumerable<Movie> GetMovies()
        //{
        //    return new List<Movie> { 
        //        new Movie { Id = 1, Name = "Shrek" },
        //        new Movie { Id = 2, Name = "Wall-e" }
        //    };
        //}

        // GET: Movies/Random
        public ActionResult Random()
        {
            var movie = new Movie() { Name = "Shrek!" };
            var customers = new List<Customer>
            {
                new Customer { Name = "Customer1" },
                new Customer { Name = "Customer2" }
            };

            var viewModel = new RandomMovieViewModel
            {
                Movie = movie,
                Customers = customers
            };


            ViewData["Movie"] = movie;

            return View(viewModel);

            //    #region "Different Result"
            //    //return View(movie);
            //    //return Content("Hello World!");
            //    //return HttpNotFound();
            //    //return new EmptyResult();
            //    //return RedirectToAction("Index", "Home", new { page = 1, sortBy = "name" });
            //    #endregion
        }

            //public ActionResult Edit(int Id)
            //{
            //    return Content("Id = " + Id);
            //}

            //public ActionResult Index(int? pageIndex, string sortBy)
            //{
            //    if (!pageIndex.HasValue)
            //        pageIndex = 1;

            //    if (string.IsNullOrWhiteSpace(sortBy))
            //        sortBy = "Name";

            //    return Content(String.Format("pageIndex={0}&sortBy={1}", pageIndex, sortBy));
            //}

            //[Route("movies/released/{year}/{month:regex(\\d{2}):range(1,12)}")]
            //public ActionResult ByReleaseYear(int year, int month)
            //{
            //    return Content(year + "/" + month);
            //}
            #endregion
        }
}