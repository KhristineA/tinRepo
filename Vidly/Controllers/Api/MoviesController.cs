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
    public class MoviesController : ApiController
    {
        private ApplicationDbContext _context;
        public MoviesController()
        {
            _context = new ApplicationDbContext();
        }

        ////GET api/movies
        //public IHttpActionResult GetMovies(string query = null)
        //{
        //    var moviesQuery = _context.Movies
        //        .Include(m => m.Genre)
        //        .Where(m => m.NumberAvailable > 0);

        //    if (!String.IsNullOrWhiteSpace(query))
        //        moviesQuery = moviesQuery.Where(m => m.Name.Contains(query));

        //    var movieDtos = moviesQuery
        //        .ToList()
        //        .Select(Mapper.Map<Movie, MovieDto>);

        //    return Ok(movieDtos);
        //}

        [HttpGet]
        public IHttpActionResult GetMovies(int page, int start, int limit)
        {

            var moviesQuery = _context.Movies
                .Include(c => c.Genre);

            var totalCount = moviesQuery.Count();

            moviesQuery = moviesQuery.OrderBy("Id asc");

            moviesQuery = moviesQuery.Skip((page - 1) * limit).Take(limit);

            var movie = moviesQuery
                .ToList()
                .Select(Mapper.Map<Movie, MovieDto>);

            var item = new
            {
                movie,
                totalCount
            };

            return Ok(item);
        }

        [HttpGet]
        public IHttpActionResult GetMovies(int page, int start, int limit, string filter)
        {

            var moviesQuery = _context.Movies
                .Include(c => c.Genre);

            var filterItem = Newtonsoft.Json.JsonConvert.DeserializeObject<List<FilterItem>>(filter);

            if (filterItem.First().value != string.Empty)
            {
                var value = filterItem.First().value.Trim();
                moviesQuery = moviesQuery.Where(c => c.Name.Contains(value));
            }

            var totalCount = moviesQuery.Count();

            moviesQuery = moviesQuery.OrderBy("Id asc");

            moviesQuery = moviesQuery.Skip((page - 1) * limit).Take(limit);

            var movie = moviesQuery
                .ToList()
                .Select(Mapper.Map<Movie, MovieDto>);

            var item = new
            {
                movie,
                totalCount
            };

            return Ok(item);
        }

        //GET api/movies/1
        public IHttpActionResult GetMovies(int id)
        {
            var movie = _context.Movies.SingleOrDefault(m => m.Id == id);

            if (movie == null)
                return NotFound();

            return Ok(Mapper.Map<Movie, MovieDto>(movie));
        }

        //POST api/movies/1
        [HttpPost]
        public IHttpActionResult CreateMovie(MovieDto movieDto)
        {
            //if (!ModelState.IsValid)
            //    return BadRequest();

            var movie = Mapper.Map<MovieDto, Movie>(movieDto);
            movie.DateAdded = DateTime.Now;
            movie.NumberAvailable = movie.NumberInStock;
            _context.Movies.Add(movie);
            _context.SaveChanges();

            movieDto.Id = movie.Id;

            return Ok();
            //return Created(new Uri(Request.RequestUri + "/" + movieDto.Id), movieDto);
        }

        //PUT api/movies/1
        [HttpPut]
        public IHttpActionResult UpdateMovie(int id, MovieDto movieDto)
        {
            //if (!ModelState.IsValid)
            //    return BadRequest();

            var movieInDB = _context.Movies.SingleOrDefault(m => m.Id == id);

            if (movieInDB == null)
                return NotFound();

            movieDto.Genre = null;

            Mapper.Map(movieDto, movieInDB);
            _context.SaveChanges();

            return Ok();
        }

        //DELETE api/movie/1
        [HttpDelete]
        public IHttpActionResult DeleteMovie(int id)
        { 
            var movieInDb = _context.Movies.SingleOrDefault(m => m.Id == id);
            if (movieInDb == null)
                return NotFound();

            //var movieInRent = _context.RentHeaders.Include(r => r.RentDetail).Where(r => r.RentId == id).ToList();
            
            //if (movieInRent != null)
            //    return BadRequest();

            _context.Movies.Remove(movieInDb);
            _context.SaveChanges();

            return Ok();
        }
    }
}
